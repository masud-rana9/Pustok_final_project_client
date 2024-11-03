import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import AppBookCard from "./AppBookCard";
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";

const AppCategory = ({ items, CategoryName }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mt-8 mb-4 flex items-center justify-center">
        {CategoryName}
      </h1>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          768: {
            // md screen (768px and up)
            slidesPerView: 2,
          },
          1280: {
            // 2xl screen (1280px and up)
            slidesPerView: 3,
          },
        }}
      >
        {items.map((book) => (
          <SwiperSlide key={book._id}>
            <AppBookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex mt-10 justify-center">
        <Link to={`/store/${CategoryName}`}>
          <button className="bg-blue-500 text-white px-8 py-2 rounded">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

// Define PropTypes for AppCategory
AppCategory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string,
      image: PropTypes.string,
      recipe: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
  CategoryName: PropTypes.string.isRequired,
};

export default AppCategory;
