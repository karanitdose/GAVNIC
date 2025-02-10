"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

const ProductsApi = "https://api.gavnic.com/api/products";

export default function ViewadelAllProduct() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${ProductsApi}`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchItem, products]);

  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`https://api.gavnic.com/api/products/${id}`);
        setProducts(products.filter((product) => product._id !== id));

        toast("Product deleted successfully", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          style: {
            backgroundColor: "#E64040",
            color: "white",
            fontWeight: "bold",
          },
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="bg-white-100 min-h-screen">
      <Header />

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto py-4">
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          type="search"
          placeholder="Search Products..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
            >
              <Link href={`/components/product/${product._id}`}>
                <div className="relative w-full h-64 cursor-pointer">
                  {product.images && product.images.length > 0 && (
                    <Image
                      className="rounded-lg"
                      src={product.images[0]}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>
              </Link>

              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-xl font-bold text-blue-600">₹{product.price}</p>

                <button
                  className="w-full mt-3 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
