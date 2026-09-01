import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { Mail, Facebook, Instagram, Linkedin, Cloud, Monitor, Building2, Users, Workflow, Cpu } from "lucide-react";
import LegalModal from "./components/ui/LegalModal";
import WhatsAppButton from "./components/layout/WhatsAppButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <a href="#nosotros" onClick={() => setIsOpen(false)}>Quiénes somos</a>
          <a href="#rrhh" onClick={() => setIsOpen(false)}>Gestión de Personas</a>
          <a href="#tecnologia" onClick={() => setIsOpen(false)}>Tecnología</a>
          <a href="#plataforma" onClick={() => setIsOpen(false)}>e-RRHH V2</a>
          <a href="#contacto" className="nav-contact" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="glow one"></div>
      <div className="glow two"></div>

      <Header />

      <main className="container hero-content">
        <div className="copy">
          <h1>
            Recursos Humanos
            <span>+ Tecnología</span>
          </h1>

          <p className="lead">
            Transformamos la gestión de personas combinando experiencia en recursos humanos, tecnología e inteligencia artificial.
          </p>

          <p className="description">
            Diagnosticamos, ordenamos y optimizamos procesos. Cuando la organización lo requiere, incorporamos tecnología propia para digitalizar, automatizar e integrar la gestión.
          </p>

          <div className="actions">
            <a href="#rrhh" className="button button-primary">
              Conocé nuestras soluciones
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
            <a href="#contacto" className="button button-secondary">Conversemos</a>
          </div>
        </div>

        <div className="visual" aria-label="Personas conducen. Tecnología potencia.">
          <div className="orbit outer"></div>
          <div className="orbit inner"></div>
          <div className="orbit-dot"></div>

          <div className="core">
            <div className="core-small">Nuestra visión</div>
            <strong>Personas <span>conducen</span></strong>
            <div className="core-line"></div>
            <strong>Tecnología <span>potencia</span></strong>
          </div>

          <div className="floating one"><b>01</b> Personas</div>
          <div className="floating two"><b>02</b> Tecnología</div>
          <div className="floating three"><b>03</b> Inteligencia Artificial</div>
        </div>
      </main>

      <div className="container hero-footer" aria-label="Proceso de trabajo">
        <div><span>01</span> Diagnóstico</div>
        <div><span>02</span> Procesos</div>
        <div><span>03</span> Tecnología</div>
        <div><span>04</span> Evolución</div>
      </div>
    </section>
  );
}

