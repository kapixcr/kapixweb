"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from '@/context/LanguageContext'
import { usePathname } from 'next/navigation'  
import { useState } from "react"

const translations = {
  ES: {
    description: "Transformamos ideas en soluciones digitales excepcionales. Diseño web y desarrollo a medida para hacer crecer tu negocio.",
    schedule: {
      weekdays: "Lunes - Viernes: 8:00 AM - 5:00 PM,",
      weekends: "Sábado - Domingo:",
      closed: "CERRADO"
    },
    menu: "Menú",
    menuItems: {
      home: "Inicio",
      aboutUs: "Sobre Nosotros",
      pricing: "Precio",
      testimonials: "Testimonios",
      blog: "Blog",
      contact: "Contacto",
      services: "Servicios",
      hosting: "Hosting",
      system: "Sistema"
    },
    quickLinks: "Enlaces Rápidos",
    newsletter: {
      title: "Boletín Informativo",
      description: "Suscríbete al boletín semanal de Kapix para recibir las últimas novedades.",
      placeholder: "Ingresa tu correo",
      subscribe: "Suscribirse"
    },
    copyright: "Copyright © Kapix | Todos los Derechos Reservados"
  },
  EN: {
    description: "We transform ideas into exceptional digital solutions. Custom web design and development to grow your business.",
    schedule: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM,",
      weekends: "Saturday - Sunday:",
      closed: "CLOSED"
    },
    menu: "Menu",
    menuItems: {
      home: "Home",
      aboutUs: "About Us",
      pricing: "Pricing",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
      services: "Services",
      hosting: "Hosting",
      system: "System"
    },
    quickLinks: "Quick Links",
    newsletter: {
      title: "Newsletter",
      description: "Subscribe to Kapix's weekly newsletter to receive the latest updates.",
      placeholder: "Enter your email",
      subscribe: "Subscribe"
    },
    copyright: "Copyright © Kapix | All Rights Reserved",
    termsAndConditions: "Terms and Conditions"
  }
}

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const pathname = usePathname()  // Add this

  const isActive = (path: string) => pathname === path
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <footer className="w-full bg-white/70 border-t border-gray-200/50 shadow-sm z-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start py-8 gap-8">
          {/* Logo and Contact Info */}
          <div className="w-full md:w-1/4">
            <div className="flex items-center mb-4">
              <a href="/">
                <Image
                  src="/img/Kapix Logo.png"
                  alt="Kapix Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>

            <p className="text-slate-700 text-sm mb-4">
              {t.description}
            </p>

            <div className="flex items-center text-slate-700 mb-2">
              <a 
                href="https://wa.me/50660641906?text=Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20tu%20servicio.🚀" 
                target="_blank" 
                className="flex items-center hover:text-[#01c38d] transition-colors"
              >
                <i className="fi fi-rr-circle-phone-flip mr-2 text-[#01c38d] flex items-center justify-center w-5 h-5"></i>
                <span className="text-sm">+506 6064-1906</span>
              </a>
            </div>

            <div className="flex items-start text-slate-700">
              <i className="fi fi-rr-clock-three mr-2 mt-1 text-[#01c38d] flex items-center justify-center w-5 h-5"></i>
              <div className="text-sm">
                <p>{t.schedule.weekdays}</p>
                <p>{t.schedule.weekends} <span className="text-[#191e29] font-medium">{t.schedule.closed}</span></p>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 relative inline-block">
              {t.menu}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#01c38d]"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className={`text-sm ${
                    isActive('/') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.home}
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre-nosotros" 
                  className={`text-sm ${
                    isActive('/sobre-nosotros') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.aboutUs}
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)} 
                    className={`text-sm ${
                      isActive('/hosting') || isActive('/sistema') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                    } transition-colors flex items-center gap-1`}
                  >
                    {t.menuItems.services}
                    <i className={`fi fi-rr-angle-small-down text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  <motion.div 
                    className="overflow-hidden"
                    animate={{ height: servicesOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mt-2 space-y-2 pl-4">
                      <Link 
                        href="/hosting" 
                        className={`block text-sm ${
                          isActive('/hosting') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                        } transition-colors`}
                      >
                        {t.menuItems.hosting}
                      </Link>
                      <Link 
                        href="/sistema" 
                        className={`block text-sm ${
                          isActive('/sistema') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                        } transition-colors`}
                      >
                        {t.menuItems.system}
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </li>
              <li>
                <Link 
                  href="/planes" 
                  className={`text-sm ${
                    isActive('/planes') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.pricing}
                </Link>
              </li>
              {/* Testimonials link temporarily disabled
              <li>
                <Link 
                  href="/testimonios" 
                  className={`text-sm ${
                    isActive('/testimonios') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.testimonials}
                </Link>
              </li>
              */}
              <li>
                <Link 
                  href="/blog" 
                  className={`text-sm ${
                    isActive('/blog') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.blog}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className={`text-sm ${
                    isActive('/contacto') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 relative inline-block">
              {t.quickLinks}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#01c38d]"></span>
            </h3>
            <ul className="space-y-2">
              {/* Testimonials link temporarily disabled
              <li>
                <Link 
                  href="/testimonios" 
                  className={`text-sm ${
                    isActive('/testimonios') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.testimonials}
                </Link>
              </li>
              */}
              <li>
                <Link 
                  href="/planes" 
                  className={`text-sm ${
                    isActive('/planes') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.pricing}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className={`text-sm ${
                    isActive('/contacto') ? 'text-[#01c38d] font-medium' : 'text-slate-700 hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.menuItems.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 relative inline-block">
              {t.newsletter.title}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#01c38d]"></span>
            </h3>
            <p className="mb-4 text-slate-700 text-sm">
              {t.newsletter.description}
            </p>
            <div className="flex gap-2 flex-col sm:flex-row w-full">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="w-full px-4 py-2.5 rounded-md sm:rounded-l-md sm:rounded-r-none border border-gray-200 focus:outline-none focus:border-[#01c38d] text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="whitespace-nowrap bg-[#191e29] text-white px-4 py-2.5 rounded-md sm:rounded-l-none sm:rounded-r-md text-sm font-medium hover:bg-[#191e29]/90 transition-all"
              >
                {t.newsletter.subscribe}
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/p/KAPIX-61558702651954/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 text-slate-600 hover:bg-[#01c38d] hover:text-white flex items-center justify-center transition-all"
              >
                <i className="fi fi-brands-facebook text-base flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.instagram.com/kapixlatam?igsh=eWtwODhhZ3ViOHhk"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 text-slate-600 hover:bg-[#01c38d] hover:text-white flex items-center justify-center transition-all"
              >
                <i className="fi fi-brands-instagram text-base flex items-center justify-center"></i>
              </a>
              <a
                href="https://wa.me/50660641906?text=Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20tu%20servicio.🚀"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 text-slate-600 hover:bg-[#01c38d] hover:text-white flex items-center justify-center transition-all"
              >
                <i className="fi fi-brands-whatsapp text-base flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.youtube.com/@Kapix-s6d"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 text-slate-600 hover:bg-[#01c38d] hover:text-white flex items-center justify-center transition-all"
              >
                <i className="fi fi-brands-youtube text-base flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200/50 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm order-1 md:order-1">{t.copyright}</p>
            
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-8 h-8 bg-[#191e29] text-white inline-flex items-center justify-center rounded-md hover:bg-[#191e29]/90 transition-all shadow-lg shadow-[#191e29]/30 hover:shadow-xl hover:shadow-[#191e29]/40 hover:-translate-y-0.5 order-3 md:order-2"
            >
              <i className="fi fi-rr-arrow-up text-base flex items-center justify-center w-full h-full"></i>
            </Link>

            <Link 
              href="/terminos-y-condiciones" 
              className="text-sm text-slate-600 hover:text-[#01c38d] transition-colors order-2 md:order-3"
            >
              {language === 'ES' ? 'Términos & Condiciones' : 'Terms & Conditions'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

