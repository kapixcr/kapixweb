"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"

// Definir la interfaz para los sistemas
interface SystemData {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  price: number;
  popular: boolean;
}

export default function SystemPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  const translations = {
    ES: {
      title: "SISTEMAS PERSONALIZADOS",
      subtitle: "Soluciones digitales a la medida de tu negocio",
      description: "En Kapix desarrollamos sistemas personalizados que se adaptan perfectamente a las necesidades específicas de tu empresa. Nuestras soluciones están diseñadas para optimizar procesos, mejorar la eficiencia y potenciar el crecimiento de tu negocio.",
      features: "Características",
      buyNow: "Comprar Ahora",
      contactUs: "Contáctanos",
      moreInfo: "Más Información",
      popularTag: "Popular",
      startingFrom: "Desde",
      month: "/mes",
      home: "INICIO",
      system: "SISTEMA",
      systems: [
        {
          id: "facturacion",
          title: "Sistema de Facturación",
          description: "Solución completa para la gestión de facturas electrónicas, control de inventario y seguimiento de pagos adaptada a la normativa fiscal.",
          features: [
            "Facturación electrónica legal",
            "Control de inventario integrado",
            "Gestión de clientes y proveedores",
            "Reportes financieros detallados",
            "Múltiples formas de pago",
            "Exportación de datos fiscales",
            "Acceso desde cualquier dispositivo",
            "Copias de seguridad automáticas"
          ],
          image: "/img/INVOICES.jpg",
          price: 4,
          popular: true
        },
        {
          id: "vibe",
          title: "Sistema Vibe para Citas",
          description: "Plataforma especializada para la gestión de citas, reservas online, control de clientes y administración del negocio.",
          features: [
            "Reserva de citas online",
            "Gestión de profesionales y horarios",
            "Historial de clientes y preferencias",
            "Fidelización de clientes",
            "Control de agenda",
            "Estadísticas de rendimiento",
            "Notificaciones automáticas"
          ],
          image: "/img/BARBERSHOP.jpg",
          price: 10,
          popular: true
        },
        {
          id: "whatsapp",
          title: "Sistema de WhatsApp",
          description: "Plataforma para automatizar la comunicación con clientes a través de WhatsApp, gestionar conversaciones y campañas de marketing.",
          features: [
            "Chatbot personalizable",
            "Respuestas automáticas",
            "Gestión de múltiples conversaciones",
            "Plantillas de mensajes",
            "Integración con CRM",
            "Campañas de marketing",
            "Análisis de conversaciones",
            "Soporte multiusuario"
          ],
          image: "/img/WHATSAPP.jpg",
          price: 0,
          popular: false
        },
        {
          id: "webdesign",
          title: "Diseño de Página Web",
          description: "Diseño web profesional, personalizado y enfocado en convertir visitas en clientes.",
          features: [
            "Diseño responsive adaptable",
            "Optimización SEO incluida",
            "Integración con redes sociales",
            "Panel de administración intuitivo",
            "Formularios de contacto y leads",
            "Optimización de velocidad",
            "Certificado SSL incluido",
            "Mantenimiento y soporte"
          ],
          image: "/img/WEB.jpg",
          price: 0,
          popular: true
        }
      ]
    },
    EN: {
      title: "CUSTOM SYSTEMS",
      subtitle: "Digital solutions tailored to your business",
      description: "At Kapix, we develop customized systems that perfectly adapt to the specific needs of your company. Our solutions are designed to optimize processes, improve efficiency, and boost your business growth.",
      features: "Features",
      buyNow: "Buy Now",
      contactUs: "Contact Us",
      moreInfo: "More Information",
      popularTag: "Popular",
      startingFrom: "Starting from",
      month: "/month",
      home: "HOME",
      system: "SYSTEM",
      systems: [
        {
          id: "facturacion",
          title: "Billing System",
          description: "Complete solution for electronic invoice management, inventory control, and payment tracking adapted to fiscal regulations.",
          features: [
            "Legal electronic invoicing",
            "Integrated inventory control",
            "Customer and supplier management",
            "Detailed financial reports",
            "Multiple payment methods",
            "Fiscal data export",
            "Access from any device",
            "Automatic backups"
          ],
          image: "/img/INVOICES.jpg",
          price: 4,
          popular: true
        },
        {
          id: "vibe",
          title: "Vibe Appointment System",
          description: "Specialized platform for appointment management, online booking, customer control, and business administration.",
          features: [
            "Online appointment booking",
            "Professional and schedule management",
            "Customer history and preferences",
            "Customer loyalty programs",
            "Calendar management",
            "Performance statistics",
            "Automatic notifications"
          ],
          image: "/img/BARBERSHOP.jpg",
          price: 10,
          popular: true
        },
        {
          id: "whatsapp",
          title: "WhatsApp System",
          description: "Platform to automate customer communication through WhatsApp, manage conversations and marketing campaigns.",
          features: [
            "Customizable chatbot",
            "Automatic responses",
            "Multiple conversation management",
            "Message templates",
            "CRM integration",
            "Marketing campaigns",
            "Conversation analytics",
            "Multi-user support"
          ],
          image: "/img/WHATSAPP.jpg",
          price: 0,
          popular: false
        },
        {
          id: "webdesign",
          title: "Website Design",
          description: "Professional, customized web design focused on converting visitors into customers.",
          features: [
            "Responsive adaptive design",
            "SEO optimization included",
            "Social media integration",
            "Intuitive admin panel",
            "Contact and lead forms",
            "Speed optimization",
            "SSL certificate included",
            "Maintenance and support"
          ],
          image: "/img/WEB.jpg",
          price: 0,
          popular: true
        }
      ]
    },
}

