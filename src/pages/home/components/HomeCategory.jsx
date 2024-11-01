// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { imagedata } from "../assets/imagedata";

const HomeCategory = () => {
  return (
    <div className="h-[40vh]">
      <Swiper
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {imagedata.map((item) => (
          <SwiperSlide key={item.id} className="mt-20">
            <img
              src={item.url}
              alt="banner"
              className="w-full h-[30vh] object-cover"
              //   onError={(e) => {
              //     e.target.src =
              //       "https://res.cloudinary.com/dj7e7vd5j/image/upload/v1649184097/placeholder_ghvqnx.png";
              //   }}
            />
            <h3 className="text-4xl uppercase text-center -mt-20 text-white pb-5">
              Category-1
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategory;
