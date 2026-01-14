"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const sponsors = [
  {
    name: "BioNote",
    logo: "/img/Bionote logo.png",
    width: 180
  },
  {
    name: "Novosti",
    logo: "/img/NOVOSTI.png",
    width: 100
  },
  {
    name: "Rapiauto Taller móvil",
    logo: "/img/rapiauto.png",
    width: 180
  },
  {
    name: "La Gata CR",
    logo: "/img/LA GATA CR.png",
    width: 180
  },
  {
    name: "Tecniplagas",
    logo: "/img/TECNIPLAGAS.png",
    width: 180
  },
  {
    name: "Sazón & Sabor en Boca de Todos",
    logo: "/img/SAZON Y SABOR.png",
    width: 180
  },
  {
    name: "La Cazuela del Marisco",
    logo: "/img/marisco.png",
    width: 180
  },
  {
    name: "LA 360",
    logo: "/img/LA360.png",
    width: 180
  },
  {
    name: "Finca Las Cataratas",
    logo: "/img/las cataratas.png",
    width: 180
  },
  {
    name: "Ruhpa",
    logo: "/img/ruhpa.png",
    width: 180
  },
  {
    name: "Lubrimax Lubicentro",
    logo: "/img/lubrimaz.png",
    width: 180
  }
]

export default function SponsorsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [distance, setDistance] = useState(1400)

  useEffect(() => {
    const node = trackRef.current
    if (!node) return
    const firstSet = node.querySelector('[data-set="1"]') as HTMLElement | null
    if (firstSet) {
      setDistance(firstSet.offsetWidth)
    }
  }, [])

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#01c38d]/5 to-white" />
      <div className="container mx-auto px-4 max-w-6xl relative overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex items-center whitespace-nowrap gap-8"
          animate={{ x: [0, -distance] }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          <div data-set="1" className="flex items-center whitespace-nowrap gap-8">
            {sponsors.map((sponsor) => (
              <motion.div
                key={`set1-${sponsor.name}`}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.width}
                    height={sponsor.width * 0.75}
                    priority
                    className="object-contain filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }}
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-xl transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
          <div aria-hidden="true" data-set="2" className="flex items-center whitespace-nowrap gap-8">
            {sponsors.map((sponsor) => (
              <motion.div
                key={`set2-${sponsor.name}`}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.width}
                    height={sponsor.width * 0.75}
                    priority
                    className="object-contain filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }}
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-xl transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
