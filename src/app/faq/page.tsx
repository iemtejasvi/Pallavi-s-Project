"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300 py-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center mr-4">
          <span className="text-xl leading-none">{isOpen ? "×" : "+"}</span>
        </div>
        <h2 className="text-lg text-teal-900">{question}</h2>
      </div>
      {isOpen && (
        <p className="ml-10 mt-2 text-sm text-gray-800">{answer}</p>
      )}
    </div>
  );
};

const Faqs: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#abb8ee] to-[#bac7e9] py-10 px-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-semibold text-[#004d40] mb-8">
        Most Frequently Asked FAQ's
      </h1>

      {/* FAQ Accordion List */}
      <div className="max-w-2xl w-full mb-12">
        <FAQItem
          question="Do you have a revenue share?"
          answer="No, we offer a buy-rate, interchange-plus pricing model giving you the most control over your revenue."
        />
        <FAQItem
          question="Do you have any minimum fees or fixed monthly fees?"
          answer="No minimum fees or fixed monthly fees are charged."
        />
        <FAQItem
          question="Do you charge any PCI DSS program or non-compliance fees?"
          answer="No PCI DSS program or non-compliance fees are charged."
        />
        <FAQItem
          question="Can I set the pricing to my merchants?"
          answer="Yes, you can set your own pricing for your merchants."
        />
        <FAQItem
          question="Are the pricing tiers 'pick a tier' or 'fill a tier'?"
          answer="Our pricing structure supports flexible tier options."
        />
        <FAQItem
          question="Do you charge an ACH volume-based fee?"
          answer="No ACH volume-based fee is charged."
        />
      </div>

      {/* Bottom Call to Action Block */}
      <div className="w-full max-w-3xl bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Still have questions or want to know more
        </h2>
        <p className="text-gray-600 mb-6">
          We use only the highest quality parts and offer a wide range of repair services, from simple screen replacements to complex motherboard repairs. We also offer same-day repairs in most cases.
        </p>
        <button
          onClick={() => router.push("/contact-us")}
          className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Faqs; 