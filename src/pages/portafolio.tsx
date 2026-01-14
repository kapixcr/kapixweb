"use client"

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Head from 'next/head'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react'

const translations = {
  ES: {
    title: "PORTAFOLIO DE PROYECTOS",
    mainDescription: "Explora una selección de nuestros trabajos más destacados y descubre cómo hemos transformado ideas en soluciones digitales exitosas para nuestros clientes.",
    breadcrumb: "PORTAFOLIO",
    home: "INICIO",
    viewProject: "Ver Proyecto",
    projects: [
      {
        id: "kapix-erp",
        title: "KAPIX ERP",
        description: "Sistema de planificación de recursos empresariales (ERP) para la gestión integral de tu negocio.",
        image: "/img/KAPIX ERP.jpg",
        link: "/contacto"
      },
      {
        id: "kapix-lite",
        title: "KAPIX LITE",
        description: "Versión simplificada de nuestro ERP, ideal para pequeñas empresas y emprendedores.",
        image: "/img/KAPIX LITE.png",
        link: "https://lite.kapix.co.cr/"
      },
      {
        id: "tecniplagas",
        title: "Tecniplagas",
        description: "Sitio web corporativo para empresa de control de plagas y servicios de fumigación.",
        image: "/img/TECNIPLAGAS PORTAFOLIO.png",
        link: "https://tecniplagascr.com/"
      }
    ]
  },
  EN: {
    title: "PROJECT PORTFOLIO",
    mainDescription: "Explore a selection of our most outstanding projects and discover how we have transformed ideas into successful digital solutions for our clients.",
    breadcrumb: "PORTFOLIO",
    home: "HOME",
    viewProject: "View Project",
    projects: [
      {
        id: "kapix-erp",
        title: "KAPIX ERP",
        description: "Enterprise Resource Planning (ERP) system for the comprehensive management of your business.",
        image: "/img/KAPIX ERP.jpg",
        link: "/contacto"
      },
      {
        id: "kapix-lite",
        title: "KAPIX LITE",
        description: "Simplified version of our ERP, ideal for small businesses and entrepreneurs.",
        image: "/img/KAPIX LITE.png",
        link: "https://lite.kapix.co.cr/"
      },
      {
        id: "kapix-api",
        title: "KAPIX API",
        description: "Robust API to integrate our services with other platforms and systems.",
        image: "/img/KAPIX API.png",
        link: "/contacto"
      },
      {
        id: "tecniplagas",
        title: "Tecniplagas",
        description: "Corporate website for pest control and fumigation services company.",
        image: "/img/TECNIPLAGAS PORTAFOLIO.png",
        link: "https://tecniplagascr.com/"
      }
    ]
  }
}

