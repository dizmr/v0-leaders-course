import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Leader's Course - Защита финансовых интересов | Law & Order",
  description:
    "Юридическая помощь в возврате активов. Высокий стандарт защиты ваших финансовых интересов. Работаем с клиентами по всему миру.",
  keywords: ["юридическая помощь", "возврат активов", "защита интересов", "брокер", "финансы", "криптовалюта", "Web3"],
  authors: [{ name: "Leader's Course" }],
  icons: {
    icon: [
      { url: "/favicon.jpg", sizes: "32x32", type: "image/png" },
      { url: "/favicon.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.jpg", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.jpg",
  },
  openGraph: {
    title: "Leader's Course - Защита финансовых интересов",
    description: "Юридическая помощь в возврате активов. Работаем с клиентами по всему миру.",
    url: "https://leaders-course.com",
    siteName: "Leader's Course",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leader's Course - Защита финансовых интересов",
    description: "Юридическая помощь в возврате активов. Работаем с клиентами по всему миру.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a365d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 pt-[104px]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
