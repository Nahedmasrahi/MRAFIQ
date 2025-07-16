import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const hideOnRoutes = ['/login', '/dashboard','/about','/features'];
  
  // نتحقق إذا كان المسار الحالي ضمن الصفحات التي نريد إخفاء الفوتر فيها
  if (hideOnRoutes.includes(location.pathname)) return null;

  return (
    <footer className="bg-blue-600 text-white text-center py-4 text-sm mt-16 shadow-inner">
      © 2025 <span className="font-semibold hover:underline hover:text-gray-200 transition duration-300 cursor-pointer">MRAFIQ+</span>. جميع الحقوق محفوظة.
    </footer>
  );
};

export default Footer;

