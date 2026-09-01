import React from "react";
import { Server, Cloud, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DeploymentModelsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight border-b border-slate-200 pb-6">
            {t("digital_solutions.deployment.title")}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{t("digital_solutions.deployment.items.local.title")}</h4>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{t("digital_solutions.deployment.items.local.desc")}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{t("digital_solutions.deployment.items.self_hosted.title")}</h4>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{t("digital_solutions.deployment.items.self_hosted.desc")}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{t("digital_solutions.deployment.items.saas.title")}</h4>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{t("digital_solutions.deployment.items.saas.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
