"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "jp";

const LanguageContext = createContext({
  language: "en" as Language,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () =>
    setLanguage(language === "en" ? "jp" : "en");

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
