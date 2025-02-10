"use client";
import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md"; // Language Icon
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";

const policyContent = {
  en: {
    title: "Gavnic Return & Refund Policy",
    intro: "At Gavnic, we prioritize customer satisfaction. If you’re not happy with your purchase, we offer a straightforward return and refund process. Please review our policy carefully to understand your rights and obligations.",
    eligibilityTitle: "Eligibility for Returns",
    eligibilityContent: [
      "Products must be returned within 7 days of delivery.",
      "Items must be unused, undamaged, and in their original packaging.",
      "Electronics, software, and customized items are non-returnable unless defective.",
      "Proof of purchase (receipt or order confirmation) is required.",
    ],
    processTitle: "How to Initiate a Return",
    processContent: [
      "Log in to your Gavnic account and navigate to the 'Order History' page.",
      "Select the item you wish to return and click on 'Request Return'.",
      "Print the return shipping label provided and attach it to the package.",
      "Drop off the package at your nearest courier center.",
      "Once received and inspected, your refund will be processed within 7-10 business days.",
    ],
    refundTitle: "Refund Process",
    refundContent: [
      "Refunds will be issued to the original payment method.",
      "Processing time varies by bank but typically takes 7-10 business days.",
      "Shipping fees are non-refundable unless the return is due to our error.",
    ],
    exceptionsTitle: "Exceptions & Non-Returnable Items",
    exceptionsContent: [
      "Products that are damaged due to customer negligence.",
      "Downloadable software and digital products.",
      "Gift cards and promotional items.",
    ],
    contactTitle: "Need Help?",
    contactContent: "If you have any questions, reach out to our customer support team at support@gavnic.com or call 9810724994.",
  },
  hi: {
    title: "Gavnic वापसी और धनवापसी नीति",
    intro: "Gavnic में, हम ग्राहक संतुष्टि को प्राथमिकता देते हैं। यदि आप अपनी खरीदारी से संतुष्ट नहीं हैं, तो हम एक सरल वापसी और धनवापसी प्रक्रिया प्रदान करते हैं। कृपया अपने अधिकारों और दायित्वों को समझने के लिए हमारी नीति को ध्यान से पढ़ें।",
    eligibilityTitle: "वापसी के लिए पात्रता",
    eligibilityContent: [
      "उत्पादों को डिलीवरी के 7 दिनों के भीतर लौटाना होगा।",
      "आइटम बिना उपयोग किए, बिना क्षतिग्रस्त और उनकी मूल पैकेजिंग में होने चाहिए।",
      "इलेक्ट्रॉनिक्स, सॉफ़्टवेयर और कस्टमाइज़ किए गए आइटम केवल दोषपूर्ण होने पर वापस किए जा सकते हैं।",
      "खरीद का प्रमाण (रसीद या ऑर्डर पुष्टि) आवश्यक है।",
    ],
    processTitle: "वापसी शुरू करने की प्रक्रिया",
    processContent: [
      "अपने Gavnic खाते में लॉग इन करें और 'ऑर्डर इतिहास' पृष्ठ पर जाएं।",
      "वह आइटम चुनें जिसे आप वापस करना चाहते हैं और 'वापसी अनुरोध' पर क्लिक करें।",
      "प्रदान किए गए वापसी शिपिंग लेबल को प्रिंट करें और पैकेज पर संलग्न करें।",
      "अपने नज़दीकी कूरियर सेंटर में पैकेज छोड़ें।",
      "एक बार प्राप्त और निरीक्षण किए जाने के बाद, आपकी धनवापसी 7-10 कार्यदिवसों के भीतर संसाधित की जाएगी।",
    ],
    refundTitle: "धनवापसी प्रक्रिया",
    refundContent: [
      "धनवापसी मूल भुगतान विधि में जारी की जाएगी।",
      "प्रसंस्करण समय बैंक के अनुसार भिन्न होता है लेकिन आमतौर पर 7-10 कार्यदिवस लगते हैं।",
      "शिपिंग शुल्क केवल तभी वापस किया जाएगा जब त्रुटि हमारी हो।",
    ],
    exceptionsTitle: "अपवाद और गैर-वापसी योग्य आइटम",
    exceptionsContent: [
      "वे उत्पाद जो ग्राहक की लापरवाही के कारण क्षतिग्रस्त हुए हैं।",
      "डाउनलोड करने योग्य सॉफ़्टवेयर और डिजिटल उत्पाद।",
      "गिफ्ट कार्ड और प्रचारक आइटम।",
    ],
    contactTitle: "मदद की आवश्यकता है?",
    contactContent: "यदि आपके कोई प्रश्न हैं, तो हमारी ग्राहक सहायता टीम से support@gavnic.com पर संपर्क करें या 9810724994 पर कॉल करें।",
  },
};

const ReturnPolicy = () => {
  const [language, setLanguage] = useState("en"); // Default: English

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900 px-6 md:px-16 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#9333EA]">{policyContent[language].title}</h1>
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="bg-[#9333EA] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#7b29c7] transition duration-300"
            >
              <MdOutlineLanguage className="text-xl" />
              {language === "en" ? "हिंदी" : "English"}
            </button>
          </div>

          <p className="text-lg text-gray-700 mb-6">{policyContent[language].intro}</p>

          <div className="space-y-6">
            {/* Sections */}
            {["eligibility", "process", "refund", "exceptions", "contact"].map((section) => (
              <div key={section}>
                <h2 className="text-2xl font-semibold text-[#9333EA] mb-2">
                  {policyContent[language][`${section}Title`]}
                </h2>
                <ul className="list-disc pl-6 text-gray-700">
                  {Array.isArray(policyContent[language][`${section}Content`])
                    ? policyContent[language][`${section}Content`].map((point, index) => (
                        <li key={index} className="mb-1">{point}</li>
                      ))
                    : <p>{policyContent[language][`${section}Content`]}</p>
                  }
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
