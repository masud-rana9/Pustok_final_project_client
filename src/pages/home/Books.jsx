import { Helmet } from "react-helmet-async";
import AppCategory from "../../components/AppCategory";
import useBooks from "../../hooks/useBooks";
import BookCover from "./components/BookCover";

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
      <BookCover />
      {/* <PopularBook /> */}
      <AppCategory CategoryName="Medical" items={medicalBooks} />
      <AppCategory CategoryName="School" items={schoolBooks} />
      <AppCategory CategoryName="University" items={universityBooks} />
      <AppCategory CategoryName="History" items={historyBooks} />
      <AppCategory CategoryName="Thriller" items={thrillerBooks} />
    </div>
  );
};

export default Books;
