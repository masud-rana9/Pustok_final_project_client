import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppFormInput from "../ui/AppFormInput";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="w-full h-[60vh]">
      <div className="w-[40%] mx-auto mt-36 shadow-lg p-10   bg-white rounded-md ">
        <Helmet>
          <title>Pustok || Books</title>
          <meta name="description" content="Pustok || Books" />
        </Helmet>
        <h2 className="font-bold text-4xl pb-8 text-gray-800 text-center tracking-wide leading-tight">
          Login <span className="text-blue-500 italic">Here!</span>
        </h2>

        <div className="flex justify-center items-center">
          {/* <AppButton
          label="Login with Google"
          variant="outlined"
          icon={<FaGoogle />}
          iconPosition="left"
        /> */}
          <SocialLogin />
        </div>

        <h2 className="text-center my-5 text-textColor">OR</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <AppFormInput
            name="email"
            placeholder="Email"
            register={register}
            error={errors.email}
            type="email"
          />
          <AppFormInput
            name="password"
            placeholder="Password"
            register={register}
            error={errors.password}
            type="password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-2 w-32 flex items-center justify-center mt-4 rounded mx-auto"
          >
            Submit
          </button>
          {/* <AppButton label="Submit" className="mt-5 w-full " type="submit" /> */}
        </form>
        <p className="text-textColor mt-3 text-center">
          Don`t have an account?
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
