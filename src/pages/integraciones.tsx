"use client"

import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/context/LanguageContext"

type IntegrationItem = {
  name: string
  key: string
  logo?: string
  class?: string
}

const INTEGRATIONS: IntegrationItem[] = [
  { name: "NextJS", key: "nextjs", logo: "/img/nextjs.png" },
  { name: "Vercel", key: "vercel", logo: "/img/vercel.png" },
  { name: "Supabase", key: "supabase", logo: "/img/supabase.png" },
  { name: "PostgreSQL", key: "postgresql", logo: "/img/postgresql.png" },
  { name: "cPanel", key: "cpanel", logo: "/img/cpanel.png" },
  { name: "MongoDB", key: "mongodb", logo: "/img/mongo.png" },
  { name: "Hacienda", key: "hacienda", logo: "/img/hacienda.png" },
  { name: "Meta", key: "meta", logo: "/img/meta.png" },
  { name: "Tilopay", key: "tilopay", logo: "/img/tilopay.png" },
  { name: "Uber Direct", key: "uberdirect", logo: "/img/uberdirec.png", class:"invert" },
  { name: "n8n", key: "n8n", logo: "/img/n8n.png" },
  { name: "Whatsapp Cloud API", key: "whatsapp", logo: "/img/ws.png", class:"!w-[70px] !h-[70px]" },
]

const translations = {
  ES: {
    title: "Tecnologías detrás de nuestras soluciones.",
    subtitle:
      "Trabajamos con tecnologías modernas y confiables que nos permiten desarrollar soluciones eficientes, seguras y escalables. En nuestros proyectos utilizamos bases de datos de alto rendimiento, frameworks robustos y herramientas actualizadas que garantizan rapidez, estabilidad y una excelente experiencia para el usuario. Además, integramos diversas APIs y servicios externos que nos permiten automatizar procesos, conectar sistemas y ampliar las funcionalidades según las necesidades de cada negocio, asegurando siempre soluciones flexibles y preparadas para crecer",
  },
  EN: {
    title: "Technologies Behind Our Solutions.",
    subtitle:
      "We work with modern and reliable technologies that allow us to build efficient, secure, and scalable solutions. In our projects, we use high-performance databases, robust frameworks, and up-to-date tools that ensure speed, stability, and an excellent user experience. Additionally, we integrate a wide range of APIs and external services that enable process automation, system connectivity, and extended functionality tailored to each business’s needs—delivering flexible solutions built to grow.",
  },
}

export default function IntegracionesPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const positions = (() => {
    const total = INTEGRATIONS.length
    const bottomCount = Math.min(6, total)
    const topCount = Math.max(0, total - bottomCount)

    const cx = 50

    const topStart = 25
    const topEnd = 175
    const topRadiusX = 68
    const topRadiusY = 40
    const topCY = 40

    const bottomStart = 20
    const bottomEnd = 160
    const bottomRadiusX = 46
    const bottomRadiusY = 12
    const bottomCY = 28

    const top = Array.from({ length: topCount }, (_, i) => {
      const toRad = (d: number) => (d * Math.PI) / 180
      const leftStart = cx + topRadiusX * Math.cos(toRad(topStart))
      const leftEnd = cx + topRadiusX * Math.cos(toRad(topEnd))
      const frac = topCount === 1 ? 0.5 : i / (topCount - 1)
      const left = leftStart + (leftEnd - leftStart) * frac
      const cosVal = (left - cx) / topRadiusX
      const clamped = Math.max(-1, Math.min(1, cosVal))
      const rad = Math.acos(clamped)
      const jx = 0 // mantener espaciado uniforme
      const jy = (((i * 17) % 7) - 3) * 0.2
      const x = left + jx
      const y = topCY - topRadiusY * Math.sin(rad) + jy
      return { left: `${x}%`, top: `${y}%` }
    })

    const bottom = Array.from({ length: bottomCount }, (_, i) => {
      const toRad = (d: number) => (d * Math.PI) / 180
      const leftStart = cx + bottomRadiusX * Math.cos(toRad(bottomStart))
      const leftEnd = cx + bottomRadiusX * Math.cos(toRad(bottomEnd))
      const frac = bottomCount === 1 ? 0.5 : i / (bottomCount - 1)
      const left = leftStart + (leftEnd - leftStart) * frac
      const cosVal = (left - cx) / bottomRadiusX
      const clamped = Math.max(-1, Math.min(1, cosVal))
      const rad = Math.acos(clamped)
      const jx = 0
      const jy = (((i * 9) % 7) - 3) * 0.2
      const x = left + jx
      const y = bottomCY + bottomRadiusY * Math.sin(rad) + jy
      return { left: `${x}%`, top: `${y}%` }
    })

    return INTEGRATIONS.map((_, i) => {
      if (i < topCount) return top[i]
      return bottom[i - topCount]
    })
  })()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>{language === "ES" ? "Integraciones | Kapix" : "Integrations | Kapix"}</title>
        <meta
          name="description"
          content={
            language === "ES"
              ? "Conecta tu negocio con plataformas clave. Integraciones modernas y seguras."
              : "Connect your business to key platforms. Modern, secure integrations."
          }
        />
      </Head>
      <Navbar />

      <section className="relative overflow-hidden bg-gray-50 pt-28 pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Arco superior */}
          <div className="relative h-[260px] md:h-[300px] w-full">
            {INTEGRATIONS.slice(0, Math.max(0, INTEGRATIONS.length - Math.min(6, INTEGRATIONS.length))).map((item, idx) => (
              <motion.div
                key={item.key}
                className="absolute"
                style={{ ...positions[idx], transform: "translate(-50%, -50%)" }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: [0, -6, 0], opacity: 1 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.15,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -6 }}
                  className={`w-auto h-[100px] md:w-auto md:h-[100px] rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]`}
                >
                  <div className="flex flex-col items-center justify-center p-3 w-auto h-auto">
                    <div className="w-auto h-auto flex items-center justify-center mb-2 overflow-hidden">
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={100}
                          height={100}
                          className={`w-auto h-auto object-contain ${item.class || ""}`}
                        />
                      ) : (
                        <span className="text-sm md:text-base font-semibold text-[#191e29]">
                          {item.name[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Título en el medio - sin animación */}
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#191e29]">
              {t.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              {t.subtitle}
            </p>
          </div>

          {/* Arco inferior - orientación opuesta */}
          <div className="relative h-[200px] md:h-[220px] w-full">
            {INTEGRATIONS.slice(Math.max(0, INTEGRATIONS.length - Math.min(6, INTEGRATIONS.length))).map((item, idx) => {
              const topCount = Math.max(0, INTEGRATIONS.length - Math.min(6, INTEGRATIONS.length));
              const pos = positions[topCount + idx];
              return (
                <motion.div
                  key={item.key}
                  className="absolute"
                  style={{ ...pos, transform: "translate(-50%, -50%)" }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: [0, -6, 0], opacity: 1 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (topCount + idx) * 0.15,
                }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -6 }}
                    className={`w-auto h-[100px] md:w-auto md:h-[100px] rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]`}
                  >
                    <div className="flex flex-col items-center justify-center p-3 w-auto h-auto">
                      <div className="w-auto h-auto flex items-center justify-center mb-2 overflow-hidden">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={item.name}
                            width={100}
                            height={100}
                            className={`w-auto h-auto object-contain ${item.class || ""}`}
                          />
                        ) : (
                          <span className="text-sm md:text-base font-semibold text-[#191e29]">
                            {item.name[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
