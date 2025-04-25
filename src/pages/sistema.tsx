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
          id: "barbershop",
          title: "Sistema para Barberías",
          description: "Gestiona citas, clientes, inventario y pagos en un solo lugar. Ideal para barberías y salones de belleza que buscan optimizar su operación diaria.",
          features: [
            "Gestión de citas en línea",
            "Perfiles de clientes y preferencias",
            "Control de inventario de productos",
            "Historial de servicios por cliente",
            "Recordatorios automáticos por SMS/Email",
            "Informes de ventas y comisiones",
            "Integración con pasarelas de pago",
            "Aplicación móvil para clientes"
          ],
          image: "/img/systems/barbershop-system.jpg",
          price: 49,
          popular: true
        },
        {
          id: "dental",
          title: "Sistema para Clínicas Dentales",
          description: "Solución completa para la gestión de pacientes, historiales clínicos, tratamientos y facturación en clínicas dentales de cualquier tamaño.",
          features: [
            "Expedientes clínicos digitales",
            "Agenda de citas con recordatorios",
            "Odontogramas interactivos",
            "Gestión de tratamientos y presupuestos",
            "Facturación electrónica",
            "Seguimiento de pagos y planes de financiamiento",
            "Imágenes y radiografías integradas",
            "Reportes estadísticos y financieros"
          ],
          image: "/img/systems/dental-system.jpg",
          price: 69,
          popular: false
        },
        {
          id: "restaurant",
          title: "Sistema para Restaurantes",
          description: "Administra pedidos, mesas, inventario, personal y finanzas de tu restaurante con nuestra solución integral adaptada al sector gastronómico.",
          features: [
            "Gestión de mesas y reservas",
            "Toma de pedidos desde dispositivos móviles",
            "Control de inventario y alertas de stock",
            "Menú digital con imágenes",
            "Gestión de personal y turnos",
            "Reportes de ventas y productos populares",
            "Integración con impresoras de cocina",
            "Programa de fidelización de clientes"
          ],
          image: "/img/systems/restaurant-system.jpg",
          price: 59,
          popular: true
        },
        {
          id: "retail",
          title: "Sistema para Tiendas Minoristas",
          description: "Controla inventario, ventas, proveedores y clientes con nuestra plataforma diseñada específicamente para negocios de retail y comercio.",
          features: [
            "Punto de venta (POS) intuitivo",
            "Control de inventario en tiempo real",
            "Gestión de proveedores y órdenes de compra",
            "Programa de lealtad para clientes",
            "Múltiples métodos de pago",
            "Reportes de ventas y tendencias",
            "Gestión de devoluciones y garantías",
            "Integración con tienda en línea"
          ],
          image: "/img/systems/retail-system.jpg",
          price: 55,
          popular: false
        },
        {
          id: "gym",
          title: "Sistema para Gimnasios",
          description: "Administra membresías, asistencias, clases, entrenadores y pagos recurrentes con nuestra solución especializada para gimnasios y centros deportivos.",
          features: [
            "Gestión de membresías y planes",
            "Control de acceso con código QR/tarjetas",
            "Reserva de clases y entrenadores",
            "Seguimiento de progreso de usuarios",
            "Facturación recurrente automática",
            "Comunicación con miembros vía app",
            "Gestión de inventario de productos",
            "Reportes de asistencia y retención"
          ],
          image: "/img/systems/gym-system.jpg",
          price: 45,
          popular: false
        },
        {
          id: "hotel",
          title: "Sistema para Hoteles",
          description: "Gestiona reservaciones, habitaciones, servicios, personal y facturación con nuestra plataforma integral para hoteles y alojamientos turísticos.",
          features: [
            "Gestión de reservaciones y disponibilidad",
            "Check-in/check-out digital",
            "Asignación de habitaciones",
            "Facturación de servicios adicionales",
            "Gestión de limpieza y mantenimiento",
            "Portal de reservas en línea",
            "Integración con OTAs (Booking, Airbnb)",
            "Reportes de ocupación y revenue"
          ],
          image: "/img/systems/hotel-system.jpg",
          price: 75,
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
          id: "barbershop",
          title: "Barbershop System",
          description: "Manage appointments, clients, inventory, and payments in one place. Ideal for barbershops and beauty salons looking to optimize their daily operations.",
          features: [
            "Online appointment booking",
            "Client profiles and preferences",
            "Product inventory management",
            "Service history by client",
            "Automatic SMS/Email reminders",
            "Sales and commission reports",
            "Payment gateway integration",
            "Mobile app for clients"
          ],
          image: "/img/systems/barbershop-system.jpg",
          price: 49,
          popular: true
        },
        {
          id: "dental",
          title: "Dental Clinic System",
          description: "Complete solution for patient management, clinical records, treatments, and billing in dental clinics of any size.",
          features: [
            "Digital clinical records",
            "Appointment scheduling with reminders",
            "Interactive dental charts",
            "Treatment and budget management",
            "Electronic billing",
            "Payment tracking and financing plans",
            "Integrated images and X-rays",
            "Statistical and financial reports"
          ],
          image: "/img/systems/dental-system.jpg",
          price: 69,
          popular: false
        },
        {
          id: "restaurant",
          title: "Restaurant System",
          description: "Manage orders, tables, inventory, staff, and finances of your restaurant with our comprehensive solution adapted to the food service industry.",
          features: [
            "Table and reservation management",
            "Mobile order taking",
            "Inventory control and stock alerts",
            "Digital menu with images",
            "Staff and shift management",
            "Sales and popular product reports",
            "Kitchen printer integration",
            "Customer loyalty program"
          ],
          image: "/img/systems/restaurant-system.jpg",
          price: 59,
          popular: true
        },
        {
          id: "retail",
          title: "Retail Store System",
          description: "Control inventory, sales, suppliers, and customers with our platform specifically designed for retail and commerce businesses.",
          features: [
            "Intuitive point of sale (POS)",
            "Real-time inventory control",
            "Supplier and purchase order management",
            "Customer loyalty program",
            "Multiple payment methods",
            "Sales and trend reports",
            "Returns and warranty management",
            "Online store integration"
          ],
          image: "/img/systems/retail-system.jpg",
          price: 55,
          popular: false
        },
        {
          id: "gym",
          title: "Gym System",
          description: "Manage memberships, attendance, classes, trainers, and recurring payments with our specialized solution for gyms and sports centers.",
          features: [
            "Membership and plan management",
            "Access control with QR code/cards",
            "Class and trainer booking",
            "User progress tracking",
            "Automatic recurring billing",
            "Member communication via app",
            "Product inventory management",
            "Attendance and retention reports"
          ],
          image: "/img/systems/gym-system.jpg",
          price: 45,
          popular: false
        },
        {
          id: "hotel",
          title: "Hotel System",
          description: "Manage reservations, rooms, services, staff, and billing with our comprehensive platform for hotels and tourist accommodations.",
          features: [
            "Reservation and availability management",
            "Digital check-in/check-out",
            "Room assignment",
            "Additional services billing",
            "Cleaning and maintenance management",
            "Online booking portal",
            "OTA integration (Booking, Airbnb)",
            "Occupancy and revenue reports"
          ],
          image: "/img/systems/hotel-system.jpg",
          price: 75,
          popular: true
        }
      ]
    }
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
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative"
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
                        <span className="text-sm">{t.startingFrom}</span>
                        <div className="font-bold text-2xl">${system.price}<span className="text-sm font-normal text-gray-500">{t.month}</span></div>
                      </div>
                      <Link 
                        href={`/contacto?system=${system.id}`}
                        className="bg-[#191e29] hover:bg-[#191e29]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
                      >
                        {t.buyNow}
                      </Link>
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