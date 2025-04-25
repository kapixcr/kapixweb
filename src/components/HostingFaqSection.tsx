"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from '@/context/LanguageContext'

const faqs = {
  ES: [
    {
      question: "¿Qué tipo de hosting ofrece KAPIX?",
      answer: "KAPIX ofrece varios tipos de hosting web, desde planes básicos para sitios pequeños hasta soluciones empresariales para proyectos de alto tráfico. Todos nuestros planes incluyen certificados SSL gratuitos, copias de seguridad y soporte técnico."
    },
    {
      question: "¿Cuál es la diferencia entre los planes de hosting?",
      answer: "La diferencia principal entre nuestros planes está en los recursos asignados. El plan Inicio Web es ideal para blogs y sitios pequeños, Crecimiento Web para negocios en expansión, Potencia Pro para eCommerce y sitios con tráfico medio, y Ultra Hosting para proyectos empresariales con altas exigencias de rendimiento."
    },
    {
      question: "¿Puedo migrar mi sitio web existente a KAPIX?",
      answer: "Sí, ofrecemos migración gratuita de tu sitio web existente a nuestros servidores. Nuestro equipo técnico se encargará de todo el proceso para garantizar una transición sin problemas y sin tiempo de inactividad."
    },
    {
      question: "¿Qué nivel de soporte técnico incluyen los planes?",
      answer: "Todos nuestros planes incluyen soporte técnico, pero el nivel varía según el plan. El plan básico incluye soporte estándar, mientras que los planes superiores ofrecen soporte prioritario, premium o VIP con tiempos de respuesta más rápidos y canales de comunicación directos."
    },
    {
      question: "¿Puedo actualizar mi plan de hosting en el futuro?",
      answer: "Sí, puedes actualizar tu plan de hosting en cualquier momento a medida que tu sitio web crezca. El proceso de actualización es sencillo y no causa interrupciones en tu sitio web. Simplemente contacta con nuestro equipo de soporte para solicitar la actualización."
    },
    {
      question: "¿Dónde están ubicados los servidores de KAPIX?",
      answer: "Nuestros servidores están estratégicamente ubicados en centros de datos de alta seguridad en América y Europa, lo que garantiza velocidades de carga rápidas y alta disponibilidad para usuarios de todo el mundo."
    },
    {
      question: "¿Ofrecen garantía de tiempo de actividad?",
      answer: "Sí, ofrecemos una garantía de tiempo de actividad del 99.9% para todos nuestros planes de hosting. En caso de que no cumplamos con este compromiso, compensaremos a nuestros clientes según lo establecido en nuestros términos de servicio."
    }
  ],
  EN: [
    {
      question: "What type of hosting does KAPIX offer?",
      answer: "KAPIX offers various types of web hosting, from basic plans for small sites to enterprise solutions for high-traffic projects. All our plans include free SSL certificates, backups, and technical support."
    },
    {
      question: "What's the difference between hosting plans?",
      answer: "The main difference between our plans is in the allocated resources. The Web Start plan is ideal for blogs and small sites, Web Growth for expanding businesses, Pro Power for eCommerce and medium-traffic sites, and Ultra Hosting for enterprise projects with high performance demands."
    },
    {
      question: "Can I migrate my existing website to KAPIX?",
      answer: "Yes, we offer free migration of your existing website to our servers. Our technical team will handle the entire process to ensure a smooth transition with no downtime."
    },
    {
      question: "What level of technical support do the plans include?",
      answer: "All our plans include technical support, but the level varies according to the plan. The basic plan includes standard support, while higher plans offer priority, premium, or VIP support with faster response times and direct communication channels."
    },
    {
      question: "Can I upgrade my hosting plan in the future?",
      answer: "Yes, you can upgrade your hosting plan at any time as your website grows. The upgrade process is straightforward and doesn't cause disruptions to your website. Simply contact our support team to request the upgrade."
    },
    {
      question: "Where are KAPIX's servers located?",
      answer: "Our servers are strategically located in high-security data centers in America and Europe, ensuring fast loading speeds and high availability for users worldwide."
    },
    {
      question: "Do you offer an uptime guarantee?",
      answer: "Yes, we offer a 99.9% uptime guarantee for all our hosting plans. In case we don't meet this commitment, we will compensate our customers as established in our terms of service."
    }
  ]
}

const translations = {
  ES: {
    title: "Preguntas Frecuentes",
    subtitle: "Todo Lo Que Necesitas Saber Sobre Nuestro Hosting",
    description: "Resolvemos tus dudas para que puedas elegir el plan de hosting perfecto para tu proyecto.",
    questionLabel: "Pregunta"
  },
  EN: {
    title: "Frequently Asked Questions",
    subtitle: "Everything You Need to Know About Our Hosting",
    description: "We resolve your doubts so you can choose the perfect hosting plan for your project.",
    questionLabel: "Question"
  }
}

export default function HostingFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-2 shadow-sm">
            {t.title}
          </span>
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
            {t.subtitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs[language].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#191e29] font-medium">{faq.question}</span>
                    <span className="text-sm text-[#01c38d] bg-[#01c38d]/10 px-2 py-0.5 rounded">{t.questionLabel}</span>
                  </div>
                  <div
                    className={`flex-shrink-0 ml-4 transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-[#01c38d]" />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}