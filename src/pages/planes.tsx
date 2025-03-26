// Remove "use client" directive since this is a pages directory file
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { useState, useEffect } from "react"
import ModulesTable from "@/components/ModulesTable"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PlanesPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [planType, setPlanType] = useState("ERP")

  // Ensure hydration is complete before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase().split(" ")[0]) {
      case "crm":
        return "fi fi-rr-users"
      case "proyectos":
        return "fi fi-rr-boxes"
      case "clientes":
        return "fi fi-rr-user"
      case "informes":
        return "fi fi-rr-document"
      case "citas":
        return "fi fi-rr-calendar"
      case "ventas":
        return "fi fi-rr-shopping-cart"
      case "compras":
        return "fi fi-rr-shopping-bag"
      case "inventario":
        return "fi fi-rr-box"
      case "punto":
        return "fi fi-rr-shop"
      case "7":
        return "fi fi-rr-users-alt"
      case "50":
      case "100":
        return "fi fi-rr-cloud-upload"
      case "5":
        return "fi fi-rr-headset"
      case "horas":
        return "fi fi-rr-time-forward"
      case "nuestro":
        return "fi fi-rr-building"
      default:
        return "fi fi-rr-check"
    }
  }

  const plansData = {
    ERP: [
      {
        tag: "Venus Plan",
        price: 150,
        description: "Incluye",
        features: [
          "CRM",
          "Proyectos",
          "Clientes Potenciales",
          "Informes",
          "Citas o Contabilidad",
          "Ventas",
          "Compras",
          "7 usuarios",
          "50 gigas de almacenamiento",
          "5 Tickets de soporte al mes",
          "Horas de capacitación",
        ],
      },
      {
        tag: "Tierra Plan",
        price: 200,
        popular: true,
        description: "Incluye",
        features: [
          "CRM",
          "Proyectos",
          "Clientes Potenciales",
          "Informes",
          "Citas o Contabilidad",
          "Ventas",
          "Compras",
          "Inventario",
          "Punto de Venta",
          "7 usuarios",
          "100 gigas de almacenamiento",
          "5 tickets de soporte al mes",
          "Horas de capacitación",
        ],
      },
      {
        tag: "Plan Marte",
        price: 400,
        description: "Incluye",
        features: [
          "Nuestro plan marte es un plan pensado para grandes empresas, donde se personalizará de acuerdo a los módulos, usuarios y espacio que se necesite, ofreciendo un ERP completo y ajustado a la necesidad de las empresas.",
        ],
      },
    ],
    PREMIUM: [
      {
        tag: "Plan Premium",
        price: 300,
        popular: true,
        description: "Incluye",
        features: [
          "Ventas",
          "Compras",
          "Inventario",
          "Punto de Venta",
          "Contabilidad",
          "5 usuarios",
          "80 gigas de almacenamiento",
          "3 tickets de soporte al mes",
          "4 Horas de capacitación",
        ],
      },
    ],
    LITE: [
      {
        tag: "Plan Lite",
        price: 100,
        popular: true,
        description: "Incluye",
        features: [
          "Ventas",
          "Compras",
          "Inventario",
          "Punto de Venta",
          "3 usuarios",
          "50 gigas de almacenamiento",
          "2 tickets de soporte al mes",
          "2 Horas de capacitación",
        ],
      },
    ],
  }

  // Loading state
  if (!mounted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50">
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-12 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="relative rounded-3xl p-6 h-full flex flex-col bg-white animate-pulse">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div className="w-24 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-8 w-32 bg-gray-200 rounded mb-6"></div>
                    <div className="space-y-4 flex-grow">
                      {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="h-6 bg-gray-200 rounded"></div>
                      ))}
                    </div>
                    <div className="h-12 bg-gray-200 rounded-full mt-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  // Actual content
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="py-20">
          <div className="container mx-auto px-4">
            {/* Plan Type Switch */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-white p-2 rounded-xl shadow-md flex gap-2">
                {["ERP", "PREMIUM", "LITE"].map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setPlanType(type)
                      if (type !== "ERP") setIsAnnual(false)
                    }}
                    className={`px-8 py-3 rounded-lg transition-all duration-300 font-semibold ${
                      planType === type
                        ? "bg-[#01c38d] text-white shadow-lg scale-105"
                        : "bg-transparent text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly/Annual Switch */}
            <div
              className={`flex items-center justify-center gap-4 mb-12 transition-opacity duration-300 ${planType !== "ERP" ? "opacity-50" : ""}`}
            >
              <span className={`text-lg ${!isAnnual ? "text-[#01c38d]" : "text-gray-500"}`}>Mensual</span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-[#01c38d]"
                disabled={planType !== "ERP"}
              />
              <span className={`text-lg ${isAnnual ? "text-[#01c38d]" : "text-gray-500"}`}>Anual</span>
            </div>

            {/* Pricing Cards Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={planType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                <div
                  className={`grid gap-8 items-stretch mx-auto ${
                    planType === "ERP" ? "md:grid-cols-3" : "md:grid-cols-1 w-[400px]"
                  }`}
                >
                  {plansData[planType as keyof typeof plansData].map((plan, index: number) => (
                    <motion.div
                      key={plan.tag}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative rounded-3xl p-6 h-full flex flex-col ${
                        plan.popular ? "bg-[#01c38d] text-white transform scale-105 z-10" : "bg-white"
                      }`}
                    >
                      {/* Logo y título en la izquierda */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`w-10 h-10 rounded-full ${plan.popular ? "bg-white/20" : "bg-[#01c38d]/10"} flex items-center justify-center`}
                        >
                          <i
                            className={`fi fi-rr-diamond ${plan.popular ? "text-white" : "text-[#01c38d]"} text-xl flex items-center justify-center`}
                          ></i>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full ${plan.popular ? "bg-white/20" : "bg-[#01c38d]/10"}`}>
                          <h3 className={`text-lg font-semibold ${plan.popular ? "text-white" : "text-[#191e29]"}`}>
                            {plan.tag}
                          </h3>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-[#191e29]"}`}>
                          ${isAnnual ? plan.price * 12 : plan.price}
                        </span>
                        <span className={`text-sm ml-1 ${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                          {isAnnual ? "/año" : "/mes"}
                        </span>
                      </div>

                      {/* Features con íconos centrados */}
                      <ul className="space-y-4 flex-grow">
                        {plan.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                plan.popular ? "bg-white/20" : "bg-[#01c38d]/10"
                              }`}
                            >
                              <i
                                className={`${getFeatureIcon(feature)} ${plan.popular ? "text-white" : "text-[#01c38d]"} text-xs flex items-center justify-center w-full h-full`}
                              ></i>
                            </div>
                            <span className={`text-sm ${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <button
                        className={`w-full mt-8 py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all ${
                          plan.popular
                            ? "bg-white text-[#01c38d] hover:bg-white/90"
                            : "bg-[#01c38d]/10 text-[#01c38d] hover:bg-[#01c38d]/20"
                        }`}
                      >
                        <span>Click here to get started!</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Modules Table Section */}
        <div className="py-20 bg-white">
          <ModulesTable />
        </div>
      </div>
      <Footer />
    </>
  )
}

