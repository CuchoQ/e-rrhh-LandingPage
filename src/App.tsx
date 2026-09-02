import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { Mail, Facebook, Instagram, Linkedin, Cloud, Monitor, Building2, Users, Workflow, Cpu, Globe } from "lucide-react";
import LegalModal from "./components/ui/LegalModal";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import { useTranslation } from "react-i18next";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const langs = ['es', 'en', 'pt'];
    const currentIndex = langs.indexOf(i18n.language || 'es');
    const newLang = langs[(currentIndex + 1) % langs.length];
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo" aria-label="E-RRHH, volver al inicio">
          <img src={logo} alt="E-RRHH" className="h-10 w-auto object-contain" />
        </a>

        <button 
          className="menu-button" 
          type="button" 
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          )}
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`} id="main-nav" aria-label="Navegación principal">
          <a href="#nosotros" onClick={() => setIsOpen(false)}>{t('nav.whoWeAre')}</a>
          <a href="#rrhh" onClick={() => setIsOpen(false)}>{t('nav.peopleManagement')}</a>
          <a href="#tecnologia" onClick={() => setIsOpen(false)}>{t('nav.technology')}</a>
          <a href="#plataforma" onClick={() => setIsOpen(false)}>{t('nav.platform')}</a>
          <div className="flex items-center gap-6">
            <a href="#contacto" className="nav-contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
          </div>
        </nav>
      </div>

      <button 
        onClick={toggleLanguage} 
        className="fixed top-6 right-6 z-50 flex items-center gap-1 text-[10px] font-bold text-navy hover:text-cyan transition-colors bg-white/70 backdrop-blur-md px-2 py-1.5 rounded-full border border-blue/20 shadow-sm uppercase"
        aria-label="Toggle language"
      >
        <Globe className="w-3 h-3" />
        <span>{i18n.language || 'es'}</span>
      </button>
    </header>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero" id="inicio">
      <div className="glow one"></div>
      <div className="glow two"></div>

      <Header />

      <main className="container hero-content">
        <div className="copy">
          <h1>
            {t('hero.title1')}
            <span>{t('hero.title2')}</span>
          </h1>

          <p className="lead">
            {t('hero.lead')}
          </p>

          <p className="description">
            {t('hero.desc')}
          </p>

          <div className="actions">
            <a href="#rrhh" className="button button-primary">
              {t('hero.ctaPrimary')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
            <a href="#contacto" className="button button-secondary">{t('hero.ctaSecondary')}</a>
          </div>
        </div>

        <div className="visual" aria-label="Personas conducen. Tecnología potencia.">
          <div className="orbit outer"></div>
          <div className="orbit inner"></div>
          <div className="orbit-dot"></div>

          <div className="core">
            <div className="core-small">{t('hero.vision')}</div>
            <strong>{t('hero.people')} <span>{t('hero.leadVerb')}</span></strong>
            <div className="core-line"></div>
            <strong>{t('hero.tech')} <span>{t('hero.empowerVerb')}</span></strong>
          </div>

          <div className="floating one"><b>01</b> {t('hero.floating1')}</div>
          <div className="floating two"><b>02</b> {t('hero.floating2')}</div>
          <div className="floating three"><b>03</b> {t('hero.floating3')}</div>
        </div>
      </main>

      <div className="container hero-footer" aria-label="Proceso de trabajo">
        <div><span>01</span> {t('hero.footer1')}</div>
        <div><span>02</span> {t('hero.footer2')}</div>
        <div><span>03</span> {t('hero.footer3')}</div>
        <div><span>04</span> {t('hero.footer4')}</div>
      </div>
    </section>
  );
}

function Identity() {
  const { t } = useTranslation();
  return (
    <section className="identity" id="nosotros" aria-labelledby="identity-title">
      <div className="container">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-20 items-center mb-16">
          <div>
            <div className="section-kicker mb-4">{t('identity.kicker')}</div>
            <h2 className="section-title" id="identity-title" style={{ maxWidth: '100%' }}>
              {t('identity.title1')} <span>{t('identity.title2')}</span>
            </h2>
          </div>
          <div>
            <p className="identity-intro" style={{ margin: 0 }}>
              {t('identity.intro1')} <strong>{t('identity.introStrong')}</strong>{t('identity.intro2')}
            </p>
          </div>
        </div>

        <div className="pillars">
          <article className="pillar pillar-rrhh">
            <span className="pillar-number">01</span>
            <h3>{t('identity.pillar1Title')}</h3>
            <p>
              {t('identity.pillar1Desc')}
            </p>
            <div className="pillar-tags" aria-label="Capacidades de Recursos Humanos">
              <span>{t('identity.tagDiag')}</span>
              <span>{t('identity.tagStrat')}</span>
              <span>{t('identity.tagProc')}</span>
              <span>{t('identity.tagPeople')}</span>
            </div>
          </article>

          <article className="pillar pillar-tech">
            <span className="pillar-number">02</span>
            <h3>{t('identity.pillar2Title')}</h3>
            <p>
              {t('identity.pillar2Desc')}
            </p>
            <div className="pillar-tags" aria-label="Capacidades tecnológicas">
              <span>{t('identity.tagDig')}</span>
              <span>{t('identity.tagAuto')}</span>
              <span>{t('identity.tagInt')}</span>
              <span>{t('identity.tagAI')}</span>
            </div>
          </article>
        </div>

        <div className="identity-statement">
          <span><strong>{t('identity.statement1')}</strong>{t('identity.statement2')}</span>
        </div>
      </div>
    </section>
  );
}

const imageModules = import.meta.glob('./assets/Ilustratios/*.{jpg,png,jpeg}', { eager: true });
const watermarkImages = Object.values(imageModules).map((mod: any) => mod.default);

function DynamicWatermark() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (watermarkImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % watermarkImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (watermarkImages.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.45] mix-blend-multiply">
      {watermarkImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f0f7] via-transparent to-[#d5e6f0]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#e6f0f7] via-transparent to-[#d5e6f0]"></div>
    </div>
  );
}

function HrSolutions() {
  const { t } = useTranslation();
  return (
    <section className="hr-solutions relative overflow-hidden" id="rrhh" aria-labelledby="hr-title">
      <DynamicWatermark />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-20 items-center mb-16">
          <div>
            <div className="section-kicker mb-4">{t('hr.kicker')}</div>
            <h2 className="section-title" id="hr-title" style={{ maxWidth: '100%' }}>
              {t('hr.title1')} <span>{t('hr.title2')}</span>
            </h2>
          </div>
          <div>
            <p className="section-copy" style={{ margin: 0 }}>
              {t('hr.copy')}
            </p>
          </div>
        </div>

        <div className="service-grid">
          <article className="service-card" data-number="01">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/>
              </svg>
            </span>
            <h3>{t('hr.card1Title')}</h3>
            <ul>
              <li>{t('hr.card1L1')}</li>
              <li>{t('hr.card1L2')}</li>
              <li>{t('hr.card1L3')}</li>
              <li>{t('hr.card1L4')}</li>
            </ul>
          </article>

          <article className="service-card" data-number="02">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5M16 4v5M8 13h3M13 13h3M8 17h3"/>
              </svg>
            </span>
            <h3>{t('hr.card2Title')}</h3>
            <ul>
              <li>{t('hr.card2L1')}</li>
              <li>{t('hr.card2L2')}</li>
              <li>{t('hr.card2L3')}</li>
              <li>{t('hr.card2L4')}</li>
            </ul>
          </article>

          <article className="service-card" data-number="03">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.4-4 2.4-6 6-6s5.6 2 6 6M15 14c3.4.1 5.3 2.1 5.7 5"/>
              </svg>
            </span>
            <h3>{t('hr.card3Title')}</h3>
            <ul>
              <li>{t('hr.card3L1')}</li>
              <li>{t('hr.card3L2')}</li>
              <li>{t('hr.card3L3')}</li>
              <li>{t('hr.card3L4')}</li>
            </ul>
          </article>

          <article className="service-card" data-number="04">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3 4 7v5c0 4.8 3.1 8 8 9 4.9-1 8-4.2 8-9V7l-8-4Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>
              </svg>
            </span>
            <h3>{t('hr.card4Title')}</h3>
            <ul>
              <li>{t('hr.card4L1')}</li>
              <li>{t('hr.card4L2')}</li>
              <li>{t('hr.card4L3')}</li>
              <li>{t('hr.card4L4')}</li>
            </ul>
          </article>
        </div>

        <p className="section-closing">
          {t('hr.closing')}
        </p>
      </div>
    </section>
  );
}

function Technology() {
  const { t } = useTranslation();
  return (
    <section className="technology" id="tecnologia" aria-labelledby="technology-title">
      <div className="container">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-20 items-center mb-16">
          <div>
            <div className="section-kicker mb-4 text-cyan">{t('technology.kicker')}</div>
            <h2 className="section-title" id="technology-title" style={{ maxWidth: '100%' }}>{t('technology.title')}</h2>
          </div>
          <div>
            <p className="section-copy" style={{ margin: 0 }}>
              {t('technology.copy')}
            </p>
          </div>
        </div>

        <div className="tech-grid">
          <article className="tech-card">
            <span className="tech-card-number">01</span>
            <h3>{t('technology.card1Title')}</h3>
            <p>{t('technology.card1Desc')}</p>
          </article>
          <article className="tech-card">
            <span className="tech-card-number">02</span>
            <h3>{t('technology.card2Title')}</h3>
            <p>{t('technology.card2Desc')}</p>
          </article>
          <article className="tech-card">
            <span className="tech-card-number">03</span>
            <h3>{t('technology.card3Title')}</h3>
            <p>{t('technology.card3Desc')}</p>
          </article>
          <article className="tech-card highlight">
            <span className="tech-card-number">04</span>
            <h3>{t('technology.card4Title')}</h3>
            <p>{t('technology.card4Desc')}</p>
          </article>
        </div>

        <div className="human-ai">
          <h3>{t('technology.humanAiTitle1')} <span>{t('technology.humanAiTitle2')}</span></h3>
          <div className="human-ai-columns">
            <div>
              <strong>{t('technology.humanAiCol1Title')}</strong>
              <p>{t('technology.humanAiCol1Desc')}</p>
            </div>
            <div>
              <strong>{t('technology.humanAiCol2Title')}</strong>
              <p>{t('technology.humanAiCol2Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  const { t } = useTranslation();
  return (
    <section className="platform" id="plataforma" aria-labelledby="platform-title">
      <div className="container">
        <div className="platform-intro">
          <div>
            <div className="section-kicker">{t('platform.kicker')}</div>
            <h2 className="platform-name" id="platform-title">{t('platform.mod1Title').includes('e-HR') ? 'e-HR' : 'e-RRHH'} <span>V2</span></h2>
          </div>
          <div>
            <p className="platform-lead">{t('platform.lead')}</p>
            <p className="platform-copy">
              {t('platform.copy')}
            </p>
          </div>
        </div>

        <div className="module-grid">
          <article className="module-card">
            <span>01</span>
            <h3>{t('platform.mod1Title')}</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted flex-grow">
              {t('platform.mod1Desc')}
            </p>
            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs font-bold text-blue flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 15v4c0 1.1.9 2 2 2h14v-4"/><path d="M3 11h18v4H3z"/></svg>
                {t('platform.mod1Count')}
              </span>
            </div>
          </article>
          <article className="module-card">
            <span>02</span>
            <h3>{t('platform.mod2Title')}</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted flex-grow">
              {t('platform.mod2Desc')}
            </p>
            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs font-bold text-blue flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                {t('platform.mod2Count')}
              </span>
            </div>
          </article>
          <article className="module-card">
            <span>03</span>
            <h3>{t('platform.mod3Title')}</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted flex-grow">
              {t('platform.mod3Desc')}
            </p>
            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs font-bold text-blue flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                {t('platform.mod3Count')}
              </span>
            </div>
          </article>
          <article className="module-card">
            <span>04</span>
            <h3>{t('platform.mod4Title')}</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted flex-grow">
              {t('platform.mod4Desc')}
            </p>
            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs font-bold text-blue flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                {t('platform.mod4Count')}
              </span>
            </div>
          </article>
        </div>

        <div className="employee-portal">
          <span className="employee-portal-number">05</span>
          <div><h3>{t('platform.portalTitle')}</h3><p>{t('platform.portalDesc')}</p></div>
          <span className="employee-portal-label">{t('platform.portalLabel')}</span>
        </div>

        <div className="mt-12 bg-[#f4f9fb] rounded-3xl p-6 md:p-8 border border-blue/10">
          <div className="text-center relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-navy">{t('platform.implTitle')}</h3>
          </div>
          
          <div className="relative mt-5">
            {/* Desktop lines connecting the tree */}
            <div className="hidden md:block absolute top-0 left-1/2 w-px h-3 bg-blue/20 -translate-x-1/2 -mt-2"></div>
            <div className="hidden md:block absolute top-1 left-[16.66%] w-[66.66%] h-px bg-blue/20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 pt-4">
              {/* Option 1 */}
              <div className="relative group">
                <div className="hidden md:block absolute top-0 left-1/2 w-px h-3 bg-blue/20 -translate-x-1/2 -mt-3"></div>
                <div className="bg-white border border-blue/15 shadow-sm hover:shadow-md hover:border-cyan/40 transition-all rounded-xl px-4 py-3 flex flex-row items-center justify-center lg:justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center text-blue shrink-0">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <span className="block text-[12px] uppercase tracking-wider font-bold text-navy">Cloud SaaS</span>
                </div>
              </div>

              {/* Option 2 */}
              <div className="relative group">
                <div className="hidden md:block absolute top-0 left-1/2 w-px h-3 bg-blue/20 -translate-x-1/2 -mt-3"></div>
                <div className="bg-white border border-blue/15 shadow-sm hover:shadow-md hover:border-cyan/40 transition-all rounded-xl px-4 py-3 flex flex-row items-center justify-center lg:justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center text-blue shrink-0">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="block text-[12px] uppercase tracking-wider font-bold text-navy">VPS Exclusivo</span>
                </div>
              </div>

              {/* Option 3 */}
              <div className="relative group">
                <div className="hidden md:block absolute top-0 left-1/2 w-px h-3 bg-blue/20 -translate-x-1/2 -mt-3"></div>
                <div className="bg-white border border-blue/15 shadow-sm hover:shadow-md hover:border-cyan/40 transition-all rounded-xl px-4 py-3 flex flex-row items-center justify-center lg:justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center text-blue shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="block text-[12px] uppercase tracking-wider font-bold text-navy">On-Premise</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="quality-tags justify-center">
            <span>{t('platform.tag1')}</span><span>{t('platform.tag2')}</span><span>{t('platform.tag3')}</span><span>{t('platform.tag4')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [modalType, setModalType] = useState<'legal' | 'privacy' | 'terms' | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-content" style={{ alignItems: "start" }}>
          <div>
            <div className="section-kicker">{t('contact.kicker')}</div>
            <h2 id="contact-title">{t('contact.title1')} <span>{t('contact.title2')}</span></h2>
            <p className="contact-copy">{t('contact.copy')}</p>
          </div>
          <form className="flex flex-col gap-4 w-full bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="03f1d404-9256-4439-ba53-a50d204b5fa2" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="flex flex-col gap-2">
              <label htmlFor="empresa" className="text-sm font-semibold text-white/80">{t('contact.lblCompany')}</label>
              <input type="text" id="empresa" name="Empresa" className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all" placeholder={t('contact.plCompany')} required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-white/80">{t('contact.lblName')}</label>
              <input type="text" id="name" name="Nombre" className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all" placeholder={t('contact.plName')} required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cargo" className="text-sm font-semibold text-white/80">{t('contact.lblRole')}</label>
              <input type="text" id="cargo" name="Cargo" className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all" placeholder={t('contact.plRole')} required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-white/80">{t('contact.lblEmail')}</label>
              <input type="email" id="email" name="Email" className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all" placeholder={t('contact.plEmail')} required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-white/80">{t('contact.lblMessage')}</label>
              <textarea id="message" name="Mensaje" rows={4} className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all resize-none" placeholder={t('contact.plMessage')} required></textarea>
            </div>
            
            <button type="submit" disabled={formStatus === 'submitting'} className="contact-action w-full justify-center mt-3 border-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
              {formStatus === 'submitting' ? t('contact.btnSubmitting') : t('contact.btnSubmit')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
            
            {formStatus === 'success' && (
              <div className="mt-2 p-3 bg-[#1599c4]/20 border border-[#1599c4]/30 rounded-xl text-center">
                <span className="text-[#55d4e6] text-sm font-semibold">{t('contact.msgSuccess')}</span>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="mt-2 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-center">
                <span className="text-red-300 text-sm font-semibold">{t('contact.msgError')}</span>
              </div>
            )}
          </form>
        </div>

        <footer className="footer flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-28 pt-8 border-t border-white/10 text-white/45 text-xs">
          <div className="flex flex-col gap-4">
            <a href="#inicio" className="logo" aria-label="E-RRHH, volver al inicio">
              <img src={logo} alt="E-RRHH" className="h-10 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-white/40 leading-relaxed text-xs max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white tracking-wide uppercase text-[10px]">{t('footer.titleContact')}</h4>
            <a href="mailto:info@e-rrhh.com.ar" className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@e-rrhh.com.ar</span>
            </a>
            <span className="text-white/50">{t('footer.loc')}</span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white tracking-wide uppercase text-[10px]">{t('footer.titleSocial')}</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100082877210053" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/errhh.consultora" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/e-rrhh-consultora/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white tracking-wide uppercase text-[10px]">{t('footer.titleLegal')}</h4>
            <button onClick={() => setModalType("legal")} className="text-white/50 hover:text-white transition-colors text-left">{t('footer.legal1')}</button>
            <button onClick={() => setModalType("privacy")} className="text-white/50 hover:text-white transition-colors text-left">{t('footer.legal2')}</button>
            <button onClick={() => setModalType("terms")} className="text-white/50 hover:text-white transition-colors text-left">{t('footer.legal3')}</button>
          </div>
        </footer>

        <div className="mt-8 pt-4 border-t border-white/5 text-center text-white/30 text-xs">
          <span>© {new Date().getFullYear()} E-RRHH</span>
        </div>
      </div>
      {modalType && <LegalModal type={modalType} onClose={() => setModalType(null)} />}
    </section>
  );
}

export default function App() {
  const { i18n } = useTranslation();
  return (
    <div className="bg-page">
      <Hero />
      <Identity />
      <HrSolutions />
      <Technology />
      <Platform />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}