import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import HomeCategory from "./components/HomeCategory";
import PopularBook from "./components/PopularBook";

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
    </div>
  );
};

export default Home;
