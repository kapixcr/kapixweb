"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ModulesTable() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modules = [
    {
      icon: "fi fi-rr-book-alt",
      name: "Introducción a la Programación",
      description: "Fundamentos básicos de programación, algoritmos y lógica de desarrollo",
      status: "Gratis"
    },
    {
      icon: "fi fi-rr-code",
      name: "Desarrollo Web Avanzado",
      description: "Técnicas avanzadas de desarrollo web, frameworks modernos y mejores prácticas",
      status: "Premium"
    },
    {
      icon: "fi fi-rr-database",
      name: "Base de Datos y Backend",
      description: "Gestión de bases de datos, desarrollo de APIs y arquitectura backend",
      status: "$49.99"
    },
    {
      icon: "fi fi-rr-apps",
      name: "Desarrollo Móvil",
      description: "Creación de aplicaciones móviles nativas y multiplataforma",
      status: "Premium"
    },
    {
      icon: "fi fi-rr-cloud-check",
      name: "Cloud y DevOps",
      description: "Implementación en la nube, CI/CD y prácticas DevOps modernas",
      status: "$79.99"
    }
  ];

  if (!mounted) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#191e29] mb-8 text-center">Módulos Disponibles</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              {/* Loading state */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#191e29] mb-8 text-center">Módulos Disponibles</h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            {modules.map((module, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-3 gap-6 p-6 hover:shadow-md transition-all duration-300 ${
                  index % 2 === 0 
                    ? 'bg-white' 
                    : 'bg-[#01c38d]/5 backdrop-blur-sm'
                }`}
              >
                {/* Module Icon and Name */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#01c38d]/10 flex items-center justify-center group-hover:bg-[#01c38d]/20 transition-colors">
                    <i className={`${module.icon} text-[#01c38d] text-xl flex items-center justify-center w-full h-full`}></i>
                  </div>
                  <h3 className="font-medium text-[#191e29]">{module.name}</h3>
                </div>

                {/* Description */}
                <div className="flex items-center justify-center px-6">
                  <p className="text-gray-600 text-center text-sm">{module.description}</p>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-center">
                  <span className={`
                    px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                    hover:transform hover:scale-105
                    ${module.status === 'Gratis' 
                      ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                      : module.status === 'Premium' 
                        ? 'bg-purple-100 text-purple-600 hover:bg-purple-200' 
                        : 'bg-[#01c38d]/10 text-[#01c38d] hover:bg-[#01c38d]/20'}
                  `}>
                    {module.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}