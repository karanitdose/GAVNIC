"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "MOUSE", img: "/CategoryImg/mouse.png", link: "/pages/mouse" },
  { name: "COMPUTER CABLE", img: "/CategoryImg/9828.png", link: "/pages/mouse" },
  { name: "BATTERY", img: "/CategoryImg/battery.png", link: "/pages/battery" },
  { name: "DATA CABLE", img: "/CategoryImg/cable.png", link: "/pages/blower" },
  { name: "BATTERY", img: "/CategoryImg/battery.png", link: "/pages/battery" },
  { name: "DATA CABLE", img: "/CategoryImg/cable.png", link: "/pages/blower" },
  
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
                width={150}
                height={150}
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
