"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const recentSearches = ["Desarrollo Web", "React", "Next.js", "TypeScript", "Tailwind CSS"]
  
  const blogPosts = [
    {
      title: "Introducción al Desarrollo Web Moderno",
      description: "Descubre las últimas tendencias y tecnologías en el desarrollo web actual...",
      category: "Blog",
      date: "Monday Mar 15, 2024",
      image: "/img/blog/web-dev.jpg",
    },
    {
      title: "Mejores Prácticas en React",
      description: "Aprende a optimizar tus aplicaciones React con estas técnicas probadas...",
      category: "Blog",
      date: "Monday Mar 14, 2024",
      image: "/img/blog/react.jpg",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-16">
          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#01c38d]"
                />
                <i className="fi fi-rr-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>

              {/* Recent Searches */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Búsquedas recientes:</h3>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm bg-[#01c38d]/10 text-[#01c38d] rounded-full hover:bg-[#01c38d]/20 transition-colors"
                    >
                      {search}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-12">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <motion.a
                key={social}
                href={`#${social}`}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-lg shadow-lg inline-flex items-center justify-center text-[#01c38d] hover:bg-[#01c38d] hover:text-white transition-colors"
              >
                <i className={`fi fi-brands-${social} text-lg flex items-center justify-center w-full h-full`}></i>
              </motion.a>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-[#191e29] text-2xl font-bold mb-2">
                      {post.title}
                    </h3>
                    <span className="text-gray-500 text-sm block mb-4">
                      {post.date}
                    </span>
                    <p className="text-gray-600 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-100">
                    <Link 
                      href="#" 
                      className="text-[#01c38d] font-medium hover:text-[#191e29] transition-colors"
                    >
                      Read Full Blog
                    </Link>
                    <span className="bg-[#E8F3FF] text-[#01c38d] font-medium text-sm px-3 py-1 rounded-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}