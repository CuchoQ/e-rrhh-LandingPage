import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FinalCTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
            {t("final_cta.title")}
          </h2>
          <p className="text-lg lg:text-xl text-slate-300">
            {t("final_cta.subtitle")}
          </p>
          <div className="pt-6">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-bold rounded-lg bg-primary hover:bg-[#0092C4] text-white flex items-center justify-center mx-auto gap-2 transition-colors border-none shadow-none"
              onClick={() => {
                window.location.href = 'mailto:comercial@e-rrhh.com.ar?subject=Quiero%20Instalar%20la%20Soluci%C3%B3n!';
              }}
            >
              {t("final_cta.btn_start")}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
