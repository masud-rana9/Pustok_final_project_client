import moment from "moment";
import "./Features.css";
import SectionTitle from "../../../../components/SectionTitle";
const Features = () => {
  return (
    <section className="my-10 p-10 featuresimg bg-fixed bg-cover ">
      <div className="my-20 text-[#FDFBDA]">
        <SectionTitle
          header={"FROM OUR BOOK STORE"}
          headerTitle={"---Order Now---"}
        />
      </div>
      <div className="flex gap-10 px-20 py-10 text-[#FDFBDA]">
        <img
          className="w-[600px] h-[400px]"
          src="../../../../../public/backround.webp"
          alt="Featured item"
        />
        <div>
          {/* Displaying formatted date */}
          <h2 className="text-2xl">{moment().format("MMMM D, YYYY")}</h2>
          <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
          <p className="text-xl  mt-5">
            Welcome to pustok, your gateway to a world of old books.
          </p>
          <button className="mt-10 btn btn-outline border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
