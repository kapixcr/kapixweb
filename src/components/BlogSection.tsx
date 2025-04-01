"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { useEffect, useState } from "react"
import { type BlogPost, fetchBlogPosts, formatDate } from "@/lib/api"

const translations = {
  ES: {
    blog: "Blog",
    title: "Nuestros Últimos Artículos",
    subtitle: "Mantente actualizado con las últimas tendencias y conocimientos.",
    readMore: "Leer Artículo Completo",
  },
  EN: {
    blog: "Blog",
    title: "Our Latest Articles",
    subtitle: "Stay updated with the latest trends and insights.",
    readMore: "Read Full Article",
  },
}

const BlogSection = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [apiPosts, setApiPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      try {
        const posts = await fetchBlogPosts()
        setApiPosts(posts)
      } catch (error) {
        console.error("Error loading blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  // Map API posts to display format
  const displayPosts = apiPosts.map((post) => ({
    title: post.titulo,
    description:
      post.descripcion
        .replace(/<br>/g, " ")
        .replace(/\u003Cbr\u003E/g, " ")
        .substring(0, 120) + "...",
    image: post.url_imagen || "/img/BLACK-NOVEMBER.jpg",
    date: formatDate(post.created_at),
    category: "Blog",
    id: post.id,
  }))

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
          <p className="text-gray-600 max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? // Loading skeleton
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse h-[350px]"
                  >
                    <div className="h-44 w-full bg-gray-200"></div>
                    <div className="p-5">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))
            : displayPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-44 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-[#191e29] text-xl font-bold mb-2">{post.title}</h3>
                      <span className="text-gray-500 text-sm block mb-3">{post.date}</span>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
                    </div>
                    <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-100">
                      <Link
                        href={`/blog-detail?id=${post.id}`}
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

