import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import HomeCategory from "./components/HomeCategory";
import PopularBook from "./components/PopularBook";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Features from "./components/features/Features";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Pustok || Home</title>
        <meta name="description" content="Pustok || Books" />
      </Helmet>
      <Banner />
      <HomeCategory />
      <PopularBook />
      <Features />
      {/* <UpcommingBook /> */}
      <Faq />
      <Testimonial />
    </div>
  );
};

export default Home;
