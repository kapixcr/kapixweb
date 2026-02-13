"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from 'next/dynamic'
import { useLanguage } from '@/context/LanguageContext'
import { usePathname } from 'next/navigation'  

const SideMenu = dynamic(() => import("./side-menu"), { ssr: false })

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

export default function MainNavigation() {
  const { language, setLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleLanguage = (lang: 'ES' | 'EN') => {
    setLanguage(lang)
    setLanguageMenuOpen(false)
  }

  const pathname = usePathname()  

  if (!mounted) {
    return null
  }

  const navigationLinks = {
    ES: {
      home: "Inicio",
      about: "Sobre Nosotros",
      pricing: "Precio",
      testimonials: "Testimonios",
      blog: "Blog",
      contact: "Contacto",
      services: "Servicios",
      hosting: "Hosting",
      system: "Sistema",
      portfolio: "Portafolio",
      integrations: "Integraciones"
    },
    EN: {
      home: "Home",
      about: "About Us",
      pricing: "Pricing",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
      services: "Services",
      hosting: "Hosting",
      system: "System",
      portfolio: "Portfolio",
      integrations: "Integrations"
    }
  }

  const isActive = (path: string) => pathname === path

  return (
    <div className="bg-white">
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white",
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-20 h-20 rounded-md flex items-center justify-center mr-2">
                <img src="/img/Kapix Logo.png" alt="Logo" className="w-50 object-contain" />
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                href="/" 
                className={`px-3 py-2 font-medium ${
                  isActive('/') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
                }`}
              >
                {navigationLinks[language].home}
              </Link>
              <Link 
                href="/sobre-nosotros" 
                className={`px-3 py-2 font-medium ${
                  isActive('/sobre-nosotros') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
                }`}
              >
                {navigationLinks[language].about}
              </Link>
              
              {/* Nuevo dropdown de Servicios */}
              <div className="relative">
                <button 
                  onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                  className={`px-3 py-2 font-medium ${
                    isActive('/hosting') || isActive('/sistema') || isActive('/portafolio') || isActive('/integraciones') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
                  } flex items-center`}
                >
                  {navigationLinks[language].services}
                  <i className={`fi fi-rr-angle-small-down ml-1 text-sm transition-transform ${servicesMenuOpen ? 'rotate-180' : ''} flex items-center`}></i>
                </button>
                <AnimatePresence>
                  {servicesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50"
                    >
                      <div className="py-2">
                        <Link 
                          href="/hosting" 
                          className={`block px-4 py-2 text-sm ${
                            isActive('/hosting') ? 'text-[#01c38d] bg-gray-50' : 'text-[#191e29] hover:text-[#01c38d] hover:bg-gray-50'
                          }`}
                        >
                          {navigationLinks[language].hosting}
                        </Link>
                        <Link 
                          href="/sistema" 
                          className={`block px-4 py-2 text-sm ${
                            isActive('/sistema') ? 'text-[#01c38d] bg-gray-50' : 'text-[#191e29] hover:text-[#01c38d] hover:bg-gray-50'
                          }`}
                        >
                          {navigationLinks[language].system}
                        </Link>
                        <Link 
                          href="/integraciones" 
                          className={`block px-4 py-2 text-sm ${
                            isActive('/integraciones') ? 'text-[#01c38d] bg-gray-50' : 'text-[#191e29] hover:text-[#01c38d] hover:bg-gray-50'
                          }`}
                        >
                          {navigationLinks[language].integrations}
                        </Link>
                        <Link 
                          href="/portafolio" 
                          className={`block px-4 py-2 text-sm ${
                            isActive('/portafolio') ? 'text-[#01c38d] bg-gray-50' : 'text-[#191e29] hover:text-[#01c38d] hover:bg-gray-50'
                          }`}
                        >
                          {navigationLinks[language].portfolio}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link 
                href="/planes" 
                className={`px-3 py-2 font-medium ${
                  isActive('/planes') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
                }`}
              >
                {navigationLinks[language].pricing}
              </Link>
              {/* Testimonials link temporarily disabled
              <Link 
                href="/testimonios" 
                className={`px-3 py-2 font-medium ${
                  isActive('/testimonios') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
                }`}
              >
                {navigationLinks[language].testimonials}
              </Link>
              */}
              <Link 
                href="/blog" 
                className={`px-3 py-2 font-medium ${
                  isActive('/blog') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
                }`}
              >
                {navigationLinks[language].blog}
              </Link>
              <Link 
                href="/contacto" 
                className={`px-3 py-2 font-medium ${
                  isActive('/contacto') ? 'text-[#01c38d]' : 'text-[#191e29] hover:text-[#01c38d]'
                }`}
              >
                {navigationLinks[language].contact}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    languageMenuOpen ? 'bg-[#01c38d] text-white' : 'bg-gray-100 text-[#191e29]'
                  }`}
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                >
                  <span className="font-medium">{language}</span>
                </button>
                <AnimatePresence>
                  {languageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg z-50"
                    >
                      <div className="py-1">
                        <motion.button
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          onClick={() => toggleLanguage("ES")}
                          className={`block w-full px-4 py-2 text-sm ${
                            language === "ES" ? "bg-[#01c38d] text-white" : "text-gray-700"
                          }`}
                        >
                          ES
                        </motion.button>
                        <motion.button
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          onClick={() => toggleLanguage("EN")}
                          className={`block w-full px-4 py-2 text-sm ${
                            language === "EN" ? "bg-[#01c38d] text-white" : "text-gray-700"
                          }`}
                        >
                          EN
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#191e29] hover:bg-[#01c38d] hover:text-white transition-colors"
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                aria-label="Abrir Menú"
              >
                <i className="fi fi-rr-menu-burger text-lg flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        </div>

      </header>

      <AnimatePresence>
        {sideMenuOpen && mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#191e29]/40 backdrop-blur-sm z-40"
            onClick={() => setSideMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {mounted && <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />}
    </div>
  )
}
