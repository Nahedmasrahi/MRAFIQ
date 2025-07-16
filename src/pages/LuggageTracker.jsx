import React from "react";
import { FaSuitcaseRolling, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const LuggageTracker = () => {
  const steps = [
    { icon: <FaSuitcaseRolling />, text: "تم استلام الحقيبة", time: "10:45 صباحًا" },
    { icon: <FaMapMarkerAlt />, text: "جاري النقل للعربة", time: "10:50 صباحًا", current: true },
    { icon: <FaMapMarkerAlt />, text: "تم الوصول إلى البوابة", time: "11:00 صباحًا" },
    { icon: <FaClock />, text: "بانتظار الصعود للطائرة", time: "11:15 صباحًا" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-28 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6 flex justify-center items-center gap-2">
          🧳 تتبع الأمتعة
        </h1>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                step.current ? "bg-blue-100 border-blue-400" : "bg-gray-50 border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-blue-600 text-xl">{step.icon}</div>
              <div className="text-right">
                <p className={`font-medium ${step.current ? "text-blue-800" : "text-gray-800"}`}>
                  {step.text}
                </p>
                <p className="text-sm text-gray-500">{step.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuggageTracker;
