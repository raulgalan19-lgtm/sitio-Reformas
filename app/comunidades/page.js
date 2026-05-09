"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';

const services = [
  { 
    title: "Electricidad", 
    image: "/electricidad.jpg",
    details: [
      "Instalaciones nuevas",
      "Cuadros eléctricos",
      "Iluminación LED",
      "Boletines técnicos",
      "Averías urgentes"
    ]
  },
  { 
    title: "Fontanería", 
    image: "/fontaneria_1.jpg",
    details: [
      "Bajantes comunes",
      "Grupos presión",
      "Fugas de agua",
      "Calderas centrales",
      "Desatascos"
    ]
  },
  { 
    title: "Cubiertas", 
    image: "/cubiertacom.jpg",
    details: [
      "Goteras tejado",
      "Canalones limpieza",
      "Impermeabilización",
      "Aislamiento térmico",
      "Mantenimiento anual"
    ]
  },
  { 
    title: "Fachadas", 
    image: "/fachadacom.jpg",
    details: [
      "Pintura exterior",
      "Sistema SATE",
      "Rehabilitación total",
      "Limpieza piedra",
      "Cornisas reparación"
    ]
  },
  { 
    title: "Pintura", 
    image: "/pinturacom.jpg",
    details: [
      "Portales escaleras",
      "Garajes suelos",
      "Zonas comunes",
      "Alisado paredes",
      "Barnizado madera"
    ]
  },
];

export default function Comunidades() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Soluciones integrales para comunidades de vecinos
            </h1>
            <div className="w-20 h-1.5 bg-blue-600 mt-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-500 font-light text-lg leading-relaxed pt-2"
          >
            <p>
              En ReformasJG proveemos una amplia variedad de servicios que satisfacen todas las necesidades de tu comunidad. Nuestro enfoque integral asegura la gestión eficiente y el mantenimiento impecable de los espacios comunes, garantizando la tranquilidad de todos los vecinos.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveService(activeService === service.title ? null : service.title)}
              className={`group relative h-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 ${
                activeService === service.title ? 'ring-2 ring-blue-500 shadow-2xl' : ''
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105 ${
                  service.title === "Pintura" || activeService === service.title ? "grayscale-0" : "grayscale"
                }`}
              />
              
              {/* Overlay Gradiente (Standard) */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                activeService === service.title ? 'opacity-0' : 'opacity-80 group-hover:opacity-60'
              }`}></div>
              
              {/* Texto al pie (Standard) */}
              <div className={`absolute bottom-0 left-0 right-0 p-8 text-center transition-all duration-500 ${
                activeService === service.title ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
              }`}>
                <h3 className="text-xl font-bold text-white uppercase tracking-widest drop-shadow-md transform group-hover:scale-110 transition-transform duration-500">
                  {service.title}
                </h3>
                
                {/* Texto "más info" */}
                <div className="flex flex-col items-center mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-1">
                    más info
                  </span>
                  <Plus className="w-3 h-3 text-blue-400" />
                </div>

                <div className="w-10 h-0.5 bg-blue-500 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Efecto Especial: Panel de Detalles (Fondo Blanco + Texto) */}
              <AnimatePresence>
                {activeService === service.title && (
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute inset-0 bg-white p-10 flex flex-col justify-center items-center text-center z-20"
                  >
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveService(null); }}
                      className="absolute top-6 right-6 p-2 text-slate-300 hover:text-slate-900 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-10">
                      Trabajos de {service.title}
                    </h3>
                    
                    <ul className="space-y-5 w-full">
                      {service.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.6,
                            delay: 0.4 + idx * 0.2,
                            ease: "easeOut"
                          }}
                          className="text-slate-500 font-light text-base flex items-center justify-center gap-3 whitespace-nowrap"
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></div>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="mt-12"
                    >
                      <div className="w-12 h-1 bg-slate-50 rounded-full mx-auto"></div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Gardening Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 mb-20 bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-stretch">
            
            {/* Columna Izquierda: Texto */}
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Servicios adicionales</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
                ..también realizamos servicios de jardinería..
              </h2>
              <p className="text-slate-500 font-light text-lg mb-10 leading-relaxed max-w-2xl">
                Cuidamos de los espacios verdes de su comunidad con la misma profesionalidad y atención al detalle que aplicamos en nuestras reformas técnicas. Un jardín sano y cuidado es la mejor carta de presentación para su edificio.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Mantenimiento de praderas",
                  "Poda selectiva y limpieza",
                  "Sistemas de riego automático",
                  "Control fitosanitario",
                  "Abonado y resembrado",
                  "Diseño y paisajismo"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 group">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-light text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Imagen */}
            <div className="relative min-h-[400px] lg:min-h-full">
              <img 
                src="/jardineriacom.jpg" 
                alt="Servicios de Jardinería" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-50/20"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
