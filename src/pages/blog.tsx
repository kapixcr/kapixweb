"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { type BlogPost, fetchBlogPosts, formatDate } from "@/lib/api"
import Loader from '@/components/Loader'

export default function BlogPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      try {
        const posts = await fetchBlogPosts()
        setBlogPosts(posts)
      } catch (error) {
        console.error("Error loading blog posts:", error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 3000) 
      }
    }

    loadPosts()
  }, [])

  const translations = {
    ES: {
      title: "BLOG",
      home: "INICIO",
      searchPlaceholder: "Buscar artículos...",
      recentSearches: "Búsquedas recientes:",
      readMore: "Leer Artículo Completo",
      followUs: "Síguenos",
      searches: ["Desarrollo Web", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    EN: {
      title: "BLOG",
      home: "HOME",
      searchPlaceholder: "Search articles...",
      recentSearches: "Recent searches:",
      readMore: "Read Full Article",
      followUs: "Follow us",
      searches: ["Web Development", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
  }

  const t = translations[language]

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.descripcion.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Map API posts to display format
  const displayPosts = filteredPosts.map((post) => ({
    title: post.titulo,
    description:
      post.descripcion
        .replace(/<br>/g, " ")
        .replace(/\u003Cbr\u003E/g, " ")
        .substring(0, 120) + "...",
    category: "Blog",
    date: formatDate(post.created_at),
    image: post.url_imagen || "/img/BLACK-NOVEMBER.jpg",
    id: post.id,
  }))

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img src="/img/BLOG.jpg" alt="Background" className="w-full h-full object-cover" />
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
              {loading ? (
                // Loading skeleton
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={`skeleton-${index}`}
                        className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse h-[350px]"
                      >
                        <div className="h-48 w-full bg-gray-200"></div>
                        <div className="p-5">
                          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : displayPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displayPosts.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                    >
                      <div className="relative h-48 w-full">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex-1">
                          <h3 className="text-[#191e29] text-xl font-bold mb-2">{post.title}</h3>
                          <span className="text-gray-500 text-sm block mb-3">{post.date}</span>
                          <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
                        </div>
                        <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-100">
                          <Link
                            href={`/blog-detail?id=${post.id}`}
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
              ) : (
                <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-md">
                  <p className="text-gray-500">No se encontraron artículos</p>
                </div>
              )}
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
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow-md">
                <h3 className="text-sm font-medium text-gray-600 mb-3">{t.followUs}</h3>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.facebook.com/p/KAPIX-61558702651954/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-lg shadow-md inline-flex items-center justify-center text-[#01c38d] hover:bg-[#01c38d] hover:text-white transition-colors"
                  >
                    <i className="fi fi-brands-facebook text-sm flex items-center justify-center w-full h-full"></i>
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/kapixlatam?igsh=eWtwODhhZ3ViOHhk"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-lg shadow-md inline-flex items-center justify-center text-[#01c38d] hover:bg-[#01c38d] hover:text-white transition-colors"
                  >
                    <i className="fi fi-brands-instagram text-sm flex items-center justify-center w-full h-full"></i>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/50660641906?text=Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20tu%20servicio.🚀"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-lg shadow-md inline-flex items-center justify-center text-[#01c38d] hover:bg-[#01c38d] hover:text-white transition-colors"
                  >
                    <i className="fi fi-brands-whatsapp text-sm flex items-center justify-center w-full h-full"></i>
                  </motion.a>

                  <motion.a
                    href="https://www.youtube.com/@Kapix-s6d"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-lg shadow-md inline-flex items-center justify-center text-[#01c38d] hover:bg-[#01c38d] hover:text-white transition-colors"
                  >
                    <i className="fi fi-brands-youtube text-sm flex items-center justify-center w-full h-full"></i>
                  </motion.a>
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

