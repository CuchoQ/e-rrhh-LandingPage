import React from "react";
import { useTranslation } from "react-i18next";

export default function HowItWorksSection() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark">
            {t("how_it_works.title")}
          </h2>
          <p className="text-xl text-dark/80">
            {t("how_it_works.subtitle")}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-10 text-dark">{t("how_it_works.deployment_title")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-2 text-primary">{t("how_it_works.deployment.local.title")}</h4>
              <p className="text-gray-700 mb-2">{t("how_it_works.deployment.local.desc")}</p>
              <p className="text-sm text-gray-500">{t("how_it_works.deployment.local.note")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-2 text-primary">{t("how_it_works.deployment.self_hosted.title")}</h4>
              <p className="text-gray-700 mb-2">{t("how_it_works.deployment.self_hosted.desc")}</p>
              <p className="text-sm text-gray-500">{t("how_it_works.deployment.self_hosted.note")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-2 text-primary">{t("how_it_works.deployment.saas.title")}</h4>
              <p className="text-gray-700 mb-2">{t("how_it_works.deployment.saas.desc")}</p>
              <p className="text-sm text-gray-500">{t("how_it_works.deployment.saas.note")}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-10 text-dark">{t("how_it_works.implementation_title")}</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg bg-primary">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-semibold text-dark">{t("how_it_works.implementation.step1.title")}</h4>
              <p className="text-gray-700">{t("how_it_works.implementation.step1.desc")}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg bg-dark">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-semibold text-dark">{t("how_it_works.implementation.step2.title")}</h4>
              <p className="text-gray-700">{t("how_it_works.implementation.step2.desc")}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg bg-primary">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-semibold text-dark">{t("how_it_works.implementation.step3.title")}</h4>
              <p className="text-gray-700">{t("how_it_works.implementation.step3.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
