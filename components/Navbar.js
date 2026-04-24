import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Página de Inicio', href: '#inicio' },
    {
      name: 'Servicios particulares',
      href: '#servicios-particulares',
      dropdown: ['Reformas integrales', 'Fontanería', 'Pintura', 'Electricidad']
    },
    {
      name: 'Servicios comunidades',
      href: '#servicios-comunidades',
      dropdown: ['Fontanería', 'Electricidad', 'Reparaciones en cubierta', 'Trabajos de pintura', 'Actuaciones en fachadas']
    },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-slate-800 tracking-tight">
              Pro<span className="text-blue-600">Reformas</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  className="text-slate-600 hover:text-blue-600 font-medium flex items-center transition-colors py-2"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </a>
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="pt-4">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                        {link.dropdown.map((item) => (
                          <a 
                            key={item} 
                            href={link.href} 
                            className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="pl-6 pb-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href={link.href}
                        className="block px-3 py-2 text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        - {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
