import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'

export default function Loader() {
  const { language } = useLanguage()
  const loadingText = language === 'ES' ? 'Cargando...' : 'Loading...'

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex items-center justify-center z-50"
        initial={{ opacity: 1, backdropFilter: "blur(8px)" }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 bg-[#191e29]/30 backdrop-blur-md"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 2 }}
        />
        
        <div className="relative flex flex-col items-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute w-[190px] h-[190px] rounded-full border border-transparent border-b-[8px] border-b-[#01c38d] animate-[rotate1_3s_linear_infinite]" />
            <div className="absolute w-[190px] h-[190px] rounded-full border border-transparent border-b-[8px] border-b-[#191e29] animate-[rotate2_3s_linear_infinite]" />
            <div className="absolute w-[190px] h-[190px] rounded-full border border-transparent border-b-[8px] border-b-[#01c38d]/60 animate-[rotate3_3s_linear_infinite]" />
            <div className="absolute w-[190px] h-[190px] rounded-full border border-transparent border-b-[8px] border-b-[#191e29]/60 animate-[rotate4_3s_linear_infinite]" />
            
            <img 
              src="/img/Kapix Logo.png" 
              alt="Kapix" 
              className="w-24 h-24 object-contain z-10"
            />
          </div>

          <motion.div 
            className="text-[#191e29] text-lg font-medium mt-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {loadingText}
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
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
        @keyframes rotate4 {
          from { transform: rotateX(70deg) rotateZ(270deg); }
          to { transform: rotateX(70deg) rotateZ(630deg); }
        }
      `}</style>
    </AnimatePresence>
  )
}