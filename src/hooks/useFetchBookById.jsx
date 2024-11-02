import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchBookById = (id) => {
  const axiosPublic = useAxiosPublic();

  // TanStack Query to fetch a single book by ID
  const {
    data: book = null,
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const response = await axiosPublic.get(`/books/${id}`);
      return response.data;
    },
    enabled: !!id, // Only fetch if `id` exists
  });

  return { book, isLoading, isError, error, refetch };
};

export default useFetchBookById;
