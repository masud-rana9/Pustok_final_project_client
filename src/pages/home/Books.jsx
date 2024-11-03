import { Helmet } from "react-helmet-async";
import AppCategory from "../../components/AppCategory";
import useBooks from "../../hooks/useBooks";
import BookCover from "./components/BookCover";
import image from "../../assets/allbooks .webp";

import medicalImage from "../../pages/home/assets/for banner/medical.webp";
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
    <div className="">
      <Helmet>
        <title>Pustok || Books</title>
        <meta name="description" content="Pustok || Books" />
      </Helmet>
      <BookCover
        image={image}
        decription=" Welcome to Our books"
        title="All Books Here"
        height={"h-96"}
      />
      {/* <PopularBook /> */}

      <div className="my-10">
        <BookCover image={medicalImage} decription={"ki ar bolbo"} title={""} />
      </div>

      <AppCategory CategoryName="Medical" items={medicalBooks} />
      <div className="my-10">
        <BookCover image={medicalImage} decription={"ki ar bolbo"} title={""} />
      </div>
      <AppCategory CategoryName="School" items={schoolBooks} />
      <div className="my-10">
        <BookCover image={medicalImage} decription={"ki ar bolbo"} title={""} />
      </div>
      <AppCategory CategoryName="University" items={universityBooks} />
      <div className="my-10">
        <BookCover image={medicalImage} decription={"ki ar bolbo"} title={""} />
      </div>
      <AppCategory CategoryName="History" items={historyBooks} />
      <div className="my-10">
        <BookCover image={medicalImage} decription={"ki ar bolbo"} title={""} />
      </div>
      <AppCategory CategoryName="Thriller" items={thrillerBooks} />
    </div>
  );
};

export default Books;
