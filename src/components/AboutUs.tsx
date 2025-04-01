"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'

export default function AboutUs() {
  const { language } = useLanguage()

  const translations = {
    ES: {
      yearsExperience: "Años de Experiencia",
      knowUs: "Conócenos",
      title: "Innovación en Software ERP",
      description: "Kapix es una empresa de desarrollo de Software ERP, que busca innovar y colocar tecnología moderna en el sistema empresarial con la ayuda de grandes expertos en el área. Queremos llevar a nuestros clientes a un viaje al futuro mejorando su eficiencia.",
      features: [
        'Soluciones personalizadas para cada empresa',
        'Tecnología moderna e innovadora',
        'Expertos comprometidos con tu éxito'
      ],
      companyCreator: "Equipo Kapix",
      seeMore: "Ver más"
    },
    EN: {
      yearsExperience: "Years of Experience",
      knowUs: "About Us",
      title: "Innovation in ERP Software",
      description: "Kapix is an ERP Software development company that seeks to innovate and implement modern technology in business systems with the help of great experts in the field. We want to take our clients on a journey to the future by improving their efficiency.",
      features: [
        'Customized solutions for each company',
        'Modern and innovative technology',
        'Experts committed to your success'
      ],
      companyCreator: "Team Kapix",
      seeMore: "See More"
    }
  }

  const t = translations[language]

  return (
    <section className="container mx-auto py-12 px-4 md:px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side with images */}
        <div className="relative">
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden">
            <div className="absolute inset-0 p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/img/ABOUT-US.png"
                  alt="Kapix Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute left-4 -bottom-4 md:bottom-8 bg-[#01c38d] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
              </svg>
              <div className="flex flex-col">
                <motion.span 
                  className="text-lg font-bold leading-none"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  2+
                </motion.span>
                <span className="text-xs mt-0.5">{t.yearsExperience}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="space-y-6 lg:pl-4">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-2 shadow-sm">
              {t.knowUs}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-gray-600 max-w-xl">
              {t.description}
            </p>
          </div>

          <ul className="space-y-3">
            {t.features.map((text, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-[#01c38d]/10 p-1.5 rounded-full text-[#01c38d]">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-gray-600">{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 pt-3">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/img/User-man.jpg"
                  alt="Kapix"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-[#191e29]">Kapix</div>
                <div className="text-sm text-gray-500">{t.companyCreator}</div>
              </div>
            </div>

            <motion.button
              onClick={() => window.location.href = '/sobre-nosotros'}
              whileHover={{ scale: 1.05 }}
              className="bg-[#01c38d] text-white px-6 py-3 rounded-md font-medium hover:bg-[#01c38d]/90 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 cursor-pointer"
            >
              {t.seeMore}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

