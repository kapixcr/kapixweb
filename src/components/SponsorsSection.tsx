"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
  {
    name: "Duolingo",
    logo: "/img/Katalva.png",
    width: 160
  },
  {
    name: "Khan Academy",
    logo: "/img/khan-academy.svg",
    width: 180
  },
  {
    name: "Udemy",
    logo: "/img/udemy.svg",
    width: 140
  },
  {
    name: "Google",
    logo: "/img/google.svg",
    width: 160
  },
]

export default function SponsorsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#01c38d]/5 to-white" />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative w-[280px] h-[120px] md:w-[320px] md:h-[160px] transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={sponsor.width * 2}
                  height={sponsor.width}
                  priority
                  className="object-contain filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  style={{ width: '100%', height: '100%' }}
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