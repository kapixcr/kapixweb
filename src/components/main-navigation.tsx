"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Grid } from "lucide-react"
import MobileMenu from "./mobile-menu"
import SideMenu from "./side-menu"

// Utility function for conditional class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

export default function MainNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const [language, setLanguage] = useState("ES")
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)

  const toggleLanguage = (lang: React.SetStateAction<string>) => {
    setLanguage(lang)
    setLanguageMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white",
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="./Kapix.png" className="flex items-center">
              <div className="w-20 h-20 rounded-md flex items-center justify-center mr-2">
                <img src="/img/Kapix Logo.png" alt="Logo" className="w-50 h-50 object-contain" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link href="/" className="px-3 py-2 text-[#191e29] hover:text-[#01c38d] font-medium">
                Inicio
              </Link>
              <Link href="/sobre-nosotros" className="px-3 py-2 text-[#191e29] hover:text-[#01c38d] font-medium">
                Sobre Nosotros
              </Link>
              <Link href="/planes" className="px-3 py-2 text-[#191e29] hover:text-[#01c38d] font-medium">
                Planes
              </Link>
              <Link href="/testimonios" className="px-3 py-2 text-[#191e29] hover:text-[#01c38d] font-medium">
                Testimonios
              </Link>
              <Link href="/blog" className="px-3 py-2 text-[#191e29] hover:text-[#01c38d] font-medium">
                Blog
              </Link>
              <Link href="/contacto" className="px-3 py-2 text-[#191e29] hover:text-[#01c38d] font-medium">
                Contacto
              </Link>
            </nav>

            {/* User and Menu Icons */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#191e29]/10 text-[#01c38d] flex items-center justify-center"
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
                          className="block w-full px-4 py-2 text-sm text-gray-700 text-center"
                        >
                          ES
                        </motion.button>
                        <motion.button
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          onClick={() => toggleLanguage("EN")}
                          className="block w-full px-4 py-2 text-sm text-gray-700 text-center"
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
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                className="md:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#191e29]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={mobileMenuOpen} />
      </header>

      {/* Overlay with glassmorphism effect */}
      <AnimatePresence>
        {sideMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#191e29]/40 backdrop-blur-sm z-40"
            onClick={() => setSideMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Side Menu */}
      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />
    </>
  )
}

