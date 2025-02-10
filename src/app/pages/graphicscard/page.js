"use client";
import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";  

const ProductsApi = "https://api.gavnic.com/api/products";

export default function GraphicCard() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  // const dispatch = useDispatch(); 

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${ProductsApi}?category=GRAPHICS_CARD`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search keywords
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchItem, products]);

  // const handleAddToWishlist = (product) => {
  //   dispatch(add({ ...product, quantity: 1 }));
  //   toast("Added to Wishlist", {
  //     position: "bottom-center",
  //     autoClose: 1000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: false,
  //     progress: undefined,
  //     style: {
  //       backgroundColor: "#964B00",
  //       color: "white",
  //       fontWeight: "bold",
  //     },
  //   });
  // };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-center mb-4">
          <input
            className="border border-gray-300 p-2 rounded-lg w-full max-w-md"
            type="search"
            placeholder="Search Products..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>

        {/* Grid layout: 2 items per row on small screens */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between min-h-[350px]"
            >
              <Link href={`/components/product/${product._id}`}>
                <Image
                  src={product.images?.[0] || "/fallback-image.jpg"}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="rounded cursor-pointer"
                />
              </Link>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm font-semibold">{product.description}</p>
              {/* <p className="text-gray-500 line-through">₹{product.price}</p> */}
              <p className="text-green-600 font-bold">₹{product.price}</p> 
              <button
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg"
                // onClick={() => handleAddToWishlist(product)}
              >
                Add To Wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
