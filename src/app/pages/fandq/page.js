"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md"; // Language Icon
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";

const faqs = {
  en: [
    {
      category: "LAPTOP",
      question: "What should I consider when buying a laptop?",
      answer:
        "Consider the processor, RAM, storage type (SSD/HDD), battery life, and screen size according to your needs.",
    },
    {
      category: "BATTERY",
      question: "How can I extend my laptop's battery life?",
      answer:
        "Lower screen brightness, close unused apps, enable battery saver mode, and avoid extreme temperatures.",
    },
    {
      category: "DESKTOP",
      question: "Is a desktop better than a laptop for gaming?",
      answer:
        "Yes, desktops offer better cooling, upgradeability, and performance for high-end gaming.",
    },
    {
      category: "GRAPHICS_CARD",
      question: "Why do I need a dedicated graphics card?",
      answer:
        "A dedicated GPU enhances performance in gaming, video editing, and 3D rendering tasks.",
    },
    {
      category: "SSD",
      question: "Why is an SSD better than an HDD?",
      answer:
        "SSDs are significantly faster, quieter, and more reliable compared to traditional HDDs.",
    },
  ],
  hi: [
    {
      category: "LAPTOP",
      question: "लैपटॉप खरीदते समय मुझे क्या ध्यान रखना चाहिए?",
      answer:
        "प्रोसेसर, RAM, स्टोरेज प्रकार (SSD/HDD), बैटरी लाइफ और स्क्रीन साइज को अपनी ज़रूरत के हिसाब से देखें।",
    },
    {
      category: "BATTERY",
      question: "मैं अपने लैपटॉप की बैटरी लाइफ कैसे बढ़ा सकता हूँ?",
      answer:
        "स्क्रीन ब्राइटनेस कम करें, अनावश्यक ऐप्स बंद करें, बैटरी सेवर मोड चालू करें और अत्यधिक तापमान से बचें।",
    },
    {
      category: "DESKTOP",
      question: "गेमिंग के लिए लैपटॉप से बेहतर डेस्कटॉप क्यों होता है?",
      answer:
        "डेस्कटॉप बेहतर कूलिंग, अपग्रेडेबिलिटी और हाई-परफॉर्मेंस प्रदान करता है, जो गेमिंग के लिए जरूरी होता है।",
    },
    {
      category: "GRAPHICS_CARD",
      question: "मुझे एक समर्पित ग्राफिक्स कार्ड की आवश्यकता क्यों है?",
      answer:
        "ग्राफिक्स कार्ड गेमिंग, वीडियो एडिटिंग और 3D रेंडरिंग कार्यों में उच्च प्रदर्शन प्रदान करता है।",
    },
    {
      category: "SSD",
      question: "SSD HDD से बेहतर क्यों है?",
      answer:
        "SSD तेज, शांत और पारंपरिक HDD की तुलना में अधिक विश्वसनीय होती हैं।",
    },
  ],
};

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [language, setLanguage] = useState("en"); // Default language English

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#9333EA]">
              Frequently Asked Questions (FAQ)
            </h1>
            <button
              onClick={toggleLanguage}
              className="bg-[#9333EA] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#7b29c7] transition duration-300"
            >
              <MdOutlineLanguage className="text-xl" />
              {language === "en" ? "हिंदी" : "English"}
            </button>
          </div>

          <div className="space-y-4">
            {faqs[language].map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-[#9333EA]">
                    {faq.question}
                  </h2>
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#9333EA]" />
                  ) : (
                    <FaChevronDown className="text-[#9333EA]" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FaqPage;
