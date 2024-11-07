import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import AppFormInput from "../ui/AppFormInput";
import AppFormSelect from "../ui/AppFormSelect";
import useCarts from "../../hooks/useCarts";
import useAuth from "../../hooks/useAuth";
import { FaMoneyBillWave } from "react-icons/fa";

const CheckoutPage = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      email: user?.email || "",
    },
  });

  const [carts] = useCarts();

  const totalPrice = Math.round(
    carts.reduce((sum, item) => item.price + sum, 0)
  );
  const shipping = Math.round(totalPrice * 0.1);
  const total = totalPrice + shipping;
  const payable = total;

  const [paymentMethod, setPaymentMethod] = useState("");

  const cityOptions = [
    { label: "Select City", value: "" },
    { label: "Dhaka", value: "Dhaka" },
    { label: "Chittagong", value: "Chittagong" },
    { label: "Khulna", value: "Khulna" },
    { label: "Rajshahi", value: "Rajshahi" },
    { label: "Sylhet", value: "Sylhet" },
    { label: "Barisal", value: "Barisal" },
    { label: "Rangpur", value: "Rangpur" },
  ];

  const areaOptions = [
    { label: "Select Area", value: "" },
    { label: "Gulshan", value: "Gulshan" },
    { label: "Banani", value: "Banani" },
    { label: "Dhanmondi", value: "Dhanmondi" },
    { label: "Uttara", value: "Uttara" },
    { label: "Mirpur", value: "Mirpur" },
    { label: "Mohammadpur", value: "Mohammadpur" },
    { label: "Bashundhara", value: "Bashundhara" },
  ];

  const countryOptions = [
    { label: "Select Country", value: "" },
    { label: "Bangladesh", value: "Bangladesh" },
    { label: "India", value: "India" },
    { label: "Pakistan", value: "Pakistan" },
    { label: "Nepal", value: "Nepal" },
    { label: "Sri Lanka", value: "Sri Lanka" },
    { label: "Bhutan", value: "Bhutan" },
    { label: "Maldives", value: "Maldives" },
  ];

  const onSubmit = async (data) => {
    try {
      const orderData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        alternativePhone: data.alternativePhone,
        country: data.country,
        city: data.city,
        area: data.area,
        paymentMethod,
      };

      console.log("Order submitted:", orderData);

      // After placing the order, redirect to the respective payment page
      if (paymentMethod === "bkash") {
        window.location.href = "https://www.bkash.com/payment"; // Replace with actual Bkash payment URL
      } else if (paymentMethod === "nagad") {
        window.location.href = "https://www.nagad.com/payment"; // Replace with actual Nagad payment URL
      } else if (paymentMethod === "rocket") {
        window.location.href = "https://www.rocket.com/payment"; // Replace with actual Rocket payment URL
      } else if (paymentMethod === "card") {
        window.location.href = "https://www.paymentgateway.com/"; // Replace with actual card payment gateway URL
      } else {
        Swal.fire({
          icon: "warning",
          title: "No payment method selected",
          text: "Please choose a valid payment method.",
        });
      }

      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your order has been placed",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error placing order:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong with your order!",
      });
    }
  };

  return (
    <div className="bg-gray-50  ">
      <section className="py-8 bg-white text-center">
        <h2 className="text-4xl font-semibold text-gray-800 my-10">
          <SectionTitle header={"Checkout"} headerTitle={"Order Details"} />
        </h2>

        <div className=" min-w-full px-4 sm:px-6 lg:px-8 flex gap-10 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mt-2 p-8 bg-gray-100 rounded-md shadow-md w-[100%]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <AppFormInput
                name="name"
                defaultValue={user?.displayName || ""}
                placeholder="Your Full Name"
                label="Name"
                register={register}
                error={errors.name}
                type="text"
                required
              />
              <AppFormInput
                name="email"
                defaultValue={user?.email || ""}
                placeholder="Your Email Address"
                label="Email"
                register={register}
                error={errors.email}
                type="email"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <AppFormInput
                name="phone"
                placeholder="Phone Number"
                label="Phone No"
                register={register}
                error={errors.phone}
                type="text"
                required
              />
              <AppFormInput
                name="alternativePhone"
                placeholder="Alternative Phone Number"
                label="Alternative Phone No"
                register={register}
                error={errors.alternativePhone}
                type="text"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <AppFormSelect
                options={countryOptions}
                placeholder="Country"
                label="Country"
                control={control}
                name="country"
                required
              />
              <AppFormSelect
                options={cityOptions}
                placeholder="City"
                label="City"
                control={control}
                name="city"
                required
              />
            </div>

            <AppFormSelect
              options={areaOptions}
              placeholder="Area"
              label="Area"
              control={control}
              name="area"
              required
              className="mt-4"
            />

            {/* Payment Method Section */}
            <h2 className="text-lg font-semibold mt-6">Payment Method</h2>
            <div className="flex flex-col space-y-3 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <label className="flex items-center border border-gray-300  p-3 rounded-md bg-white">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === "cashOnDelivery"}
                    onChange={() => setPaymentMethod("cashOnDelivery")}
                    className="mr-2"
                  />
                  <div className="flex items-center gap-2">
                    Cash on Delivery{" "}
                    <FaMoneyBillWave className="text-green-500 text-3xl mr-2" />
                  </div>
                </label>

                {/* Separate Mobile Wallet Options */}

                <label className="flex items-center border border-gray-300 p-3 rounded-md bg-white">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bkash"
                    checked={paymentMethod === "bkash"}
                    onChange={() => setPaymentMethod("bkash")}
                    className="mr-2"
                  />
                  Bkash
                </label>
                <label className="flex items-center border border-gray-300 p-3 rounded-md bg-white">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="nagad"
                    checked={paymentMethod === "nagad"}
                    onChange={() => setPaymentMethod("nagad")}
                    className="mr-2"
                  />
                  Nagad
                </label>

                <label className="flex items-center border border-gray-300 p-3 rounded-md bg-white">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="rocket"
                    checked={paymentMethod === "rocket"}
                    onChange={() => setPaymentMethod("rocket")}
                    className="mr-2"
                  />
                  Rocket
                </label>
              </div>

              <label className="flex items-center border border-gray-300 p-3 rounded-md bg-white">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="mr-2"
                />
                Credit/Debit Card (Visa, MasterCard, etc.)
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Confirm Order
            </button>
          </form>
          <section className=" mt-2 px-8  bg-gray-100 rounded-md h-96 shadow-md w-[40%]">
            <h2 className="text-lg font-semibold mt-6">Order Summary</h2>
            <div className="flex flex-col space-y-3 mt-2">
              <div className="flex justify-between border-b border-dotted border-gray-500 py-2">
                <p className="text-gray-500">Subtotal</p>
                <p className="text-gray-500">${totalPrice}</p>
              </div>
              <div className="flex justify-between border-b border-dotted border-gray-500 py-2">
                {" "}
                <p className="text-gray-500">Shipping</p>{" "}
                <p className="text-gray-500">${shipping}</p>
              </div>
              <div className="flex justify-between border-b border-dotted border-gray-500 py-2">
                <p className="text-gray-500">Total</p>
                <p className="text-gray-500">{total}</p>
              </div>
              <div className="flex justify-between border-b border-dotted border-gray-500 py-2">
                <p className="text-gray-500">Payable</p>
                <p className="text-gray-500">{payable}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
