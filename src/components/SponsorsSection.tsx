"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
  {
    name: "Katalva",
    logo: "/img/KATALVA.png",
    width: 180
  },
  {
    name: "Novosti",
    logo: "/img/NOVOSTI.png",
    width: 100
  },
  {
    name: "Plagas Quintero",
    logo: "/img/PLAGAS QUINTERO.png",
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
  }
]

export default function SponsorsSection() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#01c38d]/5 to-white" />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
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
      </div>
    </section>
  )
}