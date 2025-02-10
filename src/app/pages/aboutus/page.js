"use client";
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";
import { FaLaptop, FaTools, FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";


const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="relative bg-[#9333EA] text-white text-center py-16 px-4">
          <h1 className="text-4xl font-bold">About GAVNIC</h1>
          <p className="text-lg mt-3 max-w-2xl mx-auto">
            Your trusted destination for high-quality **computer accessories** and **hardware solutions**.
          </p>
        </div>

        {/* About Section */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-[#9333EA] text-center mb-8">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            GAVNIC is a one-stop-shop for all your **computer hardware and accessories** needs. 
            From **high-performance laptops** to **gaming peripherals**, we bring you the latest and most 
            reliable tech solutions at unbeatable prices. Our mission is to **enhance your digital experience** 
            with **top-quality products and exceptional customer service**.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white py-12">
          <h2 className="text-3xl font-semibold text-[#9333EA] text-center mb-8">Why Choose Us?</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
            {/* Fast Delivery */}
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 shadow-md rounded-lg">
              <FaTruck className="text-5xl text-[#9333EA]" />
              <h3 className="text-xl font-semibold mt-4">Fast & Secure Delivery</h3>
              <p className="text-gray-600 mt-2">
                We ensure **quick shipping** so you can get your hardware when you need it the most.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 shadow-md rounded-lg">
              <FaCheckCircle className="text-5xl text-[#9333EA]" />
              <h3 className="text-xl font-semibold mt-4">100% Genuine Products</h3>
              <p className="text-gray-600 mt-2">
                All our products are **certified, authentic, and backed by warranty**.
              </p>
            </div>

            {/* Customer Support */}
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 shadow-md rounded-lg">
              <FaHeadset className="text-5xl text-[#9333EA]" />
              <h3 className="text-xl font-semibold mt-4">24/7 Customer Support</h3>
              <p className="text-gray-600 mt-2">
                Need help? Our **support team is available 24/7** to assist you with your queries.
              </p>
            </div>

            {/* Wide Range of Products */}
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 shadow-md rounded-lg">
              <FaLaptop className="text-5xl text-[#9333EA]" />
              <h3 className="text-xl font-semibold mt-4">Wide Range of Accessories</h3>
              <p className="text-gray-600 mt-2">
                From **keyboards to graphic cards**, we offer everything to upgrade your setup.
              </p>
            </div>

            {/* Expert Support */}
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 shadow-md rounded-lg">
              <FaTools className="text-5xl text-[#9333EA]" />
              <h3 className="text-xl font-semibold mt-4">Expert Guidance</h3>
              <p className="text-gray-600 mt-2">
                Our **technical experts** help you choose the best products for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-[#9333EA] text-center mb-8">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            GAVNIC aims to be the **leading provider of high-quality computer hardware and accessories**. 
            We focus on **innovation, affordability, and customer satisfaction** to ensure that our customers 
            get the best products in the market.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-12">
          <h2 className="text-3xl font-semibold text-[#9333EA] text-center mb-8">Get in Touch</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg">
              Have questions? Reach out to us at <span className="font-semibold">support@gavnic.com</span> 
              or call us at <span className="font-semibold">+91 98107 24994</span>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
