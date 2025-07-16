import React from 'react';

const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url('/pexels-mayra-gabriel-oficial-1156882-4681654.jpg')` }}
    >
      {/* المحتوى الرئيسي */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">MRAFIQ+</h1>

          <input
            type="email"
            placeholder="أدخل الإيميل"
            className="w-full mb-4 px-4 py-3 rounded-lg border text-right border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            className="w-full mb-4 px-4 py-3 rounded-lg border text-right border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold mb-4">
            دخول
          </button>

          <div className="flex justify-between mb-4 gap-2">
            <button className="w-1/2 border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2">
              <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" />
              Google
            </button>
            <button className="w-1/2 border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2">
              <img src="https://img.icons8.com/ios-filled/20/3b5998/facebook--v1.png" alt="Facebook" />
              Facebook
            </button>
          </div>

          <div className="text-sm text-gray-700">
            <a href="#" className="text-blue-600 font-medium hover:underline">هل نسيت كلمة المرور؟</a>
            <span className="mx-1">|</span>
            <a href="#" className="text-blue-600 font-medium hover:underline">لا تملك حسابًا؟</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
