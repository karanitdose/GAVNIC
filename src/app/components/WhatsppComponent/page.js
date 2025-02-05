"use client"
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    // This will open WhatsApp chat with your number
    const phoneNumber = '919810724994'; 
    const message = 'Hello, Aap VANI INFOTECH se bol rhe hain, maine kuch products order krne the!'; // Optional message to pre-fill the chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp chat in a new tab
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

export default WhatsAppButton;
