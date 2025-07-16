// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-white">
      {/* خلفية الفيديو */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/6700091-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>

        {/* تغميق الفيديو */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

        {/* المحتوى الرئيسي */}
        <div className="h-full flex flex-col justify-center items-center text-center px-6 z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            مرحبًا بك في <span className="text-white">MRAFIQ+</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-6 animate-fade-in-delay">
            منصتك الذكية لتجربة سفر مخصصة وآمنة لذوي الاحتياجات داخل المطارات الخليجية.
          </p>
          <Link
            to="/features"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white transition"
          >
            استعرض المميزات
          </Link>
        </div>
      </div>

      {/* سكشن ثاني احترافي بعد الفيديو */}
      <section className="bg-white py-20 px-6 text-center text-gray-800 animate-fade-in-up">
        <h3 className="text-3xl font-bold mb-4">استكشف خدماتنا الذكية</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          يقدّم MRAFIQ+ خدمات متكاملة تساعد ذوي الاحتياجات على التنقل في المطارات بذكاء وسلاسة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link to="/features" className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">المميزات</h4>
            <p className="text-sm text-gray-600">عرض مزايا مرافِق الذكي بالكامل.</p>
          </Link>
          <Link to="/dashboard" className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">لوحة التحكم</h4>
            <p className="text-sm text-gray-600">تحكّم بالخدمات والمتابعة بسهولة.</p>
          </Link>
          <Link to="/about" className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">

            <h4 className="text-xl font-semibold mb-2 text-blue-700">تواصل معنا</h4>
            <p className="text-sm text-gray-600">فريق الدعم بانتظارك لأي مساعدة.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
