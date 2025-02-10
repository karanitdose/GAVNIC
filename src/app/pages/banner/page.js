"use client";
import { FaSmile, FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full bg-[#9333EA] py-10 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center text-center md:text-left">
        {/* Happy Customers */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4 mb-6 md:mb-0">
          <FaSmile className="text-5xl mb-3" />
          <h3 className="text-lg font-semibold">Happy Customers</h3>
          <p className="text-sm">Over 10+ satisfied customers Delhi Noida.</p>
        </div>

        {/* Fast Delivery */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4 mb-6 md:mb-0">
          <FaShippingFast className="text-5xl mb-3" />
          <h3 className="text-lg font-semibold">Fast Delivery</h3>
          <p className="text-sm">Lightning-fast shipping across all Delhi & Noida.</p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4 mb-6 md:mb-0">
          <FaHeadset className="text-5xl mb-3" />
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <p className="text-sm">Dedicated team ready to assist you anytime.</p>
        </div>

        {/* Secure Payments */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
          <FaShieldAlt className="text-5xl mb-3" />
          <h3 className="text-lg font-semibold">Secure Payments</h3>
          <p className="text-sm">100% secure payment with encryption technology.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
