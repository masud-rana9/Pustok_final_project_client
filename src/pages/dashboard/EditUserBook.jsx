import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AppFormSelect from "../ui/AppFormSelect";
import AppFormTextarea from "../ui/AppFormTextarea";
import AppFormInput from "../ui/AppFormInput";
import useAuth from "../../hooks/useAuth";
import { useParams, useNavigate } from "react-router-dom";
import useFetchBookById from "../../hooks/useFetchBookById";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const EditUserBook = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const { book, isLoading } = useFetchBookById(id);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const status = watch("status");
  const showPrice = status === "Paid";

  // Set form values once book data is fetched
  useEffect(() => {
    if (book) {
      setValue("name", book.name);
      setValue("authorName", book.authorName);
      setValue("userEmail", book.userEmail || user?.email);
      setValue("category", book.category);
      setValue("status", book.status);
      setValue("price", book.price);
      setValue("description", book.description);
    }
  }, [book, setValue, user?.email]);

  // Options for select fields
  const categoryOptions = [
    { label: "Medical", value: "Medical" },
    { label: "University", value: "University" },
    { label: "Thriller", value: "Thriller" },
    { label: "History", value: "History" },
    { label: "School", value: "School" },
  ];

  const statusOptions = [
    { label: "Paid", value: "Paid" },
    { label: "Free", value: "Free" },
    { label: "Borrow", value: "Borrow" },
  ];

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      await axiosPublic.put(`/books/${id}`, data).then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          console.log("Book updated successfully");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      navigate("/dashboard/my-books"); // Redirect to the updated book page or wherever you prefer
    } catch (error) {
      console.error("Failed to update book", error);
    }
  };

  if (isLoading) return <div>Loading book data...</div>;

  return (
    <div className="p-6 bg-gray-100">
      <form
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <AppFormInput
          name="name"
          placeholder="Book Name"
          label="Book Name"
          register={register}
          error={errors.name}
          type="text"
          required
          className="w-full"
        />

        <AppFormInput
          name="authorName"
          placeholder="Author Name"
          label="Author Name"
          register={register}
          error={errors.authorName}
          type="text"
          required
          className="w-full"
        />

        <AppFormInput
          name="userEmail"
          placeholder="User Email"
          label="User Email"
          register={register}
          error={errors.userEmail}
          type="email"
          required
          className="w-full"
        />

        <AppFormSelect
          options={categoryOptions}
          placeholder="Category"
          label="Category"
          control={control}
          name="category"
          required
          className="w-full"
        />

        <AppFormSelect
          options={statusOptions}
          placeholder="Status"
          label="Status"
          control={control}
          name="status"
          required
          className="w-full"
        />

        {showPrice && (
          <AppFormInput
            name="price"
            placeholder="Price"
            label="Price"
            register={register}
            error={errors.price}
            type="number"
            required
            className="w-full"
          />
        )}

        <AppFormTextarea
          name="description"
          label="Description"
          placeholder="Enter book description"
          register={register}
          error={errors.description}
          required
          className="w-full col-span-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 col-span-2"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditUserBook;
