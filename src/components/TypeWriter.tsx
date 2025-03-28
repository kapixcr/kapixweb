import { useState, useEffect } from "react"

export default function TypeWriter({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const typeText = async () => {
      if (isTyping) {
        for (let i = 0; i <= text.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 150));
          setDisplayText(text.slice(0, i));
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsTyping(false);
      } else {
        for (let i = text.length; i >= 0; i--) {
          await new Promise(resolve => setTimeout(resolve, 100));
          setDisplayText(text.slice(0, i));
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsTyping(true);
      }
    };

    typeText();
  }, [isTyping, text]);

  return (
    <div className="relative inline-block bg-gradient-to-r from-[#191e29] to-[#01c38d] bg-clip-text text-transparent">
      <span className="inline-block whitespace-nowrap">
        {displayText}
      </span>
    </div>
  )
}