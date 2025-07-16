import { useEffect } from "react";

const speak = (text) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    window.speechSynthesis.speak(utterance);
  }
};

const useBlindAssistant = () => {
  useEffect(() => {
    const access = localStorage.getItem("user_accessibility");

    if (access === "blind") {
      speak("مرحبًا بك في موقع مرافق بلس. أنا هنا لمساعدتك. استخدم زر التوجيه أو لوحة التحكم للتنقل.");
    }
  }, []);
};

export default useBlindAssistant;
