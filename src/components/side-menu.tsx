"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <motion.div
      className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#01c38d] rounded-md flex items-center justify-center mr-2">
              <div className="w-4 h-4 bg-white/30 rounded-sm"></div>
            </div>
            <h2 className="text-lg font-bold text-[#191e29]">Company</h2>
          </div>
          <motion.button
            onClick={onClose}
            className="text-gray-500 hover:text-[#01c38d]"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </motion.button>
        </div>

        <nav className="space-y-6">
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link href="/" className="block text-[#01c38d] font-medium text-lg border-b border-gray-100 pb-2">
              Inicio
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link
              href="/sobre-nosotros"
              className="block text-[#191e29] hover:text-[#01c38d] font-medium text-lg border-b border-gray-100 pb-2"
            >
              Sobre Nosotros
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link
              href="/planes"
              className="block text-[#191e29] hover:text-[#01c38d] font-medium text-lg border-b border-gray-100 pb-2"
            >
              Planes
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link
              href="/testimonios"
              className="block text-[#191e29] hover:text-[#01c38d] font-medium text-lg border-b border-gray-100 pb-2"
            >
              Testimonios
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link
              href="/blog"
              className="block text-[#191e29] hover:text-[#01c38d] font-medium text-lg border-b border-gray-100 pb-2"
            >
              Blog
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link
              href="/contacto"
              className="block text-[#191e29] hover:text-[#01c38d] font-medium text-lg border-b border-gray-100 pb-2"
            >
              Contacto
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Link
              href="/tienda"
              className="block text-[#191e29] hover:text-[#01c38d] font-medium text-lg border-b border-gray-100 pb-2"
            >
              Tienda
            </Link>
          </motion.div>
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-bold text-[#191e29] mb-4">GET IN TOUCH</h3>
          <div className="space-y-3">
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <Link href="tel:+123456789" className="flex items-center text-gray-600 hover:text-[#01c38d]">
                <span className="w-8 h-8 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] flex items-center justify-center">
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
                +123 456 789
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <Link href="mailto:contact@company.co" className="flex items-center text-gray-600 hover:text-[#01c38d]">
                <span className="w-8 h-8 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] flex items-center justify-center">
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
                contact@company.co
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

