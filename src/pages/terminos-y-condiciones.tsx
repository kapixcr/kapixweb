"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from '@/context/LanguageContext'

const translations = {
  ES: {
    title: "TÉRMINOS Y CONDICIONES",
    home: "INICIO",
    current: "TÉRMINOS",
    lastUpdated: "Última actualización:",
    content: {
      intro: "Bienvenido a Kapix. Al acceder y utilizar nuestros servicios, aceptas los siguientes términos y condiciones:",
      sections: [
        {
          title: "1. Uso del Servicio",
          content: "Nuestros servicios están diseñados para uso profesional y empresarial. Te comprometes a utilizar el servicio de manera responsable y legal."
        },
        {
          title: "2. Privacidad y Datos",
          content: "Protegemos tu información personal según nuestra política de privacidad. Los datos son tratados con máxima seguridad y confidencialidad."
        },
        {
          title: "3. Derechos de Propiedad",
          content: "Todo el contenido y software de Kapix está protegido por derechos de autor y otras leyes de propiedad intelectual."
        }
      ]
    }
  },
  EN: {
    title: "TERMS AND CONDITIONS",
    home: "HOME",
    current: "TERMS",
    lastUpdated: "Last updated:",
    content: {
      intro: "Welcome to Kapix. By accessing and using our services, you agree to the following terms and conditions:",
      sections: [
        {
          title: "1. Service Usage",
          content: "Our services are designed for professional and business use. You commit to using the service responsibly and legally."
        },
        {
          title: "2. Privacy and Data",
          content: "We protect your personal information according to our privacy policy. Data is treated with maximum security and confidentiality."
        },
        {
          title: "3. Property Rights",
          content: "All Kapix content and software is protected by copyright and other intellectual property laws."
        }
      ]
    }
  }
}

export default function TermsAndConditions() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/TÉRMINOS.jpg" 
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h1>
            
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
                  <i className="fi fi-rr-document text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.current}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-slate-600">
            <p className="mb-4 font-medium">
              {t.lastUpdated} {new Date().toLocaleDateString()}
            </p>
            <p className="text-lg">{t.content.intro}</p>
          </div>

          <div className="space-y-12">
            {t.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
              >
                <h2 className="text-2xl font-semibold text-[#191e29] mb-4">{section.title}</h2>
                <p className="text-slate-600 text-lg">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}