"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'
import { usePathname } from 'next/navigation'  
import { useState } from "react"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const { language } = useLanguage()

  const translations = {
    ES: {
      description: "En Kapix ERP, apostamos por un futuro donde la innovación transforme la forma de hacer negocios. Nuestra solución tecnológica está pensada para facilitar la transformación digital, permitiendo a las empresas mejorar su eficiencia y productividad de manera sencilla y efectiva.",
      home: "Inicio",
      about: "Sobre Nosotros",
      pricing: "Precio",
      testimonials: "Testimonios",
      blog: "Blog",
      contact: "Contacto",
      contactUs: "CONTÁCTANOS",
      whatsappMessage: "Hola me gustaría obtener más información sobre tu servicio.🚀",
      services: "Servicios",
      hosting: "Hosting",
      system: "Sistema"
    },
    EN: {
      description: "At Kapix ERP, we bet on a future where innovation transforms the way of doing business. Our technological solution is designed to facilitate digital transformation, allowing companies to improve their efficiency and productivity in a simple and effective way.",
      home: "Home",
      about: "About Us",
      pricing: "Pricing",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
      contactUs: "CONTACT US",
      whatsappMessage: "Hello, I would like to get more information about your service.🚀",
      services: "Services",
      hosting: "Hosting",
      system: "System"
    }
  }

  const t = translations[language]

  const pathname = usePathname()  // Add this
  
  const isActive = (path: string) => pathname === path

  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <motion.div
      className="fixed inset-y-0 left-0 z-[9999] w-64 bg-white shadow-xl overflow-y-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#191e29] [&::-webkit-scrollbar-thumb]:rounded-[20px]"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#191e29 transparent',
      }}
    >
      <div className="p-6">
        {/* Logo and close button remain unchanged */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <a href="/">
              <img src="/img/Kapix Logo.png" alt="Kapix Icon" className="w-24" />
            </a>
          </div>
          <motion.button
            onClick={onClose}
            className="text-gray-500 hover:text-[#01c38d] flex items-center justify-center w-8 h-8"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fi fi-rr-cross text-xl flex items-center justify-center"></i>
          </motion.button>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg mb-6">
          <p className="text-xs leading-relaxed text-gray-600">
            <span className="font-medium text-[#01c38d]">Kapix ERP</span>, {t.description}
          </p>
        </div>

        <nav className="space-y-5">
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link 
              href="/" 
              className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                isActive('/') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
              } transition-colors`}
            >
              {t.home}
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link 
              href="/sobre-nosotros" 
              className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                isActive('/sobre-nosotros') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
              } transition-colors`}
            >
              {t.about}
            </Link>
          </motion.div>
          <div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <div className="relative">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)} 
                  className={`font-medium text-lg border-b border-gray-100 pb-2 w-full text-left flex items-center justify-between ${
                    isActive('/hosting') || isActive('/sistema') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
                  } transition-colors`}
                >
                  {t.services}
                  <i className={`fi fi-rr-angle-small-down text-sm transition-transform ${servicesOpen ? 'rotate-180' : ''} flex items-center ml-1`}></i>
                </button>
                <motion.div 
                  className="overflow-hidden"
                  animate={{ height: servicesOpen ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="py-2 space-y-2 pl-4">
                    <Link 
                      href="/hosting" 
                      className={`block px-4 py-2 text-sm ${
                        isActive('/hosting') ? 'text-[#01c38d] bg-gray-50' : 'text-[#191e29] hover:text-[#01c38d] hover:bg-gray-50'
                      }`}
                    >
                      {t.hosting}
                    </Link>
                    {/* System link temporarily disabled
                    <Link 
                      href="/sistema" 
                      className={`block px-4 py-2 text-sm ${
                        isActive('/sistema') ? 'text-[#01c38d] bg-gray-50' : 'text-[#191e29] hover:text-[#01c38d] hover:bg-gray-50'
                      }`}
                    >
                      {t.system}
                    </Link>
                    */}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link 
              href="/planes" 
              className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                isActive('/planes') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
              } transition-colors`}
            >
              {t.pricing}
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link 
              href="/blog" 
              className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                isActive('/blog') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
              } transition-colors`}
            >
              {t.blog}
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link 
              href="/contacto" 
              className={`block font-medium text-lg border-b border-gray-100 pb-2 ${
                isActive('/contacto') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
              } transition-colors`}
            >
              {t.contact}
            </Link>
          </motion.div>
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-bold text-[#191e29] mb-4">{t.contactUs}</h3>
          <div className="space-y-3">
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <Link 
                href={`https://wa.me/50660641906?text=${encodeURIComponent(t.whatsappMessage)}`} 
                target="_blank" 
                className="flex items-center text-gray-600 hover:text-[#01c38d]"
              >
                <span className="w-8 h-8 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] inline-flex items-center justify-center">
                  <i className="fi fi-rr-circle-phone text-sm flex items-center justify-center w-full h-full"></i>
                </span>
                +506 6064-1906
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <Link href="mailto:info@kapix.co.cr" target="_blank" className="flex items-center text-gray-600 hover:text-[#01c38d]">
                <span className="w-8 h-8 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] inline-flex items-center justify-center">
                  <i className="fi fi-rr-envelope text-sm flex items-center justify-center w-full h-full"></i>
                </span>
                info@kapix.co.cr
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

