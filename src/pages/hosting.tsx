"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/context/LanguageContext"
import Head from 'next/head'
import HostingFaqSection from "@/components/HostingFaqSection"

// Definir la interfaz para el tipo de plan
interface PlanData {
  tag: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular: boolean;
  description: string;
  originalTag?: string;
  price?: number;
  features?: string[];
}

export default function HostingPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [billingPeriod, setBillingPeriod] = useState("MONTHLY") // Cambiado a toggle de periodo de facturación

  const translations = {
    ES: {
      ourPlans: "PLANES DE HOSTING",
      home: "INICIO",
      price: "HOSTING",
      monthly: "MENSUAL",
      yearly: "ANUAL",
      month: "+ IVA /mes",
      year: "+ IVA /año",
      tax: "",
      startFree: "Comenzar Ahora",
      startNow: "Comenzar Ahora",
      contact: "Contactar",
      start: "Comenzar",
      includes: "Incluye",
      startingFrom: "A partir de",
      planNames: {
        basic: "Inicio Web",
        standard: "Crecimiento Web",
        premium: "Potencia Pro",
        enterprise: "Ultra Hosting",
      },
      descriptions: {
        basic: "Ideal para blogs, portafolios o sitios pequeños",
        standard: "Perfecto para sitios de negocios, tiendas pequeñas o freelancers",
        premium: "Para eCommerce, apps web o sitios con alto tráfico",
        enterprise: "Pensado para empresas, sitios de alto tráfico, SaaS o desarrolladores avanzados",
      },
      features: {
        // Plan Básico
        storage: "1 GB Espacio en Disco",
        bandwidth: "100 GB Transferencia Mensual",
        domain: "1 Dominio Alojado",
        email: "10 Cuentas de Correo",
        cpu: "1 Núcleo CPU",
        ram: "1 GB RAM",
        ssl: "Certificado SSL Gratuito",
        backups: "Respaldos Diarios/Semanales",
        
        // Plan Medio
        moreStorage: "50 GB Espacio en Disco",
        moreBandwidth: "300 GB Transferencia Mensual",
        domains: "3 Dominios Alojados",
        moreEmail: "25 Cuentas de Correo",
        moreCpu: "2 Núcleos CPU",
        moreRam: "2-3 GB RAM",
        
        // Plan Avanzado
        premiumStorage: "100 GB Espacio en Disco",
        unlimitedBandwidth: "Transferencia Mensual Ilimitada (500GB +)",
        moreDomains: "Dominios Alojados Ilimitados",
        unlimitedEmail: "Cuentas de Correo Ilimitadas",
        premiumCpu: "3-4 Núcleos CPU",
        premiumRam: "4-6 GB RAM",
        
        // Plan Empresarial
        enterpriseStorage: "500 GB Espacio en Disco NVMe",
        enterpriseBandwidth: "Transferencia Mensual Ilimitada (1TB+)",
        unlimitedDomains: "Dominios Alojados Ilimitados",
        enterpriseCpu: "6-8 Núcleos CPU",
        enterpriseRam: "12-16 GB RAM",
        fireWall: "Firewall Web + Protección DDoS",
        extern: "Copias de Seguridad Diarias Automáticas + Copias Externas (Wasabi, por Ejemplo)",
        ssh: "Acceso SSH / Git / Cron Jobs / Composer",
        php: "PHP Selector, Node.js, Python",
        
        // Características comunes y adicionales
        antivirus: "Antivirus & Antimalware Incluido",
        advancedAntivirus: "Antivirus & Antimalware Proactivo",
        enterpriseAntivirus: "Antivirus & Antimalware Avanzado",
        externalBackups: "Respaldos Automáticos + Copias Externas",
        git: "Acceso SSH / Git",
        cpanel: "Panel de Control cPanel",
        support: "Soporte Básico",
        prioritySupport: "Soporte Prioritario",
        premiumSupport: "Soporte Premium (Chat/WhatsApp) Prioridad Alta",
        vipSupport: "Soporte VIP (WhatsApp, Correo)",
        SQL: "Bases de Datos MySQL Ilimitadas",
        backUP: "Respaldos Automáticos Diarios"
      },
      packages: {
        basic: "kpixscom_basico",
        standard: "kpixscom_medio",
        premium: "kpixscom_avanzado",
        enterprise: "kpixscom_ultra",
      },
      idealFor: {
        basic: "Blogs, portafolios o sitios pequeños",
        standard: "Sitios de negocios, tiendas pequeñas o freelancers",
        premium: "eCommerce, apps web o sitios con alto tráfico",
        enterprise: "Empresas, sitios de alto tráfico, SaaS o desarrolladores avanzados",
      },
      buttonLinks: {
        basic: "clients.kapix.co.cr/order/product?pid=61e50989-73d2-4780-535c-045e610832d7",
        standard: "clients.kapix.co.cr/order/product?pid=1e96d298-537d-4ed9-725a-64e120637085",
        premium: "clients.kapix.co.cr/order/product?pid=80d1639e-237d-438e-967b-74610589e572",
        enterprise: "clients.kapix.co.cr/order/product?pid=0381d780-e72d-4d10-d2eb-9413569926e5",
      },
      tableHeader: {
        label: "Planes de Hosting",
        title: "Comparación de Planes de Hosting",
        description: "Explora las características, precios y beneficios incluidos en cada uno de nuestros planes de hosting.",
      },      
    },
    EN: {
      ourPlans: "HOSTING PLANS",
      home: "HOME",
      price: "HOSTING",
      monthly: "MONTHLY",
      yearly: "YEARLY",
      month: "+ VAT /month",
      year: "+ VAT /year",
      tax: "",
      startFree: "Start Now",
      startNow: "Start Now",
      contact: "Contact Us",
      start: "Start",
      includes: "Includes",
      startingFrom: "Starting from",
      planNames: {
        basic: "Web Start",
        standard: "Web Growth",
        premium: "Pro Power",
        enterprise: "Ultra Hosting",
      },
      descriptions: {
        basic: "Ideal for blogs, portfolios or small sites",
        standard: "Perfect for small businesses and freelancers",
        premium: "For eCommerce, web apps or high-traffic sites",
        enterprise: "Designed for companies, high-traffic sites, SaaS or advanced developers",
      },
      features: {
        storage: "1 GB Disk Space",
        bandwidth: "100 GB Monthly Transfer",
        domain: "1 Hosted Domain",
        email: "10 Email Accounts",
        cpu: "1 CPU Core",
        ram: "1 GB RAM",
        ssl: "Free SSL Certificate",
        backups: "Daily/Weekly Backups",
        
        moreStorage: "50 GB Disk Space",
        moreBandwidth: "300 GB Monthly Transfer",
        domains: "3 Hosted Domains",
        moreEmail: "25 Email Accounts",
        moreCpu: "2 CPU Cores",
        moreRam: "2-3 GB RAM",
        
        premiumStorage: "100 GB Disk Space",
        unlimitedBandwidth: "Unlimited Monthly Transfer (500GB +)",
        moreDomains: "Unlimited Hosted Domains",
        unlimitedEmail: "Unlimited Email Accounts",
        premiumCpu: "3-4 CPU Cores",
        premiumRam: "4-6 GB RAM",
        
        enterpriseStorage: "500 GB NVMe Disk Space",
        enterpriseBandwidth: "Unlimited Monthly Transfer (1TB+)",
        unlimitedDomains: "Unlimited Hosted Domains",
        enterpriseCpu: "6-8 CPU Cores",
        enterpriseRam: "12-16 GB RAM",
        fireWall: "Web Firewall + DDoS Protection",
        extern: "Automatic Daily Backups + External Copies (Wasabi, for Example)",
        ssh: "SSH Access / Git / Cron Jobs / Composer",
        php: "PHP Selector, Node.js, Python",
        
        antivirus: "Included Antivirus & Antimalware",
        advancedAntivirus: "Proactive Antivirus & Antimalware",
        enterpriseAntivirus: "Advanced Antivirus & Antimalware",
        externalBackups: "Automatic Backups + External Copies",
        git: "SSH / Git Access",
        cpanel: "cPanel Control Panel",
        support: "Basic Support",
        prioritySupport: "Priority Support",
        premiumSupport: "Premium Support (Chat/WhatsApp) High Priority",
        vipSupport: "VIP Support (WhatsApp, email)",
        SQL: "Unlimited MySQL Databases",
        backUP: "Daily Automatic Backups"
      },
      packages: {
        basic: "kpixscom_basico",
        standard: "kpixscom_medio",
        premium: "kpixscom_avanzado",
        enterprise: "kpixscom_ultra",
      },
      idealFor: {
        basic: "Blogs, portfolios or small sites",
        standard: "Business sites, small stores or freelancers",
        premium: "eCommerce, web apps or high-traffic sites",
        enterprise: "Digital agencies, high-traffic Laravel/WordPress projects, large stores, SaaS, CRM",
      },
      buttonLinks: {
        basic: "clients.kapix.co.cr/order/product?pid=61e50989-73d2-4780-535c-045e610832d7",
        standard: "clients.kapix.co.cr/order/product?pid=1e96d298-537d-4ed9-725a-64e120637085",
        premium: "clients.kapix.co.cr/order/product?pid=80d1639e-237d-438e-967b-74610589e572",
        enterprise: "clients.kapix.co.cr/order/product?pid=0381d780-e72d-4d10-d2eb-9413569926e5",
      },
      tableHeader: {
        label: "Hosting Plans",
        title: "Hosting Plans Comparison",
        description: "Explore the features, pricing, and benefits included in each of our hosting plans.",
      },      
    },
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const getFeatureIcon = (feature: string) => {
    const normalizedFeature = feature
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    if (normalizedFeature.includes("almacenamiento") || normalizedFeature.includes("storage"))
      return "fi fi-rr-database"
    if (normalizedFeature.includes("ancho") || normalizedFeature.includes("bandwidth")) return "fi fi-rr-wifi"
    if (normalizedFeature.includes("dominio") || normalizedFeature.includes("domain")) return "fi fi-rr-globe"
    if (normalizedFeature.includes("correo") || normalizedFeature.includes("email")) return "fi fi-rr-envelope"
    if (normalizedFeature.includes("ssl") || normalizedFeature.includes("certificate")) return "fi fi-rr-shield-check"
    if (normalizedFeature.includes("copia") || normalizedFeature.includes("backup")) return "fi fi-rr-cloud-upload"
    if (normalizedFeature.includes("cdn")) return "fi fi-rr-globe-alt"
    if (normalizedFeature.includes("base") || normalizedFeature.includes("database")) return "fi fi-rr-database"
    if (normalizedFeature.includes("panel") || normalizedFeature.includes("cpanel")) return "fi fi-rr-dashboard"
    if (normalizedFeature.includes("wordpress")) return "fi fi-rr-browser"
    if ( normalizedFeature.includes("soporte") || normalizedFeature.includes("support")) return "fi fi-rr-headset"
    if (normalizedFeature.includes("ip") || normalizedFeature.includes("dedicada")) return "fi fi-rr-network"
    if (normalizedFeature.includes("firewall") || normalizedFeature.includes("waf")) return "fi fi-rr-shield"
    if (normalizedFeature.includes("ddos") || normalizedFeature.includes("proteccion")) return "fi fi-rr-shield-plus"
    if (normalizedFeature.includes("rendimiento") || normalizedFeature.includes("performance")) return "fi fi-rr-stats"
    if (normalizedFeature.includes("prueba") || normalizedFeature.includes("staging")) return "fi fi-rr-flask"
    if (normalizedFeature.includes("git")) return "fi fi-rr-code-branch"
    if (normalizedFeature.includes("cache")) return "fi fi-rr-bolt"
    if (normalizedFeature.includes("php")) return "fi fi-rr-circle-nodes"
    if (normalizedFeature.includes("migracion") || normalizedFeature.includes("migration")) return "fi fi-rr-arrows"
    if (normalizedFeature.includes("uptime") || normalizedFeature.includes("actividad")) return "fi fi-rr-time-check"
    if (normalizedFeature.includes("recurso") || normalizedFeature.includes("resource")) return "fi fi-rr-server"
    if (normalizedFeature.includes("cpu") || normalizedFeature.includes("nucleo")) return "fi fi-rr-microchip"
    if (normalizedFeature.includes("ram") || normalizedFeature.includes("memoria")) return "fi fi-rr-memory"
    if (normalizedFeature.includes("sin limite") || normalizedFeature.includes("unlimited")) return "fi fi-rr-infinity"
    if (normalizedFeature.includes("sla")) return "fi fi-rr-badge-check"
    if (normalizedFeature.includes("configuracion") || normalizedFeature.includes("setup")) return "fi fi-rr-settings"
    if (normalizedFeature.includes("seo")) return "fi fi-rr-search"
    if (normalizedFeature.includes("estadistica") || normalizedFeature.includes("analytics")) return "fi fi-rr-stats"
    if (normalizedFeature.includes("seguridad") || normalizedFeature.includes("security")) return "fi fi-rr-shield-check"
    if (normalizedFeature.includes("malware")) return "fi fi-rr-shield-exclamation"
    if (normalizedFeature.includes("https") || normalizedFeature.includes("redirect")) return "fi fi-rr-lock"
    if (normalizedFeature.includes("subdominio") || normalizedFeature.includes("subdomain")) return "fi fi-rr-sitemap"

    return "fi fi-rr-check"
  }

  const getTranslatedPlanName = (originalName: string) => {
    const planNameMap: Record<string, keyof typeof translations.ES.planNames> = {
      Basic: "basic",
      Standard: "standard",
      Premium: "premium",
      Enterprise: "enterprise",
    }

    const key = planNameMap[originalName]
    if (!key) return originalName

    const planNames = translations[language].planNames
    return key in planNames ? planNames[key as keyof typeof planNames] : originalName
  }

  const getButtonText = (plan: any) => {
    const originalTag = plan.originalTag || plan.tag

    switch (originalTag) {
      case "Basic":
        return translations[language].startFree
      case "Standard":
      case "Premium":
      case "Enterprise":
        return translations[language].startNow
      default:
        return translations[language].start
    }
  }

  const getButtonLink = (plan: any) => {
    const originalTag = plan.originalTag || plan.tag
    const key = originalTag.toLowerCase() as keyof typeof translations.ES.buttonLinks
    
    switch (originalTag) {
      case "Basic":
        return translations[language].buttonLinks.basic
      case "Standard":
        return translations[language].buttonLinks.standard
      case "Premium":
        return translations[language].buttonLinks.premium
      case "Enterprise":
        return translations[language].buttonLinks.enterprise
      default:
        return "#"
    }
  }

  const getTranslatedFeatures = (planTag: string) => {
    const t = translations[language].features

    if (planTag === "Basic" || planTag === translations.EN.planNames.basic) {
      return [
        t.cpu,
        t.ram,
        t.storage,
        t.bandwidth,
        t.email,
        t.domain,
        t.ssl,
        t.antivirus,
        t.backups,
        t.support,
      ]
    } else if (planTag === "Standard" || planTag === translations.EN.planNames.standard) {
      return [
        t.moreCpu,
        t.moreRam,
        t.moreStorage,
        t.moreBandwidth,
        t.moreEmail,
        t.domains,
        t.ssl,
        t.antivirus,
        t.SQL,
        t.backUP,
        t.prioritySupport,
      ]
    } else if (planTag === "Premium" || planTag === translations.EN.planNames.premium) {
      return [
        t.premiumCpu,
        t.premiumRam,
        t.premiumStorage,
        t.unlimitedBandwidth,
        t.unlimitedEmail,
        t.moreDomains,
        t.ssl,
        t.advancedAntivirus,
        t.SQL,
        t.backUP,
        t.premiumSupport,
      ]
    } else if (planTag === "Enterprise" || planTag === translations.EN.planNames.enterprise) {
      return [
        t.enterpriseCpu,
        t.enterpriseRam,
        t.enterpriseStorage,
        t.enterpriseBandwidth,
        t.unlimitedDomains,
        t.unlimitedEmail,
        t.ssl,
        t.enterpriseAntivirus,
        t.fireWall,
        t.SQL,
        t.extern,
        t.ssh,
        t.php,
        t.vipSupport,
      ]
    }

    return []
  }

  const originalPlansData = [
    {
      tag: "Basic",
      monthlyPrice: 5,
      yearlyPrice: 48, // 20% discount applied
      popular: false,
      description: translations[language].descriptions.basic,
      packageName: translations[language].packages.basic,
      idealFor: translations[language].idealFor.basic,
    },
    {
      tag: "Standard",
      monthlyPrice: 10,
      yearlyPrice: 96, // 20% discount applied
      popular: true,
      description: translations[language].descriptions.standard,
      packageName: translations[language].packages.standard,
      idealFor: translations[language].idealFor.standard,
    },
    {
      tag: "Premium",
      monthlyPrice: 20,
      yearlyPrice: 192, // 20% discount applied
      popular: false,
      description: translations[language].descriptions.premium,
      packageName: translations[language].packages.premium,
      idealFor: translations[language].idealFor.premium,
    },
    {
      tag: "Enterprise",
      monthlyPrice: 50,
      yearlyPrice: 480, // 20% discount applied
      popular: false,
      description: translations[language].descriptions.enterprise,
      packageName: translations[language].packages.enterprise,
      idealFor: translations[language].idealFor.enterprise,
    },
  ]

  const plansData = originalPlansData.map((plan) => ({
    ...plan,
    originalTag: plan.tag,
    tag: getTranslatedPlanName(plan.tag),
    price: billingPeriod === "MONTHLY" ? plan.monthlyPrice : plan.yearlyPrice,
    description: plan.description,
  }))

  // Función para obtener las características para la tabla de comparación
  const getComparisonFeatures = () => {
    const t = translations[language].features
    
    return [
      { 
        name: language === 'ES' ? 'CPU' : 'CPU', 
        icon: "fi fi-rr-microchip",
        basic: t.cpu, 
        standard: t.moreCpu, 
        enterprise: t.enterpriseCpu 
      },
      { 
        name: language === 'ES' ? 'RAM' : 'RAM', 
        icon: "fi fi-rr-memory", 
        basic: t.ram, 
        standard: t.moreRam, 
        enterprise: t.enterpriseRam 
      },
      { 
        name: language === 'ES' ? 'Almacenamiento' : 'Storage',
        icon: "fi fi-rr-database", 
        basic: t.storage, 
        standard: t.moreStorage, 
        enterprise: t.enterpriseStorage 
      },
      { 
        name: language === 'ES' ? 'Transferencia' : 'Bandwidth',
        icon: "fi fi-rr-wifi", 
        basic: t.bandwidth, 
        standard: t.moreBandwidth, 
        enterprise: t.enterpriseBandwidth 
      },
      { 
        name: language === 'ES' ? 'Dominios' : 'Domains',
        icon: "fi fi-rr-globe", 
        basic: t.domain, 
        standard: t.domains, 
        enterprise: t.unlimitedDomains 
      },
      { 
        name: language === 'ES' ? 'Correos' : 'Email Accounts',
        icon: "fi fi-rr-envelope", 
        basic: t.email, 
        standard: t.moreEmail, 
        enterprise: t.unlimitedEmail 
      },
      { 
        name: language === 'ES' ? 'SSL' : 'SSL',
        icon: "fi fi-rr-shield-check", 
        basic: '✓', 
        standard: '✓', 
        enterprise: '✓' 
      },
      { 
        name: language === 'ES' ? 'Antivirus' : 'Antivirus',
        icon: "fi fi-rr-shield-exclamation", 
        basic: t.antivirus, 
        standard: t.antivirus, 
        enterprise: t.enterpriseAntivirus 
      },
      { 
        name: language === 'ES' ? 'Bases de Datos' : 'Databases',
        icon: "fi fi-rr-database", 
        basic: '✗', 
        standard: t.SQL, 
        enterprise: t.SQL 
      },
      { 
        name: language === 'ES' ? 'Respaldos' : 'Backups',
        icon: "fi fi-rr-cloud-upload", 
        basic: t.backups, 
        standard: t.backUP, 
        enterprise: t.extern 
      },
      { 
        name: language === 'ES' ? 'Soporte' : 'Support',
        icon: "fi fi-rr-headset", 
        basic: t.support, 
        standard: t.prioritySupport, 
        enterprise: t.vipSupport 
      },
      { 
        name: language === 'ES' ? 'Firewall' : 'Firewall',
        icon: "fi fi-rr-shield", 
        basic: '✗', 
        standard: '✗', 
        enterprise: t.fireWall 
      },
      { 
        name: language === 'ES' ? 'SSH/Git' : 'SSH/Git',
        icon: "fi fi-rr-code-branch", 
        basic: '✗', 
        standard: '✗', 
        enterprise: t.ssh 
      },
      { 
        name: language === 'ES' ? 'PHP/Node.js/Python' : 'PHP/Node.js/Python',
        icon: "fi fi-rr-circle-nodes", 
        basic: '✗', 
        standard: '✗', 
        enterprise: t.php 
      },
    ]
  }

  if (!mounted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="min-h-screen bg-gray-50">
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-12 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch max-w-7xl mx-auto">
                {[1, 2, 3, 4].map((_, index) => (
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
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <>
      <Head>
        <title>{language === 'ES' ? 'Hosting | Kapix' : 'Hosting | Kapix'}</title>
        <meta
          name="description"
          content={language === 'ES'
            ? 'Planes de hosting para tu sitio web. Soluciones confiables y de alto rendimiento.'
            : 'Hosting plans for your website. Reliable and high-performance solutions.'
          }
        />
      </Head>
      <Navbar />
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img src="/img/HOSTING.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{translations[language].ourPlans}</h1>

            <div className="inline-flex items-center bg-black/30 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10">
              <a href="/" className="flex items-center text-white hover:text-[#01c38d] transition-colors">
                <div className="flex items-center justify-center h-6 w-6 mr-2">
                  <i className="fi fi-rr-house-chimney text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{translations[language].home}</span>
              </a>

              <div className="h-5 w-px bg-white/30 mx-3"></div>

              <div className="flex items-center text-[#01c38d]">
                <div className="flex items-center justify-center h-6 w-6 mr-2">
                  <i className="fi fi-rr-server text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{translations[language].price}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-md inline-flex">
              <button
                onClick={() => setBillingPeriod("MONTHLY")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === "MONTHLY"
                    ? "bg-[#01c38d] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {translations[language].monthly}
              </button>
              <button
                onClick={() => setBillingPeriod("YEARLY")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === "YEARLY"
                    ? "bg-[#01c38d] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {translations[language].yearly}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch max-w-7xl mx-auto">
            {plansData.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all ${
                  plan.popular ? "bg-[#191e29] text-white" : "bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#01c38d] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-[#01c38d]" : "bg-[#191e29]"
                    }`}
                  >
                    <i
                      className={`fi fi-rr-database text-lg leading-none ${
                        plan.popular ? "text-white" : "text-white"
                      }`}
                    ></i>
                  </div>
                  <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-[#191e29]"}`}>
                    {plan.tag}
                  </h3>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-[#191e29]"}`}>
                      ${plan.price}
                    </span>
                    <span
                      className={`ml-1 text-sm ${
                        plan.popular ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {billingPeriod === "MONTHLY" ? translations[language].month : translations[language].year}
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-2 ${
                      plan.popular ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
                <div className="space-y-3 flex-grow">
                  {getTranslatedFeatures(plan.originalTag).map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <i
                        className={`${getFeatureIcon(feature)} mr-3 ${
                          plan.popular ? "text-[#01c38d]" : "text-[#01c38d]"
                        }`}
                      ></i>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://${getButtonLink(plan)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full py-3 rounded-xl text-center font-medium text-sm transition-all ${
                    plan.popular
                      ? "bg-[#01c38d] text-white hover:bg-[#01c38d]/90"
                      : "bg-[#191e29] text-white hover:bg-[#191e29]/90"
                  }`}
                >
                  {getButtonText(plan)}
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Tabla de comparación de planes */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#191e29] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                {translations[language].tableHeader.label}
              </span>
              <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent mb-4">
                {translations[language].tableHeader.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {translations[language].tableHeader.description}
              </p>
            </div>
            
            <div className="overflow-x-auto shadow-lg">
              <table className="w-full border-collapse shadow-lg">
                <thead>
                  <tr className="bg-[#191e29] text-white">
                    <th className="p-4 text-left rounded-tl-xl">{language === 'ES' ? 'Características' : 'Features'}</th>
                    <th className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#01c38d] flex items-center justify-center">
                          <i className="fi fi-rr-database text-white leading-none"></i>
                        </div>
                        <span>{translations[language].planNames.basic}</span>
                      </div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#01c38d] flex items-center justify-center">
                          <i className="fi fi-rr-database text-white leading-none"></i>
                        </div>
                        <span className="whitespace-nowrap">{translations[language].planNames.standard}</span>
                      </div>
                    </th>
                    <th className="p-4 text-center rounded-tr-xl">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#01c38d] flex items-center justify-center">
                          <i className="fi fi-rr-database text-white leading-none"></i>
                        </div>
                        <span className="whitespace-nowrap">{translations[language].planNames.enterprise}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getComparisonFeatures().map((feature, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                    >
                      <td className={`p-4 font-medium text-[#191e29] ${index === getComparisonFeatures().length - 1 ? 'rounded-bl-xl' : ''}`}>
                        <div className="flex items-center gap-2">
                          <i className={`${feature.icon} text-[#01c38d] flex-shrink-0 mt-0.5`}></i>
                          <span className="leading-tight">{feature.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-gray-700">
                        <div className="flex items-center justify-center">
                          {feature.basic === '✓' ? (
                            <i className="fi fi-rr-check text-[#01c38d] text-lg"></i>
                          ) : feature.basic === '✗' ? (
                            <i className="fi fi-rr-cross-small text-red-500 text-lg"></i>
                          ) : (
                            <span>{feature.basic}</span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-center text-gray-700">
                        <div className="flex items-center justify-center">
                          {feature.standard === '✓' ? (
                            <i className="fi fi-rr-check text-[#01c38d] text-lg"></i>
                          ) : feature.standard === '✗' ? (
                            <i className="fi fi-rr-cross-small text-red-500 text-lg"></i>
                          ) : (
                            <span>{feature.standard}</span>
                          )}
                        </div>
                      </td>
                      <td className={`p-4 text-center text-gray-700 ${index === getComparisonFeatures().length - 1 ? 'rounded-br-xl' : ''}`}>
                        <div className="flex items-center justify-center">
                          {feature.enterprise === '✓' ? (
                            <i className="fi fi-rr-check text-[#01c38d] text-lg"></i>
                          ) : feature.enterprise === '✗' ? (
                            <i className="fi fi-rr-cross-small text-red-500 text-lg"></i>
                          ) : (
                            <span>{feature.enterprise}</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

          {/* Sección de Preguntas Frecuentes */}
          <HostingFaqSection />

      <Footer />
    </>
  </div>
)
}