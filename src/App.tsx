import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { 
  Bot, 
  Users, 
  Smartphone, 
  TrendingUp, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import logo from "./assets/logo.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    <header className="border-b border-gray-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-gray-900/5">
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src={logo} alt="Logo" className="w-28 h-auto object-contain" />            
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight" style={{ color: '#1C2942' }}></h1>
              <p className="text-xs font-medium" style={{ color: '#1C2942', opacity: 0.7 }}>IT & HR Solutions</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="#features" 
              className="relative px-4 py-2 transition-all duration-300 rounded-lg group"
              style={{ color: '#1C2942' }}
              onMouseEnter={(e) => e.target.style.color = '#00A4D6'}
              onMouseLeave={(e) => e.target.style.color = '#1C2942'}
            >
              <span className="relative z-10">Características</span>
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: '#F5F5F5' }}
              ></div>
            </a>
            <a 
              href="#how-it-works" 
              className="relative px-4 py-2 transition-all duration-300 rounded-lg group"
              style={{ color: '#1C2942' }}
              onMouseEnter={(e) => e.target.style.color = '#00A4D6'}
              onMouseLeave={(e) => e.target.style.color = '#1C2942'}
            >
              <span className="relative z-10">Cómo funciona</span>
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: '#F5F5F5' }}
              ></div>
            </a>
            <a 
              href="#advantages" 
              className="relative px-4 py-2 transition-all duration-300 rounded-lg group"
              style={{ color: '#1C2942' }}
              onMouseEnter={(e) => e.target.style.color = '#00A4D6'}
              onMouseLeave={(e) => e.target.style.color = '#1C2942'}
            >
              <span className="relative z-10">Ventajas</span>
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: '#F5F5F5' }}
              ></div>
            </a>
            <div className="ml-4 pl-4 border-l" style={{ borderColor: 'rgba(28, 41, 66, 0.2)' }}>
           <Button 
                variant="outline" 
                className="transition-all duration-300 shadow-sm hover:shadow-md"
                style={{ 
                  borderColor: '#00A4D6', 
                  color: '#00A4D6',
                '--tw-ring-color': '#00A4D6'
                }}
                onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#F5F5F5';
                }}
                onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                }}
                onClick={() => {
                const el = document.getElementById("footer");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
          >
          Contacto
          </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ backgroundColor: '#F5F5F5' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#E5E5E5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#F5F5F5'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" style={{ color: '#1C2942' }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: '#1C2942' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t shadow-xl" style={{ borderColor: 'rgba(28, 41, 66, 0.1)' }}>
            <div className="container mx-auto px-6 py-4 space-y-1">
              <a 
                href="#features" 
                className="block px-4 py-3 rounded-lg transition-all duration-300"
                style={{ color: '#1C2942' }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00A4D6';
                  e.target.style.backgroundColor = '#F5F5F5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1C2942';
                  e.target.style.backgroundColor = 'transparent';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </a>
              <a 
                href="#how-it-works" 
                className="block px-4 py-3 rounded-lg transition-all duration-300"
                style={{ color: '#1C2942' }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00A4D6';
                  e.target.style.backgroundColor = '#F5F5F5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1C2942';
                  e.target.style.backgroundColor = 'transparent';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo funciona
              </a>
              <a 
                href="#advantages" 
                className="block px-4 py-3 rounded-lg transition-all duration-300"
                style={{ color: '#1C2942' }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00A4D6';
                  e.target.style.backgroundColor = '#F5F5F5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1C2942';
                  e.target.style.backgroundColor = 'transparent';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Ventajas
              </a>
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  className="w-full transition-all duration-300"
                  style={{ 
                    borderColor: '#00A4D6', 
                    color: '#00A4D6'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#F5F5F5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
    <section className="pt-6 pb-10 lg:pt-10 lg:pb-16" style={{ backgroundColor: '#F5F5F5' }}>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: '#1C2942' }}>
                  Transformando la gestión de personas con{" "}
                  <span style={{ color: '#00A4D6' }}>soluciones digitales</span>
                </h1>
                <p className="text-xl leading-relaxed" style={{ color: '#1C2942', opacity: 0.8 }}>
                  Integramos tecnología, experiencia y automatización para mejorar tu organización
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@e-rrhh.com.ar?subject=Solicitud%20de%20demo">
<Button size="lg" className="text-white px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#00A4D6' }}
  onMouseEnter={(e) => { e.target.style.backgroundColor = '#0092C4'; e.target.style.transform = 'translateY(-1px)'; }}
  onMouseLeave={(e) => { e.target.style.backgroundColor = '#00A4D6'; e.target.style.transform = 'translateY(0)'; }}>
  Solicitar demo
  <ArrowRight className="ml-2 w-5 h-5" />
</Button>
</a>
               <Button 
  variant="outline" 
  size="lg"
  className="px-8 py-3 text-lg transition-all duration-300"
  style={{ 
    borderColor: '#00A4D6', 
    color: '#00A4D6'
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'rgba(0, 164, 214, 0.1)';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
  }}
  onClick={() => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
>
  Ver más
</Button>

              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl p-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 164, 214, 0.1)' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=center"
                  alt="Equipo trabajando con tecnología"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#00A4D6' }}
              >
                <Bot className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#1C2942' }}>
              Características principales
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1C2942', opacity: 0.8 }}>
              Potencia tu gestión de personas con tecnología de vanguardia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'rgba(28, 41, 66, 0.2)' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: 'rgba(0, 164, 214, 0.1)' }}
                >
                  <Zap className="w-8 h-8" style={{ color: '#00A4D6' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Automatización de procesos</h3>
                <p style={{ color: '#1C2942', opacity: 0.8 }}>
                  Elimina tareas manuales y repetitivas con flujos de trabajo inteligentes
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'rgba(28, 41, 66, 0.2)' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: 'rgba(0, 164, 214, 0.1)' }}
                >
                  <Shield className="w-8 h-8" style={{ color: '#00A4D6' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Trazabilidad de la información</h3>
                <p style={{ color: '#1C2942', opacity: 0.8 }}>
                  Seguimiento completo y auditable de todos los procesos de RRHH
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'rgba(28, 41, 66, 0.2)' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: 'rgba(0, 164, 214, 0.1)' }}
                >
                  <Bot className="w-8 h-8" style={{ color: '#00A4D6' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Inteligencia artificial</h3>
                <p style={{ color: '#1C2942', opacity: 0.8 }}>
                  IA aplicada en procesos clave para decisiones más inteligentes
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'rgba(28, 41, 66, 0.2)' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: 'rgba(0, 164, 214, 0.1)' }}
                >
                  <TrendingUp className="w-8 h-8" style={{ color: '#00A4D6' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Mejora en la toma de decisiones</h3>
                <p style={{ color: '#1C2942', opacity: 0.8 }}>
                  Dashboards y análisis en tiempo real para decisiones basadas en datos
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'rgba(28, 41, 66, 0.2)' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: 'rgba(0, 164, 214, 0.1)' }}
                >
                  <Smartphone className="w-8 h-8" style={{ color: '#00A4D6' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Acceso desde cualquier dispositivo</h3>
                <p style={{ color: '#1C2942', opacity: 0.8 }}>
                  Plataforma responsive accesible desde móvil, tablet y desktop
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'rgba(28, 41, 66, 0.2)' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: 'rgba(0, 164, 214, 0.1)' }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: '#00A4D6' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Reducción de tareas operativas</h3>
                <p style={{ color: '#1C2942', opacity: 0.8 }}>
                  Libera tiempo valioso para enfocarte en la estrategia y el capital humano
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      
<section id="how-it-works" className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#1C2942' }}>
        ¿Cómo funciona?
      </h2>
      <p className="text-xl" style={{ color: '#1C2942', opacity: 0.8 }}>
        Descubrí cómo podés transformar tu gestión de RRHH desde el primer día
      </p>
    </div>

    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-center mb-10" style={{ color: '#1C2942' }}>Modelos de Despliegue</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-xl font-bold mb-2 text-[#00A4D6]">🖥️ Local</h4>
          <p className="text-gray-700 mb-2">Instalación en servidores del cliente. Operación interna sin almacenamiento en la nube.</p>
          <p className="text-sm text-gray-500">🔗 <strong>Puente SaaS:</strong> Servicios como firma digital, bot IA o validaciones automáticas pueden operar desde nuestra nube si el cliente lo autoriza.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-xl font-bold mb-2 text-[#00A4D6]">☁️ Autogestionado</h4>
          <p className="text-gray-700 mb-2">Instalación en la nube bajo control del cliente. Roles y usuarios gestionados internamente.</p>
          <p className="text-sm text-gray-500">Todos los servicios se ejecutan en la nube.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-xl font-bold mb-2 text-[#00A4D6]">🌐 SaaS Público</h4>
          <p className="text-gray-700 mb-2">Acceso inmediato en modalidad compartida. Nosotros nos encargamos del mantenimiento.</p>
          <p className="text-sm text-gray-500">Todos los servicios están disponibles desde el inicio, sin configuración adicional.</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-center mb-10" style={{ color: '#1C2942' }}>Implementación y Puesta en Marcha</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg bg-[#00A4D6]">
            <span className="text-2xl font-bold text-white">1</span>
          </div>
          <h4 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Conectá tu empresa</h4>
          <p className="text-gray-700">Nos encargamos de la implementación, la migración de datos y la integración con tus sistemas actuales. Te acompañamos desde el inicio.</p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg bg-[#1C2942]">
            <span className="text-2xl font-bold text-white">2</span>
          </div>
          <h4 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Transformá la gestión de personas</h4>
          <p className="text-gray-700">Convertí procesos complejos en soluciones simples, adaptadas a la realidad de tu empresa. Centralizá todo y gestioná con agilidad.</p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg bg-[#00A4D6]">
            <span className="text-2xl font-bold text-white">3</span>
          </div>
          <h4 className="text-xl font-semibold" style={{ color: '#1C2942' }}>Automatizá y optimizá tu gestión</h4>
          <p className="text-gray-700">Activamos funciones avanzadas: IA, alertas inteligentes, seguimiento de procesos, y un bot que responde 24/7.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Competitive Advantages */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#1C2942' }}>
                Ventajas competitivas
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: '#00A4D6' }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: '#1C2942' }}>Diseñado por expertos en RRHH</h3>
                    <p style={{ color: '#1C2942', opacity: 0.8 }}>
                      Desarrollado por profesionales con años de experiencia en gestión del capital humano
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: '#00A4D6' }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: '#1C2942' }}>Integración inteligente en todo el ciclo de vida del empleado</h3>
                    <p style={{ color: '#1C2942', opacity: 0.8 }}>
                      Desde el reclutamiento hasta la desvinculación, cubrimos cada etapa del journey del empleado
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: '#00A4D6' }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: '#1C2942' }}>IA aplicada a la gestión del capital humano</h3>
                    <p style={{ color: '#1C2942', opacity: 0.8 }}>
                      Algoritmos especializados que aprenden de tus procesos para mejorar continuamente
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl p-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 164, 214, 0.1)' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop&crop=center"
                  alt="Tecnología e innovación en RRHH"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#00A4D6' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Listo para modernizar tu gestión del capital humano
            </h2>
            <p className="text-xl text-white opacity-90">
              Únete a las empresas que ya transformaron su RRHH con nuestra tecnología
            </p>
            <Button 
  size="lg" 
  className="text-lg px-8 py-3 transition-all duration-300 hover:shadow-lg"
  style={{ 
    backgroundColor: 'white', 
    color: '#00A4D6'
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#F5F5F5';
    e.target.style.transform = 'translateY(-2px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.transform = 'translateY(0)';
  }}
  onClick={() => {
    window.location.href = 'mailto:comercial@e-rrhh.com.ar?subject=Quiero%20Instalar%20la%20Soluci%C3%B3n!';
  }}
