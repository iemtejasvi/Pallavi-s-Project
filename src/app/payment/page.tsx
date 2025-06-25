"use client";
import React, { useState } from "react";
import StepperProgress from "../components/StepperProgress";

const PaymentOptions: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow mb-4 items-start mt-8">
      <h2 className="text-lg font-semibold mb-2 ">More Payment Options</h2>
      <ul>
        <li className="p-2 flex items-center justify-start gap-2 border-b">
          <span>
            {/* SVG icon */}
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2501 10.0833C16.2501 11.2333 17.1834 12.1667 18.3334 12.1667V13C18.3334 16.3333 17.5001 17.1667 14.1667 17.1667H5.83341C2.50008 17.1667 1.66675 16.3333 1.66675 13V12.5833C2.81675 12.5833 3.75008 11.65 3.75008 10.5C3.75008 9.34999 2.81675 8.41666 1.66675 8.41666V7.99999C1.66675 4.66666 2.50008 3.83333 5.83341 3.83333H14.1667C17.5001 3.83333 18.3334 4.66666 18.3334 7.99999C17.1834 7.99999 16.2501 8.93333 16.2501 10.0833Z" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 8.20835L12.5 13.2083" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.4953 8.20833H12.5028" stroke="#027FEE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.49534 12.7917H7.50283" stroke="#027FEE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span> Offers
        </li>
        <li className="p-2 flex items-center justify-start gap-2 border-b ">
          <span>
            {/* SVG icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8333 9.29169H5.83325" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.66675 9.2917V5.4417C1.66675 3.7417 3.04175 2.3667 4.74175 2.3667H9.42508C11.1251 2.3667 12.5001 3.42503 12.5001 5.12503" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.5667 10.1667C14.1501 10.5667 13.9501 11.1833 14.1167 11.8167C14.3251 12.5917 15.0918 13.0834 15.8918 13.0834H16.6667V14.2917C16.6667 16.1334 15.1751 17.625 13.3334 17.625H5.00008C3.15841 17.625 1.66675 16.1334 1.66675 14.2917V8.45836C1.66675 6.6167 3.15841 5.12503 5.00008 5.12503H13.3334C15.1667 5.12503 16.6667 6.62503 16.6667 8.45836V9.66666H15.7667C15.3001 9.66666 14.8751 9.85002 14.5667 10.1667Z" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3333 10.5167V12.2333C18.3333 12.7 17.95 13.0834 17.475 13.0834H15.8667C14.9667 13.0834 14.1417 12.425 14.0667 11.525C14.0167 11 14.2167 10.5084 14.5667 10.1667C14.875 9.85002 15.3 9.66666 15.7667 9.66666H17.475C17.95 9.66666 18.3333 10.05 18.3333 10.5167Z" stroke="#027FEE" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>Wallet
        </li>
        <li className="p-2 flex items-center justify-start gap-2 border-b ">
          <span>
            {/* SVG icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3084 1.7917L17.8084 4.79168C18.1001 4.90835 18.3334 5.25834 18.3334 5.56667V8.33335C18.3334 8.79168 17.9584 9.16668 17.5001 9.16668H2.50008C2.04175 9.16668 1.66675 8.79168 1.66675 8.33335V5.56667C1.66675 5.25834 1.90009 4.90835 2.19175 4.79168L9.69175 1.7917C9.85842 1.72503 10.1417 1.72503 10.3084 1.7917Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3334 18.3333H1.66675V15.8333C1.66675 15.375 2.04175 15 2.50008 15H17.5001C17.9584 15 18.3334 15.375 18.3334 15.8333V18.3333Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.33325 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66675 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3333 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.6667 15V9.16666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.833252 18.3333H19.1666" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 7.08334C10.6904 7.08334 11.25 6.5237 11.25 5.83334C11.25 5.14299 10.6904 4.58334 10 4.58334C9.30964 4.58334 8.75 5.14299 8.75 5.83334C8.75 6.5237 9.30964 7.08334 10 7.08334Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>Net Banking
        </li>
        <li className="p-2 flex items-center justify-start gap-2 border-b">
          <span>
            {/* SVG icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0834 6.59999V10.8917C16.0834 13.4583 14.6167 14.5583 12.4167 14.5583H5.09171C4.71671 14.5583 4.35838 14.525 4.02504 14.45C3.81671 14.4167 3.61672 14.3584 3.43339 14.2917C2.18339 13.825 1.42505 12.7417 1.42505 10.8917V6.59999C1.42505 4.03332 2.89171 2.93335 5.09171 2.93335H12.4167C14.2834 2.93335 15.625 3.72501 15.9834 5.53335C16.0417 5.86668 16.0834 6.20832 16.0834 6.59999Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.5842 9.10009V13.3918C18.5842 15.9584 17.1176 17.0584 14.9176 17.0584H7.59254C6.97588 17.0584 6.41755 16.9751 5.93422 16.7918C4.94255 16.4251 4.26755 15.6668 4.02588 14.4501C4.35921 14.5251 4.71754 14.5584 5.09254 14.5584H12.4176C14.6176 14.5584 16.0842 13.4584 16.0842 10.8918V6.60009C16.0842 6.20842 16.0509 5.85845 15.9842 5.53345C17.5676 5.86678 18.5842 6.98342 18.5842 9.10009Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.7486 10.9499C9.96362 10.9499 10.9486 9.9649 10.9486 8.74988C10.9486 7.53485 9.96362 6.54987 8.7486 6.54987C7.53357 6.54987 6.54858 7.53485 6.54858 8.74988C6.54858 9.9649 7.53357 10.9499 8.7486 10.9499Z" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.9834 6.91669V10.5834" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5181 6.91693V10.5836" stroke="#027FEE" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span> Cash on Delivery
        </li>
      </ul>
    </div>
  );
};

const Payment: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [showCvv, setShowCvv] = useState(false);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [currentStep] = useState(0);

  return (
    <div className="bg-gradient-to-b from-[#abb8ee] to-[#bac7e9] pt-4 min-h-screen">
      <StepperProgress currentStep={currentStep} />
      <div className="grid min-h-screen grid-cols-3 ">
        <div className="ml-10">
          <button className="bg-blue-500 ml-6 hover:bg-blue-700 text-white font-bold py-4 mt-10 px-7 rounded ">Proceed to pay</button>
          <h1 className="text-3xl ml-6">payment options</h1>
          <p className="text-7xl ml-10">↓</p>
          <div className="mx-auto p-6 rounded  space-y-4 ">
            <h1 className="text-2xl font-semibold">Credit & Debit Cards</h1>
            <div className="mx-auto bg-white p-0 rounded-xl shadow space-y-4">
              <div className="mx-auto bg-white p-4 rounded-xl shadow space-y-4">
                {/* Axis Bank Card */}
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:shadow transition">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                      alt="Mastercard"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="font-medium">Axis Bank</p>
                      <p className="text-gray-500 text-sm">** ** ** 8395</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="bank"
                    value="axis"
                    className="text-blue-600 w-5 h-5"
                  />
                </label>
                {/* HDFC Bank Card */}
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:shadow transition">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                      alt="Visa"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="font-medium">HDFC Bank</p>
                      <p className="text-gray-500 text-sm">** ** ** 6246</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="bank"
                    value="hdfc"
                    className="text-blue-600 w-5 h-5"
                  />
                </label>
                {/* Add New Card */}
                <label className="flex items-center p-3 border border-dashed border-gray-400 rounded-lg cursor-pointer hover:shadow transition space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="font-medium text-blue-600">Add New Card</p>
                </label>
              </div>
            </div>
          </div>
          <h1 className="text-2xl ml-8 py-4 font-semibold">UPI</h1>
          <div className="mx-6 bg-white p-4  mb-10 rounded-xl  space-y-4">
            {/* Google Pay */}
            <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:shadow transition">
              <div className="flex items-center space-x-3">
                <img
                  src="https://banner2.cleanpng.com/lnd/20241224/sz/a2c1516eae4cb9a792e8ef0f908ceb.webp"
                  alt="Google Pay"
                  className="w-8 h-8"
                />
                <p className="font-medium">Google Pay</p>
              </div>
              <input
                type="radio"
                name="upi"
                value="gpay"
                className="text-blue-600 w-5 h-5"
              />
            </label>
            {/* PhonePe */}
            <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:shadow transition">
              <div className="flex items-center space-x-3">
                <img
                  src="https://w7.pngwing.com/pngs/332/615/png-transparent-phonepe-india-unified-payments-interface-india-purple-violet-text-thumbnail.png"
                  alt="PhonePe"
                  className="w-8 h-8"
                />
                <p className="font-medium">PhonePe</p>
              </div>
              <input
                type="radio"
                name="upi"
                value="phonepe"
                className="text-blue-600 w-5 h-5"
              />
            </label>
            {/* Add New UPI ID */}
            <label className="flex items-center p-3 border border-dashed border-gray-400 rounded-lg cursor-pointer hover:shadow transition space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="font-medium text-blue-600">Add New UPI ID</p>
            </label>
          </div>
        </div>
        <div className="w-full  p-4 pt-[5rem]">
          <div className="flex w-full justify-between px-6 mb-4">
            <h2 className="text-2xl font-semibold">Add New Card</h2>
            <button className="text-xl font-bold">&times;</button>
          </div>
          <div className="rounded-lg p-6 w-full ">
            <label className="block mb-2 font-medium">Card Number</label>
            <input
              type="text"
              placeholder="Enter 12 digit card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block mb-2 font-medium">CVV</label>
            <div className="flex items-center mb-4">
              <input
                type={showCvv ? "text" : "password"}
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowCvv(!showCvv)}
                className="ml-2 text-gray-600"
              >
                {showCvv ? "🙈" : "👁"}
              </button>
            </div>
            <label className="block mb-2 font-medium">Valid Thru</label>
            <div className="flex space-x-2 mb-4">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Month</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Year</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={2025 + i}>
                    {2025 + i}
                  </option>
                ))}
              </select>
            </div>
            <label className="block mb-2 font-medium">Card Holder's Name</label>
            <input
              type="text"
              placeholder="Name on Card"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 mb-4">
              Save card and Proceed
            </button>
            <button className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600">
              Home
            </button>
          </div>
        </div>
        <div className="">
          <PaymentOptions />
          {/* SVG illustration omitted for brevity */}
        </div>
      </div>
    </div>
  );
};

export default Payment; 