import { useState } from "react";
import faqs from "../assets/faq";
import SectionTitle from "../../../components/SectionTitle";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6  rounded-lg shadow-sm" data-aos="zoom-out-down">
      <div className="my-20">
        <SectionTitle
          header={"Frequently Asked Questions"}
          headerTitle={"FAQ"}
        />
      </div>
      {/* <h2 className="text-4xl font-semibold mb-6">
        Frequently Asked Questions
      </h2> */}
      {faqs.map((faq, index) => (
        <div key={index} className=" mb-4">
          <div
            className="flex justify-between p-4   bg-blue-500 items-center text-white cursor-pointer  rounded-md hover:bg-blue-500 transition-colors hover:text-white "
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="md:text-2xl   text-lg font-normal">
              {faq.question}
            </h3>
            <span
              className={`text-2xl transition-transform duration-300 ${
                activeIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 bg-gray-200 text-base md:text-lg p-3">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