const t = translations[language]

// Ensure hydration is complete before rendering
useEffect(() => {
  setMounted(true)
}, [])

// Animación para los elementos que aparecen
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

if (!mounted) return null

return (
  <>
    <Head>
      <title>{language === 'ES' ? 'Sistemas Personalizados | Kapix' : 'Custom Systems | Kapix'}</title>
      <meta 
        name="description" 
        content={language === 'ES' 
          ? 'Sistemas personalizados para diferentes industrias: barberías, clínicas dentales, restaurantes y más. Soluciones a medida para tu negocio.' 
          : 'Custom systems for different industries: barbershops, dental clinics, restaurants, and more. Tailored solutions for your business.'
        } 
      />
    </Head>

    <Navbar />

    <main>
      {/* Hero Section con diseño similar a planes.tsx */}
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/SISTEMA.jpg" 
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
                  <i className="fi fi-rr-apps text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.system}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Systems Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.systems.map((system: SystemData, index: number) => (
                <motion.div
                  key={system.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl relative transition-all duration-500 transform hover:-translate-y-2 group"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index}
                >
                  {system.popular && (
                    <div className="absolute top-4 right-4 bg-[#01c38d] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      {t.popularTag}
                    </div>
                  )}
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={system.image}
                      alt={system.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#191e29] mb-2">{system.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{system.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#191e29] mb-2">{t.features}:</h4>
                      <ul className="space-y-1">
                        {system.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <i className="fi fi-rr-check text-[#01c38d] mr-2 mt-1 flex-shrink-0"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="text-[#191e29]">
                        {system.id === 'webdesign' ? (
                          <div>
                            <span className="text-sm">{language === 'ES' ? 'Debes' : 'You must'}</span>
                            <div className="font-bold text-2xl">{language === 'ES' ? 'Cotizar Proyecto' : 'Estimate Project'}</div>
                          </div>
                        ) : (
                          <>
                            <span className="text-sm">{t.startingFrom}</span>
                            <div className="font-bold text-2xl">
                              ${system.price} <span className="text-sm font-normal">{language === 'ES' ? '+ IVA' : '+ VAT'}</span>
                              <span className="text-sm font-normal text-gray-500">{t.month}</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        {system.id === 'facturacion' && (
                          <Link 
                            href={`/sistemas/${system.id}`}
                            className="bg-[#01c38d] border border-[#01c38d] text-white hover:bg-[#01c38d]/90 px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md shadow-[#01c38d]/30 hover:shadow-lg hover:shadow-[#01c38d]/40"
                          >
                            {language === 'ES' ? 'Ver más' : 'See more'}
                          </Link>
                        )}
                        {system.id === 'whatsapp' && (
                          <Link 
                            href="https://wa.me/50660641906?text=Hola%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20sistema%20de%20Whatsapp"
                            target="_blank"
                            className="bg-[#191e29] hover:bg-[#191e29]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-al shadow-lg shadow-[#191e29]/30 hover:shadow-xl hover:shadow-[#E3EEEC]/40"
                          >
                            {t.buyNow}
                          </Link>
                        )}
                        {system.id === 'webdesign' && (
                          <Link 
                            href="https://wa.me/50660641906?text=Hola%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20sistema%20de%20Diseño%20de%20Página%20Web"
                            target="_blank"
                            className="bg-[#191e29] hover:bg-[#191e29]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-al shadow-lg shadow-[#191e29]/30 hover:shadow-xl hover:shadow-[#E3EEEC]/40"
                          >
                            {t.buyNow}
                          </Link>
                        )}
                        {system.id === 'vibe' && (
                          <Link 
                            href="https://wa.me/50660641906?text=Hola%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20sistema%20Vibe%20para%20Citas"
                            target="_blank"
                            className="bg-[#191e29] hover:bg-[#191e29]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-al shadow-lg shadow-[#191e29]/30 hover:shadow-xl hover:shadow-[#E3EEEC]/40"
                          >
                            {t.buyNow}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#191e29] to-[#191e29]/90 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {language === 'ES' 
                      ? '¿Necesitas un sistema personalizado para tu negocio?' 
                      : 'Need a custom system for your business?'}
                  </h2>
                  <p className="text-gray-300 max-w-xl">
                    {language === 'ES'
                      ? 'Contáctanos hoy mismo para discutir tus necesidades específicas. Nuestro equipo de expertos desarrollará una solución a medida que se adapte perfectamente a tu empresa.'
                      : 'Contact us today to discuss your specific needs. Our team of experts will develop a tailored solution that perfectly fits your company.'}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link 
                    href="/contacto" 
                    className="bg-[#01c38d] hover:bg-[#01c38d]/90 text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 hover:-translate-y-0.5 inline-block"
                  >
                    {t.contactUs}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}