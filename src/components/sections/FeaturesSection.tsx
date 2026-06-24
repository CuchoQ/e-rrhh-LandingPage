import React from "react";
import { Card, CardContent } from "../ui/card";
import { Users, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark">
            {t("features.title")}
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-dark/80">
            {t("features.subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="transition-all duration-300 hover:shadow-lg border-dark/20 h-full">
            <CardContent className="p-8 text-center space-y-6 flex flex-col items-center justify-center h-full">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-primary/10">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-dark">{t("features.items.consulting.title")}</h3>
              <p className="text-lg text-dark/80">
                {t("features.items.consulting.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-dark/20 h-full">
            <CardContent className="p-8 text-center space-y-6 flex flex-col items-center justify-center h-full">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-primary/10">
                <Monitor className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-dark">{t("features.items.digital.title")}</h3>
              <p className="text-lg text-dark/80">
                {t("features.items.digital.desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
