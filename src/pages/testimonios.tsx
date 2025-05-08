"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from '@/context/LanguageContext'
import Head from 'next/head'

const companyLogos = [
  { id: 1, src: "/img/KATALVA.png", alt: "Katalva" },
  { id: 2, src: "/img/NOVOSTI.png", alt: "Novosti" },
  { id: 3, src: "/img/PLAGAS QUINTERO.png", alt: "Plagas Quintero" },
  { id: 4, src: "/img/LA GATA CR.png", alt: "La Gata CR" },
  { id: 5, src: "/img/TECNIPLAGAS.png", alt: "Tecniplagas" },
]

export default function TestimoniosPage() {
  const { language } = useLanguage()
  const [isPaused, setIsPaused] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(0)


  const translations = {
    ES: {
      testimonials: "TESTIMONIOS",
      home: "INICIO",
      knowUs: "NUESTROS CLIENTES",
      title: "Lo Que Dicen Nuestros Clientes",
      description: "Descubre las experiencias de quienes han confiado en nuestras soluciones y han transformado sus negocios con nuestra tecnología.",
      testimonials_data: [
        {
          name: "Alejandro Ruiz",
          role: "Director de Innovación Digital",
          image: "/img/User-man.jpg",
          content: "La integración del CRM ha revolucionado nuestra gestión de clientes. El soporte es excepcional.",
          rating: 5
        },
        {
          name: "Carmen Vásquez",
          role: "Gerente de Proyectos TI",
          image: "/img/User-girl.jpg",
          content: "El módulo de gestión de proyectos es robusto y flexible. Perfecto para equipos grandes.",
          rating: 5
        },
        {
          name: "Ricardo Montero",
          role: "Consultor Empresarial",
          image: "/img/User-man.jpg",
          content: "La plataforma ha optimizado nuestros procesos de facturación y gestión de contratos.",
          rating: 5
        },
        {
          name: "Isabel Moreno",
          role: "Directora de Operaciones",
          image: "/img/User-girl.jpg",
          content: "El sistema de tickets de soporte ha mejorado significativamente nuestra atención al cliente.",
          rating: 5
        },
        {
          name: "Fernando Torres",
          role: "Empresario Tech",
          image: "/img/User-man.jpg",
          content: "Las herramientas de análisis y reportes son fundamentales para nuestras decisiones.",
          rating: 5
        },
        {
          name: "Lucía Ramírez",
          role: "Gerente de Ventas",
          image: "/img/User-girl.jpg",
          content: "El punto de venta integrado ha simplificado enormemente nuestras operaciones diarias.",
          rating: 5
        },
        {
          name: "Gabriel Herrera",
          role: "Director de Tecnología",
          image: "/img/User-man.jpg",
          content: "La gestión de inventario en tiempo real nos ha ayudado a optimizar recursos.",
          rating: 5
        },
        {
          name: "Valentina Díaz",
          role: "Coordinadora de Marketing",
          image: "/img/User-girl.jpg",
          content: "El Email Canvas ha transformado nuestra estrategia de comunicación digital.",
          rating: 5
        },
        {
          name: "Martín Soto",
          role: "Analista de Sistemas",
          image: "/img/User-man.jpg",
          content: "La flexibilidad del sistema y sus integraciones lo hacen verdaderamente completo.",
          rating: 5
        }
      ]
    },
    EN: {
      testimonials: "TESTIMONIALS",
      home: "HOME",
      knowUs: "OUR CLIENTS",
      title: "What Our Clients Say",
      description: "Discover the experiences of those who have trusted our solutions and transformed their businesses with our technology.",
      testimonials_data: [
        {
          name: "Alexander Ruiz",
          role: "Digital Innovation Director",
          image: "/img/User-man.jpg",
          content: "The CRM integration has revolutionized our customer management. Support is exceptional.",
          rating: 5
        },
        {
          name: "Carmen Vasquez",
          role: "IT Project Manager",
          image: "/img/User-girl.jpg",
          content: "The project management module is robust and flexible. Perfect for large teams.",
          rating: 5
        },
        {
          name: "Richard Montero",
          role: "Business Consultant",
          image: "/img/User-man.jpg",
          content: "The platform has optimized our billing and contract management processes.",
          rating: 5
        },
        {
          name: "Isabel Moreno",
          role: "Operations Director",
          image: "/img/User-girl.jpg",
          content: "The support ticket system has significantly improved our customer service.",
          rating: 5
        },
        {
          name: "Fernando Torres",
          role: "Tech Entrepreneur",
          image: "/img/User-man.jpg",
          content: "The analytics and reporting tools are fundamental for our decision-making.",
          rating: 5
        },
        {
          name: "Lucia Ramirez",
          role: "Sales Manager",
          image: "/img/User-girl.jpg",
          content: "The integrated point of sale has greatly simplified our daily operations.",
          rating: 5
        },
        {
          name: "Gabriel Herrera",
          role: "Technology Director",
          image: "/img/User-man.jpg",
          content: "Real-time inventory management has helped us optimize resources.",
          rating: 5
        },
        {
          name: "Valentina Diaz",
          role: "Marketing Coordinator",
          image: "/img/User-girl.jpg",
          content: "Email Canvas has transformed our digital communication strategy.",
          rating: 5
        },
        {
          name: "Martin Soto",
          role: "Systems Analyst",
          image: "/img/User-man.jpg",
          content: "The system's flexibility and integrations make it truly complete.",
          rating: 5
        }
      ]
    }
  }

  useEffect(() => {
    let animationFrame: number
    const speed = 1
    
    const animate = () => {
      if (!isPaused) {
        setSliderPosition((prev) => {
          const newPosition = prev - speed
          return newPosition <= -1920 ? 0 : newPosition
        })
      }
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused])

  const t = translations[language]

  return (
    <>
      <Head>
        <title>{language === 'ES' ? 'Testimonios | Kapix' : 'Testimonials | Kapix'}</title>
        <meta
          name="description"
          content={language === 'ES'
            ? 'Descubre lo que nuestros clientes dicen sobre nuestros servicios. Testimonios reales de empresas que han transformado su negocio con Kapix.'
            : 'Discover what our clients say about our services. Real testimonials from businesses that have transformed with Kapix.'
          }
        />
      </Head>
      <Navbar />
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/TESTIMONIOS.jpg" 
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.testimonials}</h1>
            
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
                  <i className="fi fi-rr-quote-right text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.testimonials}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Logo slider section */}
          <div className="mb-16">
            <div className="relative overflow-hidden">
              <div 
                className="flex items-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <motion.div
                  className="flex gap-8 items-center"
                  style={{ x: sliderPosition }}
                >
                  {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, index) => (
                    <motion.div
                      key={`${logo.id}-${index}`}
                      whileHover={{ scale: 1.1 }}
                      className="min-w-[300px] flex items-center justify-center p-4" // Increased width and added padding
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300" // Increased height significantly
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Centered title section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-2 shadow-sm">
              {t.knowUs}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t.description}
            </p>
          </div>
          
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.testimonials_data.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-base italic">
                  "{testimonial.content}"
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#01c38d]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-bold text-lg text-[#191e29]">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}