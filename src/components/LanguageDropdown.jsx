import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import i18n from 'i18next'; // Import i18n instance

const languages = [
  { code: 'EN', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'FR', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'DE', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'HI', label: 'हिन्दी', flag: 'https://flagcdn.com/w40/in.png' },
  { code: 'KA', label: 'ಕನ್ನಡ', flag: 'https://flagcdn.com/w40/in.png' }
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.code.toLowerCase()); // Changes the language
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md shadow-sm hover:bg-gray-100 min-w-[90px]"
      >
        <img src={selectedLang.flag} alt={selectedLang.code} className="w-5 h-4 object-cover rounded-sm" />
        <span className="font-semibold">{selectedLang.code}</span>
        {isOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
      </button>

      {isOpen && (
        <ul className="absolute right-0 z-50 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-40">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              <img src={lang.flag} alt={lang.code} className="w-5 h-4 object-cover rounded-sm" />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
