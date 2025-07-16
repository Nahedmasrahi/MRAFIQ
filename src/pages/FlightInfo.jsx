// src/pages/FlightInfo.jsx
import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaClock, FaDoorOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const FlightInfo = () => {
  const flight = {
    number: "XY123",
    airline: "الخطوط السعودية",
    departureTime: "3:30 مساءً",
    arrivalTime: "6:15 مساءً",
    gate: "B12",
    status: "في الموعد ✈️",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white pt-28 px-4 text-right">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 text-gray-800">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 flex items-center justify-center gap-2">
          ✈️ معلومات الرحلة
        </h1>

        <div className="space-y-4">
          <InfoRow label="رقم الرحلة" value={flight.number} icon={<FaPlaneDeparture />} />
          <InfoRow label="شركة الطيران" value={flight.airline} icon={<FaPlaneArrival />} />
          <InfoRow label="وقت الإقلاع" value={flight.departureTime} icon={<FaClock />} />
          <InfoRow label="وقت الوصول" value={flight.arrivalTime} icon={<FaClock />} />
          <InfoRow label="البوابة" value={flight.gate} icon={<FaDoorOpen />} />
          <InfoRow label="الحالة" value={flight.status} icon={<FaClock />} highlight />
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, icon, highlight }) => (
  <motion.div
    className={`flex items-center justify-between border rounded-md p-3 ${highlight ? "bg-green-100 font-semibold" : "bg-gray-50"}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-center gap-2 text-blue-600">
      {icon}
      <span>{label}</span>
    </div>
    <span>{value}</span>
  </motion.div>
);

export default FlightInfo;
