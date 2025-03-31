"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamSection from "@/components/TeamSection"
import { useLanguage } from '@/context/LanguageContext'
import { InstagramEmbed } from 'react-social-media-embed';

const slides = [

  {
    title: "Misión",
    content: "Transformar la gestión empresarial a través de soluciones tecnológicas innovadoras que impulsen el crecimiento y éxito de nuestros clientes.",
    icon: "fi fi-rr-target"
  },
  {
    title: "Visión",
    content: "Ser líderes globales en software empresarial, reconocidos por nuestra excelencia en innovación y el impacto positivo en el éxito de nuestros clientes.",
    icon: "fi fi-rr-eye"
  },
  {
    title: "Valores",
    content: "Innovación, Excelencia, Integridad, Colaboración, Compromiso con el Cliente",
    icon: "fi fi-rr-star"
  }
]

const translations = {
  ES: {
    aboutUs: "SOBRE NOSOTROS",
    home: "INICIO",
    us: "NOSOTROS",
    instagram: {
      label: "Nuestro Instagram",
      title: "Conecta Con Nuestra Comunidad",
      description: "Mantente al día con nuestras últimas actualizaciones y contenido exclusivo."
    },
    slides: [
      {
        title: "Misión",
        content: "Facilitar la transformación digital de las empresas a través de soluciones ERP innovadoras y personalizadas, impulsando su eficiencia y competitividad en un entorno empresarial en constante evolución.",
        icon: "fi fi-rr-target"
      },
      {
        title: "Visión",
        content: "Ser reconocidos como líderes en el desarrollo de software ERP, transformando la manera en que las empresas operan y toman decisiones, y estableciendo estándares de excelencia en innovación y atención al cliente.",
        icon: "fi fi-rr-eye"
      },
      {
        title: "Valores",
        content: "Innovación, Excelencia, Integridad, Colaboración, Compromiso con el Cliente",
        icon: "fi fi-rr-star"
      }
    ]
  },
  EN: {
    aboutUs: "ABOUT US",
    home: "HOME",
    us: "US",
    instagram: {
      label: "Our Instagram",
      title: "Connect With Our Community",
      description: "Stay up to date with our latest updates and exclusive content."
    },
    slides: [
      {
        title: "Mission",
        content: "Facilitate the digital transformation of companies through innovative and customized ERP solutions, driving their efficiency and competitiveness in an ever-evolving business environment.",
        icon: "fi fi-rr-target"
      },
      {
        title: "Vision",
        content: "To be recognized as leaders in ERP software development, transforming the way companies operate and make decisions, and setting standards of excellence in innovation and customer service.",
        icon: "fi fi-rr-eye"
      },
      {
        title: "Values",
        content: "Innovation, Excellence, Integrity, Collaboration, Customer Commitment",
        icon: "fi fi-rr-star"
      }
    ]
  }
}

// Update the component to use translations
export default function SobreNosotros() {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeSlide, setActiveSlide] = useState(0)
  const [currentInstagramPage, setCurrentInstagramPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true) // Add this line

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInstagramPage((prev) => (prev + 1) % 2)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/SOBRE_NOSOTROS.jpeg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.aboutUs}</h1>
            
            <div className="inline-flex items-center bg-black/30 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10">
              <a href="/" className="flex items-center text-white hover:text-[#01c38d] transition-colors">
                <div className="flex items-center justify-center h-6 w-6 mr-2">
                  <i className="fi fi-rr-house-chimney text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.home}</span>
              </a>
              
              <div className="h-5 w-px bg-white/30 mx-3"></div>
              
              <div className="flex items-center text-[#01c38d]">
                <div className="flex items-center justify-center h-6 w-6 mr-2">
                  <i className="fi fi-rr-users text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.us}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/img/Logo Reveal.gif" 
                alt="About Us" 
                className="rounded-xl shadow-lg w-full h-[380px] object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-5">
                {t.slides.map((slide, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl bg-white shadow-md overflow-hidden"
                    initial={false}
                  >
                    <button
                      onClick={() => setActiveSlide(activeSlide === index ? -1 : index)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-gray-50"
                    >
                      <i className={`${slide.icon} text-[#01c38d] text-xl`}></i>
                      <span className="text-lg font-medium text-[#191e29]">{slide.title}</span>
                    </button>
                    <motion.div
                      animate={{ height: activeSlide === index ? "auto" : 0 }}
                      className="overflow-hidden bg-[#01c38d]/5"
                    >
                      <p className="p-4 text-gray-600">{slide.content}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agregar el Team Section */}
      <TeamSection />

      {/* Instagram Feed */}
      <section className="py-20 bg-gradient-to-b from-white to-[#01c38d]/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#191e29] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              {t.instagram.label}
            </span>
            <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent mb-4">
              {t.instagram.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.instagram.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Added a wrapper div with fixed aspect ratio and overflow handling */}
            <div className="aspect-[4/5] relative bg-white rounded-xl shadow-md overflow-hidden">
              <div className="absolute inset-0">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/DH3m5MiOx6N/?igsh=MW5paTIxa3dzbG1n"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="aspect-[4/5] relative bg-white rounded-xl shadow-md overflow-hidden">
              <div className="absolute inset-0">
                <InstagramEmbed 
                  url="https://www.instagram.com/p/DHrv344PAx8/?igsh=MWFqYjE3OHFseWU4aA=="
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="aspect-[4/5] relative bg-white rounded-xl shadow-md overflow-hidden">
              <div className="absolute inset-0">
                <InstagramEmbed 
                  url="https://www.instagram.com/reel/DHcaAtwstnd/?igsh=MXc3OWlkMW0yZXlsag=="
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
  )
    </>
  )
}

