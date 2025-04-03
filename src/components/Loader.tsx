"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useLanguage } from '@/context/LanguageContext'

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const { language } = useLanguage()
  const loadingText = language === 'ES' ? 'Cargando...' : 'Loading...'

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 8000) // Increased initial display time

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="sync">
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-[#191e29]/60 backdrop-blur-md"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="loader-container">
            <div className="orbit">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
              <div className="loading-text">{loadingText}</div>
            </div>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .loader-container {
          position: relative;
          width: 200px;
          height: 200px;
          perspective: 800px;
        }

        .orbit {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .loading-text {
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
        }

        .line {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: none;
        }

        .line1 {
          border-bottom: 6px solid #01c38d;
          animation: rotate1 3s linear infinite;
        }

        .line2 {
          border-bottom: 6px solid #ffffff;
          animation: rotate2 3s linear infinite;
        }

        .line3 {
          border-bottom: 6px solid #191e29;
          animation: rotate3 3s linear infinite;
        }

        @keyframes rotate1 {
          from { transform: rotateX(50deg) rotateZ(110deg); }
          to { transform: rotateX(50deg) rotateZ(470deg); }
        }

        @keyframes rotate2 {
          from { transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg); }
          to { transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg); }
        }

        @keyframes rotate3 {
          from { transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg); }
          to { transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg); }
        }
      `}</style>
    </AnimatePresence>
  )
}