function Identity() {
  return (
    <section className="identity" id="nosotros" aria-labelledby="identity-title">
      <div className="container">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-20 items-center mb-16">
          <div>
            <div className="section-kicker mb-4">Quiénes somos</div>
            <h2 className="section-title" id="identity-title" style={{ maxWidth: '100%' }}>
              Experiencia en personas. <span>Capacidad para transformar.</span>
            </h2>
          </div>
          <div>
            <p className="identity-intro" style={{ margin: 0 }}>
              Somos una <strong>consultora especializada en gestion de personas</strong>, con 25 años de experiencia en industria, consumo masivo y PyMEs. Nuestro equipo IT propio permite incorporar tecnología cuando aporta valor, integrándola a nuestras soluciones.
            </p>
          </div>
        </div>

        <div className="pillars">
          <article className="pillar pillar-rrhh">
            <span className="pillar-number">01</span>
            <h3>Gestión de Personas</h3>
            <p>
              Comprendemos la organización, sus personas y sus procesos. Diagnosticamos, diseñamos e implementamos soluciones con criterio profesional y acompañamiento cercano.
            </p>
            <div className="pillar-tags" aria-label="Capacidades de Recursos Humanos">
              <span>Diagnóstico</span>
              <span>Estrategia</span>
              <span>Procesos</span>
              <span>Personas</span>
            </div>
          </article>

          <article className="pillar pillar-tech">
            <span className="pillar-number">02</span>
            <h3>Tecnología</h3>
            <p>
              Convertimos procesos en soluciones digitales. Nuestro equipo IT permite automatizar, integrar información y desarrollar herramientas ajustadas a cada necesidad.
            </p>
            <div className="pillar-tags" aria-label="Capacidades tecnológicas">
              <span>Digitalización</span>
              <span>Automatización</span>
              <span>Integraciones</span>
              <span>Inteligencia Artificial</span>
            </div>
          </article>
        </div>

        <div className="identity-statement">
          <span><strong>Una mirada integral:</strong> casi 30 años de experiencia y conocimientos en gestión de personas + capacidad tecnológica propia.</span>
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
  return (
    <section className="hr-solutions relative overflow-hidden" id="rrhh" aria-labelledby="hr-title">
      <DynamicWatermark />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-20 items-center mb-16">
          <div>
            <div className="section-kicker mb-4">Gestión de Personas</div>
            <h2 className="section-title" id="hr-title" style={{ maxWidth: '100%' }}>
              Ordenar, profesionalizar y hacer <span>evolucionar la gestión.</span>
            </h2>
          </div>
          <div>
            <p className="section-copy" style={{ margin: 0 }}>
              Intervenimos sobre los procesos de Recursos Humanos de manera integral o específica, de acuerdo con la realidad y las necesidades de cada organización.
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
            <h3>Diagnóstico y estrategia</h3>
            <ul>
              <li>Diagnóstico organizacional y de RRHH</li>
              <li>Planificación estratégica</li>
              <li>Diseño organizacional y estructuras</li>
              <li>Indicadores y tableros de gestión</li>
            </ul>
          </article>

          <article className="service-card" data-number="02">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5M16 4v5M8 13h3M13 13h3M8 17h3"/>
              </svg>
            </span>
            <h3>Organización y procesos</h3>
            <ul>
              <li>Profesionalización del área</li>
              <li>Políticas, procesos y procedimientos</li>
              <li>Administración de personal</li>
              <li>Compensaciones y beneficios</li>
            </ul>
          </article>

          <article className="service-card" data-number="03">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.4-4 2.4-6 6-6s5.6 2 6 6M15 14c3.4.1 5.3 2.1 5.7 5"/>
              </svg>
            </span>
            <h3>Personas y cultura</h3>
            <ul>
              <li>Cultura y gestión del cambio</li>
              <li>Clima y comunicación</li>
              <li>Selección, capacitación y desarrollo</li>
              <li>Talento y desempeño</li>
            </ul>
          </article>

          <article className="service-card" data-number="04">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3 4 7v5c0 4.8 3.1 8 8 9 4.9-1 8-4.2 8-9V7l-8-4Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>
              </svg>
            </span>
            <h3>Relaciones laborales</h3>
            <ul>
              <li>Gestión de relaciones laborales</li>
              <li>Cumplimiento normativo</li>
              <li>Prevención y resolución de conflictos</li>
              <li>Asesoramiento laboral</li>
            </ul>
          </article>
        </div>

        <p className="section-closing">
          Podemos intervenir sobre una necesidad concreta o acompañar integralmente la transformación del área.
        </p>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="technology" id="tecnologia" aria-labelledby="technology-title">
      <div className="container">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-20 items-center mb-16">
          <div>
            <div className="section-kicker mb-4 text-cyan">Tecnología + IA</div>
            <h2 className="section-title" id="technology-title" style={{ maxWidth: '100%' }}>Tecnología aplicada a la gestión.</h2>
          </div>
          <div>
            <p className="section-copy" style={{ margin: 0 }}>
              Nuestro equipo IT nos permite diseñar e implementar soluciones tecnológicas vinculadas directamente con las necesidades de Recursos Humanos y de la organización.
            </p>
          </div>
        </div>

        <div className="tech-grid">
          <article className="tech-card">
            <span className="tech-card-number">01</span>
            <h3>Digitalizar</h3>
            <p>Centralizar documentos, legajos, procesos e información para facilitar el acceso y la gestión.</p>
          </article>
          <article className="tech-card">
            <span className="tech-card-number">02</span>
            <h3>Automatizar</h3>
            <p>Reducir tareas repetitivas, errores operativos y tiempos administrativos.</p>
          </article>
          <article className="tech-card">
            <span className="tech-card-number">03</span>
            <h3>Integrar</h3>
            <p>Conectar datos, procesos, personas y sistemas dentro de un mismo ecosistema.</p>
          </article>
          <article className="tech-card highlight">
            <span className="tech-card-number">04</span>
            <h3>Potenciar con IA</h3>
            <p>Adquirir y analizar información, asistir tareas, detectar patrones y generar indicadores.</p>
          </article>
        </div>

        <div className="human-ai">
          <h3>La IA asiste. <span>Las personas conducen.</span></h3>
          <div className="human-ai-columns">
            <div>
              <strong>Inteligencia Artificial</strong>
              <p>Organiza información, analiza datos, detecta patrones y genera indicadores para la gestión.</p>
            </div>
            <div>
              <strong>Personas</strong>
              <p>Validan la información, interpretan el contexto, definen la estrategia y toman la decisión final.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="platform" id="plataforma" aria-labelledby="platform-title">
      <div className="container">
        <div className="platform-intro">
          <div>
            <div className="section-kicker">Nuestra plataforma</div>
            <h2 className="platform-name" id="platform-title">e‑RRHH <span>V2</span></h2>
          </div>
          <div>
            <p className="platform-lead">Una plataforma multiempresa creada desde la experiencia real en Recursos Humanos.</p>
            <p className="platform-copy">
              Integra procesos, información y herramientas de gestión en un único entorno. Su estructura modular permite acompañar distintas necesidades y etapas de desarrollo organizacional.
            </p>
          </div>
        </div>

        <div className="module-grid">
          <article className="module-card">
            <span>01</span>
            <h3>Gestión administrativa</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted flex-grow">
              Herramientas para la gestión integral del legajo, documentación y ciclo de vida del personal.
            </p>
            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs font-bold text-blue flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 15v4c0 1.1.9 2 2 2h14v-4"/><path d="M3 11h18v4H3z"/></svg>
                +6 Módulos integrados
              </span>
            </div>
          </article>
          <article className="module-card">
            <span>02</span>
            <h3>Organización y talento</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted flex-grow">
              Soluciones avanzadas para el diseño de estructuras, perfiles y adquisición de talento.
            </p>
            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs font-bold text-blue flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                +4 Módulos integrados
              </span>
            </div>
          </article>
          <article className="module-card">
            <span>03</span>
            <h3>Desarrollo de personas</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted flex-grow">
              Gestión de desempeño, capacitación, clima laboral y comunicación interna.
            </p>
            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs font-bold text-blue flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                +5 Módulos integrados
              </span>
            </div>
          </article>
          <article className="module-card">
            <span>04</span>
            <h3>Payroll y asistencia</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted flex-grow">
              Control de asistencia, novedades y herramientas para centralizar la liquidación.
            </p>
            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs font-bold text-blue flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                +4 Módulos integrados
              </span>
            </div>
          </article>
        </div>

        <div className="employee-portal">
          <span className="employee-portal-number">05</span>
          <div><h3>Portal del Empleado</h3><p>Consultas, documentación, solicitudes y comunicación en un espacio transversal.</p></div>
          <span className="employee-portal-label">Capa transversal</span>
        </div>

        <div className="mt-12 bg-[#f4f9fb] rounded-3xl p-6 md:p-8 border border-blue/10">
          <div className="text-center relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-navy">Modalidades de implementación</h3>
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
            <span>Integral</span><span>Modular</span><span>Configurable</span><span>Escalable</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [modalType, setModalType] = useState<'legal' | 'privacy' | 'terms' | null>(null);

  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-content" style={{ alignItems: "start" }}>
          <div>
            <div className="section-kicker">Contacto</div>
            <h2 id="contact-title">El próximo paso es <span>entender el desafío.</span></h2>
            <p className="contact-copy">Conversemos sobre la realidad de tu organización. A partir de ese primer intercambio podremos identificar necesidades, oportunidades y posibles caminos de trabajo.</p>
          </div>
          <form className="flex flex-col gap-4 w-full bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10" action="https://api.web3forms.com/submit" method="POST">
            {/* OJO: Aquí debes pegar tu Access Key de Web3Forms */}
            <input type="hidden" name="access_key" value="03f1d404-9256-4439-ba53-a50d204b5fa2" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="flex flex-col gap-2">
              <label htmlFor="empresa" className="text-sm font-semibold text-white/80">Empresa</label>
              <input type="text" id="empresa" name="Empresa" className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all" placeholder="Nombre de la organización" required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-white/80">Nombre completo</label>
              <input type="text" id="name" name="Nombre" className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all" placeholder="Tu nombre y apellido" required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cargo" className="text-sm font-semibold text-white/80">Cargo</label>
              <input type="text" id="cargo" name="Cargo" className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all" placeholder="Tu puesto o rol" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-white/80">Correo electrónico</label>
              <input type="email" id="email" name="Email" className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all" placeholder="tu@email.com" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-white/80">Mensaje</label>
              <textarea id="message" name="Mensaje" rows={4} className="bg-white/10 border border-white/20 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all resize-none" placeholder="¿En qué te podemos ayudar?" required></textarea>
            </div>
            
            <button type="submit" className="contact-action w-full justify-center mt-3 border-none cursor-pointer">
              Enviar Mensaje
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </form>
        </div>

        <footer className="footer flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-28 pt-8 border-t border-white/10 text-white/45 text-xs">
          <div className="flex flex-col gap-4">
            <a href="#inicio" className="logo" aria-label="E-RRHH, volver al inicio">
              <img src={logo} alt="E-RRHH" className="h-10 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-white/40 leading-relaxed text-xs max-w-xs">
              Transformamos la gestión de personas combinando experiencia en Recursos Humanos, tecnología e Inteligencia Artificial.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white tracking-wide uppercase text-[10px]">Contacto</h4>
            <a href="mailto:info@e-rrhh.com.ar" className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@e-rrhh.com.ar</span>
            </a>
            <span className="text-white/50">San Luis, Argentina</span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white tracking-wide uppercase text-[10px]">Seguinos</h4>
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
            <h4 className="font-bold text-white tracking-wide uppercase text-[10px]">Legales</h4>
            <button onClick={() => setModalType("legal")} className="text-white/50 hover:text-white transition-colors text-left">Aviso Legal</button>
            <button onClick={() => setModalType("privacy")} className="text-white/50 hover:text-white transition-colors text-left">Política de Privacidad</button>
            <button onClick={() => setModalType("terms")} className="text-white/50 hover:text-white transition-colors text-left">Términos de Uso</button>
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