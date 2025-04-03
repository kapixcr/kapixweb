"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/context/LanguageContext"
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'

// Helper function to format important text in bold with proper TypeScript typing
function formatBoldText(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
}

const translations = {
  ES: {
    title: "TÉRMINOS Y CONDICIONES",
    home: "INICIO",
    current: "TÉRMINOS",
    lastUpdated: "Última actualización: 07-03-2025",
    version: "Versión DRPD.3.2.01",
    content: {
      intro:
        "En Kapix ERP, valoramos la privacidad y nos comprometemos a proteger los datos personales de nuestros usuarios conforme al Reglamento General de Protección de Datos (Reglamento UE 2016/679). A continuación, explicamos cómo cumplimos con las obligaciones legales establecidas en el GDPR.",
      sections: [
        {
          title: "1. Responsable del Tratamiento de Datos",
          content:
            "El responsable del tratamiento de los datos personales es:\nEmpresa: **KAPIX SRL**\nDirección: **San José Costa Rica**\nCorreo electrónico: **info@kapix.co.cr**\nDelegado de Protección de Datos (DPO): Puedes contactar a nuestro Delegado de Protección de Datos en **info@kapix.co.cr**",
          icon: "fi fi-rr-user",
        },
        {
          title: "2. Base Jurídica para el Tratamiento de Datos",
          content:
            "Procesamos datos personales únicamente cuando contamos con una base legal para hacerlo, conforme a lo establecido en el GDPR:\n• **Consentimiento**: Obtenemos tu consentimiento explícito para el tratamiento de tus datos.\n• **Ejecución del contrato**: Tratamos los datos necesarios para proporcionarte acceso y funcionalidad en Kapix ERP, Kapix Lite o Kapix Premium.\n• **Interés legítimo**: Realizamos análisis de uso y mejoras del servicio siempre que no prevalezcan tus derechos fundamentales.\n• **Cumplimiento legal**: Procesamos datos cuando sea necesario para cumplir con una obligación legal.",
          icon: "fi fi-rr-scroll-old",
        },
        {
          title: "3. Datos que Tratamos",
          content:
            "Recopilamos y tratamos únicamente los datos necesarios para los fines establecidos:\n• **Datos de registro**: Nombre, correo electrónico y contraseña (almacenados de forma encriptada).\n• **Datos técnicos**: Dirección IP, tipo de navegador, sistema operativo y datos de actividad en la plataforma.\n• **Datos de uso**: Información sobre facturas, tareas, proyectos y cualquier otro dato que ingreses en la plataforma.\n\nNota: No procesamos categorías especiales de datos personales (como datos de salud, origen racial o étnico, etc.).",
          icon: "fi fi-rr-database",
        },
        {
          title: "4. Finalidad del Tratamiento de Datos",
          content:
            "Los datos personales recopilados se utilizan para:\n• **Proporcionar acceso y funcionalidad** en Kapix ERP, Kapix Lite o Kapix Premium.\n• **Mantener la seguridad** de la plataforma mediante herramientas como reCAPTCHA, encriptación y otras medidas técnicas.\n• **Mejorar la experiencia del usuario** mediante análisis de datos anónimos.\n• **Cumplir con obligaciones legales**, fiscales y regulatorias.",
          icon: "fi fi-rr-target",
        },
        {
          title: "5. Derechos del Usuario (Interesado)",
          content:
            "En cumplimiento del GDPR, los usuarios de Kapix ERP, Kapix Lite o Kapix Premium tienen los siguientes derechos:\n• **Derecho de acceso**: Solicitar una copia de los datos personales que tratamos.\n• **Derecho de rectificación**: Solicitar la corrección de datos inexactos o incompletos.\n• **Derecho de eliminación** (derecho al olvido): Solicitar la eliminación de tus datos personales cuando ya no sean necesarios para los fines originales.\n• **Derecho a la portabilidad**: Solicitar que tus datos personales sean transferidos a otro proveedor en un formato estructurado y legible.\n• **Derecho de oposición**: Oponerte al tratamiento de tus datos personales en ciertos casos, como para el marketing directo.\n• **Derecho a la limitación del tratamiento**: Solicitar la restricción del tratamiento de tus datos bajo ciertas circunstancias.\n• **Derecho a retirar el consentimiento**: Puedes retirar tu consentimiento para el tratamiento de datos en cualquier momento.\n\nPara ejercer cualquiera de estos derechos, contáctanos en: **info@kapix.co.cr**",
          icon: "fi fi-rr-shield-check",
        },
        {
          title: "6. Conservación de Datos",
          content:
            "Mantendremos tus datos personales solo durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, salvo que la ley exija un período de retención más prolongado.\n Criterios para la conservación: \n• **Datos de cuenta**: Mientras mantengas tu cuenta activa en Kapix ERP, Kapix Lite o Kapix Premium.\n• **Registros técnicos**: Durante el tiempo necesario para garantizar la seguridad del sistema.\n• **Obligaciones legales**: Según los períodos de retención requeridos por la normativa aplicable.",
          icon: "fi fi-rr-time-check",
        },
        {
          title: "7. Transferencias Internacionales de Datos",
          content:
            "Todos nuestros sistemas Kapix utilizan servidores dedicados protegidos y ubicados dentro de la Unión Europea o en países con un nivel adecuado de protección. Si en algún momento transferimos datos fuera de la UE/EEE, garantizaremos que:\n• Se apliquen **salvaguardas adecuadas**, como cláusulas contractuales estándar aprobadas por la Comisión Europea.\n• Las transferencias se realicen de acuerdo con la **normativa del GDPR**.",
          icon: "fi fi-rr-world",
        },
        {
          title: "8. Medidas de Seguridad",
          content:
            "En todos nuestros sistemas Kapix se implementan medidas técnicas y organizativas avanzadas para proteger tus datos personales contra accesos no autorizados, pérdidas o daños:\n• **Encriptación SSL**: Todas las comunicaciones están cifradas con protocolos SSL/TLS para proteger los datos durante la transmisión.\n• **Servidores dedicados**: Alojamos los datos en servidores seguros con acceso restringido y monitoreo constante.\n• **Cloudflare**: Protegemos la plataforma contra ataques DDoS y otras amenazas de red.\n• **reCAPTCHA**: Prevenimos accesos maliciosos y bots en la plataforma.\n• **Antivirus y monitoreo de seguridad**: Contamos con soluciones de seguridad activas para proteger los datos almacenados.",
          icon: "fi fi-rr-shield-plus",
        },
        {
          title: "9. Notificación de Brechas de Seguridad",
          content:
            "En caso de una violación de seguridad que afecte los datos personales, Kapix notificará a las autoridades de protección de datos y a los usuarios afectados dentro de las **72 horas** posteriores a la detección, según lo exige el GDPR.",
          icon: "fi fi-rr-bell-ring",
        },
        {
          title: "10. Cookies y Tecnologías Similares",
          content:
            "Kapix utiliza cookies para:\n• **Proporcionar funcionalidades esenciales** de la plataforma.\n• **Analizar el rendimiento y el uso** del sistema de forma agregada y anónima.\n• **Mejorar la seguridad** mediante herramientas como reCAPTCHA.\n\nLos usuarios pueden gestionar las cookies a través de la configuración de su navegador.",
          icon: "fi fi-rr-cookie",
        },
        {
          title: "11. Modificaciones a esta Declaración",
          content:
            "Nos reservamos el derecho de modificar esta declaración de conformidad con las actualizaciones del GDPR o cambios en nuestras operaciones. **Notificaremos cualquier cambio material** a través de la plataforma y de nuestro sitio web.",
          icon: "fi fi-rr-file-edit",
        },
        {
          title: "12. Contacto y Quejas",
          content:
            "Si tienes preguntas, inquietudes o deseas presentar una queja sobre el tratamiento de tus datos personales, puedes contactarnos en:\nCorreo electrónico: **info@kapix.co.cr**\nDelegado de Protección de Datos: **info@kapix.co.cr**\n\nTambién tienes derecho a presentar una queja ante la autoridad de supervisión de protección de datos de tu país.",
          icon: "fi fi-rr-headset",
        },
      ],
    },
  },
  EN: {
    title: "TERMS AND CONDITIONS",
    home: "HOME",
    current: "TERMS",
    lastUpdated: "Last updated: 07-03-2025",
    version: "Version DRPD.3.2.01",
    content: {
      intro:
        "At Kapix ERP, we value privacy and are committed to protecting our users' personal data in accordance with the General Data Protection Regulation (EU Regulation 2016/679). Below, we explain how we comply with the legal obligations established in the GDPR.",
      sections: [
        {
          title: "1. Data Controller",
          content:
            "The controller of personal data is:\nCompany: **KAPIX SRL**\nAddress: **San José Costa Rica**\nEmail: **info@kapix.co.cr**\nData Protection Officer (DPO): You can contact our Data Protection Officer at **info@kapix.co.cr**",
          icon: "fi fi-rr-user",
        },
        {
          title: "2. Legal Basis for Data Processing",
          content:
            "We process personal data only when we have a legal basis to do so, in accordance with the GDPR:\n• **Consent**: We obtain your explicit consent for the processing of your data.\n• **Contract execution**: We process the necessary data to provide you with access and functionality in Kapix ERP, Kapix Lite or Kapix Premium.\n• **Legitimate interest**: We perform usage analysis and service improvements as long as your fundamental rights do not prevail.\n• **Legal compliance**: We process data when necessary to comply with a legal obligation.",
          icon: "fi fi-rr-scroll-old",
        },
        {
          title: "3. Data We Process",
          content:
            "We collect and process only the data necessary for the established purposes:\n• **Registration data**: Name, email and password (stored in encrypted form).\n• **Technical data**: IP address, browser type, operating system and platform activity data.\n• **Usage data**: Information about invoices, tasks, projects and any other data you enter into the platform.\n\n**Note**: We do not process special categories of personal data (such as health data, racial or ethnic origin, etc.).",
          icon: "fi fi-rr-database",
        },
        {
          title: "4. Purpose of Data Processing",
          content:
            "The personal data collected is used to:\n• **Provide access and functionality** in Kapix ERP, Kapix Lite or Kapix Premium.\n• **Maintain platform security** through tools such as reCAPTCHA, encryption and other technical measures.\n• **Improve the user experience** through anonymous data analysis.\n• **Comply with legal, fiscal and regulatory obligations**.",
          icon: "fi fi-rr-target",
        },
        {
          title: "5. User Rights (Data Subject)",
          content:
            "In compliance with the GDPR, users of Kapix ERP, Kapix Lite or Kapix Premium have the following rights:\n• **Right of access**: Request a copy of the personal data we process.\n• **Right of rectification**: Request the correction of inaccurate or incomplete data.\n• **Right of erasure** (right to be forgotten): Request the deletion of your personal data when it is no longer necessary for the original purposes.\n• **Right to portability**: Request that your personal data be transferred to another provider in a structured and readable format.\n• **Right to object**: Object to the processing of your personal data in certain cases, such as for direct marketing.\n• **Right to restriction of processing**: Request the restriction of the processing of your data under certain circumstances.\n• **Right to withdraw consent**: You can withdraw your consent for data processing at any time.\n\nTo exercise any of these rights, contact us at: **info@kapix.co.cr**",
          icon: "fi fi-rr-shield-check",
        },
        {
          title: "6. Data Retention",
          content:
            "We will retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, unless the law requires a longer retention period.\n\n Retention criteria:\n• **Account data**: As long as you maintain your active account in Kapix ERP, Kapix Lite or Kapix Premium.\n• **Technical records**: For the time necessary to ensure system security.\n• **Legal obligations**: According to the retention periods required by applicable regulations.",
          icon: "fi fi-rr-time-check",
        },
        {
          title: "7. International Data Transfers",
          content:
            "All our Kapix systems use dedicated protected servers located within the European Union or in countries with an adequate level of protection. If at any time we transfer data outside the EU/EEA, we will ensure that:\n• **Adequate safeguards** are applied, such as standard contractual clauses approved by the European Commission.\n• Transfers are made in accordance with **GDPR regulations**.",
          icon: "fi fi-rr-world",
        },
        {
          title: "8. Security Measures",
          content:
            "In all our Kapix systems, advanced technical and organizational measures are implemented to protect your personal data against unauthorized access, loss or damage:\n• **SSL encryption**: All communications are encrypted with SSL/TLS protocols to protect data during transmission.\n• **Dedicated servers**: We host the data on secure servers with restricted access and constant monitoring.\n• **Cloudflare**: We protect the platform against DDoS attacks and other network threats.\n• **reCAPTCHA**: We prevent malicious access and bots on the platform.\n• **Antivirus and security monitoring**: We have active security solutions to protect stored data.",
          icon: "fi fi-rr-shield-plus",
        },
        {
          title: "9. Security Breach Notification",
          content:
            "In the event of a security breach affecting personal data, Kapix will notify the data protection authorities and affected users within **72 hours** of detection, as required by the GDPR.",
          icon: "fi fi-rr-bell-ring",
        },
        {
          title: "10. Cookies and Similar Technologies",
          content:
            "Kapix uses cookies to:\n• **Provide essential platform functionalities**.\n• **Analyze system performance and usage** in an aggregated and anonymous way.\n• **Improve security** through tools such as reCAPTCHA.\n\nUsers can manage cookies through their browser settings.",
          icon: "fi fi-rr-cookie",
        },
        {
          title: "11. Modifications to this Statement",
          content:
            "We reserve the right to modify this statement in accordance with GDPR updates or changes in our operations. **We will notify any material changes** through the platform and our website.",
          icon: "fi fi-rr-file-edit",
        },
        {
          title: "12. Contact and Complaints",
          content:
            "If you have questions, concerns or wish to file a complaint about the processing of your personal data, you can contact us at:\nEmail: **info@kapix.co.cr**\nData Protection Officer: **info@kapix.co.cr**\n\nYou also have the right to lodge a complaint with the data protection supervisory authority in your country.",
          icon: "fi fi-rr-headset",
        },
      ],
    },
  },
}

