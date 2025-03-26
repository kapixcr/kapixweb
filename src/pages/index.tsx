"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamSection from "@/components/TeamSection"
import TextSlider from "@/components/TextSlider"
import BlogSection from "@/components/BlogSection"
import FaqSection from "@/components/FaqSection"
import TestimonialSlider from "@/components/TestimonialSlider"
import SponsorsSection from "@/components/SponsorsSection"
import AboutUs from "@/components/AboutUs"

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-24 h-6" viewBox="0 0 100 20">
                <path
                  d="M0 10 Q 10 0, 20 10 Q 30 20, 40 10 Q 50 0, 60 10 Q 70 20, 80 10 Q 90 0, 100 10"
                  fill="none"
                  stroke="#01c38d"
                  strokeWidth="2"
                />
              </svg>
              <span className="text-[#01c38d] font-medium">SU PLATAFORMA DE APRENDIZAJE</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#191e29] leading-tight mb-6">
              Online Learning Now <br />
              In Your Fingertips
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Quanta es una plataforma de aprendizaje en línea que ofrece varios cursos premium para su desarrollo
              personal.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-[#01c38d] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#01c38d]/90 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 hover:-translate-y-0.5"
              >
                Try now
              </a>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full animate-ping bg-[#191e29]/40" />
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="relative w-12 h-12 flex items-center justify-center bg-[#191e29] rounded-full hover:bg-[#191e29]/90 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <span className="text-[#191e29] font-medium">Watch Video</span>
              </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
              {isVideoModalOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsVideoModalOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl z-50"
                  >
                    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                      <div className="aspect-video">
                        <iframe
                          src="https://www.youtube.com/embed/a9EEge1bRmM?si=RW-DNgjskoFXlrRP"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <button
                        onClick={() => setIsVideoModalOpen(false)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white/80 hover:text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] mx-4 sm:mx-0">
              <img src="/hero.png" alt="Students learning" className="w-full h-full object-cover" />

              {/* Floating Elements - Now positioned in front of the image */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 w-fit"
                >
                  <div className="flex items-center">
                    <img src="ruta/a/tu/imagen1.png" alt="Icono Online Learning" className="w-6 h-6 mr-2" />
                    <p className="text-lg font-semibold text-[#191e29]">Online Learning</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 w-fit self-end"
                >
                  <div className="flex items-center">
                    <img src="ruta/a/tu/imagen2.png" alt="Icono Premium Courses" className="w-6 h-6 mr-2" />
                    <p className="text-lg font-semibold text-[#191e29]">Premium Courses</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#01c38d]/20 rounded-full filter blur-xl" />
              <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#191e29]/10 rounded-full filter blur-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agregar el Client Logo */}
      <SponsorsSection />

      {/* Agregar el About Section */}
      <AboutUs />

      {/* Agregar el Team Section */}
      <TeamSection />

      {/* Agregar el Testimonial Slider */}
      <TestimonialSlider />

      {/* Agregar el Text Slider */}
      <TextSlider />

      {/* Agregar el Blog Section */}
      <BlogSection />

      {/* Agregar Faq Section */}
      <FaqSection />

      {/* Agregar el Footer */}
      <Footer />
    </>
  )
}

