import React from "react";
import { Settings, ShieldCheck, PieChart, Cpu, Smartphone, GitMerge } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CoreFeaturesSection() {
  const { t } = useTranslation();
  
  // We extract the items directly from the existing JSON
  const items = t("digital_solutions.platform.items", { returnObjects: true }) as string[];

  // Map icons to the 6 items sequentially
  const icons = [
    <Settings className="w-6 h-6 text-primary" />,
    <ShieldCheck className="w-6 h-6 text-primary" />,
    <PieChart className="w-6 h-6 text-primary" />,
    <Cpu className="w-6 h-6 text-primary" />,
    <Smartphone className="w-6 h-6 text-primary" />,
    <GitMerge className="w-6 h-6 text-primary" />
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Funcionalidades Principales
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex space-x-4 border-t border-slate-200 pt-6">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                {icons[idx]}
              </div>
              <p className="text-slate-700 leading-relaxed font-medium text-lg pt-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
