"use client"; // Added this because you use hooks (useLanguage)
import React from "react";
import { useLanguage } from "./Language";

export default function Home() {
  const { language } = useLanguage();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Johan.</h1>
      <p className="max-w-xl text-lg opacity-80">
        I’m building a platform for global manga & anime distribution — a fair system
        where creators earn more and fans gain better access.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/mvp"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          View MVP Demo
        </a>

        <a
          href="mailto:hardikdhull8022@gmail.com"
          className="px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-300 transition"
        >
          Contact Me
        </a>
        <a
          href="/roadmap"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          {language === "en" ? "Roadmap" : "ロードマップ"}
        </a>
      </div>

      <footer className="mt-20 text-sm opacity-50">
        © {new Date().getFullYear()} Johan — Project in Early Development
      </footer>
    </main>
  );
}