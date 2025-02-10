import React, { useState } from "react";
import Heading from "./Heading";
import Divider from "./Divider";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is your return policy?", answer: "Our return policy allows returns within 30 days of purchase with a valid receipt." },
    { question: "How do I return my order?", answer: "You can return your order through our website or at a store location." },
    { question: "How do I exchange my order?", answer: "Exchanges are allowed within 30 days of purchase. Contact customer support for details." },
    { question: "What is the refund policy?", answer: "Refunds are processed within 7-10 business days after the product is received." },
    { question: "I want to track my order?", answer: "You can track your order using the tracking ID sent to your email after shipping." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const ChevronDown = () => (
    <svg
      fill="#000000"
      height="12px"
      width="12px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
    >
      <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
    </svg>
  );

  const ChevronUp = () => (
    <svg
      fill="#000000"
      height="12px"
      width="12px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
    >
      <path d="M325.607,250.607c-5.857,5.857-15.355,5.858-21.213-0.001L165.004,111.213L25.607,250.607 c-5.857,5.857-15.355,5.858-21.213-0.001c-5.858-5.858-5.858-15.355,0-21.213l150.004-150c2.813-2.813,6.628-4.393,10.606-4.393 s7.794,1.581,10.606,4.394l149.996,150C331.465,235.251,331.465,244.749,325.607,250.607z" />
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto my-10 mb-44">
      <Heading Heading="Frequently Asked Questions" />
      <Divider />
      <div className="my-12">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-6 flex justify-between items-center"
            >
              <span className="text-md">{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
