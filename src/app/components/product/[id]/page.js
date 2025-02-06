// /pages/components/product/[id].js

"use client";
import { usePathname } from "next/navigation";
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: "0125",
    name: "M171 LOGITECH WIRELESS MOUSE",
    price: 799.0,
    discountedPrice: 188.6,
    discount: "76.4%",
    image: "/addtocart/mouse.png",
    images: [
      "/addtocart/mouse.png",
      "/addtocart/mouse.png",
      "/addtocart/mouse.png",
    ],
    isCounterfeit: true,
  },
  {
    id: "0225",
    name: "Dell Wireless Mouse",
    price: 399.0,
    discountedPrice: 188.6,
    discount: "52.7%",
    image: "/addtocart/mouse.png",
    images: [
      "/addtocart/mouse.png",
      "/addtocart/mouse.png",
      "/addtocart/mouse.png",
    ],
    isCounterfeit: true,
  },
  {
    id: "8320",
    name: "Bosston RGB Keyboard Mouse Combo",
    price: 1500.0,
    discountedPrice: 497.13,
    discount: "66.9%",
    image: "/addtocart/mouse.png",
    images: [
      "/addtocart/mouse.png",
      "/addtocart/mouse.png",
      "/addtocart/mouse.png",
    ],
  },
];

export default function ProductDetailPage() {
  const pathname = usePathname(); // Get the current pathname
  const productId = pathname.split("/").pop(); // Extract the product ID from the path

  // Find the selected product by ID
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row bg-white  rounded-xl p-6">
          {/* Product Image Section */}
          <div className="flex flex-col items-center md:w-1/3">
            {/* Main product image */}
            <Image
              src={selectedImage}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
            {/* Thumbnail images */}
            <div className="flex mt-4 space-x-2">
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="cursor-pointer border p-1 rounded-lg hover:opacity-75"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-gray-500 mt-2">Brand: Logitech</p>

            {/* Price and Discount */}
            <div className="flex items-center mt-4">
              <p className="text-lg font-bold text-red-500">
                ₹{product.discountedPrice}
              </p>
              <p className="text-sm text-gray-400 ml-2 line-through">
                ₹{product.price}
              </p>
              <p className="text-sm text-green-600 ml-2">{product.discount} OFF</p>
            </div>

            {/* Counterfeit or Genuine Product Badge */}
            <p className="mt-2 text-sm text-red-500 font-semibold">
              {product.isCounterfeit ? "Counterfeit" : "Genuine"}
            </p>

            {/* Product Description */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Product Features</h4>
              <ul className="list-disc pl-6 mt-2 text-sm text-gray-700">
                <li>Ergonomic Design for Comfort</li>
                <li>High-Precision Optical Sensor</li>
                <li>Battery Life: 12 months</li>
                <li>Compatibility: Windows, macOS</li>
              </ul>
            </div>

            {/* Add to Cart Section */}
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-500 transition">
                Add to Cart
              </button>
            </div>

            {/* Other Action Buttons */}
            <div className="mt-4 flex space-x-4">
              <button className="w-full bg-yellow-500 text-white py-2 rounded-lg shadow-md hover:bg-yellow-400 transition">
                Buy Now
              </button>
              <button className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
