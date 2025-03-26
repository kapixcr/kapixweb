"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageSquare, Check } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section className="container mx-auto py-20 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side with images */}
        <div className="relative">
          <div className="relative h-[450px] w-full md:w-[90%] rounded-2xl overflow-hidden">
            <Image
              src="/img/Kapix Logo.png"
              alt="Kapix Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Katalva logo */}
          <div className="absolute -right-4 md:right-0 top-1/4 w-[180px] h-[140px] rounded-xl overflow-hidden border-4 border-white shadow-lg bg-white">
            <Image
              src="/img/Katalva.png"
              alt="Katalva Logo"
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Experience badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-4 bottom-8 bg-[#01c38d] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
              </svg>
              <div className="flex flex-col">
                <motion.span 
                  className="text-lg font-bold leading-none"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  30+
                </motion.span>
                <span className="text-xs mt-0.5">Years of experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side content */}
        <div className="space-y-8 lg:pl-6">
          <div>
            <span className="text-[#01c38d] font-medium mb-4 block">// Get to Know</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#191e29] leading-tight mb-6">
              We provide best design solution in town
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore
              et simply free text dolore magna aliqua.
            </p>
          </div>

          <ul className="space-y-4">
            {['Refreshing to get such a personal touch.', 
              'Duis aute irure dolor in reprehenderit in voluptate.',
              'Velit esse cillum dolore eu fugiat nulla pariatur.'].map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 bg-[#01c38d]/10 p-1.5 rounded-full text-[#01c38d]">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-gray-600">{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/img/david-hardson.jpg"
                  alt="David hardson"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-[#191e29]">David hardson</div>
                <div className="text-sm text-gray-500">Founder of company</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#01c38d] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#01c38d]/90 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40"
            >
              Explore now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

