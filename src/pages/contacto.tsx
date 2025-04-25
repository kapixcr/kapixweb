import dynamic from 'next/dynamic'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/context/LanguageContext"
import Head from 'next/head'

// Import motion components dynamically with ssr disabled
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

export default function ContactoPage() {
  const { language } = useLanguage()

  const translations = {
    ES: {
      title: "CONTACTO",
      home: "INICIO",
      contact: "CONTACTO",
      contactLabel: "CONTÁCTANOS", 
      contactUs: "Contáctanos Ahora",
      contactUsHighlight: "Ahora",
      contactDescription: "Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre nuestros servicios.",
      address: "Dirección",
      addressValue: "Costa Rica",
      phone: "Teléfono",
      email: "Email",
      followUs: "Síguenos",
      form: {
        name: "Nombre",
        email: "Email",
        phone: "Número de teléfono",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje"
      }
    },
    EN: {
      title: "CONTACT",
      home: "HOME",
      contact: "CONTACT",
      contactLabel: "CONTACT US",
      contactUs: "Contact Us Now",
      contactUsHighlight: "Us",
      contactDescription: "We're here to help. Contact us for any inquiries about our services.",
      address: "Address",
      addressValue: "Costa Rica",
      phone: "Phone",
      email: "Email",
      followUs: "Follow Us",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone number",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      }
    }
  }

  const t = translations[language]

  return (
    <>
      <Navbar />
      <Head>
        <title>{language === 'ES' ? 'Contacto | Kapix' : 'Contact | Kapix'}</title>
        <meta
          name="description"
          content={language === 'ES'
            ? 'Comunícate con nuestro equipo para recibir atención personalizada, soporte o información sobre nuestros servicios. Estamos disponibles para ayudarte de forma rápida y eficiente.'
            : 'Contact our team for personalized attention, support, or information about our services. We are available to help you quickly and efficiently.'
          }
        />
      </Head>
      
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/CONTACTO.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <MotionDiv
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
              
              {/* Separador vertical */}
              <div className="h-5 w-px bg-white/30 mx-3"></div>
              
              <div className="flex items-center text-[#01c38d]">
                <div className="flex items-center justify-center h-6 w-6 mr-2">
                  <i className="fi fi-rr-circle-phone text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.contact}</span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
      
      <div className="py-12 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <div className="mb-12">
                    <span className="inline-block bg-[#191e29] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                      {t.contactLabel}
                    </span>
                    <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent mb-4">
                      {t.contactUs}
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                      {t.contactDescription}
                    </p>
                  </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                      <i className="fi fi-rr-marker text-[#01c38d] text-lg flex items-center justify-center w-full h-full"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#191e29]">{t.address}</h3>
                      <p className="text-gray-600">{t.addressValue}</p>
                    </div>
                  </div>
  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                      <i className="fi fi-rr-phone-call text-[#01c38d] text-lg flex items-center justify-center w-full h-full"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#191e29]">{t.phone}</h3>
                      <a 
                        href="https://wa.me/50660641906?text=Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20tu%20servicio.🚀" 
                        className="text-gray-600 hover:text-[#01c38d]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +506 6064-1906
                      </a>
                    </div>
                  </div>
  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                      <i className="fi fi-rr-envelope text-[#01c38d] text-lg flex items-center justify-center w-full h-full"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#191e29]">{t.email}</h3>
                      <a 
                        href="mailto:info@kapix.co.cr" 
                        className="text-gray-600 hover:text-[#01c38d]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        info@kapix.co.cr
                      </a>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="space-y-2">
                <h3 className="font-semibold text-[#191e29]">{t.followUs}</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'facebook', url: 'https://www.facebook.com/p/KAPIX-61558702651954/' },
                    { name: 'instagram', url: 'https://www.instagram.com/kapixlatam?igsh=eWtwODhhZ3ViOHhk' },
                    { name: 'whatsapp', url: 'https://wa.me/50660641906?text=Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20tu%20servicio.🚀' },
                    { name: 'youtube', url: 'https://www.youtube.com/@Kapix-s6d' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center hover:bg-[#01c38d] group transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fi fi-brands-${social.name} text-[#01c38d] group-hover:text-white text-lg flex items-center justify-center w-full h-full`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </MotionDiv>
  
            {/* Contact Form */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder={t.form.name}
                    className="rounded-full border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] h-11 px-5"
                  />
                  <Input
                    type="email"
                    placeholder={t.form.email}
                    className="rounded-full border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] h-11 px-5"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Input
                    type="tel"
                    placeholder={t.form.phone}
                    className="rounded-full border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] h-11 px-5"
                  />
                  <Input
                    type="text"
                    placeholder={t.form.subject}
                    className="rounded-full border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] h-11 px-5"
                  />
                </div>
                <Textarea
                  placeholder={t.form.message}
                  maxLength={500}
                  className="min-h-[180px] max-h-[300px] rounded-xl border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] px-5 py-3 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#01c38d] hover:bg-[#01c38d]/90 text-white rounded-full h-11 text-base font-medium transition-colors"
                >
                  {t.form.send}
                </Button>
              </form>
            </MotionDiv>
          </div>
  
          {/* Map */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 rounded-xl overflow-hidden h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31440.012173466177!2d-84.19882227113074!3d9.933830433848648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fc024172dc13%3A0x83982a88e92284cc!2sSan%20Jos%C3%A9%2C%20Santa%20Ana!5e0!3m2!1ses!2scr!4v1743096906349!5m2!1ses!2scr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MotionDiv>
        </div>
      </div>
      <Footer />
    </>
  )
}