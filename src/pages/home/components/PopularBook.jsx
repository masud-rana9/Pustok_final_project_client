import AppBookCard from "../../../components/AppBookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import useBooks from "../../../hooks/useBooks";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

const PopularBook = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/public/book.json");
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [books] = useBooks();
  const data = books;
  const popularBooks = data.filter((item) => item.category === "Popular");

  if (popularBooks.length === 0) return null;

  console.log(popularBooks);

  return (
    <>
      <div className="my-20" data-aos="fade-up">
        <SectionTitle header={"Popular Books"} headerTitle={"Popular"} />
      </div>

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
            // md screen
            slidesPerView: 2,
          },
          1536: {
            // 2xl screen
            slidesPerView: 3,
          },
        }}
      >
        {popularBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <AppBookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to={"/books"} className="flex mt-10 justify-center">
        <button className="bg-blue-500 text-white px-8 py-2 rounded">
          View All
        </button>
      </Link>
    </>
  );
};

export default PopularBook;
