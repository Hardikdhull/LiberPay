"use client";
import { useLanguage } from "../Language";

export default function Roadmap() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Project Roadmap",
      phases: [
        "Phase 1: MVP Development",
        "Phase 2: UX/UI Improvements",
        "Phase 3: Secure Partnerships + JETRO Validation",
        "Phase 4: Early Creator Onboarding",
        "Phase 5: Beta Launch",
      ],
    },
    jp: {
      title: "開発ロードマップ",
      phases: [
        "フェーズ1：MVP 開発",
        "フェーズ2：UX／UI 改善",
        "フェーズ3：パートナーシップ + JETRO 連携",
        "フェーズ4：クリエイター事前参加",
        "フェーズ5：ベータ版ローンチ",
      ],
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">{text[language].title}</h1>

      <ul className="space-y-4 text-lg opacity-90">
        {text[language].phases.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </main>
  );
}
