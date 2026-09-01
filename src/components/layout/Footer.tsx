import React, { useState } from "react";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/logo.png";
import LegalModal from "../ui/LegalModal";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [modalType, setModalType] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <footer id="footer" className="pt-12 pb-8 text-white bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          <div className="space-y-6 md:col-span-1">
            <img
              src={logo}
              alt="Logo E-RRHH"
              className="w-32 h-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-slate-400 leading-relaxed text-sm">
              {t("footer.slogan")}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white tracking-wide">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@e-rrhh.com.ar"
                className="flex items-center space-x-3 text-slate-400 hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 text-slate-500 group-hover:text-primary" />
                <span>info@e-rrhh.com.ar</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white tracking-wide">{t("footer.follow")}</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100082877210053" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/errhh.consultora" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/e-rrhh-consultora/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white tracking-wide">{t("footer.legal")}</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <button onClick={() => setModalType("legal")} className="text-slate-400 hover:text-white transition-colors text-left w-fit">{t("footer.legal_notice")}</button>
              <button onClick={() => setModalType("privacy")} className="text-slate-400 hover:text-white transition-colors text-left w-fit">{t("footer.privacy")}</button>
              <button onClick={() => setModalType("terms")} className="text-slate-400 hover:text-white transition-colors text-left w-fit">{t("footer.terms")}</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
      {modalType && <LegalModal type={modalType} onClose={() => setModalType(null)} />}
    </footer>
  );
}
