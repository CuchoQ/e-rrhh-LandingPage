import React from "react";
import { useTranslation } from "react-i18next";

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-20 lg:py-32 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {t("features.title")}
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
          {t("features.subtitle")}
        </p>
      </div>
    </section>
  );
}
