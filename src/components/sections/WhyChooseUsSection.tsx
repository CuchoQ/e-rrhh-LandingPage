import React from "react";
import { Card, CardContent } from "../ui/card";
import { Award, Compass, Puzzle, Cpu, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyChooseUsSection() {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      titleKey: "why_choose_us.items.experience.title",
      descKey: "why_choose_us.items.experience.desc",
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      titleKey: "why_choose_us.items.vision.title",
      descKey: "why_choose_us.items.vision.desc",
    },
    {
      icon: <Puzzle className="w-8 h-8 text-primary" />,
      titleKey: "why_choose_us.items.adapted.title",
      descKey: "why_choose_us.items.adapted.desc",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      titleKey: "why_choose_us.items.technology.title",
      descKey: "why_choose_us.items.technology.desc",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      titleKey: "why_choose_us.items.support.title",
      descKey: "why_choose_us.items.support.desc",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark">
            {t("why_choose_us.title")}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <Card key={idx} className="transition-all duration-300 hover:shadow-lg border-dark/10 bg-white h-full">
              <CardContent className="p-8 text-left space-y-6 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark">{t(item.titleKey)}</h3>
                <p className="text-dark/80 flex-grow">
                  {t(item.descKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
