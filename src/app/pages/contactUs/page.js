"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePayment, MdTrackChanges, MdAccountCircle } from "react-icons/md";
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Contact Options Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          How can we help you?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Orders */}
          <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-xl cursor-pointer text-center">
            <MdTrackChanges className="text-purple-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-purple-700">Orders</h3>
            <p className="text-gray-600 text-sm">Track, return, or buy again.</p>
          </div>

          {/* Payments */}
          <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-xl cursor-pointer text-center">
            <MdOutlinePayment className="text-purple-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-purple-700">Payments</h3>
            <p className="text-gray-600 text-sm">Manage payment methods and settings.</p>
          </div>

          {/* Account */}
          <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-xl cursor-pointer text-center">
            <MdAccountCircle className="text-purple-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-purple-700">Account</h3>
            <p className="text-gray-600 text-sm">Change your email, password, or preferences.</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 flex items-center gap-2">
              <FaUser className="text-purple-500" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 flex items-center gap-2">
              <FaEnvelope className="text-purple-500" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 flex items-center gap-2">
              <FaComment className="text-purple-500" /> Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-10 text-gray-600 space-y-3">
        <p className="flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-purple-500" /> Customer Support: 9810724994
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-purple-500" /> Email: support@gavnic.com
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-purple-500" /> Location: Noida Sector-15, G-Block
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