export default function PortfolioPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedProject, setSelectedProject] = useState<{ image: string, link: string, title: string, description: string } | null>(null);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (project: { image: string, link: string, title: string, description: string }) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (selectedProject) {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [selectedProject]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.max(0.5, Math.min(4, scale + delta)); // Limit zoom between 0.5 and 4
    setScale(newScale);
  };

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(4, prevScale + 0.1));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(0.5, prevScale - 0.1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setOrigin({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - origin.x;
    const deltaY = e.clientY - origin.y;

    setPosition(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));

    setOrigin({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const resetPosition = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <>
      <Head>
        <title>{language === 'ES' ? 'Portafolio | Kapix' : 'Portfolio | Kapix'}</title>
        <meta
          name="description"
          content={language === 'ES'
            ? 'Explora el portafolio de proyectos de Kapix y descubre cómo transformamos ideas en soluciones tecnológicas innovadoras.'
            : 'Explore Kapix\'s project portfolio and discover how we turn ideas into innovative tech solutions.'
          }
        />
      </Head>
      <Navbar />
      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
          <div className="absolute inset-0 opacity-30">
            <img src="/img/PORTAFOLIO.jpg" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h1>

              <div className="inline-flex items-center bg-black/30 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10">
                <a href="/" className="flex items-center text-white hover:text-[#01c38d] transition-colors">
                  <div className="flex items-center justify-center h-6 w-6 mr-2">
                    <i className="fi fi-rr-house-chimney text-lg leading-none"></i>
                  </div>
                  <span className="font-medium leading-none">{t.home}</span>
                </a>

                {/* Separador vertical */}
                <div className="h-5 w-px bg-white/30 mx-3"></div>

                <div className="flex items-center text-[#01c38d]">
                  <div className="flex items-center justify-center h-6 w-6 mr-2">
                    <i className="fi fi-rr-rocket-lunch text-lg leading-none"></i>
                  </div>
                  <span className="font-medium leading-none">{t.breadcrumb}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección de Proyectos */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {language === 'ES' ? 'Nuestro Trabajo' : 'Our Work'}
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {language === 'ES' ? 'Casos de Éxito Recientes' : 'Recent Success Stories'}
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t.mainDescription}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {t.projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col h-full transition-all duration-500 transform hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              >
                <div className="flex flex-col h-full cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  handleImageClick(project);
                }}>
                  <div className="relative h-[400px] w-full"> {/* Increased height here */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-base font-semibold px-3 py-1 rounded-md bg-[#01c38d]/60 backdrop-blur-md">
                        {t.viewProject}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-[#01c38d] transition-colors duration-300">{project.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal for full-screen image */}
      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md z-50 flex items-center justify-center">
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col max-w-[80vw] max-h-[90vh] overflow-y-auto hide-scrollbar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-gray-200 rounded-full px-3 hover:bg-gray-300 transition-colors duration-200 text-gray-600 hover:text-gray-800 text-2xl z-10 hover:shadow-md cursor-pointer"
              onClick={handleCloseModal}
              aria-label={language === 'ES' ? 'Cerrar modal' : 'Close modal'}
            >
              &times;
            </button>

            {/* Image Container with zoom and drag functionality */}
            <div
              className="flex items-center justify-center flex-shrink-0 overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onWheel={handleWheel}
              ref={imageContainerRef}
              style={{ flexGrow: 1 }}
            >
              <motion.div
                style={{
                  x: position.x,
                  y: position.y,
                  scale: scale,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <Image
                  src={selectedProject.image}
                  alt="Full Screen"
                  width={768}
                  height={768}
                  style={{ objectFit: 'contain' }}
                  className="max-h-[60vh] max-w-[60vh]"
                />
              </motion.div>
            </div>

            {/* Zoom Controls (Reset, Zoom In/Out) */}
            <div className="flex justify-between items-center w-full mt-4">
              <div className="bg-gray-200 rounded-full px-3 py-1 text-gray-600 hover:text-gray-800 cursor-pointer hover:shadow-md" onClick={resetPosition}>
                {language === 'ES' ? 'Restablecer Zoom' : 'Reset Zoom'}
              </div>
              <div className="flex space-x-2">
                <button
                  className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 cursor-pointer hover:shadow-md text-2xl"
                  onClick={handleZoomIn}
                  aria-label={language === 'ES' ? 'Acercar imagen' : 'Zoom in image'}
                >
                  +
                </button>
                <button
                  className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 cursor-pointer hover:shadow-md text-4xl"
                  onClick={handleZoomOut}
                  aria-label={language === 'ES' ? 'Alejar imagen' : 'Zoom out image'}
                >
                  -
                </button>
              </div>
            </div>

            {/* Project Title and Description */}
            <div className="mt-4 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{selectedProject.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">{selectedProject.description}</p>
            </div>

            {/* View Project Button (in flow) */}
            <div className="flex justify-center mt-4">
              <div className="bg-[#01c38d] text-white rounded-md px-6 py-3 hover:bg-[#01c38d]/90 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 cursor-pointer font-bold">
                {selectedProject.link === "/contacto" ? (
                  <a href={selectedProject.link}>
                    {language === 'ES' ? 'Ver Proyecto' : 'View Project'}
                  </a>
                ) : (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    {language === 'ES' ? 'Ver Proyecto' : 'View Project'}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}