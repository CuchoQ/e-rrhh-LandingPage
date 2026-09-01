import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import equipoImg from "../../assets/equipo.jpg";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-10 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 leading-[1.1]">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-prose">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base font-semibold rounded-lg bg-primary hover:bg-[#0092C4] text-white flex items-center justify-center gap-2 transition-colors shadow-none"
                onClick={() => {
                  window.location.href = "mailto:info@e-rrhh.com.ar?subject=Solicitud%20de%20reunión";
                }}
              >
                {t("hero.btn_meeting")}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors shadow-none"
                onClick={() => {
                  const el = document.getElementById("features");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.btn_services")}
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            <div className="rounded-xl overflow-hidden bg-slate-100 ring-1 ring-slate-900/5 shadow-xl shadow-slate-200/50">
              <ImageWithFallback
                src={equipoImg}
                alt={t("hero.img_alt")}
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto lg:h-[600px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
