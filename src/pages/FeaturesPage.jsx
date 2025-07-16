import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const suggestions = [
  'التخطيط المسبق',
  'التوجيه الذكي',
  'التنبيهات اللحظية',
  'تتبع الأمتعة',
  'لوحة تحكم الطاقم',
  'البلاغ الفوري',
];

const responses = {
  'التخطيط المسبق': 'يمكننا مساعدتك في إعداد خطة ذكية لرحلتك حسب حالتك الصحية وتفضيلاتك.',
  'التوجيه الذكي': 'سأرشدك خطوة بخطوة باستخدام الإشعارات الصوتية أو البصرية حسب حالتك.',
  'التنبيهات اللحظية': 'سوف تستقبل تنبيهات فورية في حال وجود تغييرات في البوابة أو حالة الرحلة.',
  'تتبع الأمتعة': 'سوف أساعدك في تتبع أمتعتك لحظيًا عبر البلوتوث وبيانات الرحلة.',
  'لوحة تحكم الطاقم': 'سوف أشارك حالتك مع الطاقم لمتابعتك وتسهيل حركتك داخل المطار.',
  'البلاغ الفوري': 'يمكنك إرسال بلاغ فوري لأي طارئ وسنقوم بإشعار الفريق المختص فورًا.',
};

const Features = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'مرحبًا! كيف يمكنني مساعدتك اليوم؟ اختر من الاقتراحات أو اكتب سؤالك.' },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last.type === 'bot') speak(last.text);
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (msg) => {
    setMessages((prev) => [...prev, { type: 'user', text: msg }]);
    setTimeout(() => {
      const reply = responses[msg] || 'شكرًا لك! سأقوم بتحليل رسالتك والرد قريبًا.';
      setMessages((prev) => [...prev, { type: 'bot', text: reply }]);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-white to-blue-50 px-4 md:px-12 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        {/* ✅ اقتراحات */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {suggestions.map((s, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(s)}
              className="bg-gray-200 text-sm px-3 py-1 rounded-full hover:bg-gray-300"
            >
              {s}
            </button>
          ))}
        </div>

        {/* ✅ شاشة دردشة كاملة */}
        <div className="bg-white rounded-xl shadow-lg w-full h-[600px] flex flex-col">
          <div className="p-4 overflow-y-auto flex-1 space-y-3">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-right max-w-[80%] p-3 rounded-lg text-sm break-words ${{
                  user: 'ml-auto bg-blue-100 text-blue-900',
                  bot: 'mr-auto bg-gray-100 text-gray-800',
                }[msg.type]}`}
              >
                {msg.text}
              </motion.div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* ✅ حقل الإدخال في الأسفل */}
          <form
            onSubmit={handleSubmit}
            className="border-t px-4 py-3 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب سؤالك..."
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Features;