"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from '@/context/LanguageContext'

const faqs = {
  ES: [
    {
      question: "¿Cómo puedo empezar a usar KAPIX?",
      answer: "Para comenzar a usar KAPIX, contáctanos para recibir toda la información necesaria. Nuestro equipo evaluará tus necesidades y te ayudará a encontrar el plan adecuado, ya que ofrecemos opciones personalizables para adaptarnos a tu negocio."
    },
    {
      question: "¿Qué módulos ofrece KAPIX?",
      answer: "KAPIX ofrece varios módulos, incluyendo gestión financiera, control de inventarios, CRM, administración de proyectos, recursos humanos y análisis de datos. Cada módulo está diseñado para cubrir diferentes aspectos de la gestión empresarial y puede adaptarse a tus necesidades específicas."
    },
    {
      question: "¿KAPIX se adapta a los diferentes tipos de empresas?",
      answer: "Sí, KAPIX es adecuado tanto para pequeñas empresas como para grandes corporaciones. Su flexibilidad y escalabilidad permiten a las empresas de cualquier tamaño personalizar el software según sus necesidades y crecer a medida que lo hacen."
    },
    {
      question: "¿Qué hago si encuentro un error o un problema técnico en KAPIX?",
      answer: "Si encuentras un error o un problema técnico, puedes contactar a nuestro equipo de soporte a través del chat en vivo en la aplicación, enviar un correo electrónico o consultar nuestra base de conocimientos. Nuestro equipo está disponible para ayudarte a resolver cualquier inconveniente de manera rápida."
    },
    {
      question: "¿KAPIX es accesible desde dispositivos móviles?",
      answer: "Sí, KAPIX es accesible desde dispositivos móviles. Contamos con una aplicación disponible para iOS y Android, lo que te permite gestionar tu empresa de manera efectiva desde cualquier lugar y en cualquier momento."
    },
    {
      question: "¿Cómo se gestionan los datos y la seguridad en KAPIX?",
      answer: "La seguridad de tus datos es nuestra prioridad. KAPIX utiliza encriptación avanzada y cumple con normativas de protección de datos. Como el sistema está 100% en la nube, realizamos copias de seguridad regulares y ofrecemos controles de acceso para garantizar que solo usuarios autorizados puedan acceder a la información sensible."
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "¡Sí, por supuesto! Kapix ofrece flexibilidad para que puedas cambiar de plan en cualquier momento, ya sea para añadir más módulos que necesitas o para escalar según el crecimiento de tu empresa. Si en algún momento necesitas actualizar tu plan, solo tienes que informarnos y haremos el cambio lo más rápido posible."
    }
  ],
  EN: [
    {
      question: "How can I start using KAPIX?",
      answer: "To start using KAPIX, contact us to receive all the necessary information. Our team will evaluate your needs and help you find the right plan, as we offer customizable options to adapt to your business."
    },
    {
      question: "What modules does KAPIX offer?",
      answer: "KAPIX offers various modules, including financial management, inventory control, CRM, project management, human resources, and data analysis. Each module is designed to cover different aspects of business management and can be adapted to your specific needs."
    },
    {
      question: "Does KAPIX adapt to different types of businesses?",
      answer: "Yes, KAPIX is suitable for both small businesses and large corporations. Its flexibility and scalability allow companies of any size to customize the software according to their needs and grow as they do."
    },
    {
      question: "What should I do if I find an error or technical problem in KAPIX?",
      answer: "If you find an error or technical problem, you can contact our support team through the live chat in the application, send an email, or consult our knowledge base. Our team is available to help you resolve any issues quickly."
    },
    {
      question: "Is KAPIX accessible from mobile devices?",
      answer: "Yes, KAPIX is accessible from mobile devices. We have an application available for iOS and Android, allowing you to effectively manage your business from anywhere and at any time."
    },
    {
      question: "How is data and security managed in KAPIX?",
      answer: "Your data security is our priority. KAPIX uses advanced encryption and complies with data protection regulations. As the system is 100% cloud-based, we perform regular backups and offer access controls to ensure that only authorized users can access sensitive information."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes, of course! Kapix offers flexibility so you can change plans at any time, whether to add more modules you need or to scale according to your company's growth. If you ever need to upgrade your plan, just let us know and we'll make the change as quickly as possible."
    }
  ]
}

const translations = {
  ES: {
    title: "Preguntas Frecuentes",
    subtitle: "Todo Lo Que Necesitas Saber",
    description: "Resolvemos tus dudas para que te enfoques en aprender.",
    questionLabel: "Pregunta"
  },
  EN: {
    title: "Frequently Asked Questions",
    subtitle: "Everything You Need to Know",
    description: "We resolve your doubts so you can focus on learning.",
    questionLabel: "Question"
  }
}

export default function FaqSection() {
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