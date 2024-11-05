import { Helmet } from "react-helmet-async";
import image from "../home/assets/for banner/medical.webp";
import AppCategory from "../../components/AppCategory";
import useBooks from "../../hooks/useBooks";
import BookCover from "./components/BookCover";

import SectionTitle from "../../components/SectionTitle";
const Books = () => {
  const [books] = useBooks();
  const medicalBooks = books.filter((item) => item.category === "Medical");
  const schoolBooks = books.filter((item) => item.category === "School");
  const universityBooks = books.filter(
    (item) => item.category === "University"
  );
  const historyBooks = books.filter((item) => item.category === "History");
  const thrillerBooks = books.filter((item) => item.category === "Thriller");

  return (
    <div className="mb-14">
      <Helmet>
        <title>Pustok || Books</title>
        <meta name="description" content="Pustok || Books" />
      </Helmet>
      <BookCover
        image={image}
        description="Rediscover the Magic of Timeless Books"
        title="Where Stories Never Grow Old"
        height={"lg:h-[60vh]"}
      />
      {/* <PopularBook /> */}
      <div className="my-20">
        <SectionTitle header={"Medical Books"} headerTitle={"Books"} />
      </div>

      {/* <div className="my-10">
        <BookCover
          image={medicalImage}
          decription={"ki ar bolbo"}
          title={"Medical"}
        />
      </div> */}

      <AppCategory CategoryName="Medical" items={medicalBooks} />

      {/* <div className="my-10">
        <BookCover
          image={medicalImage}
          decription={"ki ar bolbo"}
          title={"School"}
        />
      </div> */}
      <div className="my-20">
        <SectionTitle header={"School Books"} headerTitle={"Books"} />
      </div>
      <AppCategory CategoryName="School" items={schoolBooks} />

      {/* <div className="my-10">
        <BookCover
          image={medicalImage}
          decription={"ki ar bolbo"}
          title={"University"}
        />
      </div> */}
      <div className="my-20">
        <SectionTitle header={"University Books"} headerTitle={"Books"} />
      </div>
      <AppCategory CategoryName="University" items={universityBooks} />
      {/* <div className="my-10">
        <BookCover
          image={medicalImage}
          decription={"ki ar bolbo"}
          title={"History"}
        />
      </div> */}
      <div className="my-20">
        <SectionTitle header={"History Books"} headerTitle={"Books"} />
      </div>
      <AppCategory CategoryName="History" items={historyBooks} />
      {/* <div className="my-10">
        <BookCover
          image={medicalImage}
          decription={"ki ar bolbo"}
          title={"Thriller"}
        />
      </div> */}
      <div className="my-20">
        <SectionTitle header={"Thriller Books"} headerTitle={"Books"} />
      </div>
      <AppCategory CategoryName="Thriller" items={thrillerBooks} />
    </div>
  );
};

export default Books;
