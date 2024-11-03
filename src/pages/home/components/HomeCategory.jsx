// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { imagedata } from "../assets/imagedata";
import AppCategorybanner from "../../../components/AppCategorybanner";

const HomeCategory = () => {
  return (
    <div className="h-[60vh]">
      <div className="text-4xl cursor-pointer text-center font-semibold mt-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-90">
        Explore Books
      </div>

      <Swiper
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px (md)
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px (lg)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {imagedata.map((item) => (
          <SwiperSlide key={item.id} className="mt-20">
            <AppCategorybanner item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategory;
