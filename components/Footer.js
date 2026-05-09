import React from 'react';

const Footer = () => (
  <footer className="bg-slate-950 py-12 border-t border-slate-800 text-center md:text-left">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <span className="text-2xl font-bold text-white tracking-tight mb-4 inline-block">
          Reformas<span className="text-red-500">JG</span>
        </span>
        <p className="text-slate-400 text-sm max-w-sm mx-auto md:mx-0">
          Ofrecemos soluciones integrales en reformas, electricidad, pintura y fontanería para particulares y comunidades de propietarios en Madrid.
        </p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
        <ul className="space-y-2 text-sm text-slate-400">
          <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a></li>
          <li><a href="#servicios-particulares" className="hover:text-blue-400 transition-colors">Particulares</a></li>
          <li><a href="#servicios-comunidades" className="hover:text-blue-400 transition-colors">Comunidades</a></li>
          <li><a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Legal</h4>
        <ul className="space-y-2 text-sm text-slate-400">
          <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
      <p>© {new Date().getFullYear()} ReformasJG Madrid. Todos los derechos reservados.</p>
      <p className="mt-2 md:mt-0">Diseñado con Tailwind CSS y React</p>
    </div>
  </footer>
);

export default Footer;
