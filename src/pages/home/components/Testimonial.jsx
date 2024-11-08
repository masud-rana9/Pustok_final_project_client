import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../components/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-40" data-aos="fade-right">
      <div className="my-24">
        <SectionTitle header={"Testimonials"} headerTitle={"Clients Say"} />
      </div>
      <>
        <Swiper
          autoplay={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide
              className="text-center space-y-5 bg-blue-600 rounded-md text-white p-5"
              key={review._id}
            >
              <div className="flex  justify-center">
                <Rating style={{ maxWidth: 180 }} value={review.rating} />
              </div>
              <p className="md:text-xl text-lg mx-10"> {review.details}</p>
              <h2 className="md:text-2xl text-lg text-yellow-500">
                {" "}
                {review.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <div></div>
    </section>
  );
};

export default Testimonial;
