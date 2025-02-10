"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone === "9810724994" && password === "123456") {
      router.push("/pages/ProductForm");
    } else {
      setError("Invalid phone number or password");
    }
  };

  return (
<>
 <Header />
 <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-[#9333EA]">Login</h2>
        <p className="text-gray-500 text-center mt-2 mb-6">Sign in to your account</p>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Phone Number Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#9333EA] outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#9333EA] outline-none"
              required
            />
            {/* Toggle Password Visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 text-lg"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#9333EA] text-white py-3 rounded-md hover:bg-[#7a27c2] transition duration-200 flex items-center justify-center gap-2"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <p className="text-center text-gray-600 mt-4 cursor-pointer hover:text-[#9333EA]">
          Forgot Password?
        </p>
      </div>
    </div>
    <Footer />
</>
  );
};

export default LoginPage;
