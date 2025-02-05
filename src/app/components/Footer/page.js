import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            GAVNIC
          </h1>
          <p className="mt-4 text-gray-400">
          gavnic.com is a platform that provides supplies for the IT industry and people related to it.
          </p>
          <h2 className="mt-4 text-lg font-semibold">About Us</h2>
        </div>
        {/* Help & Support */}
        <div>
          <h2 className="text-lg font-semibold">Help & Support</h2>
          <ul className="mt-2 space-y-2">
            <li><Link href="#"><span className="text-gray-400 hover:text-white cursor-pointer">Contact Us</span></Link></li>
            <li><Link href="#"><span className="text-gray-400 hover:text-white cursor-pointer">FAQs</span></Link></li>
            <li><Link href="#"><span className="text-gray-400 hover:text-white cursor-pointer">Track My Order</span></Link></li>
          </ul>
        </div>
        {/* Privacy & Legal */}
        <div>
          <h2 className="text-lg font-semibold">Privacy & Legal</h2>
          <ul className="mt-2 space-y-2">
            <li><Link href="#"><span className="text-gray-400 hover:text-white cursor-pointer">Return Policy</span></Link></li>
            <li><Link href="#"><span className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</span></Link></li>
            <li><Link href="#"><span className="text-gray-400 hover:text-white cursor-pointer">Cancellation Policy</span></Link></li>
            <li><Link href="#"><span className="text-gray-400 hover:text-white cursor-pointer">Terms & Conditions</span></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
