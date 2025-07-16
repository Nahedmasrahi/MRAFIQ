import React, { useState } from 'react';

const AccessibilitySettings = () => {
  const [selected, setSelected] = useState('');

  const handleSelect = (type) => {
    setSelected(type);
    localStorage.setItem('user_accessibility', type);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 text-center">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">تخصيص تجربة الوصول</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { label: "كفيف", value: "blind" },
          { label: "ضعيف سمع", value: "deaf" },
          { label: "كرسي متحرك", value: "wheelchair" },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`p-4 rounded-lg shadow ${
              selected === option.value
                ? 'bg-blue-600 text-white'
                : 'bg-white hover:bg-blue-100'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {selected && (
        <p className="mt-6 text-green-700 font-semibold">
          ✅ تم حفظ التخصيص كـ: {selected}
        </p>
      )}
    </div>
  );
};

export default AccessibilitySettings;
