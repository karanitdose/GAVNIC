"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => { 
  const images = [
    "/carousel/carouselImage1.jpg",
    "/carousel/carouselImage2.jpg",
    "/carousel/carouselImage3.jpg", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);  

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative w-full h-100 md:h-80 overflow-hidden">
      {/* Carousel images */}
      <div className="flex transition-transform duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Carousel Image ${index + 1}`}
              width={1200}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators (optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
