import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AppFormSelect from "../ui/AppFormSelect";
import AppFormTextarea from "../ui/AppFormTextarea";
import AppFormInput from "./../ui/AppFormInput";
import useAuth from "./../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const BookItem = {
        name: data.name,
        userEmail: data.userEmail,
        authorName: data.authorName,
        category: data.category,
        price: parseFloat(data.price),
        status: data.status,
        description: data.description,
        image: res.data.data.display_url,
      };
      const BookRes = axiosSecure.post("/books", BookItem);
      console.log(BookRes.data);
      if ((await BookRes).data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  const status = watch("status");
  const showPrice = status === "Paid";

  // Set default email value once user is available
  useEffect(() => {
    if (user?.email) {
      setValue("userEmail", user.email);
    }
  }, [user, setValue]);

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

  return (
    <div className="p-6 bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
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

        <AppFormInput
          name="image"
          label="Upload Image"
          register={register}
          error={errors.image}
          type="file"
          className="w-full col-span-2"
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

export default AddItem;
