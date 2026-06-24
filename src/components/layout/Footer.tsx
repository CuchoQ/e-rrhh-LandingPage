import React, { useState } from "react";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/logo.png";
import LegalModal from "../ui/LegalModal";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [modalType, setModalType] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <footer id="footer" className="py-12 text-white bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                className="w-28 h-auto object-contain drop-shadow-[0_2px_4px_rgba(255,255,255,0.73)]"
              />
            </div>
            <p className="text-white/70">
              {t("footer.slogan")}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.contact")}</h4>
            <div className="space-y-2">
              <a
                href="mailto:info@e-rrhh.com.ar"
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-opacity"
              >
                <Mail className="w-5 h-5" />
                <span>info@e-rrhh.com.ar</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.follow")}</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100082877210053" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-opacity" />
              </a>
              <a href="https://www.instagram.com/errhh.consultora" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/company/e-rrhh-consultora/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-opacity" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.legal")}</h4>
            <div className="space-y-2">
              <button onClick={() => setModalType("legal")} className="text-white/70 hover:text-white transition-opacity block text-left">{t("footer.legal_notice")}</button>
              <button onClick={() => setModalType("privacy")} className="text-white/70 hover:text-white transition-opacity block text-left">{t("footer.privacy")}</button>
              <button onClick={() => setModalType("terms")} className="text-white/70 hover:text-white transition-opacity block text-left">{t("footer.terms")}</button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-white/70 border-white/20">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
      {modalType && <LegalModal type={modalType} onClose={() => setModalType(null)} />}
    </footer>
  );
}
