import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AppFormSelect from "../ui/AppFormSelect";
import AppFormTextarea from "../ui/AppFormTextarea";
import AppFormInput from "./../ui/AppFormInput";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../../components/SectionTitle";

const AddReviews = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    control,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const reviewItem = {
        name: data.name,
        details: data.details,
        BookName: data.BookName,
        rating: data.rating,
        category: data.category,
      };

      const reviewRes = await axiosPublic.post("/reviews", reviewItem);

      if (reviewRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review has been saved",
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

  const categoryOptions = [
    { label: "Medical", value: "Medical" },
    { label: "University", value: "University" },
    { label: "Thriller", value: "Thriller" },
    { label: "History", value: "History" },
    { label: "School", value: "School" },
    { label: "Popular", value: "Popular" },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <Helmet>
        <title>Pustok || Add Reviews</title>
        <meta name="description" content="Pustok || Add Reviews" />
      </Helmet>

      <SectionTitle header={"Add Reviews"} headerTitle={"Give Your Review"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" grid gap-4 grid-cols-1 md:grid-cols-2  "
      >
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
          name="BookName"
          placeholder="Book Name"
          label="Book Name"
          register={register}
          error={errors.BookName}
          type="text"
          required
          className=""
        />

        <AppFormSelect
          options={categoryOptions}
          placeholder="Category"
          label="Category"
          control={control}
          name="category"
          required
          className=""
        />
        <AppFormInput
          name="rating"
          label="Rating"
          placeholder="Enter Rating (1-5)"
          register={register}
          error={errors.rating}
          type="number"
          min="1"
          max="5"
          required
          className=""
        />
        <AppFormTextarea
          name="details"
          label="Description"
          placeholder="Enter review description"
          register={register}
          error={errors.details}
          required
          className=" "
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReviews;
