import { useState } from "react";
import UpcomingBookCard from "../../../components/UpCommingBookCard";

const UpcommingBook = () => {
  // Dummy data for multiple books
  const [books] = useState([
    {
      authorName: "Harper Lee",
      category: "Popular",
      description:
        "A novel about serious issues of rape and racial inequality.",
      image: "https://i.ibb.co/VT67fKx/banner.jpg",
      name: "To Kill a Mockingbird",
      price: null,
      status: "Free",
    },
    {
      authorName: "George Orwell",
      category: "Dystopian",
      description:
        "A dystopian social science fiction novel and cautionary tale.",
      image: "https://i.ibb.co/WxVsP1R/1984.jpg",
      name: "1984",
      price: 15,
      status: "Paid",
    },
    {
      authorName: "F. Scott Fitzgerald",
      category: "Classic",
      description: "A story about the Jazz Age in the United States.",
      image: "https://i.ibb.co/0X1Pq4n/gatsby.jpg",
      name: "The Great Gatsby",
      price: null,
      status: "Free",
    },
    // Add more books as needed
  ]);

  return (
    <div className="flex flex-col items-center">
      {books.map((book, index) => (
        <UpcomingBookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default UpcommingBook;
