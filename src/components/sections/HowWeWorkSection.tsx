import React from "react";
import { useTranslation } from "react-i18next";

export default function HowWeWorkSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {t("how_it_works.implementation_title")}
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Un proceso estructurado para asegurar el éxito en la transformación de tu gestión de personas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-slate-800"></div>

          <div className="relative space-y-6">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-2xl font-bold text-white mx-auto relative z-10 shadow-xl">
              1
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">{t("how_it_works.implementation.step1.title")}</h4>
              <p className="text-slate-400 leading-relaxed text-lg">{t("how_it_works.implementation.step1.desc")}</p>
            </div>
          </div>
          
          <div className="relative space-y-6">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-2xl font-bold text-white mx-auto relative z-10 shadow-xl">
              2
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">{t("how_it_works.implementation.step2.title")}</h4>
              <p className="text-slate-400 leading-relaxed text-lg">{t("how_it_works.implementation.step2.desc")}</p>
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary border-4 border-slate-900 flex items-center justify-center text-2xl font-bold text-white mx-auto relative z-10 shadow-xl shadow-primary/20">
              3
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">{t("how_it_works.implementation.step3.title")}</h4>
              <p className="text-slate-400 leading-relaxed text-lg">{t("how_it_works.implementation.step3.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
