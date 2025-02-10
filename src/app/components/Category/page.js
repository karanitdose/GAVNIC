"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "LAPTOP", img: "/CategoryImg/laptop.png", link: "/pages/laptop" },
  { name: "DESKTOP", img: "/CategoryImg/dekstop.png", link: "/pages/desktop" },
  { name: "KEYBOARD", img: "/CategoryImg/keyboard.png", link: "/pages/keyboard" },
  { name: "MOUSE", img: "/CategoryImg/mouse.png", link: "/pages/mouse" },
  { name: "HEADPHONES", img: "/CategoryImg/headphone.png", link: "/pages/headphones" },
  { name: "PRINTER", img: "/CategoryImg/printer.png", link: "/pages/printer" },
  { name: "SPEAKERS", img: "/CategoryImg/speaker.png", link: "/pages/speakers" },
  { name: "GRAPHICS CARD", img: "/CategoryImg/graphicCard.png", link: "/pages/graphicscard" },
  
  { name: "DATA CABLE", img: "/CategoryImg/datacable.png", link: "/pages/datacable" },
  { name: "PROCESSOR", img: "/CategoryImg/proccessor.png", link: "/pages/processor" },
  { name: "RAM", img: "/CategoryImg/rammemory.png", link: "/pages/ram" },
  { name: "MOTHERBOARD", img: "/CategoryImg/mother.png", link: "/pages/motherboard" },
  { name: "CHARGER (ADOPTER)", img: "/CategoryImg/charger.png", link: "/pages/charger" },
  
];


const Category = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {categories.map((category, index) => (
        <Link key={index} href={category.link} passHref>
          <div className="flex flex-col items-center cursor-pointer">
            <div  style={{backgroundColor:"#173AA0",margin:"0 10px"}} className="w-32 h-32 md:w-40 md:h-40 rounded-full  flex items-center justify-center shadow-lg transition-transform transform hover:scale-110">
              <Image
                src={category.img}
                alt={category.name}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-gray-600 text-sm font-semibold">{category.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
