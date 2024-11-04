import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserBook = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  //tanstack query
  const {
    data: userBooks = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user-books?email=${user?.email}`);
      return res.data;
    },
  });

  return [userBooks, refetch, loading];
};

export default useUserBook;
