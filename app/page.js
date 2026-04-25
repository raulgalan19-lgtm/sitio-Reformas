"use client";

import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';


const Hero = () => {
  return (
    <section id="inicio" className="relative flex items-center min-h-[90vh] pt-24 pb-20 lg:pt-32 lg:pb-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hand-painting-a-wall-1234-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 via-50% to-transparent to-80%"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 text-center md:text-left">
        <div className="max-w-2xl md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight mb-6">
            Especialistas en reformas y mantenimiento en Madrid
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-light mb-8 max-w-2xl leading-relaxed">
            Calidad, eficiencia y cumplimiento de plazos para transformar tus espacios y mejorar tu calidad de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
            <a href="#contacto" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Solicitar Presupuesto
            </a>
            <a href="#servicios-particulares" className="inline-flex justify-center items-center px-8 py-3 border-2 border-white/80 text-base font-medium rounded-lg text-white hover:bg-white hover:text-slate-900 transition-colors">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div 
        ref={elementRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-[3500ms] ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-8 lowercase tracking-tight first-letter:uppercase">Quiénes somos</h2>
        <div className="prose prose-lg mx-auto text-slate-600 text-left md:text-justify space-y-6">
          <p className="leading-relaxed">
            Ofrecemos soluciones integrales en reformas, electricidad, pintura y fontanería para particulares y comunidades de propietarios en Madrid. Nuestro equipo de profesionales se encarga de todo tipo de trabajos, desde pequeñas reparaciones y mantenimiento hasta reformas completas de viviendas, oficinas y zonas comunes, garantizando siempre resultados de calidad, eficiencia y cumplimiento de plazos.
          </p>
          <p className="leading-relaxed">
            Trabajamos con materiales de primera calidad y adaptamos cada proyecto a las necesidades de nuestros clientes, proporcionando un servicio rápido, seguro y personalizado para mejorar el confort, la funcionalidad y el valor de cualquier espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className={`flex flex-col items-center p-6 bg-slate-50 rounded-2xl transition-all duration-[3500ms] delay-[600ms] ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}>
            <CheckCircle2 className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Calidad Garantizada</h3>
            <p className="text-slate-600 text-center text-sm">Materiales de primera y acabados impecables en cada proyecto.</p>
          </div>
          <div className={`flex flex-col items-center p-6 bg-slate-50 rounded-2xl transition-all duration-[3500ms] delay-[1200ms] ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}>
            <CheckCircle2 className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Cumplimiento</h3>
            <p className="text-slate-600 text-center text-sm">Respetamos estrictamente los plazos acordados con nuestros clientes.</p>
          </div>
          <div className={`flex flex-col items-center p-6 bg-slate-50 rounded-2xl transition-all duration-[3500ms] delay-[1800ms] ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}>
            <CheckCircle2 className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Servicio Integral</h3>
            <p className="text-slate-600 text-center text-sm">Coordinamos todos los gremios para que no tengas que preocuparte de nada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, image, index }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
        />
      </div>

      {/* Overlay Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

      {/* Contenido que se revela */}
      <div className="absolute bottom-0 p-8 w-full transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
        <div className="flex items-center gap-2 text-blue-400 mb-3 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CheckCircle2 className="w-4 h-4" /> Servicio Premium
        </div>
        
        <h3 className="text-3xl font-light tracking-wide text-white mb-3">
          {title}
        </h3>
        
        <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
          <p className="text-slate-300 text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>
          
          <a 
            href="#contacto" 
            className="inline-flex items-center text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Saber más <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [isParticularesVisible, setIsParticularesVisible] = React.useState(false);
  const [isComunidadesVisible, setIsComunidadesVisible] = React.useState(false);
  const particularesRef = React.useRef(null);
  const comunidadesRef = React.useRef(null);

  React.useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const particularesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsParticularesVisible(true);
        particularesObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const comunidadesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsComunidadesVisible(true);
        comunidadesObserver.unobserve(entry.target);
      }
    }, observerOptions);

    if (particularesRef.current) particularesObserver.observe(particularesRef.current);
    if (comunidadesRef.current) comunidadesObserver.observe(comunidadesRef.current);

    return () => {
      if (particularesRef.current) particularesObserver.unobserve(particularesRef.current);
      if (comunidadesRef.current) comunidadesObserver.unobserve(comunidadesRef.current);
    };
  }, []);

  const particulares = [
    {
      title: 'Reformas integrales',
      description: 'Desde el diseño inicial hasta la entrega final, transformamos viviendas antiguas en hogares modernos, funcionales y con acabados de primera calidad.',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Fontanería',
      description: 'Sustitución de tuberías, instalación de sanitarios, reparación de humedades y reformas completas de baños y cocinas.',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Pintura',
      description: 'Alisado de paredes, aplicación de pinturas plásticas de alta calidad, esmaltes, lacados y papeles pintados para un acabado perfecto.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Electricidad',
      description: 'Boletines, iluminación LED, actualización de cuadros eléctricos y nuevas instalaciones bajo normativa vigente.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const comunidades = [
    {
      title: 'Fontanería comunitaria',
      description: 'Mantenimiento de bajantes, sustitución de ascendentes y reparación de grupos de presión y calderas centrales.',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Electricidad',
      description: 'Adecuación a normativa de cuartos de contadores, iluminación eficiente en zonas comunes y mantenimiento general.',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Reparaciones en cubierta',
      description: 'Impermeabilizaciones, reparación de goteras, limpieza de canalones y mantenimiento de tejados y azoteas.',
      image: 'https://images.unsplash.com/photo-1632759162353-194941ee24ff?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Trabajos de pintura',
      description: 'Pintura de escaleras, portales, garajes y zonas comunes exteriores garantizando la mínima molestia a los vecinos.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Actuaciones en fachadas',
      description: 'Rehabilitación de fachadas, aislamiento térmico SATE, reparación de cornisas y revestimientos exteriores.',
      image: 'https://images.unsplash.com/photo-1590069230002-70cc69456651?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Jardinería',
      description: 'Mantenimiento integral de jardines, podas en altura, sistemas de riego automático y diseño de espacios verdes comunitarios.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="bg-slate-50 py-20 overflow-x-hidden">
      {/* Sección Particulares */}
      <section 
        ref={particularesRef}
        id="servicios-particulares" 
        className={`max-w-[1400px] mx-auto px-0 mb-16 overflow-hidden rounded-[2rem] bg-white transition-all duration-[3000ms] transform ${
          isParticularesVisible 
            ? 'translate-y-0 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]' 
            : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Columna Izquierda: Imagen (60%) */}
          <div className="lg:w-[60%] h-[450px] lg:h-[700px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80" 
              alt="Servicios Particulares" 
              className={`w-full h-full object-cover transition-all duration-[4000ms] ease-out ${
                isParticularesVisible ? 'grayscale-0' : 'grayscale'
              }`} 
            />
          </div>

          {/* Columna Derecha: Contenido (40%) */}
          <div className="lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-slate-800 uppercase mb-8 leading-tight text-center">
              SERVICIOS A PARTICULARES
            </h2>
            
            <div className="space-y-6 text-slate-600 max-w-lg mb-12 text-justify px-4 md:px-12">
              <p className="text-sm md:text-base leading-relaxed font-light">
                Con nuestros servicios integrales te ofrecemos soluciones estéticas, funcionales y totalmente personalizadas. Ya sea una reforma integral o una mejora puntual, adaptamos cada espacio a tu estilo y necesidades, combinando técnica, creatividad y atención al detalle.
              </p>
              <p className="text-sm md:text-base leading-relaxed font-light">
                Contamos con especialistas en <span className="font-medium text-slate-800">reformas integrales, electricidad, fontanería y pintura</span>. ¡Transforma tu hogar con estilo y asesoramiento profesional desde el primer plano hasta el último detalle!
              </p>
            </div>

            <a 
              href="#contacto" 
              className="px-8 py-3 border-2 border-slate-900 text-sm font-bold tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase rounded-lg shadow-sm hover:shadow-lg"
            >
              PIDE PRESUPUESTO GRATIS
            </a>
          </div>
        </div>
      </section>

      {/* Sección Comunidades */}
      <section 
        ref={comunidadesRef}
        id="servicios-comunidades" 
        className={`max-w-[1400px] mx-auto px-0 mb-16 overflow-hidden rounded-[2rem] bg-white transition-all duration-[3000ms] transform ${
          isComunidadesVisible 
            ? 'translate-y-0 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]' 
            : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="flex flex-col lg:flex-row-reverse">
          {/* Columna Derecha: Imagen (60%) */}
          <div className="lg:w-[60%] h-[450px] lg:h-[700px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1632759162353-194941ee24ff?auto=format&fit=crop&q=80&w=1200" 
              alt="Servicios Comunidades" 
              className={`w-full h-full object-cover transition-all duration-[4000ms] ease-out ${
                isComunidadesVisible ? 'grayscale-0' : 'grayscale'
              }`} 
            />
          </div>

          {/* Columna Izquierda: Contenido (40%) */}
          <div className="lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-slate-800 uppercase mb-8 leading-tight text-center">
              SERVICIOS A COMUNIDADES
            </h2>
            
            <div className="space-y-6 text-slate-600 max-w-lg mb-12 text-justify px-4 md:px-12">
              <p className="text-sm md:text-base leading-relaxed font-light">
                Ofrecemos un servicio especializado para comunidades de propietarios, asegurando el correcto mantenimiento y valorización de la finca. Nos encargamos de la gestión técnica de todos los gremios para garantizar intervenciones eficaces y duraderas.
              </p>
              <p className="text-sm md:text-base leading-relaxed font-light">
                Nuestros trabajos incluyen <span className="font-medium text-slate-800">fontanería comunitaria, electricidad, reparación de cubiertas, pintura de zonas comunes, fachadas y jardinería integral</span>. ¡Soluciones rápidas y seguras para la tranquilidad de todos los vecinos!
              </p>
            </div>

            <a 
              href="#contacto" 
              className="px-8 py-3 border-2 border-slate-900 text-sm font-bold tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase rounded-lg shadow-sm hover:shadow-lg"
            >
              PIDE PRESUPUESTO GRATIS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

          <div className="p-10 lg:p-16 lg:w-2/5 bg-slate-900 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ponte en contacto</h2>
              <p className="text-slate-300 mb-10 text-lg">
                Cuéntanos sobre tu proyecto o necesidad. Te ofreceremos un presupuesto sin compromiso a la mayor brevedad.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Llámanos</p>
                    <p className="font-semibold text-lg">+34 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Escríbenos</p>
                    <p className="font-semibold text-lg">info@proreformas-madrid.es</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Visítanos</p>
                    <p className="font-semibold text-lg">Calle Ejemplo 123, Madrid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-16 lg:w-3/5 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo electrónico</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="juan@ejemplo.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Asunto (Tipo de servicio)</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                  <option>Reforma Integral</option>
                  <option>Fontanería</option>
                  <option>Electricidad</option>
                  <option>Pintura</option>
                  <option>Servicios para Comunidades</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Describe brevemente lo que necesitas..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors flex justify-center items-center">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
