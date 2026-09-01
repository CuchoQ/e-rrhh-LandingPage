import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, Globe } from "lucide-react";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="border-b border-gray-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-gray-900/5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img src={logo} alt="Logo" className="w-28 h-auto object-contain" />
          </div>
          <div>
            <span className="text-xs font-medium text-dark/70">{t("header.subtitle")}</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-dark">
          <a
            href="#features"
            className="relative px-3 py-2 transition-all duration-300 rounded-lg group"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{t("header.nav_solutions")}</span>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-lightgray"></div>
          </a>

          <a
            href="#hr-consulting"
            className="relative px-3 py-2 transition-all duration-300 rounded-lg group"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{t("header.nav_hr")}</span>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-lightgray"></div>
          </a>

          <a
            href="#digital-solutions"
            className="relative px-3 py-2 transition-all duration-300 rounded-lg group"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{t("header.nav_digital")}</span>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-lightgray"></div>
          </a>

          <a
            href="#why-choose-us"
            className="relative px-3 py-2 transition-all duration-300 rounded-lg group"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{t("header.nav_why_us")}</span>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-lightgray"></div>
          </a>

          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-dark/20">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-dark hover:text-primary transition-colors"
              title="Cambiar idioma / Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="font-bold uppercase">{i18n.language}</span>
            </button>
            <Button
              variant="outline"
              className="transition-all duration-300 shadow-sm hover:shadow-md border-primary text-primary hover:bg-lightgray hover:text-primary"
              onClick={() => {
                const el = document.getElementById("footer");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("header.nav_contact")}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-dark hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="font-bold uppercase">{i18n.language}</span>
          </button>
          <button
            className="p-2 rounded-lg transition-colors bg-lightgray hover:bg-[#E5E5E5]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-dark" />
            ) : (
              <Menu className="w-5 h-5 text-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-dark/10 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            <a
              href="#features"
              className="block px-4 py-3 rounded-lg transition-all duration-300 text-dark hover:text-primary hover:bg-lightgray"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.nav_solutions")}
            </a>
            <a
              href="#hr-consulting"
              className="block px-4 py-3 rounded-lg transition-all duration-300 text-dark hover:text-primary hover:bg-lightgray"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.nav_hr")}
            </a>
            <a
              href="#digital-solutions"
              className="block px-4 py-3 rounded-lg transition-all duration-300 text-dark hover:text-primary hover:bg-lightgray"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.nav_digital")}
            </a>
            <a
              href="#why-choose-us"
              className="block px-4 py-3 rounded-lg transition-all duration-300 text-dark hover:text-primary hover:bg-lightgray"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.nav_why_us")}
            </a>
            <div className="pt-2">
              <Button
                variant="outline"
                className="w-full transition-all duration-300 border-primary text-primary hover:bg-lightgray hover:text-primary"
                onClick={() => {
                  setIsMenuOpen(false);
                  const el = document.getElementById("footer");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("header.nav_contact")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
