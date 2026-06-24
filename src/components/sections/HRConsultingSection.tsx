import React from "react";
import { Card, CardContent } from "../ui/card";
import { Activity, Target, Users, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HRConsultingSection() {
  const { t } = useTranslation();

  return (
    <section id="hr-consulting" className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark">
            {t("hr_consulting.title")}
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-dark/80">
            {t("hr_consulting.subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="transition-all duration-300 hover:shadow-lg border-dark/10 h-full bg-white">
            <CardContent className="p-8 text-left space-y-4 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark">{t("hr_consulting.items.diagnosis.title")}</h3>
              <p className="text-dark/80">
                {t("hr_consulting.items.diagnosis.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-dark/10 h-full bg-white">
            <CardContent className="p-8 text-left space-y-4 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark">{t("hr_consulting.items.planning.title")}</h3>
              <p className="text-dark/80">
                {t("hr_consulting.items.planning.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-dark/10 h-full bg-white">
            <CardContent className="p-8 text-left space-y-4 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark">{t("hr_consulting.items.development.title")}</h3>
              <p className="text-dark/80">
                {t("hr_consulting.items.development.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-dark/10 h-full bg-white">
            <CardContent className="p-8 text-left space-y-4 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark">{t("hr_consulting.items.processes.title")}</h3>
              <p className="text-dark/80">
                {t("hr_consulting.items.processes.desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
