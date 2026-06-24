import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Bot } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import equipoImg from "../../assets/equipo.jpg";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 pb-10 lg:pt-10 lg:pb-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-dark">
                {t("hero.title")}
              </h1>
              <p className="text-xl leading-relaxed text-dark/80">
                {t("hero.subtitle")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@e-rrhh.com.ar?subject=Solicitud%20de%20demo">
                <Button 
                  size="lg" 
                  className="text-white px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg bg-primary hover:bg-[#0092C4] hover:-translate-y-[1px]"
                >
                  {t("hero.btn_services")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg transition-all duration-300 border-primary text-primary hover:bg-primary/10"
                onClick={() => {
                  const el = document.getElementById("features");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.btn_meeting")}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl p-8 flex items-center justify-center bg-primary/10">
              <ImageWithFallback
                src={equipoImg}
                alt={t("hero.img_alt")}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-lg bg-primary">
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
