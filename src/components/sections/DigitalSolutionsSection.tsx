import React from "react";
import mockupImg from "../../assets/mockup.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export default function DigitalSolutionsSection() {
  const { t } = useTranslation();

  return (
    <section id="digital-solutions" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t("digital_solutions.title")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-prose">
              {t("digital_solutions.subtitle")}
            </p>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="rounded-xl overflow-hidden border border-slate-200/60 shadow-2xl shadow-slate-300/40 bg-white ring-1 ring-slate-900/5">
              <ImageWithFallback
                src={mockupImg}
                alt="Dashboard Mockup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
