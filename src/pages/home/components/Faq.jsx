import { useState } from "react";
import faqs from "../assets/faq";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-4xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-3 hover:bg-gray-100 transition-colors"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-2xl font-normal">{faq.question}</h3>
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
            <p className="text-gray-600 text-lg py-2">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
