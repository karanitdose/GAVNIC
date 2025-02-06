"use client";
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "0125",
    name: "M171 LOGITECH WIRELESS MOUSE",
    price: 799.0,
    discountedPrice: 188.6,
    discount: "76.4%",
    image: "/addtocart/mouse.png",
    images: ["/addtocart/mouse.png", "/addtocart/mouse.png"],
    isCounterfeit: true,
  },
  {
    id: "0225",
    name: "Dell Wireless Mouse",
    price: 399.0,
    discountedPrice: 188.6,
    discount: "52.7%",
    image: "/addtocart/mouse.png",
    images: ["/addtocart/mouse.png", "/addtocart/mouse.png"],
    isCounterfeit: true,
  },
  {
    id: "8320",
    name: "Bosston RGB Keyboard Mouse Combo",
    price: 1500.0,
    discountedPrice: 497.13,
    discount: "66.9%",
    image: "/addtocart/mouse.png",
    images: ["/addtocart/mouse.png", "/addtocart/mouse.png"],
  },
];

export default function Mouse() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        {/* Grid layout: 2 items per row on small screens */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between min-h-[350px]"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={250}
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-500 line-through">₹{product.price}</p>
              <p className="text-green-600 font-bold">
                ₹{product.discountedPrice}
              </p>
              <p className="text-sm text-red-500">Save: {product.discount}</p>
              <Link href={`/components/product/${product.id}`}>
                <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
