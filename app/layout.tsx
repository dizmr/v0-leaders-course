import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["300", "400", "500", "600", "700"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trastenlaw.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Trastenlaw (Leader's Course) - Защита финансовых интересов | Law & Order",
  description:
    "Trastenlaw - Юридическая помощь в возврате активов. Высокий стандарт защиты ваших финансовых интересов. Работаем с клиентами по всему миру.",
  keywords: [
    "trastenlaw",
    "Trastenlaw",
    "юридическая помощь",
    "возврат активов",
    "защита интересов",
    "брокер",
    "финансы",
    "криптовалюта",
    "Web3",
    "лидерс курс",
    "Leaders Course",
  ],
  authors: [{ name: "Trastenlaw" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Trastenlaw - Защита финансовых интересов",
    description: "Trastenlaw - Юридическая помощь в возврате активов. Работаем с клиентами по всему миру.",
    url: siteUrl,
    siteName: "Trastenlaw",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trastenlaw - Защита финансовых интересов",
    description: "Trastenlaw - Юридическая помощь в возврате активов. Работаем с клиентами по всему миру.",
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
  alternates: {
    canonical: siteUrl,
  },
    generator: 'v0.app'
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
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 pt-[104px]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
