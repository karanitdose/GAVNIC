"use client";
import { useState } from "react";
import { FaGlobe, FaToggleOff, FaToggleOn } from "react-icons/fa";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

const PrivacyPolicy = () => {
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
              {language === "en" ? "Privacy Policy" : "गोपनीयता नीति"}
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
                Welcome to <span className="font-semibold">Gavnic</span>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>

              <h2 className="text-2xl font-semibold text-[#9333EA]">1. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul className="list-disc ml-6">
                <li>Personal Information (Name, Email, Address, Phone Number)</li>
                <li>Payment Details (Processed securely by third-party providers)</li>
                <li>Device & Browser Information (IP address, cookies, tracking data)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">2. How We Use Your Information</h2>
              <p>We use your data for:</p>
              <ul className="list-disc ml-6">
                <li>Order processing and customer support</li>
                <li>Personalized shopping experience</li>
                <li>Security & fraud prevention</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">3. Third-Party Sharing</h2>
              <p>
                We do not sell your data. However, we may share it with:
              </p>
              <ul className="list-disc ml-6">
                <li>Payment gateways (Razorpay, PayPal, Stripe)</li>
                <li>Delivery services (FedEx, BlueDart, DTDC)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">4. Security Measures</h2>
              <p>We implement strict security measures, including SSL encryption and two-factor authentication, to protect your information.</p>

              <h2 className="text-2xl font-semibold text-[#9333EA]">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-6">
                <li>Request access to your data</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing emails</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">6. Updates to Privacy Policy</h2>
              <p>We may update this policy periodically. Please check this page for any changes.</p>

              <p>
                If you have any questions, contact us at{" "}
                <span className="font-semibold">support@gavnic.com</span>.
              </p>
            </div>
          ) : (
            <div className="space-y-6 text-gray-700">
              <p>
                <span className="font-semibold">Gavnic</span> में आपका स्वागत है। आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह नीति बताती है कि हम आपकी जानकारी कैसे एकत्रित, उपयोग और सुरक्षित रखते हैं।
              </p>

              <h2 className="text-2xl font-semibold text-[#9333EA]">1. हम कौन-कौन सी जानकारी इकट्ठा करते हैं?</h2>
              <p>हम निम्नलिखित जानकारी एकत्र करते हैं:</p>
              <ul className="list-disc ml-6">
                <li>व्यक्तिगत जानकारी (नाम, ईमेल, पता, फ़ोन नंबर)</li>
                <li>भुगतान विवरण (तीसरे पक्ष के प्रदाताओं द्वारा सुरक्षित रूप से प्रसंस्कृत)</li>
                <li>डिवाइस और ब्राउज़र जानकारी (आईपी पता, कुकीज़, ट्रैकिंग डेटा)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">2. हम आपकी जानकारी का उपयोग कैसे करते हैं?</h2>
              <p>हम आपके डेटा का उपयोग इन उद्देश्यों के लिए करते हैं:</p>
              <ul className="list-disc ml-6">
                <li>ऑर्डर प्रोसेसिंग और ग्राहक सहायता</li>
                <li>व्यक्तिगत शॉपिंग अनुभव</li>
                <li>सुरक्षा और धोखाधड़ी रोकथाम</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">3. तृतीय-पक्ष साझेदारी</h2>
              <p>हम आपकी जानकारी नहीं बेचते, लेकिन निम्नलिखित सेवाओं के लिए साझा कर सकते हैं:</p>
              <ul className="list-disc ml-6">
                <li>भुगतान गेटवे (Razorpay, PayPal, Stripe)</li>
                <li>डिलीवरी सेवाएं (FedEx, BlueDart, DTDC)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">4. सुरक्षा उपाय</h2>
              <p>हम आपकी जानकारी की सुरक्षा के लिए SSL एन्क्रिप्शन और टू-फैक्टर ऑथेंटिकेशन जैसी मजबूत सुरक्षा उपाय लागू करते हैं।</p>

              <h2 className="text-2xl font-semibold text-[#9333EA]">5. आपके अधिकार</h2>
              <p>आपको निम्नलिखित अधिकार प्राप्त हैं:</p>
              <ul className="list-disc ml-6">
                <li>अपने डेटा तक पहुंच का अनुरोध करना</li>
                <li>अपना खाता और संबंधित डेटा हटाने का अनुरोध करना</li>
                <li>मार्केटिंग ईमेल से बाहर निकलना</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#9333EA]">6. नीति में अपडेट्स</h2>
              <p>हम इस नीति को समय-समय पर अपडेट कर सकते हैं। कृपया किसी भी परिवर्तन के लिए इस पृष्ठ को देखें।</p>

              <p>कोई प्रश्न होने पर <span className="font-semibold">support@gavnic.com</span> पर संपर्क करें।</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
