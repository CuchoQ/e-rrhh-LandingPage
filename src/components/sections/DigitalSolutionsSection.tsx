import React from "react";
import { Check, Server, Cloud, Globe, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DigitalSolutionsSection() {
  const { t } = useTranslation();

  return (
    <section id="digital-solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark">
            {t("digital_solutions.title")}
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-dark/80">
            {t("digital_solutions.subtitle")}
          </p>
        </div>

        {/* Plataforma integral de gestión */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-10 text-dark">
            {t("digital_solutions.platform.title")}
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 bg-lightgray p-8 rounded-2xl">
            {(t("digital_solutions.platform.items", { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-primary shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-dark/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modelos de despliegue */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-10 text-dark">
            {t("digital_solutions.deployment.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-lightgray p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg border border-dark/5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/10">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-dark">{t("digital_solutions.deployment.items.local.title")}</h4>
              <p className="text-dark/80">{t("digital_solutions.deployment.items.local.desc")}</p>
            </div>
            
            <div className="bg-lightgray p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg border border-dark/5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/10">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-dark">{t("digital_solutions.deployment.items.self_hosted.title")}</h4>
              <p className="text-dark/80">{t("digital_solutions.deployment.items.self_hosted.desc")}</p>
            </div>

            <div className="bg-lightgray p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg border border-dark/5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/10">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-dark">{t("digital_solutions.deployment.items.saas.title")}</h4>
              <p className="text-dark/80">{t("digital_solutions.deployment.items.saas.desc")}</p>
            </div>
          </div>
        </div>

        {/* Implementación y acompañamiento */}
        <div>
          <div className="max-w-4xl mx-auto text-center bg-primary p-10 rounded-3xl shadow-xl text-white">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-white/20 backdrop-blur-sm">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              {t("digital_solutions.implementation.title")}
            </h3>
            <p className="text-xl opacity-90 leading-relaxed">
              {t("digital_solutions.implementation.desc")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