// Define types for section content
type Section = {
  title: string
  content: string
  icon?: string
}

export default function TermsAndConditions() {
  const { language } = useLanguage()
  const t = translations[language]
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    setPageLoading(true)
    setTimeout(() => {
      setPageLoading(false)
    }, 3000)
  }, [])

  // Function to create HTML for bullet points and bold text
  const createMarkup = (text: string) => {
    // First, handle the bold text
    const formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    return { __html: formattedText }
  }

  // Function to render paragraphs with proper formatting
  const renderContent = (content: string) => {
    return content.split("\n").map((paragraph, i) => {
      // Check if this is a bullet point
      if (paragraph.trim().startsWith("•")) {
        return (
          <div key={i} className="mb-3 flex">
            <span className="mr-2 flex-shrink-0">•</span>
            <div className="flex-grow" dangerouslySetInnerHTML={createMarkup(paragraph.substring(1).trim())} />
          </div>
        )
      }
      // Check if this is a title or label (like "Email:", "Company:", etc.)
      else if (paragraph.includes(":")) {
        const [label, value] = paragraph.split(":", 2)
        return (
          <p key={i} className="mb-3">
            <strong>{label}:</strong>
            <span dangerouslySetInnerHTML={createMarkup(value || "")} />
          </p>
        )
      }
      // Regular paragraph
      else if (paragraph.trim()) {
        return <p key={i} className="mb-3" dangerouslySetInnerHTML={createMarkup(paragraph)} />
      }
      // Empty line for spacing
      return <div key={i} className="h-3"></div>
    })
  }

  return (
    <>
      {pageLoading && <Loader />}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img src="/img/TÉRMINOS.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
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
                  <i className="fi fi-rr-document text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.current}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <span className="inline-block bg-[#191e29] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                {t.lastUpdated}
              </span>
              <span className="inline-block bg-[#01c38d]/10 text-[#01c38d] px-4 py-1.5 rounded-full text-sm font-medium">
                {t.version}
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{t.content.intro}</p>
          </div>

          <div className="space-y-12">
            {t.content.sections.map((section: Section, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#01c38d]/10 flex-shrink-0">
                    <i className={`${section.icon || "fi fi-rr-document"} text-[#01c38d] text-3xl flex items-center justify-center w-full h-full`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#191e29] text-center sm:text-left flex-grow">
                    {section.title}
                  </h3>
                </div>
                <div className="text-gray-600 text-lg leading-relaxed sm:pl-16">
                  {renderContent(section.content)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

