"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface MobileMenuProps {
  isOpen: boolean
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <motion.div
      className="md:hidden bg-white overflow-hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="px-4 pt-2 pb-3 space-y-1">
        <Link href="/" className="block px-3 py-2 text-[#191e29] font-medium">
          Inicio
        </Link>
        <Link href="/sobre-nosotros" className="block px-3 py-2 text-[#191e29] font-medium">
          Sobre Nosotros
        </Link>
        <Link href="/planes" className="block px-3 py-2 text-[#191e29] font-medium">
          Planes
        </Link>
        <Link href="/testimonios" className="block px-3 py-2 text-[#191e29] font-medium">
          Testimonios
        </Link>
        <Link href="/blog" className="block px-3 py-2 text-[#191e29] font-medium">
          Blog
        </Link>
        <Link href="/contacto" className="block px-3 py-2 text-[#191e29] font-medium">
          Contacto
        </Link>
      </div>
      <div className="px-4 py-3 border-t border-gray-100">
        <h3 className="text-sm font-bold text-[#191e29] mb-2">GET IN TOUCH</h3>
        <div className="flex items-center">
          <Link href="tel:+123456789" className="flex items-center text-gray-600 mr-4">
            <span className="w-8 h-8 rounded-full bg-[#01c38d]/10 text-[#01c38d] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
          </Link>
          <Link href="mailto:contact@company.co" className="flex items-center text-gray-600">
            <span className="w-8 h-8 rounded-full bg-[#01c38d]/10 text-[#01c38d] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

