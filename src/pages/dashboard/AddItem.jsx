import { useForm } from "react-hook-form";
import AppFormSelect from "../ui/AppFormSelect";
import AppFormTextarea from "../ui/AppFormTextarea";
import AppFormInput from "./../ui/AppFormInput";

const AddItem = () => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  const status = watch("status");
  const showPrice = status === "Paid";

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
          name="bookName"
          placeholder="Book Name"
          label="Book Name"
          register={register}
          error={errors.bookName}
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
