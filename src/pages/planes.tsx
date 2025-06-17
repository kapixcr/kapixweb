"use client"

import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import ModulesTable from "@/components/ModulesTable"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/context/LanguageContext"
import Head from 'next/head'

export default function PlanesPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [planType, setPlanType] = useState("PERSONAL") // Changed default state


  const translations = {
    ES: {
      ourPlans: "NUESTROS PLANES",
      home: "INICIO",
      price: "PRECIO",
      personal: "PERSONAL",
      business: "EMPRESARIAL",
      month: "/mes",
      tax: "+ IVA",
      startFree: "Comenzar Gratis",
      startNow: "Comenzar Ahora",
      contact: "Contactar",
      start: "Comenzar",
      includes: "Incluye",
      startingFrom: "A partir de",
      planNames: {
        lite: "Lite",
        premium: "Premium",
        nexus: "NEXUS",
        vibe: "VIBE",
        craft: "CRAFT",
        hub: "HUB",
        zone: "ZONE",
        personalizado: "Personalizado",
      },
      descriptions: {
        lite: "Comienza Kapix Completamente Gratis",
        premium: "Accede a más módulos y funcionalidades avanzadas",
        nexus: "Plan básico para gestión de clientes y ventas",
        vibe: "Solución completa con panel de cliente",
        craft: "Plan completo para gestión empresarial",
        hub: "Solución integral con punto de venta e inventario",
        zone: "Plan avanzado para gestión de proyectos y ventas",
        custom: "Arma tu plan por medio de nuestro sistema modular...",
      },
      features: {
        team: "1 Equipo",
        clients: "50 Clientes",
        contacts: "50 Contactos",
        contracts: "30 Contratos",
        invoices: "100 Facturas",
        creditNotes: "100 Notas de Crédito",
        unlimitedProposals: "Sin límites Propuestas",
        projects: "5 Proyectos",
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
        // Business plan features
        crm: "CRM",
        potentialClients: "Clientes Potenciales",
        reports: "Informes",
        appointmentsOrAccounting: "Citas o Contabilidad",
        accounting: "Contabilidad",
        sales: "Ventas",
        purchases: "Compras",
        inventory: "Inventario",
        pointOfSale: "Punto de Venta",
        users: "7 usuarios",
        oneUser: "1 usuario",
        threeUsers: "3 usuarios",
        storageGigas: "50 gigas de almacenamiento",
        moreStorageGigas: "75 gigas de almacenamiento",
        smallStorage: "10 gigas de almacenamiento",
        mediumStorage: "30 gigas de almacenamiento",
        supportTickets: "5 tickets de soporte al mes",
        fewerSupportTickets: "3 tickets de soporte al mes",
        trainingHours: "Horas de capacitación iniciales",
        clientPanel: "Panel Cliente",
        // Nuevas traducciones para planes específicos
        nexusFeatures: {
          title: "Plan básico para gestión de clientes y ventas",
          description: "Ideal para pequeñas empresas que necesitan gestionar clientes y ventas de manera eficiente"
        },
        vibeFeatures: {
          title: "Solución completa con panel de cliente",
          description: "Perfecto para empresas que necesitan ofrecer un portal a sus clientes"
        },
        craftFeatures: {
          title: "Plan completo para gestión empresarial",
          description: "Solución integral para la gestión de proyectos y tareas empresariales"
        },
        hubFeatures: {
          title: "Solución integral con punto de venta e inventario",
          description: "Ideal para negocios con ventas físicas que necesitan control de inventario"
        },
        zoneFeatures: {
          title: "Plan avanzado para gestión de proyectos y ventas",
          description: "Para empresas que requieren gestión avanzada de proyectos y ventas"
        }
      },
    },
    EN: {
      ourPlans: "OUR PLANS",
      home: "HOME",
      price: "PRICING",
      personal: "PERSONAL",
      business: "BUSINESS",
      month: "/month",
      tax: "+ VAT",
      startFree: "Start Free",
      startNow: "Start Now",
      contact: "Contact Us",
      start: "Start",
      includes: "Includes",
      startingFrom: "Starting from",
      planNames: {
        lite: "Lite",
        premium: "Premium",
        nexus: "NEXUS",
        vibe: "VIBE",
        craft: "CRAFT",
        hub: "HUB",
        zone: "ZONE",
        personalizado: "Custom",
      },
      descriptions: {
        lite: "Start Kapix Completely Free",
        premium: "Access more modules and advanced features",
        nexus: "Basic plan for client and sales management",
        vibe: "Complete solution with client panel",
        craft: "Complete plan for business management",
        hub: "Comprehensive solution with point of sale and inventory",
        zone: "Advanced plan for project and sales management",
        custom: "Build your plan through our modular system, choose which modules your business needs and create your personalized plan",
      },
      features: {
        team: "1 Team",
        clients: "50 Clients",
        contacts: "50 Contacts",
        contracts: "30 Contracts",
        invoices: "100 Invoices",
        creditNotes: "100 Credit Notes",
        unlimitedProposals: "Unlimited Proposals",
        projects: "5 Projects",
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
        // Business plan features
        crm: "CRM",
        potentialClients: "Potential Clients",
        reports: "Reports",
        appointmentsOrAccounting: "Appointments or Accounting",
        accounting: "Accounting",
        sales: "Sales",
        purchases: "Purchases",
        inventory: "Inventory",
        pointOfSale: "Point of Sale",
        users: "7 users",
        oneUser: "1 user",
        threeUsers: "3 users",
        storageGigas: "50 GB storage",
        moreStorageGigas: "75 GB storage",
        smallStorage: "10 GB storage",
        mediumStorage: "30 GB storage",
        supportTickets: "5 support tickets per month",
        fewerSupportTickets: "3 support tickets per month",
        trainingHours: "Initial training hours",
        clientPanel: "Client Panel",
        // New translations for specific plans
        nexusFeatures: {
          title: "Basic plan for client and sales management",
          description: "Ideal for small businesses that need to efficiently manage clients and sales"
        },
        vibeFeatures: {
          title: "Complete solution with client panel",
          description: "Perfect for businesses that need to offer a portal to their clients"
        },
        craftFeatures: {
          title: "Complete plan for business management",
          description: "Comprehensive solution for business project and task management"
        },
        hubFeatures: {
          title: "Comprehensive solution with point of sale and inventory",
          description: "Ideal for businesses with physical sales that need inventory control"
        },
        zoneFeatures: {
          title: "Advanced plan for project and sales management",
          description: "For businesses requiring advanced project and sales management"
        }
      },
    },
  }

  // Ensure hydration is complete before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update getFeatureIcon function to handle more cases in both languages
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
    if (normalizedFeature.includes("panel")) return "fi fi-rr-dashboard"
    if (normalizedFeature.includes("contabilidad") || normalizedFeature.includes("accounting"))
      return "fi fi-rr-calculator"
    if (normalizedFeature.includes("pos") || normalizedFeature.includes("punto de venta"))
      return "fi fi-rr-shop"

    // Default icon for unmatched features
    return "fi fi-rr-check"
  }

  // Function to translate plan names
  // Update the planNameMap in getTranslatedPlanName function
  const getTranslatedPlanName = (originalName: string) => {
    const planNameMap: Record<string, keyof typeof translations.ES.planNames> = {
      Lite: "lite",
      Premium: "premium",
      NEXUS: "nexus",
      VIBE: "vibe",
      CRAFT: "craft",
      HUB: "hub",
      ZONE: "zone",
      Personalizado: "personalizado",
    }

    const key = planNameMap[originalName]
    if (!key) return originalName
  
    const planNames = translations[language].planNames
    return (key in planNames) ? planNames[key as keyof typeof planNames] : originalName
  }

  // Update button text based on plan type
  const getButtonText = (plan: any) => {
    const originalTag = plan.originalTag || plan.tag

    switch (originalTag) {
      case "Lite":
        return translations[language].startFree
      case "NEXUS":
      case "VIBE":
      case "CRAFT":
      case "HUB":
      case "ZONE":
      case "Premium":
        return translations[language].startNow
      case "Personalizado":
        return translations[language].contact
      default:
        return translations[language].start
    }
  }

  // Define plan features with translations
  // Update getTranslatedFeatures function to include new plans
  const getTranslatedFeatures = (planType: string, planTag: string) => {
    const t = translations[language].features
  
    if (planType === "PERSONAL") {
      if (planTag === "Lite" || planTag === translations.EN.planNames.lite) {
        return [
          t.team,
          t.clients,
          t.contacts,
          t.contracts,
          t.invoices,
          t.creditNotes,
          t.unlimitedProposals,
          t.projects,
          t.tasks,
          t.unlimitedProspects,
          t.products,
          t.storage,
          t.documents,
          t.reminder,
          t.expenses,
          t.payments,
        ]
      } else if (planTag === "Premium" || planTag === translations.EN.planNames.premium) {
        return [
          t.team,
          t.moreClients,
          t.unlimitedContacts,
          t.moreContracts,
          t.moreInvoices,
          t.unlimitedBudgets,
          t.unlimitedCreditNotes,
          "100 Propuestas",
          t.moreProjects,
          t.moreTasks,
          "3 Tickets de soporte por mes",
          t.unlimitedProspects,
          "200 Productos",
          t.moreStorage,
          t.reminder,
        ]
      } else if (planTag === "NEXUS" || planTag === translations.EN.planNames.nexus) {
        return [
          language === "ES" ? "Clientes" : "Clients",
          t.sales,
          t.appointments,
          t.oneUser,
          t.fewerSupportTickets,
          t.trainingHours,
          t.smallStorage,
        ]
      } else if (planTag === "VIBE" || planTag === translations.EN.planNames.vibe) {
        return [
          language === "ES" ? "Clientes" : "Clients",
          t.sales,
          t.appointments,
          t.clientPanel,
          t.threeUsers,
          t.fewerSupportTickets,
          t.mediumStorage,
          t.trainingHours,
        ]
      }
    } else if (planType === "EMPRESARIAL") {
      if (planTag === "CRAFT" || planTag === translations.EN.planNames.craft) {
        return [
          language === "ES" ? "Proyectos" : "Projects",
          language === "ES" ? "Tareas" : "Tasks",
          language === "ES" ? "Clientes" : "Clients",
          t.potentialClients,
          t.accounting,
          t.purchases,
          t.sales,
          t.users,
          t.storageGigas,
          t.supportTickets,
          t.trainingHours,
        ]
      } else if (planTag === "HUB" || planTag === translations.EN.planNames.hub) {
        return [
          language === "ES" ? "Clientes" : "Clients",
          t.sales,
          t.accounting,
          t.pointOfSale,
          t.inventory,
          t.users,
          t.purchases,
          t.moreStorageGigas,
          t.supportTickets,
          t.trainingHours,
        ]
      } else if (planTag === "ZONE" || planTag === translations.EN.planNames.zone) {
        return [
          language === "ES" ? "Proyectos" : "Projects",
          language === "ES" ? "Tareas" : "Tasks",
          language === "ES" ? "Clientes" : "Clients",
          t.potentialClients,
          t.accounting,
          t.purchases,
          t.sales,
          t.users,
          t.storageGigas,
          t.supportTickets,
          t.trainingHours,
        ]
      } else if (planTag === "Personalizado" || planTag === translations.EN.planNames.personalizado) {
        return [translations[language].descriptions.custom]
      }
    }

    return []
  }

  // Original plan data
  const originalPlansData = {
    PERSONAL: [
      {
        tag: "Lite",
        price: 0,
        popular: false,
        description: translations[language].descriptions.lite,
      },
      {
        tag: "Premium",
        price: 30,
        popular: true,
        description: translations[language].descriptions.premium,
      },
      {
        tag: "NEXUS",
        price: 50,
        popular: false,
        description: translations[language].descriptions.nexus,
      },
      {
        tag: "VIBE",
        price: 100,
        popular: false,
        description: translations[language].descriptions.vibe,
      },
    ],
    EMPRESARIAL: [
      {
        tag: "Personalizado",
        price: 100,
        popular: true,  
        description: translations[language].startingFrom,
      },
      {
        tag: "CRAFT",
        price: 150,
        popular: false,
        description: translations[language].includes,
      },
      {
        tag: "HUB",
        price: 200,
        popular: true,
        description: translations[language].includes,
      },
      {
        tag: "ZONE",
        price: 150,
        popular: false,
        description: translations[language].includes,
      },
    ],
  }

  // Translate plan data based on current language
  const plansData = {
    PERSONAL: originalPlansData.PERSONAL.map((plan) => ({
      ...plan,
      originalTag: plan.tag,
      tag: getTranslatedPlanName(plan.tag),
      description: plan.description,
    })),
    EMPRESARIAL: originalPlansData.EMPRESARIAL.map((plan) => ({
      ...plan,
      originalTag: plan.tag,
      tag: getTranslatedPlanName(plan.tag),
      description: plan.description,
    })),
  }

  // Loading state
  if (!mounted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50">
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-12 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="relative rounded-3xl p-6 h-full flex flex-col bg-white animate-pulse">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div className="w-24 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-8 w-32 bg-gray-200 rounded mb-6"></div>
                    <div className="space-y-4 flex-grow">
                      {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="h-6 bg-gray-200 rounded"></div>
                      ))}
                    </div>
                    <div className="h-12 bg-gray-200 rounded-full mt-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  // Actual content
  return (
    <>
      <Navbar />
      <Head>
        <title>{language === 'ES' ? 'Precios | Kapix' : 'Prices | Kapix'}</title>
        <meta
          name="description"
          content={language === 'ES'
            ? 'Descubre los planes que mejor se adaptan a las necesidades de tu negocio. Ofrecemos soluciones flexibles y escalables para acompañarte en cada etapa de tu crecimiento, con herramientas diseñadas para optimizar tu gestión empresarial.'
            : 'Discover the plans that best fit your business needs. We offer flexible and scalable solutions to support you at every stage of your growth, with tools designed to optimize your business management.'
          }
        />
      </Head>

      {/* Nueva sección de Hero con el mismo estilo que Sobre Nosotros */}
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img src="/img/PLANS_BG.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{translations[language].ourPlans}</h1>

            {/* Breadcrumb con el mismo estilo */}
            <div className="inline-flex items-center bg-black/30 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10">
              <a href="/" className="flex items-center text-white hover:text-[#01c38d] transition-colors">
                <div className="flex items-center justify-center h-6 w-6 mr-2">
                  <i className="fi fi-rr-house-chimney text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{translations[language].home}</span>
              </a>

              {/* Separador vertical */}
              <div className="h-5 w-px bg-white/30 mx-3"></div>

              <div className="flex items-center text-[#01c38d]">
                <div className="flex items-center justify-center h-6 w-6 mr-2">
                  <i className="fi fi-rr-rocket-lunch text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{translations[language].price}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="py-20">
          <div className="container mx-auto px-4">
            {/* Plan Type Switch */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="bg-white p-1.5 rounded-xl shadow-md flex gap-1">
                {[
                  { key: "PERSONAL", label: translations[language].personal },
                  { key: "EMPRESARIAL", label: translations[language].business },
                ].map((type) => (
                  <button
                    key={type.key}
                    onClick={() => setPlanType(type.key)}
                    className={`px-6 py-2.5 rounded-lg transition-all duration-300 font-semibold min-w-[120px] ${
                      planType === type.key
                        ? "bg-[#191e29] text-white shadow-lg"
                        : "bg-transparent text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={planType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto"
              >
                <div
                  className={`grid gap-8 sm:gap-8 md:gap-12 lg:gap-16 items-stretch mx-auto  ${
                    planType === "EMPRESARIAL"
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px]"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px]"
                  }`}
                >
                  {plansData[planType as keyof typeof plansData].map((plan, index: number) => (
                    <motion.div
                      key={plan.originalTag}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative rounded-3xl p-6 sm:p-8 h-full flex flex-col ${
                        plan.popular
                          ? "relative rounded-3xl p-8 bg-[#191e29] text-white shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full max-w-full"
                          : "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                      } transition-all duration-500 transform hover:-translate-y-2 group`}
                    >
                      {/* Logo y título en la izquierda */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`w-10 h-10 rounded-full ${plan.popular ? "bg-white/20" : "bg-[#01c38d]/10"} flex items-center justify-center`}
                        >
                          <i
                            className={`fi fi-rr-diamond ${plan.popular ? "text-white" : "text-[#01c38d]"} text-xl flex items-center justify-center`}
                          ></i>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full ${plan.popular ? "bg-white/20" : "bg-[#01c38d]/10"}`}>
                          <h3 className={`text-lg font-semibold ${plan.popular ? "text-white" : "text-[#191e29]"}`}>
                            {plan.tag}
                          </h3>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-[#191e29]"}`}>
                          ${plan.price}
                        </span>
                        {plan.price > 0 && (
                          <span className={`text-sm ${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                            {" " + translations[language].tax}
                          </span>
                        )}
                        <span className={`text-sm ml-1 ${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                          {translations[language].month}
                        </span>
                      </div>

                      {/* Features con íconos centrados */}
                      <ul className="space-y-4 flex-grow">
                        {getTranslatedFeatures(planType, plan.tag)?.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                plan.popular ? "bg-white/20" : "bg-[#01c38d]/10"
                              }`}
                            >
                              <i
                                className={`${getFeatureIcon(feature)} ${plan.popular ? "text-white" : "text-[#01c38d]"} text-xs flex items-center justify-center w-full h-full`}
                              ></i>
                            </div>
                            <span className={`text-sm ${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <a
                        href={
                          plan.originalTag === "Lite"
                            ? "https://lite.kapix.co.cr/"
                            : plan.originalTag === "Premium"
                              ? "https://kpixs.com/authentication/register?kx_plan=premium"
                              : plan.originalTag === "NEXUS"
                                ? "https://kpixs.com/authentication/register?kx_plan=sol"
                                : plan.originalTag === "VIBE"
                                  ? "https://kpixs.com/authentication/register?kx_plan=vibe"
                                  : plan.originalTag === "CRAFT"
                                    ? "https://kpixs.com/authentication/register?kx_plan=venus"
                                    : plan.originalTag === "HUB"
                                      ? "https://kpixs.com/authentication/register?kx_plan=tierra"
                                      : plan.originalTag === "ZONE"
                                        ? "https://kpixs.com/authentication/register?kx_plan=zone"
                                        : plan.originalTag === "Personalizado"
                                          ? "https://wa.me/50660641906?text=Hola%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20plan%20personalizado"
                                          : "https://kpixs.com/authentication/register?kx_plan"
                        }
                        target="_blank"
                        className={`w-full mt-8 py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all ${
                          plan.popular
                            ? "bg-white text-[#191e29] hover:bg-white/90 shadow-lg shadow-[#191e29]/30 hover:shadow-xl hover:shadow-[#E3EEEC]/40 transition-all"
                            : "bg-[#01c38d]/10 text-[#01c38d] hover:bg-[#01c38d]/20 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40"
                        }`}
                        rel="noreferrer"
                      >
                        <span>{getButtonText(plan)}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Modules Table Section */}
        <div className="py-20 bg-white">
          <ModulesTable />
        </div>
      </div>
      <Footer />
    </>
  )
}

