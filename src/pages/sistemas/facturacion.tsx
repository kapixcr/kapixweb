"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"

// Definir la interfaz para los planes de facturación
interface BillingPlan {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  period: string;
  planNumber?: number;
  popular: boolean;
  image?: string; // Añadimos la propiedad de imagen
}

export default function BillingSystemPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  const translations = {
    ES: {
      title: "SISTEMA DE FACTURACIÓN",
      subtitle: "Soluciones de facturación electrónica para tu negocio",
      description: "Nuestro sistema de facturación electrónica te permite cumplir con los requisitos fiscales de manera sencilla y eficiente. Elige el plan que mejor se adapte a las necesidades de tu empresa.",
      features: "Características",
      buyNow: "Comprar Ahora",
      contactUs: "Contáctanos",
      moreInfo: "Más Información",
      popularTag: "Popular",
      startingFrom: "Desde",
      month: "/mes",
      year: "/año",
      home: "INICIO",
      system: "SISTEMA",
      billing: "FACTURACIÓN",
      plans: [
        {
          id: "simplificado",
          title: "Facturación Simplificado",
          description: "Suscripción plan facturación régimen simplificado. Documentos Ilimitados.",
          features: [
            "Documentos ilimitados",
            "Régimen simplificado"
          ],
          price: 4,
          period: "mes",
          popular: false,
          image: "/img/Simplificado.jpg" // Añadimos imagen
        },
        {
          id: "agropecuario-mensual",
          title: "Facturación Mensual Régimen Agropecuario",
          description: "100 documentos al mes. Pago Mensual.",
          features: [
            "100 documentos mensuales",
            "Régimen agropecuario"
          ],
          price: 6,
          period: "mes",
          popular: false,
          image: "/img/Agropecuario.jpg" // Añadimos imagen
        },
        {
          id: "fisica-mensual",
          title: "Facturación Plan 1 Cédula Física Mensual",
          description: "Documentos ilimitados. Pago mensual.",
          features: [
            "Documentos ilimitados",
            "Para cédula física"
          ],
          price: 10,
          period: "mes",
          planNumber: 1,
          popular: true,
          image: "/img/Fisica 1.jpg" // Añadimos imagen
        },
        {
          id: "juridica-mensual-250",
          title: "Facturación Plan 5 Jurídica",
          description: "250 documentos Mensual.",
          features: [
            "250 documentos mensuales",
            "Para cédula jurídica"
          ],
          price: 10,
          period: "mes",
          planNumber: 5,
          popular: false,
          image: "/img/Juridica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-mensual-500",
          title: "Facturación Plan 6 Jurídica",
          description: "500 documentos Mensual.",
          features: [
            "500 documentos mensuales",
            "Para cédula jurídica"
          ],
          price: 20,
          period: "mes",
          planNumber: 6,
          popular: false,
          image: "/img/juridica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-mensual-1000",
          title: "Facturación Plan 7 Jurídica",
          description: "1000 documentos Mensual.",
          features: [
            "1000 documentos mensuales",
            "Para cédula jurídica"
          ],
          price: 40,
          period: "mes",
          planNumber: 7,
          popular: false,
          image: "/img/juridica 2.jpg" // Añadimos imagen
        },
        {
          id: "fisica-anual-24",
          title: "Facturación Plan 3 Cédula Física",
          description: "24 documentos Anual.",
          features: [
            "24 documentos anuales",
            "Para cédula física"
          ],
          price: 20,
          period: "año",
          planNumber: 3,
          popular: false,
          image: "/img/Fisica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-anual-24",
          title: "Facturación Plan 2 Jurídica",
          description: "24 documentos Anual.",
          features: [
            "24 documentos anuales",
            "Para cédula jurídica"
          ],
          price: 50,
          period: "año",
          planNumber: 2,
          popular: false,
          image: "/img/juridica 1.jpg" // Añadimos imagen
        },
        {
          id: "agropecuario-anual",
          title: "Facturación Anual Régimen Agropecuario",
          description: "500 documentos Pago anual.",
          features: [
            "500 documentos anuales",
            "Régimen agropecuario"
          ],
          price: 50,
          period: "año",
          popular: false,
          image: "/img/Agropecuario.jpg" // Añadimos imagen
        },
        {
          id: "fisica-anual-100",
          title: "Facturación Plan 4 Cédula Física",
          description: "100 documentos Anual.",
          features: [
            "100 documentos anuales",
            "Para cédula física"
          ],
          price: 40,
          period: "año",
          planNumber: 4,
          popular: false,
          image: "/img/Fisica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-anual-100",
          title: "Facturación Plan 3 Jurídica",
          description: "100 documentos Anual.",
          features: [
            "100 documentos anuales",
            "Para cédula jurídica"
          ],
          price: 90,
          period: "año",
          planNumber: 3,
          popular: false,
          image: "/img/juridica 1.jpg" // Añadimos imagen
        },
        {
          id: "fisica-anual-200",
          title: "Facturación Plan 5 Cédula Física",
          description: "200 documentos Anual.",
          features: [
            "200 documentos anuales",
            "Para cédula física"
          ],
          price: 50,
          period: "año",
          planNumber: 5,
          popular: false,
          image: "/img/Fisica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-anual-200",
          title: "Facturación Plan 4 Jurídica",
          description: "200 documentos Anual.",
          features: [
            "200 documentos anuales",
            "Para cédula jurídica"
          ],
          price: 130,
          period: "año",
          planNumber: 4,
          popular: false,
          image: "/img/juridica 1.jpg" // Añadimos imagen
        },
        {
          id: "fisica-anual-ilimitado",
          title: "Facturación Plan 2 Cédula Física",
          description: "Documentos ilimitados Pago anual.",
          features: [
            "Documentos ilimitados",
            "Para cédula física"
          ],
          price: 100,
          period: "año",
          planNumber: 2,
          popular: true,
          image: "/img/Fisica 1.jpg" // Añadimos imagen
        },
        {
          id: "juridica-anual-ilimitado",
          title: "Facturación Plan 1 Jurídica Anual",
          description: "Documentos ilimitados.",
          features: [
            "Documentos ilimitados",
            "Para cédula jurídica"
          ],
          price: 500,
          period: "año",
          planNumber: 1,
          popular: true,
          image: "/img/juridica 1.jpg" // Añadimos imagen
        }
      ]
    },
    EN: {
      title: "BILLING SYSTEM",
      subtitle: "Electronic billing solutions for your business",
      description: "Our electronic billing system allows you to comply with tax requirements easily and efficiently. Choose the plan that best suits your company's needs.",
      features: "Features",
      buyNow: "Buy Now",
      contactUs: "Contact Us",
      moreInfo: "More Information",
      popularTag: "Popular",
      startingFrom: "Starting from",
      month: "/month",
      year: "/year",
      home: "HOME",
      system: "SYSTEM",
      billing: "BILLING",
      plans: [
        {
          id: "simplificado",
          title: "Simplified Billing",
          description: "Simplified tax regime billing plan subscription. Unlimited documents.",
          features: [
            "Unlimited documents",
            "Simplified regime"
          ],
          price: 4,
          period: "month",
          popular: false,
          image: "/img/Simplificado.jpg" // Añadimos imagen
        },
        {
          id: "agropecuario-mensual",
          title: "Monthly Agricultural Regime Billing",
          description: "100 documents per month. Monthly payment.",
          features: [
            "100 monthly documents",
            "Agricultural regime"
          ],
          price: 6,
          period: "month",
          popular: false,
          image: "/img/Agropecuario.jpg" // Añadimos imagen
        },
        {
          id: "fisica-mensual",
          title: "Billing Plan 1 Individual Monthly",
          description: "Unlimited documents. Monthly payment.",
          features: [
            "Unlimited documents",
            "For individuals"
          ],
          price: 10,
          period: "month",
          planNumber: 1,
          popular: true,
          image: "/img/Fisica 1.jpg" // Añadimos imagen
        },
        {
          id: "juridica-mensual-250",
          title: "Billing Plan 5 Corporate",
          description: "250 documents Monthly.",
          features: [
            "250 monthly documents",
            "For corporations"
          ],
          price: 10,
          period: "month",
          planNumber: 5,
          popular: false,
          image: "/img/Juridica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-mensual-500",
          title: "Billing Plan 6 Corporate",
          description: "500 documents Monthly.",
          features: [
            "500 monthly documents",
            "For corporations"
          ],
          price: 20,
          period: "month",
          planNumber: 6,
          popular: false,
          image: "/img/juridica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-mensual-1000",
          title: "Billing Plan 7 Corporate",
          description: "1000 documents Monthly.",
          features: [
            "1000 monthly documents",
            "For corporations"
          ],
          price: 40,
          period: "month",
          planNumber: 7,
          popular: false,
          image: "/img/juridica 2.jpg" // Añadimos imagen
        },
        {
          id: "fisica-anual-24",
          title: "Billing Plan 3 Individual",
          description: "24 documents Annual.",
          features: [
            "24 annual documents",
            "For individuals"
          ],
          price: 20,
          period: "year",
          planNumber: 3,
          popular: false,
          image: "/img/Fisica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-anual-24",
          title: "Billing Plan 2 Corporate",
          description: "24 documents Annual.",
          features: [
            "24 annual documents",
            "For corporations"
          ],
          price: 50,
          period: "year",
          planNumber: 2,
          popular: false,
          image: "/img/juridica 1.jpg" // Añadimos imagen
        },
        {
          id: "agropecuario-anual",
          title: "Annual Agricultural Regime Billing",
          description: "500 documents Annual payment.",
          features: [
            "500 annual documents",
            "Agricultural regime"
          ],
          price: 49,
          period: "year",
          popular: false,
          image: "/img/Agropecuario.jpg" // Añadimos imagen
        },
        {
          id: "fisica-anual-100",
          title: "Billing Plan 4 Individual",
          description: "100 documents Annual.",
          features: [
            "100 annual documents",
            "For individuals"
          ],
          price: 40,
          period: "year",
          planNumber: 4,
          popular: false,
          image: "/img/Fisica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-anual-100",
          title: "Billing Plan 3 Corporate",
          description: "100 documents Annual.",
          features: [
            "100 annual documents",
            "For corporations"
          ],
          price: 90,
          period: "year",
          planNumber: 3,
          popular: false,
          image: "/img/juridica 1.jpg" // Añadimos imagen
        },
        {
          id: "fisica-anual-200",
          title: "Billing Plan 5 Individual",
          description: "200 documents Annual.",
          features: [
            "200 annual documents",
            "For individuals"
          ],
          price: 50,
          period: "year",
          planNumber: 5,
          popular: false,
          image: "/img/Fisica 2.jpg" // Añadimos imagen
        },
        {
          id: "juridica-anual-200",
          title: "Billing Plan 4 Corporate",
          description: "200 documents Annual.",
          features: [
            "200 annual documents",
            "For corporations"
          ],
          price: 130,
          period: "year",
          planNumber: 4,
          popular: false,
          image: "/img/juridica 1.jpg" // Añadimos imagen
        },
        {
          id: "fisica-anual-ilimitado",
          title: "Billing Plan 2 Individual",
          description: "Unlimited documents Annual payment.",
          features: [
            "Unlimited documents",
            "For individuals"
          ],
          price: 100,
          period: "year",
          planNumber: 2,
          popular: true,
          image: "/img/Fisica 1.jpg" // Añadimos imagen
        },
        {
          id: "juridica-anual-ilimitado",
          title: "Billing Plan 1 Corporate Annual",
          description: "Unlimited documents.",
          features: [
            "Unlimited documents",
            "For corporations"
          ],
          price: 500,
          period: "year",
          planNumber: 1,
          popular: true,
          image: "/img/juridica 1.jpg" // Añadimos imagen
        }
      ]
    }
  }

  const t = translations[language]

  // Ensure hydration is complete before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Animación para los elementos que aparecen
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  // Función para ordenar los planes
  const sortPlans = (plans: BillingPlan[]) => {
    // Primero ordenamos por precio (de menor a mayor)
    const sortedByPrice = [...plans].sort((a, b) => {
      // Convertir precios anuales a mensuales para comparación justa
      const priceA = a.period === 'año' || a.period === 'year' ? a.price / 12 : a.price;
      const priceB = b.period === 'año' || b.period === 'year' ? b.price / 12 : b.price;
      return priceA - priceB;
    });

    // Luego agrupamos los planes con el mismo número
    const groupedPlans: BillingPlan[] = [];
    const planNumberGroups: {[key: number]: BillingPlan[]} = {};

    // Separar planes con número y sin número
    const plansWithoutNumber: BillingPlan[] = [];
    
    sortedByPrice.forEach(plan => {
      if (plan.planNumber) {
        if (!planNumberGroups[plan.planNumber]) {
          planNumberGroups[plan.planNumber] = [];
        }
        planNumberGroups[plan.planNumber].push(plan);
      } else {
        plansWithoutNumber.push(plan);
      }
    });

    // Primero añadimos los planes sin número
    groupedPlans.push(...plansWithoutNumber);

    // Luego añadimos los planes agrupados por número
    Object.keys(planNumberGroups).sort((a, b) => Number(a) - Number(b)).forEach(numberKey => {
      const number = Number(numberKey);
      const plans = planNumberGroups[number];
      
      // Ordenar dentro del mismo número por precio
      plans.sort((a, b) => {
        const priceA = a.period === 'año' || a.period === 'year' ? a.price / 12 : a.price;
        const priceB = b.period === 'año' || b.period === 'year' ? b.price / 12 : b.price;
        return priceA - priceB;
      });
      
      groupedPlans.push(...plans);
    });

    return groupedPlans;
  }

  // Función para obtener el enlace de registro según el ID del plan
  const getRegistrationLink = (planId: string): string => {
    const links: { [key: string]: string } = {
      "simplificado": "https://kpixs.com/authentication/register?kx_plan=facturacion_simplificado",
      "agropecuario-mensual": "https://kpixs.com/authentication/register?kx_plan=facturacion_agro_mensual",
      "agropecuario-anual": "https://kpixs.com/authentication/register?kx_plan=facturacion_agro_anual",
      "fisica-mensual": "https://kpixs.com/authentication/register?kx_plan=facturacion_fisica_mensual",
      "fisica-anual-24": "https://kpixs.com/authentication/register?kx_plan=facturacion_fisica_anual_24",
      "fisica-anual-100": "https://kpixs.com/authentication/register?kx_plan=facturacion_fisica_anual_100", 
      "fisica-anual-200": "https://kpixs.com/authentication/register?kx_plan=facturacion_fisica_anual_200",
      "fisica-anual-ilimitado": "https://kpixs.com/authentication/register?kx_plan=facturacion_fisica_anual_ilimitado",
      "juridica-mensual-250": "https://kpixs.com/authentication/register?kx_plan=facturacion_juridica_mensual_250",
      "juridica-mensual-500": "https://kpixs.com/authentication/register?kx_plan=facturacion_juridica_mensual_500",
      "juridica-mensual-1000": "https://kpixs.com/authentication/register?kx_plan=facturacion_juridica_mensual_1000",
      "juridica-anual-24": "https://kpixs.com/authentication/register?kx_plan=facturacion_juridica_anual_24",
      "juridica-anual-100": "https://kpixs.com/authentication/register?kx_plan=facturacion_juridica_anual_100",
      "juridica-anual-200": "https://kpixs.com/authentication/register?kx_plan=facturacion_juridica_anual_200",
      "juridica-anual-ilimitado": "https://kpixs.com/authentication/register?kx_plan=facturacion_juridica_anual_ilimitado"
    };
    
    return links[planId] || `/contacto?plan=${planId}`;
  };

  if (!mounted) return null

  const sortedPlans = sortPlans(t.plans);

  return (
    <>
      <Head>
        <title>{language === 'ES' ? 'Sistema de Facturación | Kapix' : 'Billing System | Kapix'}</title>
        <meta 
          name="description" 
          content={language === 'ES' 
            ? 'Sistema de facturación electrónica para empresas. Cumple con los requisitos fiscales de manera sencilla y eficiente.' 
            : 'Electronic billing system for businesses. Comply with tax requirements easily and efficiently.'
          } 
        />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="/img/INVOICE.jpg" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h1>
              
              <div className="inline-flex items-center bg-black/30 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10">
                <a href="/" className="flex items-center text-white hover:text-[#01c38d] transition-colors">
                  <div className="flex items-center justify-center h-6 w-6 mr-2">
                    <i className="fi fi-rr-house-chimney text-lg leading-none"></i>
                  </div>
                  <span className="font-medium leading-none">{t.home}</span>
                </a>
                
                <div className="h-5 w-px bg-white/30 mx-3"></div>
                
                <a href="/sistema" className="flex items-center text-white hover:text-[#01c38d] transition-colors">
                  <div className="flex items-center justify-center h-6 w-6 mr-2">
                    <i className="fi fi-rr-apps text-lg leading-none"></i>
                  </div>
                  <span className="font-medium leading-none">{t.system}</span>
                </a>
                
                <div className="h-5 w-px bg-white/30 mx-3"></div>
                
                <div className="flex items-center text-[#01c38d]">
                  <div className="flex items-center justify-center h-6 w-6 mr-2">
                    <i className="fi fi-rr-receipt text-lg leading-none"></i>
                  </div>
                  <span className="font-medium leading-none">{t.billing}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#191e29] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                {language === 'ES' ? 'SISTEMA DE FACTURACIÓN' : 'BILLING SYSTEM'}
              </span>
              <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent mb-4">
                {t.subtitle}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPlans.map((plan: BillingPlan, index: number) => (
                <motion.div
                  key={plan.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index}
                >
                  {/* Etiquetas separadas del título */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between p-4 z-10">
                    {plan.planNumber && (
                      <div className="bg-[#191e29] text-white text-xs font-bold px-3 py-1 rounded-full">
                        Plan {plan.planNumber}
                      </div>
                    )}
                    {plan.popular && (
                      <div className="bg-[#01c38d] text-white text-xs font-bold px-3 py-1 rounded-full ml-auto">
                        {t.popularTag}
                      </div>
                    )}
                  </div>
                  
                  <div className="h-80 relative overflow-hidden">
                    <Image
                      src={plan.image || "/img/systems/facturacion-system.jpg"}
                      alt={plan.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6 pt-4">
                    <h3 className="text-xl font-bold text-[#191e29] mb-2">{plan.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#191e29] mb-2">{t.features}:</h4>
                      <ul className="space-y-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <i className="fi fi-rr-check text-[#01c38d] mr-2 mt-1 flex-shrink-0"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="text-[#191e29]">
                        <span className="text-sm">{t.startingFrom}</span>
                        <div className="font-bold text-2xl">
                          ${plan.price} <span className="text-sm font-normal">+ IVA</span>
                          <span className="text-sm font-normal text-gray-500">{plan.period === 'mes' || plan.period === 'month' ? t.month : t.year}</span>
                        </div>
                      </div>
                      <a 
                        href={getRegistrationLink(plan.id)}
                        className="bg-[#191e29] hover:bg-[#191e29]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.buyNow}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resto de la página */}
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#191e29] to-[#191e29]/90 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {language === 'ES' 
                      ? '¿Necesitas ayuda para elegir el plan adecuado?' 
                      : 'Need help choosing the right plan?'}
                  </h2>
                  <p className="text-gray-300 max-w-xl">
                    {language === 'ES'
                      ? 'Contáctanos hoy mismo para discutir tus necesidades específicas. Nuestro equipo de expertos te ayudará a encontrar la solución perfecta para tu empresa.'
                      : 'Contact us today to discuss your specific needs. Our team of experts will help you find the perfect solution for your company.'}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link 
                    href="/contacto" 
                    className="bg-[#01c38d] hover:bg-[#01c38d]/90 text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 hover:-translate-y-0.5 inline-block"
                  >
                    {t.contactUs}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}