"use client"

import { motion } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'

const TextSlider = () => {
  const { language } = useLanguage()

  const texts = {
    ES: {
      accounting: "CONTABILIDAD",
      projects: "PROYECTOS",
      tasks: "TAREAS",
      crm: "CRM"
    },
    EN: {
      accounting: "ACCOUNTING",
      projects: "PROJECTS",
      tasks: "TASKS",
      crm: "CRM"
    }
  }

  const currentTexts = texts[language]

  return (
    <div className="w-full overflow-hidden bg-white py-6 flex items-center">
      <div className="relative w-full">
        <motion.div
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
          className="flex items-center gap-20"
        >
          {/* First set */}
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.accounting}</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.projects}</span>
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.tasks}</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.crm}</span>
          
          {/* Second set */}
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.accounting}</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.projects}</span>
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.tasks}</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.crm}</span>

          {/* Third set */}
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.accounting}</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.projects}</span>
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.tasks}</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.crm}</span>
          
          {/* Fourth set */}
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.accounting}</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.projects}</span>
          <span className="text-[#01c38d] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.tasks}</span>
          <span className="text-[#191e29] text-4xl lg:text-5xl font-bold whitespace-nowrap">{currentTexts.crm}</span>
        </motion.div>
      </div>
    </div>
  )
}

export default TextSlider