"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import TypeWriter from "@/components/TypeWriter"
import { useLanguage } from "@/context/LanguageContext"
import Loader from '@/components/Loader'

const Footer = dynamic(() => import("@/components/footer"), { ssr: false })
const TextSlider = dynamic(() => import("@/components/TextSlider"), { ssr: false })
const BlogSection = dynamic(() => import("@/components/BlogSection"), { ssr: false })
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: false })
const TestimonialSlider = dynamic(() => import("@/components/TestimonialSlider"), { ssr: false })
const SponsorsSection = dynamic(() => import("@/components/SponsorsSection"), { ssr: false })
const AboutUs = dynamic(() => import("@/components/AboutUs"), { ssr: false })

export default function Home() {
  const { language } = useLanguage()
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds of loading time

    return () => clearTimeout(timer)
  }, [])

  // Complete translations object with all needed text
  const translations = {
    ES: {
      welcome: "Bienvenido a",
      ourSystem: "Nuestro Sistema",
      description:
        "En Kapix ERP, visualizamos un futuro impulsado por la innovación. Nuestra solución de desarrollo está diseñado para liderar la transformación digital, empoderando a las empresas a alcanzar su máxima eficiencia. Únete a nosotros y transforma tu negocio con tecnología de fácil acceso.",
      seeMore: "Ver más",
      watchVideo: "Ver Video",
      plans: "Planes",
      choosePlan: "Escoge el plan que mejor se adapte a tus necesidades",
      planDescription:
        "Ofrecemos planes flexibles diseñados para adaptarse a las necesidades específicas de tu empresa, desde pequeños negocios hasta grandes corporaciones.",
      startFree: "Comenzar Gratis",
      startNow: "Comenzar Ahora",
      seeAllPlans: "Ver todos los planes",
      accounting: "Contabilidad",
      projects: "Proyectos",
      month: "/mes",
      features: {
        team: "1 Equipo",
        clients: "50 Clientes",
        contacts: "50 Contactos",
        contracts: "30 Contratos",
        invoices: "100 Facturas",
        creditNotes: "100 Notas de Crédito",
        unlimitedProposals: "Sin límites Propuestas",
        projects: "5 Proyectos",
        projectsEarth: "Proyectos",
        tasks: "100 Tareas",
        unlimitedProspects: "Sin límites Prospectos",
        products: "30 Productos",
        storage: "1 GB Almacenamiento",
        documents: "Documentos",
        reminder: "Recordatorio",
        expenses: "Gastos",
        payments: "Pagos",
        // Premium plan additional features
        moreClients: "100 Clientes",
        unlimitedContacts: "Sin límites Contactos",
        moreContracts: "50 Contratos",
        moreInvoices: "200 Facturas",
        unlimitedBudgets: "Sin límites Presupuestos",
        unlimitedCreditNotes: "Sin límites Notas de Crédito",
        moreProjects: "20 Proyectos",
        moreTasks: "200 Tareas",
        unlimitedSupportTickets: "Sin límites Tickets de Soporte",
        unlimitedProducts: "Sin límites Productos",
        moreStorage: "10 GB Almacenamiento",
        appointments: "Citas",
        additionalConfig: "Configuración Adicional",
        emailCanvas: "Email Canvas",
        objectives: "Objetivos",
        stateManagement: "Manejo de Estados",
        tableManagement: "Manejo de Tablas",
        projectKanban: "Kanban de Proyectos",
        projectManagementImprovements: "Mejoras de Gestión de Proyectos",
        spreadsheets: "Hojas de Cálculo en Línea",
      },
      custom:
        "Arma tu plan por medio de nuestro sistema modular, escoge cuáles módulos necesita tu negocio y arma tu plan personalizado",
      planNames: {
        lite: "Lite",
        premium: "Premium",
        venus: "Venus",
        // tierra: "Tierra",
        marte: "Marte",
        personalizado: "Personalizado",
      },
      contact: "Contactar",
    },
    EN: {
      welcome: "Welcome to",
      ourSystem: "Our System",
      description:
        "At Kapix ERP, we envision a future driven by innovation. Our development solution is designed to lead digital transformation, empowering companies to achieve maximum efficiency. Join us and transform your business with easily accessible technology.",
      seeMore: "See More",
      watchVideo: "Watch Video",
      plans: "Plans",
      choosePlan: "Choose the plan that best suits your needs",
      planDescription:
        "We offer flexible plans designed to adapt to your company's specific needs, from small businesses to large corporations.",
      startFree: "Start Free",
      startNow: "Start Now",
      seeAllPlans: "See all plans",
      accounting: "Accounting",
      projects: "Projects",
      month: "/month",
      features: {
        team: "1 Team",
        clients: "50 Clients",
        contacts: "50 Contacts",
        contracts: "30 Contracts",
        invoices: "100 Invoices",
        creditNotes: "100 Credit Notes",
        unlimitedProposals: "Unlimited Proposals",
        projects: "5 Projects",
        projectsEarth: "Projects",
        tasks: "100 Tasks",
        unlimitedProspects: "Unlimited Prospects",
        products: "30 Products",
        storage: "1 GB Storage",
        documents: "Documents",
        reminder: "Reminder",
        expenses: "Expenses",
        payments: "Payments",
        // Premium plan additional features
        moreClients: "100 Clients",
        unlimitedContacts: "Unlimited Contacts",
        moreContracts: "50 Contracts",
        moreInvoices: "200 Invoices",
        unlimitedBudgets: "Unlimited Budgets",
        unlimitedCreditNotes: "Unlimited Credit Notes",
        moreProjects: "20 Projects",
        moreTasks: "200 Tasks",
        unlimitedSupportTickets: "Unlimited Support Tickets",
        unlimitedProducts: "Unlimited Products",
        moreStorage: "10 GB Storage",
        appointments: "Appointments",
        additionalConfig: "Additional Configuration",
        emailCanvas: "Email Canvas",
        objectives: "Objectives",
        stateManagement: "State Management",
        tableManagement: "Table Management",
        projectKanban: "Project Kanban",
        projectManagementImprovements: "Project Management Improvements",
        spreadsheets: "Online Spreadsheets",
      },
      custom:
        "Build your plan through our modular system, choose which modules your business needs and create your personalized plan",
      planNames: {
        lite: "Lite",
        premium: "Premium",
        venus: "Venus",
        // tierra: "Earth",
        marte: "Mars",
        personalizado: "Custom",
      },
      contact: "Contact Us",
    },
  }

  // Update getFeatureIcon function to handle both languages
  const getFeatureIcon = (feature: string) => {
    // Convert to lowercase and remove accents for better matching
    const normalizedFeature = feature
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    // Check if feature contains these words anywhere in the text (in both languages)
    if (normalizedFeature.includes("proyecto") || normalizedFeature.includes("project")) return "fi fi-rr-briefcase"
    if (normalizedFeature.includes("crm")) return "fi fi-rr-users"
    if (normalizedFeature.includes("tarea") || normalizedFeature.includes("task")) return "fi fi-rr-list-check"
    if (normalizedFeature.includes("cliente") || normalizedFeature.includes("client")) return "fi fi-rr-user"
    if (normalizedFeature.includes("contacto") || normalizedFeature.includes("contact")) return "fi fi-rr-address-book"
    if (normalizedFeature.includes("contrato") || normalizedFeature.includes("contract"))
      return "fi fi-rr-document-signed"
    if (normalizedFeature.includes("factura") || normalizedFeature.includes("invoice")) return "fi fi-rr-receipt"
    if (normalizedFeature.includes("credit") || normalizedFeature.includes("credito")) return "fi fi-rr-receipt"
    if (normalizedFeature.includes("propuesta") || normalizedFeature.includes("proposal")) return "fi fi-rr-document"
    if (normalizedFeature.includes("producto") || normalizedFeature.includes("product")) return "fi fi-rr-box"
    if (normalizedFeature.includes("almacenamiento") || normalizedFeature.includes("storage"))
      return "fi fi-rr-cloud-upload"
    if (normalizedFeature.includes("cita") || normalizedFeature.includes("appointment")) return "fi fi-rr-calendar"
    if (normalizedFeature.includes("configuracion") || normalizedFeature.includes("config")) return "fi fi-rr-settings"
    if (normalizedFeature.includes("documento") || normalizedFeature.includes("document")) return "fi fi-rr-folder"
    if (normalizedFeature.includes("email")) return "fi fi-rr-envelope"
    if (normalizedFeature.includes("goal") || normalizedFeature.includes("objetivo")) return "fi fi-rr-flag"
    if (normalizedFeature.includes("estado") || normalizedFeature.includes("state")) return "fi fi-rr-settings-sliders"
    if (normalizedFeature.includes("tabla") || normalizedFeature.includes("table")) return "fi fi-rr-table"
    if (normalizedFeature.includes("kanban")) return "fi fi-rr-briefcase"
    if (normalizedFeature.includes("recordatorio") || normalizedFeature.includes("reminder")) return "fi fi-rr-bell"
    if (normalizedFeature.includes("spreadsheet") || normalizedFeature.includes("hoja")) return "fi fi-rr-table"
    if (normalizedFeature.includes("lead") || normalizedFeature.includes("prospecto")) return "fi fi-rr-star"
    if (normalizedFeature.includes("payment") || normalizedFeature.includes("pago")) return "fi fi-rr-credit-card"
    if (normalizedFeature.includes("venta") || normalizedFeature.includes("sale")) return "fi fi-rr-receipt"
    if (normalizedFeature.includes("compra") || normalizedFeature.includes("purchase")) return "fi fi-rr-shopping-cart"
    if (normalizedFeature.includes("inventario") || normalizedFeature.includes("inventory")) return "fi fi-rr-box"
    if (normalizedFeature.includes("ticket")) return "fi fi-rr-ticket"
    if (normalizedFeature.includes("usuario") || normalizedFeature.includes("user")) return "fi fi-rr-users"
    if (normalizedFeature.includes("informe") || normalizedFeature.includes("report")) return "fi fi-rr-document"
    if (normalizedFeature.includes("sin limite") || normalizedFeature.includes("unlimited")) return "fi fi-rr-infinity"
    if (normalizedFeature.includes("capacitacion") || normalizedFeature.includes("training"))
      return "fi fi-rr-time-forward"
    if (normalizedFeature.includes("gasto") || normalizedFeature.includes("expense")) return "fi fi-rr-check"

    // Default icon for unmatched features
    return "fi fi-rr-check"
  }

  // Define feature lists for each plan
  const litePlanFeatures = [
    translations[language].features.team,
    translations[language].features.clients,
    translations[language].features.contacts,
    translations[language].features.contracts,
    translations[language].features.invoices,
    translations[language].features.creditNotes,
    translations[language].features.unlimitedProposals,
    translations[language].features.projects,
    translations[language].features.tasks,
    translations[language].features.unlimitedProspects,
    translations[language].features.products,
    translations[language].features.storage,
    translations[language].features.documents,
    translations[language].features.reminder,
    translations[language].features.expenses,
    translations[language].features.payments,
  ]

  const premiumPlanFeatures = [
    translations[language].features.team,
    translations[language].features.moreClients,
    translations[language].features.unlimitedContacts,
    translations[language].features.moreContracts,
    translations[language].features.moreInvoices,
    translations[language].features.unlimitedBudgets,
    translations[language].features.unlimitedCreditNotes,
    "100 Propuestas",
    translations[language].features.moreProjects,
    translations[language].features.moreTasks,
    "3 Tickets de soporte por mes",
    translations[language].features.unlimitedProspects,
    "200 Productos",
    translations[language].features.moreStorage,
    translations[language].features.reminder,
  ]

  const customPlanFeatures = [
    translations[language].custom ||
      "Arma tu plan por medio de nuestro sistema modular, escoge cuáles módulos necesita tu negocio y arma tu plan personalizado",
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="bg-white py-2 px-4 border-b border-gray-100" />
  }

  return (
    <>
      {isLoading && <Loader />}
    <div className="bg-white">
      {/* Agregar el Navbar */}
      <Navbar />
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-4 shadow-sm">
              Kapix ERP
            </span>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
                {translations[language].welcome}
              </span>{" "}
              <br />
              <TypeWriter text={translations[language].ourSystem} />
            </h1>

            <p className="text-gray-600 mb-6 max-w-lg">{translations[language].description}</p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/planes"
                className="bg-[#01c38d] text-white px-6 py-3 rounded-md font-medium hover:bg-[#01c38d]/90 transition-all shadow-md shadow-[#01c38d]/30 hover:shadow-lg hover:shadow-[#01c38d]/40 hover:-translate-y-0.5"
              >
                {translations[language].seeMore}
              </a>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full animate-ping bg-[#191e29]/40" />
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="relative w-10 h-10 flex items-center justify-center bg-[#191e29] rounded-full hover:bg-[#191e29]/90 transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span className="text-[#191e29] font-medium">{translations[language].watchVideo}</span>
              </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
              {isVideoModalOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsVideoModalOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl z-50"
                  >
                    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                      <div className="aspect-video">
                        <iframe
                          src="https://www.youtube.com/embed/a9EEge1bRmM?si=RW-DNgjskoFXlrRP"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <button
                        onClick={() => setIsVideoModalOpen(false)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white/80 hover:text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x"
                        >
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden aspect-[4/3] mx-0">
              <img
                src="img/ERP.gif"
                alt="Kapix ERP"
                className="w-full h-full object-contain bg-white/80 backdrop-blur-sm"
              />

              {/* Floating Elements */}
              <div className="absolute inset-0 flex flex-col justify-between p-2 sm:p-4 md:p-5 pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 sm:p-3 w-fit"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                      <i className="fi fi-rr-calculator text-[#01c38d] text-base sm:text-lg flex items-center justify-center h-full w-full"></i>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-[#191e29]">
                      {translations[language].accounting}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 sm:p-3 w-fit self-end"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                      <i className="fi fi-rr-chart-network text-[#01c38d] text-base sm:text-lg flex items-center justify-center h-full w-full"></i>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-[#191e29]">
                      {translations[language].projects}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-[#01c38d]/20 rounded-full filter blur-lg" />
              <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[#191e29]/10 rounded-full filter blur-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agregar el Client Logo */}
      <SponsorsSection />

      {/* Agregar el About Section */}
      <AboutUs />

      {/* Pricing Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-2 shadow-sm">
              {translations[language].plans}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
              {translations[language].choosePlan}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">{translations[language].planDescription}</p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-12 sm:gap-8">
            {/* Lite Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-6 sm:p-8 h-full flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow"
            >
              {/* Lite Plan Content */}
              {/* Logo y título en la izquierda */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                  <i className="fi fi-rr-diamond text-[#01c38d] text-xl flex items-center justify-center"></i>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-[#01c38d]/10">
                  <h3 className="text-lg font-semibold text-[#191e29]">Lite</h3>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#191e29]">$0</span>
                <span className="text-sm ml-1 text-gray-600">{translations[language].month}</span>
              </div>

              <ul className="space-y-4 flex-grow">
                {litePlanFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#01c38d]/10 flex items-center justify-center flex-shrink-0">
                      <i
                        className={`${getFeatureIcon(feature)} text-[#01c38d] text-xs flex items-center justify-center w-full h-full`}
                      ></i>
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Lite Plan Button */}
              <a
                href="https://lite.kapix.co.cr/"
                target="_blank"
                className="w-full mt-8 py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all bg-[#01c38d]/10 text-[#01c38d] hover:bg-[#01c38d]/20"
                rel="noreferrer"
              >
                <span>{translations[language].startFree}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl p-8 h-full flex flex-col bg-[#191e29] text-white transform scale-105 z-10 shadow-[0_20px_40px_rgb(0,0,0,0.2)] hover:shadow-[0_25px_45px_rgb(0,0,0,0.25)] transition-shadow"
            >
              {/* Premium Plan Content */}
              {/* Logo y título en la izquierda */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <i className="fi fi-rr-diamond text-white text-xl flex items-center justify-center"></i>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/20">
                  <h3 className="text-lg font-semibold text-white">Premium</h3>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$30</span>
                <span className="text-base ml-1 text-white/90">+ {language === "ES" ? "IVA" : "VAT"}</span>
                <span className="text-sm ml-1 text-white/90">{translations[language].month}</span>
              </div>

              <ul className="space-y-4 flex-grow">
                {premiumPlanFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <i
                        className={`${getFeatureIcon(feature)} text-white text-xs flex items-center justify-center w-full h-full`}
                      ></i>
                    </div>
                    <span className="text-sm text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="https://kpixs.com/authentication/register?kx_plan=premium"
                target="_blank"
                className="w-full mt-8 py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all bg-white text-[#191e29] hover:bg-white/90"
                rel="noreferrer"
              >
                <span>{translations[language].startNow}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Custom Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl p-8 h-full flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow"
            >
              {/* Custom Plan Content */}
              {/* Logo y título en la izquierda */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                  <i className="fi fi-rr-diamond text-[#01c38d] text-xl flex items-center justify-center"></i>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-[#01c38d]/10">
                  <h3 className="text-lg font-semibold text-[#191e29]">
                    {translations[language].planNames?.personalizado || "Personalizado"}
                  </h3>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#191e29]">$100</span>
                <span className="text-base ml-1 text-gray-600">+ {language === "ES" ? "IVA" : "VAT"}</span>
                <span className="text-sm ml-1 text-gray-600">{translations[language].month}</span>
              </div>

              <ul className="space-y-4 flex-grow">
                {customPlanFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#01c38d]/10 flex items-center justify-center flex-shrink-0">
                      <i
                        className={`${getFeatureIcon(feature)} text-[#01c38d] text-xs flex items-center justify-center w-full h-full`}
                      ></i>
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="https://wa.me/50660641906?text=Hola%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20plan%20personalizado"
                target="_blank"
                className="w-full mt-8 py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all bg-[#01c38d]/10 text-[#01c38d] hover:bg-[#01c38d]/20"
                rel="noreferrer"
              >
                <span>{translations[language].contact || "Contactar"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Updated button styling and spacing */}
          <div className="text-center mt-20">
            <a
              href="/planes"
              className="bg-[#01c38d] text-white inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium hover:bg-[#01c38d]/90 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 cursor-pointer"
            >
              {translations[language].seeAllPlans}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Agregar Faq Section */}
      <FaqSection />

      {/* Agregar el Text Slider */}
      <TextSlider />

      {/* Agregar el Testimonial Slider */}
      {/* <TestimonialSlider /> */}

      {/* Agregar el Blog Section */}
      <BlogSection />

      {/* Agregar el Footer */}
      <Footer />
    </div>
    </>
  )
}

