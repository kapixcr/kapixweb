"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'

const testimonials = [
  {
    id: 1,
    name: "Katie Rose",
    role: {
      ES: "CEO, Parkview Int. Ltd.",
      EN: "CEO, Parkview Int. Ltd."
    },
    image: "/img/User-girl.jpg",
    content: {
      ES: "Genera cientos de copias útiles para tu producto específico y audiencia con el mínimo esfuerzo.",
      EN: "It generates hundreds of useful copies for your specific product and audience with minimal effort."
    },
    rating: 4
  },
  {
    id: 2,
    name: "John Smith",
    role: {
      ES: "Director de Marketing",
      EN: "Marketing Director"
    },
    image: "/img/User-man.jpg",
    content: {
      ES: "El sistema es muy intuitivo y nos ha ayudado a mejorar significativamente nuestra productividad.",
      EN: "The system is very intuitive and has helped us significantly improve our productivity."
    },
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: {
      ES: "Gerente de Producto",
      EN: "Product Manager"
    },
    image: "/img/User-girl.jpg",
    content: {
      ES: "Una herramienta excepcional que ha transformado la manera en que gestionamos nuestros proyectos.",
      EN: "An exceptional tool that has transformed the way we manage our projects."
    },
    rating: 4
  },
  {
    id: 4,
    name: "Michael Brown",
    role: {
      ES: "Desarrollador Principal",
      EN: "Lead Developer"
    },
    image: "/img/User-man.jpg",
    content: {
      ES: "La integración fue sencilla y el soporte técnico es excelente. Totalmente recomendado.",
      EN: "Integration was simple and technical support is excellent. Highly recommended."
    },
    rating: 5
  },
  {
    id: 5,
    name: "Emily Davis",
    role: {
      ES: "Diseñadora UX",
      EN: "UX Designer"
    },
    image: "/img/User-girl.jpg",
    content: {
      ES: "Una solución completa que ha simplificado enormemente nuestros procesos empresariales.",
      EN: "A complete solution that has greatly simplified our business processes."
    },
    rating: 4
  },
  {
    id: 6,
    name: "David Wilson",
    role: {
      ES: "Líder Técnico",
      EN: "Tech Lead"
    },
    image: "/img/User-man.jpg",
    content: {
      ES: "La mejor inversión que hemos hecho para mejorar la eficiencia de nuestro equipo.",
      EN: "The best investment we've made to improve our team's efficiency."
    },
    rating: 5
  }
]

export default function TestimonialSlider() {
  const { language } = useLanguage()
  const [currentGroup, setCurrentGroup] = useState(0)
  const groupSize = 3
  const totalGroups = Math.ceil(testimonials.length / groupSize)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups)
    }, 8000) // Aumentado de 5000 a 8000ms
    return () => clearInterval(timer)
  }, [])

  const nextGroup = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups)
  }

  const prevGroup = () => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups)
  }

  const getCurrentGroup = () => {
    const start = currentGroup * groupSize
    return testimonials.slice(start, start + groupSize)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#01c38d]/5 to-white" />
      <div className="container mx-auto px-4 relative">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-2 shadow-sm">
          {language === 'ES' ? 'Testimonios' : 'Testimonials'}
        </span>
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
          {language === 'ES' ? 'Lo Que Dicen Nuestros Clientes' : 'What Our Clients Say'}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'ES' 
            ? 'Descubre las experiencias de quienes ya confían en nosotros.'
            : 'Discover the experiences of those who already trust us.'}
        </p>
      </div>

        {/* Rest of the testimonial slider */}
        <div className="max-w-6xl mx-auto relative">
          <button
            onClick={prevGroup}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors flex items-center justify-center text-[#01c38d] cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {getCurrentGroup().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/50"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <p className="text-gray-600 text-lg mb-6 italic">
                      "{testimonial.content[language]}"
                    </p>
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "text-[#01c38d]" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-[#191e29] font-bold text-xl">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role[language]}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextGroup}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors flex items-center justify-center text-[#01c38d] cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalGroups)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGroup(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentGroup === index ? "bg-[#01c38d] w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}