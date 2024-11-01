import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useBooks = () => {
  // const [books, setBooks] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/books");
  //       const result = await response.json();
  //       setBooks(result);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const axiosPublic = useAxiosPublic();

  //tanstack query
  const {
    data: books = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosPublic.get("/books");
      return res.data;
    },
  });
  return [books, loading, refetch];
};

export default useBooks;
