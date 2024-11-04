import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "./../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handlewithGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          navigate("/");
        } else {
          navigate("/");
        }
      });
    });
  };
  return (
    <div className="">
      <button
        onClick={handlewithGoogle}
        className=" mt-4 border border-gray-300 px-4 py-2 rounded-full flex items-center gap-2 "
      >
        <FcGoogle className="text-2xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
