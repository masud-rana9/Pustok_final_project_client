// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // Import required modules
// import { Pagination, Autoplay } from "swiper/modules";
// import { imagedata } from "../assets/imagedata";

// const Banner = () => {
//   return (
//     <>
//       <div className=""></div>
//       <Swiper
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//         autoplay={{
//           delay: 1000,
//           disableOnInteraction: false,
//         }}
//       >
//         {imagedata.map((item) => (
//           <SwiperSlide key={item.id}>
//             <img src={item.url} alt="banner" className=" w-full object-cover" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default Banner;
import image from "../../../../public/banner.png";
import AppButton from "../../ui/AppButton";
import AppSearchInput from "../../ui/AppSearchInput";

const Banner = () => {
  return (
    <div
      className="bg-cover w-full p-4  h-[400px] bg-center lg:h-[60vh] flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="text-white text-2xl md:text-4xl 2xl:text-5xl lg:max-w-[70%] text-center font-bold ">
        <span className="text-[#0074D9]">Welcome to pustok, </span> your gateway
        to <span className="text-[#0074D9]">a world of</span> old books.
      </h1>
      <p className="lg:text-[20px] text-[12px] text-center text-[#F1F5F9] lg:my-3 mb-2">
        A Platform Where You Can Find old Books According to Your Preference
      </p>
      <AppSearchInput variant="white" />
      <div className="mt-5 text-white flex justify-center items-center gap-2 lg:gap-5">
        <AppButton
          label="Explore Books"
          variant="filled"
          href="/books"
          className="text-xl lg:text-base"
        />
        <p className="text-sm lg:text-base">Or</p>
        <AppButton
          href="/dashboard/add-book"
          label="Post Book"
          variant="outlined"
          className="text-sm lg:text-base"
        />
      </div>
    </div>
  );
};

export default Banner;
