"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Particulares() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Descripción */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <header>
              <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
                PRESUPUESTO Y ASESORAMIENTO GRATUITO
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Servicios a particulares
              </h1>
              <div className="w-16 h-1 bg-blue-500 mb-8"></div>
            </header>

            <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
              <p>
                En ReformasJG nos enorgullece destacar por la calidad de nuestros servicios y la profesionalidad de nuestro equipo. Nos aseguramos de trabajar siempre con materiales de primera calidad y de utilizar las técnicas más avanzadas en cada proyecto que emprendemos.
              </p>
              <p>
                Además, entendemos que la limpieza es un aspecto fundamental en cualquier reforma, por lo que nos esforzamos por mantener un ambiente limpio y ordenado en todo momento. Nuestro equipo de profesionales se encarga de la limpieza diaria y de la eliminación de escombros y residuos generados durante el proceso de la reforma.
              </p>
              <p>
                La seriedad y el compromiso son valores esenciales para nosotros. Nos aseguramos de cumplir siempre con los plazos establecidos y con las expectativas de nuestros clientes. Trabajamos con transparencia y honestidad, para que nuestros clientes siempre se sientan informados y respaldados en cada etapa del proceso.
              </p>
              <p>
                Nos esforzamos por superar las expectativas de nuestros clientes y por ofrecer un servicio que no solo transforme sus hogares, sino que también les brinde tranquilidad y confianza en cada paso del camino.
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: Imagen */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl"
          >
            <img 
              src="/fontaneria.jpg" 
              alt="Servicio de fontanería" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

        </div>

        {/* Sección de Servicios Específicos (Grid 4 columnas, 2 filas) */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-12 items-stretch"
          >
            
            {/* Fila 1: Electricidad */}
            <div className="flex justify-center items-center bg-white p-8">
              <div className="w-56 h-56 flex items-center justify-center">
                <img src="/icono_electricidad.png" alt="Electricidad" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div className="bg-slate-100 p-8 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">Electricidad</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Instalaciones completas</li>
                <li>• Boletines y certificados</li>
                <li>• Iluminación LED</li>
                <li>• Cuadros eléctricos</li>
                <li>• Averías 24h</li>
              </ul>
            </div>

            {/* Fila 1: Fontanería */}
            <div className="flex justify-center items-center bg-white p-8">
              <div className="w-56 h-56 flex items-center justify-center">
                <img src="/icono_fontaneria.png" alt="Fontanería" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div className="bg-slate-100 p-8 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">Fontanería</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Cambio de tuberías</li>
                <li>• Sanitarios y grifería</li>
                <li>• Fugas y humedades</li>
                <li>• Calefacción</li>
                <li>• Desatascos</li>
              </ul>
            </div>

            {/* Fila 2: Pintura */}
            <div className="flex justify-center items-center bg-white p-8">
              <div className="w-56 h-56 flex items-center justify-center">
                <img src="/icono_pintura.png" alt="Pintura" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div className="bg-slate-100 p-8 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">Pintura</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Alisado de paredes</li>
                <li>• Pintura plástica</li>
                <li>• Papel pintado</li>
                <li>• Barnizados y lacados</li>
                <li>• Pintura decorativa</li>
              </ul>
            </div>

            {/* Fila 2: Albañilería */}
            <div className="flex justify-center items-center bg-white p-8">
              <div className="w-56 h-56 flex items-center justify-center">
                <img src="/icono_albañileria.png" alt="Albañilería" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div className="bg-slate-100 p-8 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">Albañilería</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Alicatados de baños</li>
                <li>• Tabiquería</li>
                <li>• Solados y pavimentos</li>
                <li>• Yesos y escayolas</li>
                <li>• Instalaciones de Pladur</li>
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
