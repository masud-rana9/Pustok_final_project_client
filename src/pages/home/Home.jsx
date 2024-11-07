import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import HomeCategory from "./components/HomeCategory";
import PopularBook from "./components/PopularBook";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Features from "./components/features/Features";
import Reviews from "../../components/Marquare/Reviews ";
import SectionTitle from "../../components/SectionTitle";

const Home = () => {
  const photos = [
    "/public/image assets of pustok/History/download (1).jpeg",
    "/public/image assets of pustok/History/download (2).jpeg",
    "/public/image assets of pustok/History/download (3).jpeg",
    "/public/image assets of pustok/History/download.jpeg",
    "/public/image assets of pustok/History/download.png",
    "/public/image assets of pustok/Medical/Complications_A_Surgeon's_Notes_on_an_Imperfect_Science.jpg",
    "/public/image assets of pustok/Medical/Gray's_Anatomy_20th_edition_(1918)-_Title_page.png",
    "/public/image assets of pustok/School/download (6).jpeg",
    "/public/image assets of pustok/Thriller/download (2).jpeg",
    "/public/image assets of pustok/University/download (5).jpeg",

    // Add your image URLs here
  ];
  return (
    <div className="">
      <Helmet>
        <title>Pustok || Home</title>
        <meta name="description" content="Pustok || Books" />
      </Helmet>
      <Banner />
      <div className="my-20">
        <SectionTitle header={" UpComming Books"} headerTitle={"Books "} />
      </div>
      <Reviews photos={photos} scale={2} />
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
