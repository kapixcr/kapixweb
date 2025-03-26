"use client"

import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "Learn Microinteraction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.",
    image: "/blog/microinteraction.jpg",
    date: "Monday Jan 20, 2020",
    category: "Blog"
  },
  {
    title: "Digital Marketing Guide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.",
    image: "/blog/marketing.jpg",
    date: "Monday Jan 21, 2020",
    category: "Blog"
  },
  {
    title: "UI/UX Best Practices",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.",
    image: "/blog/uiux.jpg",
    date: "Monday Jan 22, 2020",
    category: "Blog"
  }
]

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#01c38d] font-medium mb-2 block">Blog Posts</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#191e29] flex items-center justify-center gap-2">
            Our Latest
            <span className="text-[#01c38d] relative">
              Articles
              <svg className="absolute -bottom-7 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d="M0 10 Q 25 0, 50 10 Q 75 20, 100 10"
                  stroke="#01c38d"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Resto del contenido del blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection