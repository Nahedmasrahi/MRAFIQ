// src/pages/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">تواصل معنا</h2>
      <form className="space-y-4">
        <input className="w-full p-3 border rounded-md" type="text" placeholder="الاسم الكامل" />
        <input className="w-full p-3 border rounded-md" type="email" placeholder="البريد الإلكتروني" />
        <textarea className="w-full p-3 border rounded-md" rows="4" placeholder="رسالتك"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">إرسال</button>
      </form>
    </div>
  );
};

export default ContactPage;
