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
      <h1 className="text-4xl cursor-pointer font-semibold mb-16 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        Popular Books
      </h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {popularBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <AppBookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex mt-10 justify-center">
        <button className="bg-blue-500 text-white px-8 py-2 rounded">
          View All
        </button>
      </div>
    </>
  );
};

export default PopularBook;
