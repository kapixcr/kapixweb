import type { AppProps } from 'next/app'
import { Geist, Geist_Mono } from "next/font/google"
import "../../styles/globals.css"
import { LanguageProvider } from '@/context/LanguageContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <main className={`${geistSans.variable} ${geistMono.variable}`}>
        <Component {...pageProps} />
      </main>
    </LanguageProvider>
  )
}

export default MyApp
