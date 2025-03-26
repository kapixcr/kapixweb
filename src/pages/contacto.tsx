import dynamic from 'next/dynamic'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Import motion components dynamically with ssr disabled
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <div className="py-20 relative min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#191e29] mb-4">Contáctanos</h2>
                <p className="text-gray-600">
                  Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre nuestros servicios.
                </p>
              </div>
  
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                    <i className="fi fi-rr-marker text-[#01c38d] text-lg flex items-center justify-center w-full h-full"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#191e29]">Dirección</h3>
                    <p className="text-gray-600">Av. Principal #123, Ciudad</p>
                  </div>
                </div>
  
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                    <i className="fi fi-rr-phone-call text-[#01c38d] text-lg flex items-center justify-center w-full h-full"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#191e29]">Teléfono</h3>
                    <p className="text-gray-600">+123 456 7890</p>
                  </div>
                </div>
  
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center">
                    <i className="fi fi-rr-envelope text-[#01c38d] text-lg flex items-center justify-center w-full h-full"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#191e29]">Email</h3>
                    <p className="text-gray-600">contacto@empresa.com</p>
                  </div>
                </div>
              </div>
  
              <div className="space-y-2">
                <h3 className="font-semibold text-[#191e29]">Síguenos</h3>
                <div className="flex gap-4">
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="w-10 h-10 rounded-full bg-[#01c38d]/10 flex items-center justify-center hover:bg-[#01c38d] group transition-colors"
                    >
                      <i className={`fi fi-brands-${social} text-[#01c38d] group-hover:text-white text-lg flex items-center justify-center w-full h-full`}></i>
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
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <Input
                    type="text"
                    placeholder="Nombre"
                    className="rounded-full border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] h-12 px-6"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="rounded-full border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] h-12 px-6"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <Input
                    type="tel"
                    placeholder="Número de teléfono"
                    className="rounded-full border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] h-12 px-6"
                  />
                  <Input
                    type="text"
                    placeholder="Asunto"
                    className="rounded-full border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] h-12 px-6"
                  />
                </div>
                <Textarea
                  placeholder="Mensaje"
                  maxLength={500}
                  className="min-h-[200px] max-h-[400px] rounded-3xl border-2 border-gray-200 focus:border-[#01c38d] focus:ring-[#01c38d] px-6 py-4 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#01c38d] hover:bg-[#01c38d]/90 text-white rounded-full h-12 text-base font-medium transition-colors"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </MotionDiv>
          </div>
  
          {/* Map */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 rounded-3xl overflow-hidden h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8561635183897!2d-74.08007242424911!3d4.627874042501428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1709234207932!5m2!1ses!2sco"
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