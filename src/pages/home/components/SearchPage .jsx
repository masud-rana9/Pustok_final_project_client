import { useState } from "react";
import OrderBookCard from "../../../components/OrderBookCard ";
import AppSearchInput from "../../ui/AppSearchInput"; // Ensure the path is correct
import useBooks from "./../../../hooks/useBooks"; // Ensure the path is correct

const SearchPage = () => {
  const [books] = useBooks(); // Assuming useBooks returns an array of books
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]); // Initialize with the full book list

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      // If search term is empty,
      setFilteredBooks([]);
    } else {
      // Otherwise filter the books
      const results = books.filter((book) => {
        // Safely access book properties with default empty string if undefined
        const title = book.name ? book.name.toLowerCase() : "";
        const author = book.authorName ? book.authorName.toLowerCase() : "";
        const category = book.category ? book.category.toLowerCase() : "";

        return (
          title.includes(term) ||
          author.includes(term) ||
          category.includes(term)
        );
      });

      setFilteredBooks(results);
    }
  };

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className={filteredBooks.length === 0 ? "mt-5" : "my-10"}>
        <AppSearchInput placeholder="" onChange={handleSearch} />
      </div>

      {/* Display filtered books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <OrderBookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="text-gray-500"></p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
