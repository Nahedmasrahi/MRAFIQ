import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🚀 تم إرسال رسالتك بنجاح!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28 px-6 text-center text-gray-800">
      {/* ✅ حركة النص عند الدخول */}
      <motion.h1
        className="text-3xl font-bold text-blue-700 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        عن <span className="text-blue-900">MRAFIQ+</span>
      </motion.h1>

      <motion.p
        className="max-w-3xl mx-auto leading-relaxed text-lg mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        هو نظام رقمي ذكي متكامل يُسهّل تجربة السفر داخل المطارات السعودية والخليجية، 
        خاصةً لذوي الاحتياجات. MRAFIQ+ عبر تخطيط مسبق، توجيه متعدد الحواس، لوحة تشغيلية للطواقم، 
        وتنبيهات لحظية. يهدف إلى تقديم تجربة سفر مخصصة وآمنة باستخدام أحدث التقنيات.
      </motion.p>

      {/* ✅ بوكس تواصل احترافي */}
      <motion.div
        className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-lg text-right border border-blue-100"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          📬 تواصل معنا
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="الاسم"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <textarea
            rows="4"
            placeholder="رسالتك"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 px-6 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            إرسال
          </button>
        </form>
      </motion.div>

      <ToastContainer />
    </div>
  );
};

export default About;
