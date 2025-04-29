"use client"

import { motion } from "framer-motion"
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
      earth: "HUB",
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
      earth: "HUB",
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
      { name: "Equipo", lite: "1", premium: "1", tierra: "7" },
      { name: "Clientes", lite: "50", premium: "100", tierra: true },
      { name: "Contactos", lite: "50", premium: "Sin límites", tierra: false },
      { name: "Contratos", lite: "30", premium: "50", tierra: false },
      { name: "Facturas", lite: "100", premium: "200", tierra: false },
      { name: "Presupuestos", lite: false, premium: "Sin límites", tierra: false },
      { name: "Notas de Crédito", lite: "100", premium: "Sin límites", tierra: false },
      { name: "Propuestas", lite: "Sin límites", premium: "100", tierra: false },
      { name: "Proyectos", lite: "5", premium: "20", tierra: false },
      { name: "Tareas", lite: "100", premium: "200", tierra: false },
      { name: "Tickets de Soporte", lite: false, premium: "3", tierra: "5" },
      { name: "Clientes potenciales", lite: "Sin límites", premium: "Sin límites", tierra: false },
      { name: "Productos", lite: "30", premium: "200", tierra: false },
      { name: "Almacenamiento", lite: "1GB", premium: "10GB", tierra: "75GB" },
      { name: "CRM", lite: false, premium: false, tierra: false },
      { name: "Contabilidad", lite: false, premium: false, tierra: true },
      { name: "Ventas", lite: false, premium: false, tierra: true },
      { name: "Compras", lite: false, premium: false, tierra: true },
      { name: "Inventario", lite: false, premium: false, tierra: true },
      { name: "Punto de Venta", lite: false, premium: false, tierra: true },
      { name: "Documentos", lite: true, premium: false, tierra: false },
      { name: "Recordatorio", lite: true, premium: true, tierra: false },
      { name: "Gastos", lite: true, premium: false, tierra: false },
      { name: "Pagos", lite: true, premium: false, tierra: false },
      { name: "Horas de capacitación", lite: false, premium: false, tierra: true },
      { name: "Informes", lite: false, premium: false, tierra: false }
    ],
    EN: [
      { name: "Team", lite: "1", premium: "1", tierra: "7" },
      { name: "Clients", lite: "50", premium: "100", tierra: true },
      { name: "Contacts", lite: "50", premium: "Unlimited", tierra: false },
      { name: "Contracts", lite: "30", premium: "50", tierra: false },
      { name: "Invoices", lite: "100", premium: "200", tierra: false },
      { name: "Budgets", lite: false, premium: "Unlimited", tierra: false },
      { name: "Credit Notes", lite: "100", premium: "Unlimited", tierra: false },
      { name: "Proposals", lite: "Unlimited", premium: "100", tierra: false },
      { name: "Projects", lite: "5", premium: "20", tierra: false },
      { name: "Tasks", lite: "100", premium: "200", tierra: false },
      { name: "Support Tickets", lite: false, premium: "3", tierra: "5" },
      { name: "Leads", lite: "Unlimited", premium: "Unlimited", tierra: false },
      { name: "Products", lite: "30", premium: "200", tierra: false },
      { name: "Storage", lite: "1GB", premium: "10GB", tierra: "75GB" },
      { name: "CRM", lite: false, premium: false, tierra: false },
      { name: "Accounting", lite: false, premium: false, tierra: true },
      { name: "Sales", lite: false, premium: false, tierra: true },
      { name: "Purchases", lite: false, premium: false, tierra: true },
      { name: "Inventory", lite: false, premium: false, tierra: true },
      { name: "Point of Sale", lite: false, premium: false, tierra: true },
      { name: "Documents", lite: true, premium: false, tierra: false },
      { name: "Reminder", lite: true, premium: true, tierra: false },
      { name: "Expenses", lite: true, premium: false, tierra: false },
      { name: "Payments", lite: true, premium: false, tierra: false },
      { name: "Training hours", lite: false, premium: false, tierra: true },
      { name: "Reports", lite: false, premium: false, tierra: false }
    ]
  }

  const t = translations[language]
  const currentFeatures = features[language]

  // Add getFeatureIcon function at the top
  // Update the getFeatureIconName function to match planes.tsx icons
  const getFeatureIconName = (feature: string) => {
    const normalizedFeature = feature.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  
    if (normalizedFeature.includes("proyecto") || normalizedFeature.includes("project")) return "fi fi-rr-briefcase"
    if (normalizedFeature.includes("crm")) return "fi fi-rr-users"
    if (normalizedFeature.includes("tarea") || normalizedFeature.includes("task")) return "fi fi-rr-list-check"
    if (normalizedFeature.includes("cliente") || normalizedFeature.includes("client")) return "fi fi-rr-user"
    if (normalizedFeature.includes("contacto") || normalizedFeature.includes("contact")) return "fi fi-rr-address-book"
    if (normalizedFeature.includes("contrato") || normalizedFeature.includes("contract")) return "fi fi-rr-document-signed"
    if (normalizedFeature.includes("factura") || normalizedFeature.includes("invoice")) return "fi fi-rr-receipt"
    if (normalizedFeature.includes("credit") || normalizedFeature.includes("credito")) return "fi fi-rr-receipt"
    if (normalizedFeature.includes("propuesta") || normalizedFeature.includes("proposal")) return "fi fi-rr-document"
    if (normalizedFeature.includes("producto") || normalizedFeature.includes("product")) return "fi fi-rr-box"
    if (normalizedFeature.includes("almacenamiento") || normalizedFeature.includes("storage")) return "fi fi-rr-cloud-upload"
    if (normalizedFeature.includes("cita") || normalizedFeature.includes("appointment")) return "fi fi-rr-calendar"
    if (normalizedFeature.includes("configuracion") || normalizedFeature.includes("config")) return "fi fi-rr-settings"
    if (normalizedFeature.includes("documento") || normalizedFeature.includes("document")) return "fi fi-rr-folder"
    if (normalizedFeature.includes("email")) return "fi fi-rr-envelope"
    if (normalizedFeature.includes("objetivo") || normalizedFeature.includes("goal")) return "fi fi-rr-flag"
    if (normalizedFeature.includes("estado") || normalizedFeature.includes("state")) return "fi fi-rr-settings-sliders"
    if (normalizedFeature.includes("tabla") || normalizedFeature.includes("table")) return "fi fi-rr-table"
    if (normalizedFeature.includes("kanban")) return "fi fi-rr-briefcase"
    if (normalizedFeature.includes("recordatorio") || normalizedFeature.includes("reminder")) return "fi fi-rr-bell"
    if (normalizedFeature.includes("spreadsheet") || normalizedFeature.includes("hoja")) return "fi fi-rr-table"
    if (normalizedFeature.includes("lead") || normalizedFeature.includes("prospecto")) return "fi fi-rr-star"
    if (normalizedFeature.includes("payment") || normalizedFeature.includes("pago")) return "fi fi-rr-credit-card"
    if (normalizedFeature.includes("venta") || normalizedFeature.includes("sale")) return "fi fi-rr-receipt"
    if (normalizedFeature.includes("compra") || normalizedFeature.includes("purchase")) return "fi fi-rr-shopping-cart"
    if (normalizedFeature.includes("inventario") || normalizedFeature.includes("inventory")) return "fi fi-rr-box"
    if (normalizedFeature.includes("ticket")) return "fi fi-rr-ticket"
    if (normalizedFeature.includes("usuario") || normalizedFeature.includes("user")) return "fi fi-rr-users"
    if (normalizedFeature.includes("informe") || normalizedFeature.includes("report")) return "fi fi-rr-document"
    if (normalizedFeature.includes("sin limite") || normalizedFeature.includes("unlimited")) return "fi fi-rr-infinity"
    if (normalizedFeature.includes("capacitacion") || normalizedFeature.includes("training")) return "fi fi-rr-time-forward"
    if (normalizedFeature.includes("gasto") || normalizedFeature.includes("expense")) return "fi fi-rr-receipt"
    if (normalizedFeature.includes("equipo") || normalizedFeature.includes("team")) return "fi fi-rr-users"
    if (normalizedFeature.includes("presupuesto") || normalizedFeature.includes("budget")) return "fi fi-rr-document"
    if (normalizedFeature.includes("mejora") || normalizedFeature.includes("enhancement")) return "fi fi-rr-star"
  
    // Default icon for unmatched features
    return "fi fi-rr-check"
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
                    <span className="inline-block bg-[#191e29]/10 text-[#191e29] px-3 py-1 rounded-full text-sm">
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
                    <span className="inline-block bg-[#191e29]/10 text-[#191e29] px-3 py-1 rounded-full text-sm">
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
                    <span className="inline-block bg-[#191e29]/10 text-[#191e29] px-3 py-1 rounded-full text-sm">
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