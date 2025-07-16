import React from 'react';

const HelpRequest = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">طلب مساعدة</h1>
        <p className="text-gray-600 mb-6">
          يمكنك طلب مساعدة فورية من طاقم المطار لتسهيل تجربتك.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
          طلب الآن
        </button>
      </div>
    </div>
  );
};

export default HelpRequest;
