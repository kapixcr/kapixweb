"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from '@/context/LanguageContext'

const blogPosts = {
  ES: [
    {
      title: "La Importancia de un ERP en la Transformación Digital",
      description: "Descubre cómo un sistema ERP moderno puede transformar tu empresa, mejorando la eficiencia operativa y facilitando la toma de decisiones estratégicas.",
      image: "/img/BLACK-NOVEMBER.jpg",
      date: "20 Enero, 2024",
      category: "ERP"
    },
  ],
  EN: [
    {
      title: "The Importance of ERP in Digital Transformation",
      description: "Discover how a modern ERP system can transform your business, improving operational efficiency and facilitating strategic decision-making.",
      image: "/img/BLACK-NOVEMBER.jpg",
      date: "January 20, 2024",
      category: "ERP"
    },
  ]
}

const translations = {
  ES: {
    blog: "Blog",
    title: "Nuestros Últimos Artículos",
    subtitle: "Mantente actualizado con las últimas tendencias y conocimientos.",
    readMore: "Leer Artículo Completo"
  },
  EN: {
    blog: "Blog",
    title: "Our Latest Articles",
    subtitle: "Stay updated with the latest trends and insights.",
    readMore: "Read Full Article"
  }
}

const BlogSection = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-[#191e29] text-white font-medium text-sm mb-2 shadow-sm">
            {t.blog}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts[language].map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-44 w-full">
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
                <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-100">
                  <Link 
                    href="/blog-detail" 
                    className="text-[#01c38d] font-medium hover:text-[#191e29] transition-colors text-sm"
                  >
                    {t.readMore}
                  </Link>
                  <span className="bg-[#E8F3FF] text-[#01c38d] font-medium text-xs px-3 py-1 rounded-lg">
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection