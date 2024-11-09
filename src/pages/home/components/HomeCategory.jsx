// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { imagedata } from "../assets/imagedata";
import AppCategorybanner from "../../../components/AppCategorybanner";
import SectionTitle from "../../../components/SectionTitle";

const HomeCategory = () => {
  return (
    <div className="h-[60vh] " data-aos="zoom-in">
      <div className="my-24">
        <SectionTitle header={"Explore More Books"} headerTitle={"Expolore"} />
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
          <SwiperSlide key={item.id} className="">
            <AppCategorybanner item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategory;
