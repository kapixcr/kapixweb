"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from '@/context/LanguageContext'

const teamMembers = {
  ES: [
    {
      name: "Kenneth Carmona",
      position: "Director de Desarrollo",
      image: "img/KENNETH CARMONA.jpg"
    },
    {
      name: "Jill Hernández",
      position: "Desarrolladora",
      image: "img/JILL HERNANDEZ.jpg"
    },
    {
      name: "Sebastián Rojas",
      position: "Desarrollador Front End",
      image: "img/SEBAS ROJAS.jpg"
    }
  ],
  EN: [
    {
      name: "Kenneth Carmona",
      position: "Development Director",
      image: "img/KENNETH CARMONA.jpg"
    },
    {
      name: "Jill Hernández",
      position: "Developer",
      image: "img/JILL HERNANDEZ.jpg"
    },
    {
      name: "Sebastián Rojas",
      position: "Front End Developer",
      image: "img/SEBAS ROJAS.jpg"
    }
  ]
}

const translations = {
  ES: {
    teamLabel: "Nuestro Equipo",
    title: "Conoce A Nuestros Expertos",
    description: "Un equipo apasionado dedicado a tu éxito profesional."
  },
  EN: {
    teamLabel: "Our Team",
    title: "Meet Our Experts",
    description: "A passionate team dedicated to your professional success."
  }
}

export default function TeamSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl z-0" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-2 shadow-sm">
            {t.teamLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {teamMembers[language].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-[#01c38d]/20 rounded-full filter blur-lg" />
                
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-2"
                >
                  <h3 className="text-lg font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-sm font-medium text-[#01c38d] drop-shadow-sm">{member.position}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}