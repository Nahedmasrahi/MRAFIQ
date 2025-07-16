// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const userName = localStorage.getItem("userName");

  const navLinks = [
    { label: "الرئيسية", path: "/" },
    { label: "تواصل معنا", path: "/about" },
    { label: "المميزات", path: "/features" },
    { label: "لوحة التحكم", path: "/dashboard" },
    //{ label: "تواصل معنا", path: "/contact" },
  ];

  return (
    <header
      className={`w-full z-20 px-6 py-4 flex justify-between items-center transition-all duration-500
      ${isHome ? 'absolute top-0 left-0 text-white' : 'bg-white shadow-md text-black fixed top-0'}`}
    >
      <h1 className="text-2xl font-bold">MRAFIQ+</h1>

      <nav className="space-x-6 rtl:space-x-reverse font-medium hidden md:flex items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="relative group overflow-hidden"
          >
            <span className="transition duration-300 group-hover:text-blue-400">
              {link.label}
            </span>
            <span
              className={`absolute left-0 bottom-0 h-[2px] ${
                isHome ? 'bg-white' : 'bg-gray-500'
              } w-0 group-hover:w-full transition-all duration-500`}
            />
          </Link>
        ))}

        {/* تسجيل الدخول أو الترحيب */}
        {userName ? (
          <span className="ml-4 text-sm font-semibold text-blue-500"> {userName}</span>
        ) : (
          <Link
            to="/login"
            className={`ml-4 px-4 py-2 rounded-md font-semibold text-sm shadow hover:shadow-lg transition 
            ${isHome ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            تسجيل الدخول
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

