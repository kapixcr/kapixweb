"use client"

import { motion } from "framer-motion"

const TextSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="relative w-full">
        <motion.div
          animate={{
            x: [0, -2400],
          }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex items-center gap-20"
        >
          {/* Primer conjunto */}
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">CONTABILIDAD</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">PROYECTOS</span>
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">TAREAS</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">CRM</span>
          
          {/* Segundo conjunto */}
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">CONTABILIDAD</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">PROYECTOS</span>
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">TAREAS</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">CRM</span>

          {/* Tercer conjunto */}
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">CONTABILIDAD</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">PROYECTOS</span>
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">TAREAS</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">CRM</span>
        </motion.div>
      </div>
    </div>
  )
}

export default TextSlider