"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Check, X } from "lucide-react"
import { useLanguage } from '@/context/LanguageContext'

export default function ModulesTable() {
  const { language } = useLanguage()

  const translations = {
    ES: {
      features: "Características",
      modules: "Módulos",
      free: "Gratis",
      month: "/mes",
      earth: "Tierra",
      // Add these new translations
      tableHeader: {
        label: "Tabla Comparativa",
        title: "Comparación de Planes y Características",
        description: "Explora las características y beneficios incluidos en cada uno de nuestros planes."
      }
    },
    EN: {
      features: "Features",
      modules: "Modules",
      free: "Free",
      month: "/month",
      earth: "Earth",
      // Add these new translations
      tableHeader: {
        label: "Comparison Table",
        title: "Plans and Features Comparison",
        description: "Explore the features and benefits included in each of our plans."
      }
    }
  }

  const features = {
    ES: [
      { name: "CRM", tierra: true, premium: true, lite: true },
      { name: "Proyectos", tierra: "20", premium: "20", lite: "5" },
      { name: "Clientes", tierra: "100", premium: "100", lite: "50" },
      { name: "Contactos", tierra: "Sin límite", premium: "Sin límite", lite: "50" },
      { name: "Contratos", tierra: "50", premium: "50", lite: "30" },
      { name: "Facturas", tierra: "200", premium: "200", lite: "100" },
      { name: "Notas de Crédito", tierra: "Sin límite", premium: "Sin límite", lite: "100" },
      { name: "Propuestas", tierra: "Sin límite", premium: "Sin límite", lite: "Sin límite" },
      { name: "Tareas", tierra: "200", premium: "200", lite: "100" },
      { name: "Tickets de Soporte", tierra: "Sin límite", premium: "Sin límite", lite: false },
      { name: "Prospectos", tierra: "Sin límite", premium: "Sin límite", lite: "Sin límite" },
      { name: "Productos", tierra: "Sin límite", premium: "Sin límite", lite: "30" },
      { name: "Almacenamiento", tierra: "100GB", premium: "10GB", lite: "1GB" },
      { name: "Citas", tierra: true, premium: true, lite: false },
      { name: "Configuración Adicional", tierra: true, premium: true, lite: false },
      { name: "Email Canvas", tierra: true, premium: true, lite: false },
      { name: "Objetivos", tierra: true, premium: true, lite: false },
      { name: "Manejo de Estados", tierra: true, premium: true, lite: false },
      { name: "Kanban de Proyectos", tierra: true, premium: true, lite: false },
      { name: "Hojas de Cálculo en Línea", tierra: true, premium: true, lite: false },
      { name: "Punto de Venta", tierra: true, premium: false, lite: false },
      { name: "Inventario", tierra: true, premium: false, lite: false },
    ],
    EN: [
      { name: "CRM", tierra: true, premium: true, lite: true },
      { name: "Projects", tierra: "20", premium: "20", lite: "5" },
      { name: "Clients", tierra: "100", premium: "100", lite: "50" },
      { name: "Contacts", tierra: "Unlimited", premium: "Unlimited", lite: "50" },
      { name: "Contracts", tierra: "50", premium: "50", lite: "30" },
      { name: "Invoices", tierra: "200", premium: "200", lite: "100" },
      { name: "Credit Notes", tierra: "Unlimited", premium: "Unlimited", lite: "100" },
      { name: "Proposals", tierra: "Unlimited", premium: "Unlimited", lite: "Unlimited" },
      { name: "Tasks", tierra: "200", premium: "200", lite: "100" },
      { name: "Support Tickets", tierra: "Unlimited", premium: "Unlimited", lite: false },
      { name: "Prospects", tierra: "Unlimited", premium: "Unlimited", lite: "Unlimited" },
      { name: "Products", tierra: "Unlimited", premium: "Unlimited", lite: "30" },
      { name: "Storage", tierra: "100GB", premium: "10GB", lite: "1GB" },
      { name: "Appointments", tierra: true, premium: true, lite: false },
      { name: "Additional Configuration", tierra: true, premium: true, lite: false },
      { name: "Email Canvas", tierra: true, premium: true, lite: false },
      { name: "Goals", tierra: true, premium: true, lite: false },
      { name: "State Management", tierra: true, premium: true, lite: false },
      { name: "Project Kanban", tierra: true, premium: true, lite: false },
      { name: "Online Spreadsheets", tierra: true, premium: true, lite: false },
      { name: "Point of Sale", tierra: true, premium: false, lite: false },
      { name: "Inventory", tierra: true, premium: false, lite: false },
    ]
  }

  const t = translations[language]
  const currentFeatures = features[language]

  // Add getFeatureIcon function at the top
  const getFeatureIconName = (feature: string) => {
    const normalizedFeature = feature.toLowerCase().trim()
    const iconMap = {
      "crm": "fi fi-rr-users-alt",
      "proyectos": "fi fi-rr-briefcase",
      "projects": "fi fi-rr-briefcase",
      "clientes": "fi fi-rr-user-add",
      "clients": "fi fi-rr-user-add",
      "contactos": "fi fi-rr-address-book",
      "contacts": "fi fi-rr-address-book",
      "contratos": "fi fi-rr-file-contract",
      "contracts": "fi fi-rr-file-contract",
      "facturas": "fi fi-rr-receipt",
      "invoices": "fi fi-rr-receipt",
      "notas de crédito": "fi fi-rr-document",
      "credit notes": "fi fi-rr-document",
      "propuestas": "fi fi-rr-chart-pie-alt",
      "proposals": "fi fi-rr-chart-pie-alt",
      "tareas": "fi fi-rr-list-check",
      "tasks": "fi fi-rr-list-check",
      "tickets de soporte": "fi fi-rr-headset",
      "support tickets": "fi fi-rr-headset",
      "prospectos": "fi fi-rr-star",
      "prospects": "fi fi-rr-star",
      "productos": "fi fi-rr-box-alt",
      "products": "fi fi-rr-box-alt",
      "almacenamiento": "fi fi-rr-cloud-upload-alt",
      "storage": "fi fi-rr-cloud-upload-alt",
      "citas": "fi fi-rr-calendar-clock",
      "appointments": "fi fi-rr-calendar-clock",
      "configuración adicional": "fi fi-rr-settings-sliders",
      "additional configuration": "fi fi-rr-settings-sliders",
      "email canvas": "fi fi-rr-envelope-plus",
      "objetivos": "fi fi-rr-flag-alt",
      "goals": "fi fi-rr-flag-alt",
      "manejo de estados": "fi fi-rr-dashboard",
      "state management": "fi fi-rr-dashboard",
      "kanban de proyectos": "fi fi-rr-layout-fluid",
      "project kanban": "fi fi-rr-layout-fluid",
      "hojas de cálculo en línea": "fi fi-rr-grid-alt",
      "online spreadsheets": "fi fi-rr-grid-alt",
      "punto de venta": "fi fi-rr-shopping-cart",
      "point of sale": "fi fi-rr-shopping-cart",
      "inventario": "fi fi-rr-boxes",
      "inventory": "fi fi-rr-boxes"
    }

    return normalizedFeature in iconMap ? iconMap[normalizedFeature as keyof typeof iconMap] : "fi fi-rr-apps-add"
  }

  // Update the table header and rows
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block bg-[#191e29] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          {t.tableHeader.label}
        </span>
        <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent mb-4">
          {t.tableHeader.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.tableHeader.description}
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl bg-white shadow-lg">
        <table className="w-full min-w-[768px]">
          <thead>
            <tr className="border-b-2 border-[#01c38d]/20">
              <th className="py-6 px-6 text-left first:rounded-tl-3xl">
                <div className="flex flex-col gap-2">
                  <span className="inline-block bg-[#191e29] text-white px-4 py-2 rounded-full font-medium w-[180px] text-center">
                    {t.features}
                  </span>
                  <span className="inline-block bg-[#191e29]/10 text-[#191e29] px-4 py-2 rounded-full text-sm font-medium w-[180px] text-center">
                    {t.modules}
                  </span>
                </div>
              </th>
              <th className="py-6 px-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="bg-[#01c38d] text-white px-6 py-2 rounded-full font-medium">
                    {t.earth}
                  </span>
                  <span className="bg-[#01c38d]/10 text-[#01c38d] px-4 py-1 rounded-full text-sm">
                    $200{t.month}
                  </span>
                </div>
              </th>
              <th className="py-6 px-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="bg-[#01c38d] text-white px-6 py-2 rounded-full font-medium">
                    Premium
                  </span>
                  <span className="bg-[#01c38d]/10 text-[#01c38d] px-4 py-1 rounded-full text-sm">
                    $30/mes
                  </span>
                </div>
              </th>
              <th className="py-6 px-6 last:rounded-tr-3xl">
                <div className="flex flex-col items-center gap-2">
                  <span className="bg-[#01c38d] text-white px-6 py-2 rounded-full font-medium">
                    Lite
                  </span>
                  <span className="bg-[#01c38d]/10 text-[#01c38d] px-4 py-1 rounded-full text-sm">
                    Gratis
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentFeatures.map((feature, index) => (
              <motion.tr
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={index}
                className={`border-b border-gray-100 transition-shadow hover:shadow-md ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#01c38d]/5'
                } ${
                  index === currentFeatures.length - 1 ? 'last:rounded-b-3xl last:td:first:rounded-bl-3xl last:td:last:rounded-br-3xl' : ''
                }`}
              >
                <td className="py-4 px-6 text-gray-700 font-medium">
                  <div className="flex items-center gap-3">
                    <i className={`${getFeatureIconName(feature.name.toLowerCase())} text-[#191e29]`}></i>
                    <span>{feature.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  {typeof feature.tierra === "boolean" ? (
                    feature.tierra ? (
                      <Check className="w-5 h-5 text-[#191e29] mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )
                  ) : (
                    <span className="inline-block bg-[#01c38d]/10 text-[#191e29] px-3 py-1 rounded-full text-sm">
                      {feature.tierra}
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {typeof feature.premium === "boolean" ? (
                    feature.premium ? (
                      <Check className="w-5 h-5 text-[#191e29] mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )
                  ) : (
                    <span className="inline-block bg-[#01c38d]/10 text-[#191e29] px-3 py-1 rounded-full text-sm">
                      {feature.premium}
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {typeof feature.lite === "boolean" ? (
                    feature.lite ? (
                      <Check className="w-5 h-5 text-[#191e29] mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )
                  ) : (
                    <span className="inline-block bg-[#01c38d]/10 text-[#191e29] px-3 py-1 rounded-full text-sm">
                      {feature.lite}
                    </span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}