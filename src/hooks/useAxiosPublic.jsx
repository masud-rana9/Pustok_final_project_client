import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://pustok-with-express-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
