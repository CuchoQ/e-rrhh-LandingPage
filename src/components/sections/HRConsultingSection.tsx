import React from "react";
import { Activity, Target, Users, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HRConsultingSection() {
  const { t } = useTranslation();

  return (
    <section id="hr-consulting" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Header Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t("hr_consulting.title")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-prose">
              {t("hr_consulting.subtitle")}
            </p>
          </div>
          
          {/* Content Column (2x2 Grid) */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {/* Item 1 */}
              <div className="space-y-4 border-t border-slate-200 pt-6">
                <div className="w-10 h-10 rounded flex items-center justify-center bg-slate-100 text-slate-700">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t("hr_consulting.items.diagnosis.title")}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("hr_consulting.items.diagnosis.desc")}
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="space-y-4 border-t border-slate-200 pt-6">
                <div className="w-10 h-10 rounded flex items-center justify-center bg-slate-100 text-slate-700">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t("hr_consulting.items.planning.title")}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("hr_consulting.items.planning.desc")}
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="space-y-4 border-t border-slate-200 pt-6">
                <div className="w-10 h-10 rounded flex items-center justify-center bg-slate-100 text-slate-700">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t("hr_consulting.items.development.title")}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("hr_consulting.items.development.desc")}
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="space-y-4 border-t border-slate-200 pt-6">
                <div className="w-10 h-10 rounded flex items-center justify-center bg-slate-100 text-slate-700">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t("hr_consulting.items.processes.title")}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("hr_consulting.items.processes.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
