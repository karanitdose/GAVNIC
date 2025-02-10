'use client';
import React, { useState, useEffect } from 'react'; 
import Image from 'next/image';  
import { usePathname } from 'next/navigation'; 
import Header from '../../Header/page';
import Footer from '../../Footer/page';

const ProductsApi = 'https://api.gavnic.com/api/products';  

export default function ProductDetails() {
  const router = usePathname();
  const id = router.split("/").pop();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayedImage, setDisplayedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`${ProductsApi}/${id}`);
          if (response.ok) {
            const data = await response.json();
            setProduct(data);
            setDisplayedImage(data.images[0]);  
          } else {
            console.error('Failed to fetch product');
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;
  if (!product) return <div className="text-center text-lg font-semibold">Product not found</div>; 

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <Image
              className="w-full max-w-md cursor-pointer rounded-lg shadow-lg"
              src={displayedImage}
              alt={product.name}
              width={500}
              height={500}
              onClick={() => setIsModalOpen(true)}
            />
            <div className="flex gap-3 mt-4">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  width={80}
                  height={100}
                  className="cursor-pointer border rounded-lg p-1 hover:border-blue-500"
                  onClick={() => setDisplayedImage(image)}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mb-4">₹{product.price}</p>
            <button style={{backgroundColor:"#9333EA"}} className="text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto">
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
      <Footer />

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={() => setIsModalOpen(false)}>
          <div className="relative p-4 bg-white rounded-lg">
            <button className="absolute top-2 right-2 text-2xl font-bold text-black" onClick={() => setIsModalOpen(false)}>&times;</button>
            <Image src={displayedImage} alt={product.name} width={800} height={800} className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}