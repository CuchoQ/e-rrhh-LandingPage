import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FinalCTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            {t("final_cta.title")}
          </h2>
          <p className="text-xl text-white/90">
            {t("final_cta.subtitle")}
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-3 transition-all duration-300 hover:shadow-lg bg-white text-primary hover:bg-lightgray hover:-translate-y-[2px]"
            onClick={() => {
              window.location.href = 'mailto:comercial@e-rrhh.com.ar?subject=Quiero%20Instalar%20la%20Soluci%C3%B3n!';
            }}
          >
            {t("final_cta.btn_start")}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
