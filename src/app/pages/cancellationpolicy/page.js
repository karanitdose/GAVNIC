"use client";
import { useState } from "react";
import { FaGlobe, FaToggleOff, FaToggleOn } from "react-icons/fa";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

const CancellationPolicy = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#9333EA]">
              {language === "en" ? "Cancellation Policy" : "रद्द करने की नीति"}
            </h1>
            <button onClick={toggleLanguage} className="flex items-center gap-2 text-[#9333EA]">
              <FaGlobe />
              {language === "en" ? <FaToggleOff size={24} /> : <FaToggleOn size={24} />}
              {language === "en" ? "English" : "हिन्दी"}
            </button>
          </div>

          {language === "en" ? (
            <div className="space-y-6 text-gray-700">
              <p>
                At <span className="font-semibold">Gavnic</span>, we strive to ensure a smooth shopping experience. If you wish to cancel an order, please read our cancellation policy carefully.
              </p>

              <h2 className="text-2xl font-semibold text-[#9333EA]">1. Order Cancellation Before Shipment</h2>
              <p>You can cancel your order before it is shipped. To request a cancellation:</p>
              <ul className="list-disc ml-6">
                <li>Go to 'My Orders' and click on 'Cancel Order'.</li>
                <li>Contact our support team at <span className="font-semibold">support@gavnic.com</span>.</li>
                <li>Refunds (if applicable) will be processed within 5-7 business days.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">2. Cancellation After Shipment</h2>
              <p>Once your order has been shipped, it cannot be canceled. However, you may initiate a return upon delivery.</p>

              <h2 className="text-2xl font-semibold text-[#9333EA]">3. Refund Processing</h2>
              <p>Refunds for canceled orders are processed as follows:</p>
              <ul className="list-disc ml-6">
                <li>Prepaid orders: Refund will be credited to the original payment method.</li>
                <li>COD orders: No refund applicable, as no payment was made in advance.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">4. Exceptions</h2>
              <p>We do not accept cancellations for:</p>
              <ul className="list-disc ml-6">
                <li>Customized or special-order products.</li>
                <li>Orders already in the delivery process.</li>
              </ul>

              <p>For any queries, contact us at <span className="font-semibold">support@gavnic.com</span>.</p>
            </div>
          ) : (
            <div className="space-y-6 text-gray-700">
              <p>
                <span className="font-semibold">Gavnic</span> में, हम आपको एक सहज खरीदारी अनुभव प्रदान करने का प्रयास करते हैं। यदि आप किसी ऑर्डर को रद्द करना चाहते हैं, तो कृपया हमारी नीति को ध्यानपूर्वक पढ़ें।
              </p>

              <h2 className="text-2xl font-semibold text-[#9333EA]">1. शिपमेंट से पहले ऑर्डर रद्द करना</h2>
              <p>यदि आपका ऑर्डर अभी शिप नहीं हुआ है, तो आप इसे रद्द कर सकते हैं। रद्द करने के लिए:</p>
              <ul className="list-disc ml-6">
                <li>'माय ऑर्डर्स' में जाएं और 'ऑर्डर रद्द करें' पर क्लिक करें।</li>
                <li>हमारे सपोर्ट टीम से <span className="font-semibold">support@gavnic.com</span> पर संपर्क करें।</li>
                <li>रिफंड (यदि लागू हो) 5-7 कार्यदिवसों में संसाधित किया जाएगा।</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">2. शिपमेंट के बाद ऑर्डर रद्द करना</h2>
              <p>यदि ऑर्डर पहले ही शिप कर दिया गया है, तो इसे रद्द नहीं किया जा सकता। हालांकि, आप डिलीवरी के बाद रिटर्न शुरू कर सकते हैं।</p>

              <h2 className="text-2xl font-semibold text-[#9333EA]">3. रिफंड प्रोसेसिंग</h2>
              <p>रद्द किए गए ऑर्डर्स के लिए रिफंड निम्नलिखित तरीके से किया जाएगा:</p>
              <ul className="list-disc ml-6">
                <li>प्रीपेड ऑर्डर: राशि मूल भुगतान विधि में वापस कर दी जाएगी।</li>
                <li>COD ऑर्डर: रिफंड लागू नहीं होगा, क्योंकि कोई अग्रिम भुगतान नहीं किया गया था।</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">4. अपवाद</h2>
              <p>हम निम्नलिखित मामलों में रद्दीकरण स्वीकार नहीं करते:</p>
              <ul className="list-disc ml-6">
                <li>कस्टमाइज़ किए गए या विशेष-आदेशित उत्पाद।</li>
                <li>जो ऑर्डर पहले से डिलीवरी प्रक्रिया में हैं।</li>
              </ul>

              <p>किसी भी प्रश्न के लिए, कृपया <span className="font-semibold">support@gavnic.com</span> पर संपर्क करें।</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CancellationPolicy;
