"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from '@/context/LanguageContext'

export default function BlogPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  const translations = {
    ES: {
      title: "BLOG",
      home: "INICIO",
      searchPlaceholder: "Buscar artículos...",
      recentSearches: "Búsquedas recientes:",
      readMore: "Leer Artículo Completo",
      followUs: "Síguenos",
      searches: ["Desarrollo Web", "React", "Next.js", "TypeScript", "Tailwind CSS"],
      blogPosts: [
        {
          title: "Introducción al Desarrollo Web Moderno",
          description: "Descubre las últimas tendencias y tecnologías en el desarrollo web actual...",
          category: "Blog",
          date: "Lunes 15 Mar, 2025",
          image: "/img/BLACK-NOVEMBER.jpg",
        }
      ]
    },
    EN: {
      title: "BLOG",
      home: "HOME",
      searchPlaceholder: "Search articles...",
      recentSearches: "Recent searches:",
      readMore: "Read Full Article",
      followUs: "Follow us",
      searches: ["Web Development", "React", "Next.js", "TypeScript", "Tailwind CSS"],
      blogPosts: [
        {
          title: "Introduction to Modern Web Development",
          description: "Discover the latest trends and technologies in current web development...",
          category: "Blog",
          date: "Monday Mar 15, 2025",
          image: "/img/BLACK-NOVEMBER.jpg",
        }
      ]
    }
  }

  const t = translations[language]

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/BLOG.jpg" 
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
              
              <div className="flex items-center text-[#01c38d]">
                <div className="flex items-center justify-center h-6 w-6 mr-2">
                  <i className="fi fi-rr-document text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.title}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <div className="bg-gray-50/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-[#191e29] text-xl font-bold mb-2">
                          {post.title}
                        </h3>
                        <span className="text-gray-500 text-sm block mb-3">
                          {post.date}
                        </span>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-100">
                        <Link 
                          href="/blog-detail" 
                          className="text-[#01c38d] font-medium hover:text-[#191e29] transition-colors text-sm"
                        >
                          {t.readMore}
                        </Link>
                        <span className="bg-[#191e29] text-white font-medium text-xs px-3 py-1 rounded-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[300px] space-y-6">
              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2.5 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-[#01c38d] text-sm"
                  />
                  <i className="fi fi-rr-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow-md">
                <h3 className="text-sm font-medium text-gray-600 mb-2">{t.recentSearches}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.searches.map((search, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs bg-[#01c38d]/10 text-[#01c38d] rounded-full hover:bg-[#01c38d]/20 transition-colors"
                    >
                      {search}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow-md">
                <h3 className="text-sm font-medium text-gray-600 mb-3">{t.followUs}</h3>
                <div className="flex gap-3">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <motion.a
                      key={social}
                      href={`#${social}`}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-lg shadow-md inline-flex items-center justify-center text-[#01c38d] hover:bg-[#01c38d] hover:text-white transition-colors"
                    >
                      <i className={`fi fi-brands-${social} text-sm flex items-center justify-center w-full h-full`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}