>
  Empezá hoy
  <ChevronRight className="ml-2 w-5 h-5" />
</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-12 text-white" style={{ backgroundColor: '#1C2942' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
             <img 
                src={logo} 
                alt="Logo" 
                className="w-28 h-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.73))' }}
              />

              </div>
              <p className="text-white opacity-70">
                Transformando la gestión de personas con soluciones digitales
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contacto</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-white opacity-70" />
                  <span className="text-white opacity-70">info@e-rrhh.com.ar</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100082877210053" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5 text-white opacity-70 hover:opacity-100 cursor-pointer transition-opacity" /></a>
                <a href="https://www.instagram.com/errhh.consultora" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 text-white opacity-70 hover:opacity-100 cursor-pointer transition-opacity" /></a>
                <a href="https://www.linkedin.com/company/e-rrhh-consultora/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 text-white opacity-70 hover:opacity-100 cursor-pointer transition-opacity" /></a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity block">
                  Aviso Legal
                </a>
                <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity block">
                  Política de Privacidad
                </a>
                <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity block">
                  Términos de Uso
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-white opacity-70" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <p>&copy; 2025 E-RRHH | IT & HR Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5492665031595"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1EBE5D] transition duration-300"
        aria-label="Chat on WhatsApp"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.2 282.5 32 224 32c-105.9 0-192 86.1-192 192 0 33.7 8.8 66.5 25.4 95.4L7 472l157.8-49.4c28.2 
          15.3 59.9 23.4 91.2 23.4h.1c105.9 0 192-86.1 192-192 0-58.5-23.2-115-65.2-156.9zM224 
          438.6c-27.2 0-54-7.2-77.4-20.9l-5.5-3.2-93.5 29.3 30.2-91.4-3.6-5.7c-16.6-26.4-25.3-56.9-25.3-88.1 
          0-91.6 74.4-166 166-166 44.3 0 85.9 17.3 117.3 48.7S390 179.7 390 224c0 91.6-74.4 
          166-166 166zm101.7-123.2c-5.5-2.8-32.5-16-37.6-17.8-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 
          17.8-17.7 21.5c-3.2 3.7-6.5 4.1-12 1.4-32.5-16.3-53.8-29.1-75.3-66.1-5.7-9.8 5.7-9.1 
          16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.5-.2s-9.7 
          1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.8 22.7 57.5c2.8 3.7 39.1 59.7 94.8 
          83.7 13.3 5.7 23.7 9.1 31.8 11.6 13.3 4.2 25.4 3.6 35-2.2 10.8-6.3 32.6-29.7 33.5-58.3.8-28.5-18.1-41.2-23.7-44z" />
        </svg>
      </a>

</div>
  );
}