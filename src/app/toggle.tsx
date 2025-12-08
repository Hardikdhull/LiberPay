"use client";
import { useLanguage } from "./Language";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
    >
      {language === "en" ? "日本語" : "English"}
    </button>
  );
}
