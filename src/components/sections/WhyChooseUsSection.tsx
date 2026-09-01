import React from "react";
import { Award, Compass, Puzzle, Cpu, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyChooseUsSection() {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Award className="w-6 h-6 text-slate-700" />,
      titleKey: "why_choose_us.items.experience.title",
      descKey: "why_choose_us.items.experience.desc",
    },
    {
      icon: <Compass className="w-6 h-6 text-slate-700" />,
      titleKey: "why_choose_us.items.vision.title",
      descKey: "why_choose_us.items.vision.desc",
    },
    {
      icon: <Puzzle className="w-6 h-6 text-slate-700" />,
      titleKey: "why_choose_us.items.adapted.title",
      descKey: "why_choose_us.items.adapted.desc",
    },
    {
      icon: <Cpu className="w-6 h-6 text-slate-700" />,
      titleKey: "why_choose_us.items.technology.title",
      descKey: "why_choose_us.items.technology.desc",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-slate-700" />,
      titleKey: "why_choose_us.items.support.title",
      descKey: "why_choose_us.items.support.desc",
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t("why_choose_us.title")}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col space-y-4 border-t border-slate-200 pt-6 ${idx === 3 || idx === 4 ? 'lg:col-span-1' : ''}`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{t(item.titleKey)}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
