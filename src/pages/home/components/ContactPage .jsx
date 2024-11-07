import { FaClock, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Swal from "sweetalert2";
import AppFormInput from "../../ui/AppFormInput";
import AppFormTextarea from "../../ui/AppFormTextarea";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import SectionTitle from "./../../../components/SectionTitle";

const ContactPage = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,

    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const contactInfo = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };

      const contactRes = await axiosPublic.post("/contact", contactInfo);

      if (contactRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your message has been send",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen mb-10">
      {/* Header Section */}
      <div className="relative">
        <img
          src="../../../../public/backround.webp"
          alt="Contact Us"
          className="w-full h-[40vh] object-cover"
        />
        <div className="absolute  inset-0 bg-gray-600 bg-opacity-50 flex flex-col gap-4 justify-center items-center">
          <h1 className="text-white text-4xl font-bold">
            Feel free to contact with us
          </h1>
          <p className="text-white text-2xl font-bold">
            If you want to know about pustok
          </p>
        </div>
      </div>
      {/* Location Info Section */}

      <section className="py-8 bg-white text-center">
        <h2 className="text-4xl font-semibold text-gray-800 my-20">
          <SectionTitle header={"Our Location"} headerTitle={"Contact Us"} />
        </h2>
        <div className="flex flex-col md:flex-row justify-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
          {/* Phone Section */}
          <div className="bg-white border border-gray-200  shadow-md h-64 w-96">
            <div className="bg-blue-600 text-white p-2 flex justify-center items-center ">
              <FaPhone className="h-5 w-5 mr-2" /> {/* Phone Icon */}
              <h3 className="font-semibold">PHONE</h3>
            </div>
            <div className="bg-gray-100 p-4 mx-5 mb-5 flex items-center justify-center h-48 ">
              <p className="text-gray-700">+38 (012) 34 56 789</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-white border border-gray-200  shadow-md h-64 w-96">
            <div className="bg-blue-600 text-white p-2 flex justify-center items-center ">
              <FaMapLocation className="h-5 w-5 mr-2" /> {/* Address Icon */}
              <h3 className="font-semibold">ADDRESS</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-md mx-5 mb-5 flex items-center justify-center  h-48 ">
              <p className="text-gray-700">1234 Street, City, Country</p>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="bg-white border border-gray-200  shadow-md h-64 w-96">
            <div className="bg-blue-600 text-white p-2 flex justify-center items-center ">
              <FaClock className="h-5 w-5 mr-2" /> {/* Clock Icon */}
              <h3 className="font-semibold">WORKING HOURS</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-md mx-5 mb-5 flex flex-col gap-3 items-center justify-center  h-48 ">
              <p className="text-gray-700">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-gray-700">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-8 bg-white">
        <h2 className="text-4xl font-semibold text-gray-800 my-10">
          <SectionTitle header={"Contact Us"} headerTitle={"Contact form"} />
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto mt-6 p-8 bg-gray-100 rounded-md shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AppFormInput
              name="name"
              placeholder="Your Name"
              label="Your Name"
              register={register}
              error={errors.name}
              type="text"
              required
              className=""
            />
            <AppFormInput
              name="email"
              placeholder="Your Email"
              label="Your Email"
              register={register}
              error={errors.email}
              type="email"
              required
              className=""
            />
          </div>
          <div className="mt-4">
            {/* <label className="block text-gray-600">Phone</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            /> */}
            <AppFormInput
              name="phone"
              placeholder=" Phone Number"
              label=" Phone Number"
              register={register}
              error={errors.phone}
              type="number"
              required
              className=""
            />
          </div>
          <div className="mt-4">
            <AppFormTextarea
              name="message"
              label="Description"
              placeholder="Enter review description"
              register={register}
              error={errors.message}
              required
              className=" "
            />
          </div>
          {/* <div className="mt-4 flex items-center">
            <input type="checkbox" id="not-robot" className="mr-2" />
            <label htmlFor="not-robot" className="text-gray-600">
              I am not a robot
            </label>
          </div> */}
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
