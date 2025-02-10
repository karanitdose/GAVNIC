'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaLaptop, FaDesktop, FaKeyboard, FaMouse, FaHeadphones, FaPrint, FaSpeaker, FaMicrochip, FaPlug, FaMemory, FaServer, FaBatteryFull } from 'react-icons/fa';

const iconMap = {
  LAPTOP: FaLaptop,
  DESKTOP: FaDesktop,
  KEYBOARD: FaKeyboard,
  MOUSE: FaMouse,
  HEADPHONES: FaHeadphones,
  PRINTER: FaPrint,
  SPEAKERS: FaSpeaker,
  "GRAPHICS CARD": FaMicrochip,
  "DATA CABLE": FaPlug,
  PROCESSOR: FaMicrochip,
  RAM: FaMemory,
  MOTHERBOARD: FaServer,
  "CHARGER (ADOPTER)": FaBatteryFull,
};

const data = [
  { name: "LAPTOP", link: "/pages/laptop" },
  { name: "DESKTOP", link: "/pages/desktop" },
  { name: "KEYBOARD", link: "/pages/keyboard" },
  { name: "MOUSE", link: "/pages/mouse" },
  { name: "HEADPHONES", link: "/pages/headphones" },
  { name: "PRINTER", link: "/pages/printer" },
  { name: "SPEAKERS", link: "/pages/speakers" },
  { name: "GRAPHICS CARD", link: "/pages/graphicscard" },
  { name: "DATA CABLE", link: "/pages/datacable" },
  { name: "PROCESSOR", link: "/pages/processor" },
  { name: "RAM", link: "/pages/ram" },
  { name: "MOTHERBOARD", link: "/pages/motherboard" },
  { name: "CHARGER (ADOPTER)", link: "/pages/charger" }
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  
  const handleSearch = (event) => {
    const value = event.target.value.toUpperCase();
    setSearchTerm(value);
    setFilteredData(value ? data.filter(item => item.name.includes(value)) : []);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && filteredData.length > 0) {
      window.location.href = filteredData[0].link;
    }
  };

  return (
    <header className="w-full shadow-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        <Link href="/">
          <h1 className="text-3xl font-bold">GAVNIC</h1>
        </Link>
        
        <div className="hidden md:flex w-1/2 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-full text-black focus:outline-none"
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
          {filteredData.length > 0 && (
            <div className="absolute top-12 w-full bg-white border shadow-lg rounded-lg z-10 text-black">
              {filteredData.map((item, index) => {
                const IconComponent = iconMap[item.name];
                return (
                  <Link key={index} href={item.link} className="flex justify-between px-4 py-2 hover:bg-gray-100 items-center">
                    <span>{item.name}</span>
                    {IconComponent && <IconComponent />}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <FaUser className="cursor-pointer text-xl" />
          <FaShoppingCart className="cursor-pointer text-xl" />
        </div>
      </div>

      <div className="text-center text-sm py-2 font-bold">
        <span>Contact Us : 9810724994</span>
      </div>

      <div className="md:hidden flex items-center p-3 bg-gray-100 relative">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-full text-black focus:outline-none"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <FaSearch className="absolute right-5 top-5 text-gray-500 cursor-pointer" />
        {filteredData.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white border shadow-lg rounded-lg z-10 text-black">
            {filteredData.map((item, index) => {
              const IconComponent = iconMap[item.name];
              return (
                <Link key={index} href={item.link} className="flex justify-between px-4 py-2 hover:bg-gray-100 items-center">
                  <span>{item.name}</span>
                  {IconComponent && <IconComponent />}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;