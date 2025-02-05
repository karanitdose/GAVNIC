import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-white flex items-center justify-between px-4 md:px-10 py-3">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          GAVNIC
        </h1>
        <div className="hidden md:flex w-1/2 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-gray-600 cursor-pointer text-xl" />
          <FaShoppingCart className="text-gray-600 cursor-pointer text-xl" />
        </div>
      </div>
      {/* Contact Bar */}
      <div className="bg-purple-600 text-white text-center text-sm py-2 text-bold-800">
        Contact Us : 9569125048 / 9810724994
      </div>
      {/* Mobile Search */}
      <div className="md:hidden flex items-center p-3 bg-gray-100">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none"
        />
        <FaSearch className="absolute right-5 top-5 text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
