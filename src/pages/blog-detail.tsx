"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { ThumbsUp, ThumbsDown, Reply, MoreVertical } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useSearchParams } from "next/navigation"
import { type BlogPost, fetchBlogPostById, formatDate, safeParseInt } from "@/lib/api"

export default function BlogDetailPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [commentText, setCommentText] = useState("")
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)


  const searchParams = useSearchParams()
  const postId = safeParseInt(searchParams?.get("id") || null)


  useEffect(() => {
    const loadPost = async () => {
      if (postId === null) {
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const post = await fetchBlogPostById(postId)
        setBlogPost(post)
      } catch (error) {
        console.error("Error loading blog post:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [postId])

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  const translations = {
    ES: {
      title: "DETALLE DEL BLOG",
      home: "INICIO",
      article: "ARTÍCULO",
      searchPlaceholder: "Buscar artículos...",
      recentSearches: "Búsquedas recientes:",
      followUs: "Síguenos",
      comments: "Comentarios",
      writeComment: "Escribe un comentario...",
      postComment: "Publicar comentario",
      delete: "Eliminar",
      report: "Reportar",
      reply: "Responder",
      by: "Por",
      readTime: "min de lectura",
      blogContent: {
        category: "Desarrollo Web",
        title: "Cómo optimizar el rendimiento de tu sitio web",
        author: "Kapix",
        date: "15 de Noviembre, 2023",
        readTime: "5 min de lectura",
        content:
          "En el mundo digital actual, la velocidad y el rendimiento de un sitio web son factores cruciales para el éxito. Los usuarios esperan que las páginas se carguen rápidamente, y los motores de búsqueda como Google consideran la velocidad de carga como un factor importante en sus algoritmos de clasificación. En este artículo, exploraremos estrategias efectivas para optimizar el rendimiento de tu sitio web, desde la compresión de imágenes hasta la implementación de técnicas avanzadas de caché. Sigue leyendo para descubrir cómo puedes mejorar significativamente la experiencia de usuario y el posicionamiento SEO de tu sitio.",
        image: "/img/BLACK-NOVEMBER.jpg", // Add image property to ensure it exists
      },
      comments_data: [
        {
          id: 1,
          author: "Juan Pérez",
          content: "Excelente artículo, muy informativo y bien estructurado.",
          timestamp: "hace 2 horas",
          likes: 15,
          dislikes: 2,
          replies: [
            {
              id: 2,
              author: "María García",
              content: "Totalmente de acuerdo, especialmente con la parte de optimización.",
              timestamp: "hace 1 hora",
              likes: 8,
              dislikes: 0,
            },
          ],
        },
        {
          id: 3,
          author: "Carlos Rodríguez",
          content: "Me gustaría ver más ejemplos prácticos sobre este tema.",
          timestamp: "hace 3 horas",
          likes: 10,
          dislikes: 1,
          replies: [],
        },
      ],
    },
    EN: {
      title: "BLOG DETAIL",
      home: "HOME",
      article: "ARTICLE",
      searchPlaceholder: "Search articles...",
      recentSearches: "Recent searches:",
      followUs: "Follow us",
      comments: "Comments",
      writeComment: "Write a comment...",
      postComment: "Post comment",
      delete: "Delete",
      report: "Report",
      reply: "Reply",
      by: "By",
      readTime: "min read",
      blogContent: {
        category: "Web Development",
        title: "How to optimize your website performance",
        author: "Kapix",
        date: "November 15, 2023",
        readTime: "5 min read",
        content:
          "In today's digital world, the speed and performance of a website are crucial factors for success. Users expect pages to load quickly, and search engines like Google consider loading speed as an important factor in their ranking algorithms. In this article, we'll explore effective strategies to optimize your website's performance, from image compression to implementing advanced caching techniques. Keep reading to discover how you can significantly improve the user experience and SEO ranking of your site.",
        image: "/img/BLACK-NOVEMBER.jpg", // Add image property to ensure it exists
      },
      comments_data: [
        {
          id: 1,
          author: "John Smith",
          content: "Excellent article, very informative and well structured.",
          timestamp: "2 hours ago",
          likes: 15,
          dislikes: 2,
          replies: [
            {
              id: 2,
              author: "Mary Johnson",
              content: "Totally agree, especially with the optimization part.",
              timestamp: "1 hour ago",
              likes: 8,
              dislikes: 0,
            },
          ],
        },
        {
          id: 3,
          author: "Kapix",
          content: "I would like to see more practical examples on this topic.",
          timestamp: "3 hours ago",
          likes: 10,
          dislikes: 1,
          replies: [],
        },
      ],
    },
  }

  const t = translations[language]
  const [comments, setComments] = useState(t.comments_data)

  // Update comments when language changes
  useEffect(() => {
    setComments(translations[language].comments_data)
  }, [language])

  // Translate recent searches based on language
  const recentSearches =
    language === "ES"
      ? ["Desarrollo Web", "React", "Next.js", "TypeScript", "Tailwind CSS"]
      : ["Web Development", "React", "Next.js", "TypeScript", "Tailwind CSS"]

  // Ensure the displayContent always has an image property
  const displayContent = blogPost
    ? {
        category: "Blog",
        title: blogPost.titulo,
        author: "Kapix",
        date: formatDate(blogPost.created_at),
        readTime: "5 min de lectura",
        content: blogPost.descripcion,
        image: blogPost.url_imagen || "/img/BLACK-NOVEMBER.jpg", // Use fallback image
      }
    : {
        ...t.blogContent,
        image: "/img/BLACK-NOVEMBER.jpg", // Add image to the default content
      }

  return (
    <>
      <Navbar />

      {/* Nueva sección Hero con el mismo estilo que las otras páginas */}
      <section className="relative overflow-hidden bg-[#191e29] pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img src="/img/BLOG-VISTA.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h1>

            {/* Breadcrumb con el mismo estilo */}
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
                  <i className="fi fi-rr-newspaper text-lg leading-none"></i>
                </div>
                <span className="font-medium leading-none">{t.article}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-gray-50/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Left Side */}
            <div className="flex-1 space-y-6">
              {loading ? (
                // Loading skeleton
                <div className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
                  <div className="h-[350px] w-full bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Blog Content Card */
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  {/* Hero Image */}
                  <div className="relative h-[350px] w-full">
                    <Image
                      src={displayContent.image || "/img/BLACK-NOVEMBER.jpg"}
                      alt="Blog Hero"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <div className="mb-5">
                      <span className="bg-[#191e29] text-white font-medium text-xs px-3 py-1 rounded-lg">
                        {displayContent.category}
                      </span>
                      <h1 className="text-2xl md:text-3xl font-bold text-[#191e29] mt-4 mb-2">
                        {displayContent.title}
                      </h1>
                      <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs">
                        <span>
                          {t.by} {displayContent.author}
                        </span>
                        <span>•</span>
                        <span>{displayContent.date}</span>
                        <span>•</span>
                        <span>{displayContent.readTime}</span>
                      </div>
                    </div>

                    {/* Blog Text */}
                    <div className="prose prose-base max-w-none">
                      <div
                        dangerouslySetInnerHTML={{ __html: displayContent.content.replace(/\u003Cbr\u003E/g, "<br>") }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Comments Section Card */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-bold text-[#191e29] mb-5 flex items-center gap-2">
                  <i className="fi fi-rr-comments text-[#01c38d]"></i>
                  {t.comments}
                </h2>

                {/* Comment Form */}
                <div className="mb-6">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder={t.writeComment}
                    className="w-full p-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-[#01c38d] min-h-[100px] resize-none text-sm transition-colors"
                  />
                  <button className="mt-2 px-6 py-2.5 bg-gradient-to-r from-[#01c38d] to-[#01c38d]/80 text-white rounded-full hover:shadow-lg hover:shadow-[#01c38d]/20 transition-all duration-300 text-sm font-medium">
                    {t.postComment}
                  </button>
                </div>

                {/* Comments List */}
                <div className="space-y-5">
                  {comments.map((comment) => (
                    <div key={comment.id} className="space-y-4">
                      {/* Main Comment */}
                      <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all duration-300">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-[#191e29] text-sm flex items-center gap-2">
                              <span className="w-8 h-8 rounded-full bg-[#01c38d]/10 flex items-center justify-center text-[#01c38d]">
                                {comment.author.charAt(0)}
                              </span>
                              {comment.author}
                            </h4>
                            <span className="text-xs text-gray-500">{comment.timestamp}</span>
                          </div>
                          <div className="relative">
                            <button
                              className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
                              onClick={() => toggleDropdown(comment.id)}
                            >
                              <MoreVertical className="w-4 h-4" />
                            </button>
                            {activeDropdown === comment.id && (
                              <div className="absolute right-0 top-6 bg-white rounded-lg shadow-lg py-2 min-w-[150px] z-10 border border-gray-100">
                                <button
                                  className="w-full px-4 py-2 text-left text-xs hover:bg-red-50 text-red-500 flex items-center gap-2 transition-colors"
                                  onClick={() => {
                                    /* Add delete handler */
                                  }}
                                >
                                  <i className="fi fi-rr-trash text-sm"></i>
                                  {t.delete}
                                </button>
                                <button
                                  className="w-full px-4 py-2 text-left text-xs hover:bg-orange-50 text-orange-500 flex items-center gap-2 transition-colors"
                                  onClick={() => {
                                    /* Add report handler */
                                  }}
                                >
                                  <i className="fi fi-rr-flag text-sm"></i>
                                  {t.report}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3 text-sm">{comment.content}</p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-gray-500 hover:text-[#01c38d] text-xs bg-gray-50 px-3 py-1.5 rounded-full transition-colors">
                            <ThumbsUp className="w-3 h-3" />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 text-xs bg-gray-50 px-3 py-1.5 rounded-full transition-colors">
                            <ThumbsDown className="w-3 h-3" />
                            <span>{comment.dislikes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-[#01c38d] text-xs bg-gray-50 px-3 py-1.5 rounded-full transition-colors">
                            <Reply className="w-3 h-3" />
                            <span>{t.reply}</span>
                          </button>
                        </div>
                      </div>

                      {/* Apply similar styles to replies */}
                      {comment.replies &&
                        comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="ml-6 bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold text-[#191e29] text-sm flex items-center gap-2">
                                  <span className="w-8 h-8 rounded-full bg-[#01c38d]/10 flex items-center justify-center text-[#01c38d]">
                                    {reply.author.charAt(0)}
                                  </span>
                                  {reply.author}
                                </h4>
                                <span className="text-xs text-gray-500">{reply.timestamp}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-3 text-sm">{reply.content}</p>
                            <div className="flex items-center gap-4">
                              <button className="flex items-center gap-1 text-gray-500 hover:text-[#01c38d] text-xs bg-gray-50 px-3 py-1.5 rounded-full transition-colors">
                                <ThumbsUp className="w-3 h-3" />
                                <span>{reply.likes}</span>
                              </button>
                              <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 text-xs bg-gray-50 px-3 py-1.5 rounded-full transition-colors">
                                <ThumbsDown className="w-3 h-3" />
                                <span>{reply.dislikes}</span>
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="w-full lg:w-[300px] space-y-6">
              {/* Search Section */}
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

              {/* Recent Searches Section */}
              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow-md">
                <h3 className="text-sm font-medium text-gray-600 mb-2">{t.recentSearches}</h3>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
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

              {/* Social Media Section */}
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

