"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import TypeWriter from "@/components/TypeWriter"
import { useLanguage } from "@/context/LanguageContext"
import Head from 'next/head'

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
      modules: "Módulos",
      selectModules: "Selecciona tus Módulos",
      modulesDescription: "Elige los módulos que necesitas para tu empresa. Puedes seleccionar múltiples opciones.",
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
        unlimitedProposals: "Propuestas Ilimitadas",
        projects: "5 Proyectos",
        projectsEarth: "Proyectos",
        tasks: "100 Tareas",
        unlimitedProspects: "Clientes Potenciales Ilimitados",
        products: "30 Productos",
        storage: "1 GB Almacenamiento",
        documents: "Documentos",
        reminder: "Recordatorio",
        expenses: "Gastos",
        payments: "Pagos",
        // Premium plan additional features
        moreClients: "100 Clientes",
        unlimitedContacts: "Contactos Ilimitados",
        moreContracts: "50 Contratos",
        moreInvoices: "200 Facturas",
        unlimitedBudgets: "Presupuestos Ilimitados",
        unlimitedCreditNotes: "Notas de Crédito Ilimitadas",
        moreProjects: "20 Proyectos",
        moreTasks: "200 Tareas",
        unlimitedSupportTickets: "Tickets de Soporte Ilimitados",
        unlimitedProducts: "Productos Ilimitados",
        moreStorage: "10 GB Almacenamiento",
        appointments: "Citas",
        additionalConfig: "Configuración Adicional",
        emailCanvas: "Email Canvas",
        objectives: "Objetivos",
        stateManagement: "Gestión de Estado",
        tableManagement: "Gestión de Tablas",
        projectKanban: "Kanban de Proyectos",
        projectManagementImprovements: "Mejoras en Gestión de Proyectos",
        spreadsheets: "Hojas de Cálculo Online",
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
      modulesList: {
        compras: {
          title: "Compras",
          description: "Controla las órdenes de compra, gestiona proveedores y optimiza el abastecimiento de tu negocio fácilmente."
        },
        facturaElectronica: {
          title: "Factura Electrónica",
          description: "Genera, firma y envía facturas electrónicas validadas por Hacienda cumpliendo con la normativa local automáticamente."
        },
        metas: {
          title: "Metas",
          description: "Establece, monitorea y alcanza objetivos estratégicos con seguimiento de metas por usuario, equipo o proyecto."
        },
        recordatorio: {
          title: "Recordatorio",
          description: "Envía alertas automáticas a clientes para pagos, vencimientos y cualquier notificación importante que necesiten."
        },
        stripe: {
          title: "Stripe",
          description: "Integra la pasarela de pago Stripe para procesar pagos seguros y rápidos desde tu ERP con soporte mejorado."
        },
        encuestas: {
          title: "Encuestas",
          description: "Diseña y envía encuestas personalizadas para recopilar opiniones y retroalimentación de clientes y empleados fácilmente."
        },
        woocommerce: {
          title: "WooCommerce",
          description: "Sincroniza productos, pedidos y clientes entre tu tienda en línea y el ERP para una gestión unificada del negocio."
        },
        exportarXml: {
          title: "Exportar XML",
          description: "Exporta información del sistema en formato XML para integraciones, reportes oficiales o respaldo estructurado de datos."
        },
        contratos: {
          title: "Contratos",
          description: "Crea, gestiona y da seguimiento a contratos con clientes o proveedores, incluyendo renovaciones, alertas y adjuntos."
        },
        notasCredito: {
          title: "Notas de Crédito",
          description: "Emite y gestiona notas de crédito para corregir facturas, realizar devoluciones o aplicar descuentos según la normativa fiscal."
        },
        camposPersonalizados: {
          title: "Campos Personalizados",
          description: "Añade y gestiona campos personalizados en formularios y registros para adaptar el ERP a las necesidades específicas de tu negocio."
        },
        solicitudPresupuesto: {
          title: "Solicitud de presupuesto",
          description: "Permite a los clientes o usuarios internos generar solicitudes de presupuesto para productos o servicios de forma ordenada y centralizada."
        },
        presupuesto: {
          title: "Presupuesto",
          description: "Crea y gestiona presupuestos comerciales para clientes, con posibilidad de convertirlos en facturas o contratos en pocos clics."
        },
        gastos: {
          title: "Gastos",
          description: "Registra, clasifica y controla los gastos del negocio para llevar un mejor seguimiento financiero y contable."
        },
        facturas: {
          title: "Facturas",
          description: "Genera, envía y administra facturas de ventas con control de pagos, vencimientos y seguimiento desde el ERP."
        },
        articulos: {
          title: "Artículos",
          description: "Administra todos los productos o servicios de tu negocio con información detallada, precios, stock y clasificaciones."
        },
        baseConocimiento: {
          title: "Base de conocimiento",
          description: "Crea y organiza artículos en categorías para consultas frecuentes. Disponible para uso interno o como centro de ayuda externo."
        },
        clientesPotenciales: {
          title: "Clientes potenciales",
          description: "Registra, clasifica y da seguimiento a prospectos para convertirlos en clientes mediante flujos comerciales definidos."
        },
        pagos: {
          title: "Pagos",
          description: "Registra y gestiona pagos recibidos o realizados, vinculándolos con facturas, gastos o contratos para mantener el control financiero."
        },
        proyectos: {
          title: "Proyectos",
          description: "Planifica, organiza y da seguimiento a proyectos con tareas, hitos, responsables, fechas clave y progreso en tiempo real."
        },
        propuestas: {
          title: "Propuestas",
          description: "Crea y envía propuestas comerciales personalizadas a tus clientes, con opción de aprobación en línea y conversión a contrato o factura."
        },
        reportes: {
          title: "Reportes",
          description: "Genera informes detallados y personalizados para analizar el desempeño financiero, ventas, proyectos y más."
        },
        suscripciones: {
          title: "Suscripciones",
          description: "Gestiona planes de suscripción, pagos recurrentes y renovaciones automáticas para tus clientes de forma sencilla."
        },
        tareas: {
          title: "Tareas",
          description: "Crea, asigna y supervisa tareas con fechas límite, prioridades y comentarios para un mejor control del trabajo diario."
        },
        tickets: {
          title: "Tickets",
          description: "Gestiona solicitudes y reportes de clientes con un sistema de tickets para atención rápida y seguimiento eficiente."
        }
      }
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
      modules: "Modules",
      selectModules: "Select your Modules",
      modulesDescription: "Choose the modules you need for your company. You can select multiple options.",
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
      modulesList: {
        compras: {
          title: "Purchases",
          description: "Control purchase orders, manage suppliers and optimize your business supply chain easily."
        },
        facturaElectronica: {
          title: "Electronic Invoice",
          description: "Generate, sign and send electronic invoices validated by the Tax Office complying with local regulations automatically."
        },
        metas: {
          title: "Goals",
          description: "Set, monitor and achieve strategic objectives with goal tracking by user, team or project."
        },
        recordatorio: {
          title: "Reminder",
          description: "Send automatic alerts to customers for payments, due dates and any important notification they need."
        },
        stripe: {
          title: "Stripe",
          description: "Integrate the Stripe payment gateway to process secure and fast payments from your ERP with enhanced support."
        },
        encuestas: {
          title: "Surveys",
          description: "Design and send personalized surveys to collect opinions and feedback from customers and employees easily."
        },
        woocommerce: {
          title: "WooCommerce",
          description: "Synchronize products, orders and customers between your online store and ERP for unified business management."
        },
        exportarXml: {
          title: "Export XML",
          description: "Export system information in XML format for integrations, official reports or structured data backup."
        },
        contratos: {
          title: "Contracts",
          description: "Create, manage and track contracts with customers or suppliers, including renewals, alerts and attachments."
        },
        notasCredito: {
          title: "Credit Notes",
          description: "Issue and manage credit notes to correct invoices, make returns or apply discounts according to tax regulations."
        },
        camposPersonalizados: {
          title: "Custom Fields",
          description: "Add and manage custom fields in forms and records to adapt the ERP to your business specific needs."
        },
        solicitudPresupuesto: {
          title: "Budget Request",
          description: "Allows customers or internal users to generate budget requests for products or services in an organized and centralized way."
        },
        presupuesto: {
          title: "Budget",
          description: "Create and manage commercial budgets for customers, with the possibility of converting them into invoices or contracts in a few clicks."
        },
        gastos: {
          title: "Expenses",
          description: "Record, classify and control business expenses to maintain better financial and accounting tracking."
        },
        facturas: {
          title: "Invoices",
          description: "Generate, send and manage sales invoices with payment control, due dates and tracking from the ERP."
        },
        articulos: {
          title: "Articles",
          description: "Manage all your business products or services with detailed information, prices, stock and classifications."
        },
        baseConocimiento: {
          title: "Knowledge Base",
          description: "Create and organize articles in categories for frequent queries. Available for internal use or as external help center."
        },
        clientesPotenciales: {
          title: "Leads",
          description: "Register, classify and track prospects to convert them into customers through defined commercial flows."
        },
        pagos: {
          title: "Payments",
          description: "Record and manage payments received or made, linking them with invoices, expenses or contracts to maintain financial control."
        },
        proyectos: {
          title: "Projects",
          description: "Plan, organize and track projects with tasks, milestones, responsible parties, key dates and real-time progress."
        },
        propuestas: {
          title: "Proposals",
          description: "Create and send personalized commercial proposals to your customers, with online approval option and conversion to contract or invoice."
        },
        reportes: {
          title: "Reports",
          description: "Generate detailed and personalized reports to analyze financial performance, sales, projects and more."
        },
        suscripciones: {
          title: "Subscriptions",
          description: "Manage subscription plans, recurring payments and automatic renewals for your customers easily."
        },
        tareas: {
          title: "Tasks",
          description: "Create, assign and supervise tasks with deadlines, priorities and comments for better daily work control."
        },
        tickets: {
          title: "Tickets",
          description: "Manage customer requests and reports with a ticket system for quick attention and efficient follow-up."
        }
      }
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
    <div className="bg-white">
      {/* Agregar el Navbar */}
      <Head>
        <title>{language === 'ES' ? 'Inicio | Kapix' : 'Home | Kapix'}</title>
        <meta
          name="description"
          content={language === 'ES'
            ? 'Kapix ofrece soluciones tecnológicas innovadoras para empresas. Desarrollo web, sistemas personalizados y servicios de hosting de alta calidad.'
            : 'Kapix offers innovative technology solutions for businesses. Web development, custom systems, and high-quality hosting services.'
          }
        />
      </Head>
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
                className="bg-[#01c38d] text-white px-6 py-3 rounded-md font-bold hover:bg-[#01c38d]/90 transition-all shadow-md shadow-[#01c38d]/30 hover:shadow-lg hover:shadow-[#01c38d]/40 hover:-translate-y-0.5"
              >
                {translations[language].seeMore}
              </a>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full animate-ping bg-[#191e29]/40" />
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="relative w-10 h-10 flex items-center justify-center bg-[#191e29] rounded-full hover:bg-[#191e29]/90 transition-colors cursor-pointer"
                    aria-label="Iniciar Video"
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
              <video
                src="img/ERP.webm"
                autoPlay
                loop
                muted
                playsInline
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = 0.5;
                }}
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
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 sm:p-3 w-fit self-end mb-3"
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

      {/* Banner de sistema adaptable a la medida */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-0">
            {/* Texto y botón */}
            <div className="flex flex-col justify-center bg-transparent px-0 md:px-0 order-1 lg:order-1">
              <div className="mb-0 text-left bg-transparent">
                <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-2 shadow-sm">
                  {language === 'ES' ? 'Módulos' : 'Modules'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent max-w-lg leading-tight md:mx-0 text-left">
                  {language === 'ES'
                    ? 'Obten tu propio ERP desde $10 al mes'
                    : 'Get your own ERP from $10 per month'}
                </h2>
              </div>
              <p className="text-gray-700 mb-6 max-w-xl md:mx-0 text-left">
                {language === 'ES'
                  ? (<>
                      <b>Solo paga por lo que realmente usas.</b><br />
                      Personaliza tu sistema ERP seleccionando únicamente los módulos que tu empresa necesita. Desde solo <b>$10 mensuales por usuario</b>, accede a herramientas específicas que optimizan cada área de tu operación: ventas, inventario, contabilidad, facturación y más.<br /><br />
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-center gap-2"><span className='inline-block bg-[#01c38d]/10 p-1.5 rounded-full text-[#01c38d]'><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#01c38d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Añade usuarios según tu estructura.</b></span></li>
                        <li className="flex items-center gap-2"><span className='inline-block bg-[#01c38d]/10 p-1.5 rounded-full text-[#01c38d]'><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#01c38d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Activa solo los módulos que te aportan valor.</b></span></li>
                        <li className="flex items-center gap-2"><span className='inline-block bg-[#01c38d]/10 p-1.5 rounded-full text-[#01c38d]'><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#01c38d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Incorpora soporte técnico si lo necesitas.</b></span></li>
                      </ul>
                      Olvídate de pagar de más por funciones que no utilizas.<br />
                      Con nuestro modelo flexible, tu ERP crece contigo, a tu ritmo y sin complicaciones.
                    </>)
                  : (<>
                      <b>Only pay for what you really use.</b><br />
                      Customize your ERP system by selecting only the modules your company needs. From just <b>$10 per user per month</b>, access specific tools that optimize every area of your operation: sales, inventory, accounting, invoicing, and more.<br /><br />
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-center gap-2"><span className='inline-block bg-[#01c38d]/10 p-1.5 rounded-full text-[#01c38d]'><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#01c38d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Add users according to your structure.</b></span></li>
                        <li className="flex items-center gap-2"><span className='inline-block bg-[#01c38d]/10 p-1.5 rounded-full text-[#01c38d]'><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#01c38d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Activate only the modules that bring you value.</b></span></li>
                        <li className="flex items-center gap-2"><span className='inline-block bg-[#01c38d]/10 p-1.5 rounded-full text-[#01c38d]'><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#01c38d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Include technical support if you need it.</b></span></li>
                      </ul>
                      Forget about overpaying for features you don't use.<br />
                      With our flexible model, your ERP grows with you, at your pace and without complications.
                    </>)}
              </p>
              <motion.button
                onClick={() => window.open('https://new.kapix.co.cr/', '_blank')}
                whileHover={{ scale: 1.05 }}
                className="bg-[#01c38d] text-white px-6 py-3 rounded-md font-bold hover:bg-[#01c38d]/90 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 cursor-pointer w-48"
              >
                {language === 'ES' ? 'Explorar Módulos' : 'Explore Modules'}
              </motion.button>
            </div>
            {/* Imagen */}
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden order-2 lg:order-2">
              <img
                src="/img/ERP.png"
                alt="Sistema Modular ERP"
                className="object-cover w-full h-full absolute inset-0 rounded-2xl shadow-2xl drop-shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(1,195,141,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-12 sm:gap-8 max-w-4xl mx-auto">
            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl p-8 bg-[#191e29] text-white shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full max-w-full transition-all duration-500 transform hover:-translate-y-2 group"
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
                <span className="text-3xl font-semibold text-white">
                  {language === "ES" ? "Cotizar" : "Get Estimate"}
                </span>
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
                href="https://kpixs.com/forms/quote/f116b3913afc09d2517949e0d933c0e2?styled=1&with_logo=1"
                target="_blank"
                className="w-full mt-8 py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all bg-white text-[#191e29] hover:bg-white/90 shadow-lg shadow-[#191e29]/30 hover:shadow-xl hover:shadow-[#E3EEEC]/40"
                rel="noreferrer"
              >
                <span>{language === 'ES' ? 'Contactar' : 'Contact'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Custom Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl p-8 h-full flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-2 group"
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
                <span className="text-3xl font-semibold text-[#191e29]">
                  {language === "ES" ? "Cotizar" : "Get Estimate"}
                </span>
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
                href="https://kpixs.com/forms/quote/f116b3913afc09d2517949e0d933c0e2?styled=1&with_logo=1"
                target="_blank"
                className="w-full mt-8 py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all bg-[#01c38d]/10 text-[#01c38d] hover:bg-[#01c38d]/20 shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40"
                rel="noreferrer"
              >
                <span>{language === 'ES' ? 'Contactar' : 'Contact'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Updated button styling and spacing */}
          <div className="text-center mt-20">
            <a
              href="/planes"
              className="bg-[#01c38d] text-white font-bold inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md hover:bg-[#01c38d]/90 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 cursor-pointer"
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
  )
}

