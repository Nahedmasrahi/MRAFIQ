import React, { useEffect } from "react";
import MapSection from "../components/MapSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ دالة القراءة الصوتية (تعطيلها إذا المستخدم deaf)
const speak = (text) => {
  const access = localStorage.getItem("user_accessibility");
  if (access === "deaf") return;

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    window.speechSynthesis.speak(utterance);
  }
};

const DashboardPage = () => {
  const access = localStorage.getItem("user_accessibility");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (access !== "deaf") {
        toast.info("✈️ تنبيه: اقترب موعد رحلتك، يرجى التوجه للبوابة 14", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }

      if (access === "blind") {
        speak(
          "مرحبًا بك في لوحة التحكم. اقترب موعد رحلتك. يرجى التوجه للبوابة ١٤."
        );
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [access]);

  const handleHelpRequest = () => {
    toast.success("✅ تم إرسال طلب المساعدة بنجاح!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });

    // ✅ اهتزاز بسيط إذا كان المستخدم من فئة ضعاف السمع (اختياري)
    if (access === "deaf" && "vibrate" in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
  };

  const boxes = [
    {
      title: "طلب مساعدة",
      desc: "احصل على دعم فوري في المطار",
      action: handleHelpRequest,
    },
    {
      title: "تتبع الأمتعة",
      desc: "تابع موقع حقيبتك لحظيًا",
      link: "/luggage",
    },
    {
      title: "تفضيلات الوصول",
      desc: "اختر نوع الإعاقة لتحسين تجربتك داخل المطار",
      link: "/accessibility-settings",
    },
    {
      title: "معلومات الرحلة",
      desc: "تفاصيل المغادرة والبوابة والوقت",
      link: "/flight-info",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/david-vincent-villavicencio-JuFuokwfaUU-unsplash.jpg')",
      }}
    >
      <div className="bg-black/50 min-h-screen pt-28">
        <div className="container mx-auto px-4 text-center text-white">
          {access === "wheelchair" && (
            <a
              href="#main-content"
              className="block text-yellow-400 underline mb-4 text-lg font-semibold"
            >
              ⏩ تخطِ إلى المحتوى الرئيسي
            </a>
          )}

          {access === "deaf" && (
            <div className="bg-yellow-100 text-yellow-800 font-semibold border border-yellow-400 px-4 py-2 rounded mb-6 shadow">
              🔇 تم تفعيل الوضع البصري لذوي ضعف السمع. ستظهر التنبيهات هنا.
            </div>
          )}

          <h1 className="text-3xl font-bold mb-6 text-blue-200">
            👋 مرحبًا بك، ضيفنا الكريم
          </h1>

          {access === "blind" && (
            <button
              onClick={() =>
                speak(
                  "مرحبًا بك في لوحة التحكم. يمكنك طلب المساعدة، تتبع الأمتعة، معرفة معلومات الرحلة، أو تعديل تفضيلات الوصول."
                )
              }
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded mb-8"
            >
              🔊 قراءة الصفحة صوتيًا
            </button>
          )}

          <div
            id="main-content"
            className={`${
              access === "wheelchair"
                ? "flex flex-col gap-8 mb-10"
                : "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            }`}
          >
            {boxes.map((item, index) => {
              const boxContent = (
                <motion.div
                  key={index}
                  className={`rounded-lg p-6 shadow-lg bg-white/80 backdrop-blur-md text-black text-right hover:shadow-2xl transition duration-300 ${
                    access === "wheelchair" ? "text-lg p-8" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h2 className="text-xl font-bold text-blue-700 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{item.desc}</p>

                  {item.action ? (
                    <button
                      onClick={item.action}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow"
                    >
                      🔔 اطلب المساعدة الآن
                    </button>
                  ) : (
                    <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow">
                      المزيد
                    </span>
                  )}
                </motion.div>
              );

              return item.link ? (
                <Link to={item.link} key={index}>
                  {boxContent}
                </Link>
              ) : (
                <div key={index}>{boxContent}</div>
              );
            })}
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              خريطة مطار الملك خالد الدولي (RUH)
            </h2>
            <MapSection />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DashboardPage;
