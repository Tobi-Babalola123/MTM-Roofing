import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "MTM Roofing | Commercial Roofing Services in Alberta",

  icons: {
    icon: "/images/mtmroofing.webp",
    shortcut: "/images/mtmroofing.webp",
    apple: "/images/mtmroofing.webp",
  },

  description:
    "MTM Roofing provides professional commercial roofing services across Alberta, including flat roofing, metal roofing, roof repairs, preventative maintenance, roof replacement, inspections, and emergency roofing.",

  keywords: [
    "MTM Roofing",
    "MTM Roofing Alberta",
    "MTM Roofing Edmonton",
    "commercial roofing Alberta",
    "commercial roofing Edmonton",
    "commercial roofing contractor Alberta",
    "commercial roofing contractor Edmonton",
    "flat roofing Alberta",
    "flat roofing Edmonton",
    "metal roofing Alberta",
    "metal roofing Edmonton",
    "commercial roof repair",
    "commercial roof replacement",
    "commercial roof maintenance",
    "preventative roof maintenance",
    "emergency commercial roofing",
    "commercial roof inspection",
    "industrial roofing Alberta",
    "industrial roofing Edmonton",
    "warehouse roofing Alberta",
    "office building roofing Alberta",
    "retail roofing Alberta",
    "municipal building roofing Alberta",
    "commercial roofing services",
    "commercial roofing company Alberta",
    "roofing contractor Alberta",
    "roofing contractor Edmonton",
  ],

  authors: [
    {
      name: "MTM Roofing",
    },
  ],

  creator: "MTM Roofing",
  publisher: "MTM Roofing",
  applicationName: "MTM Roofing",

  category: "Commercial Roofing & Construction",

  metadataBase: new URL("https://YOUR-MTM-DOMAIN.com"),

  openGraph: {
    title: "MTM Roofing | Commercial Roofing Services Across Alberta",

    description:
      "MTM Roofing delivers dependable commercial roofing solutions across Alberta, including flat roofing, metal roofing, repairs, maintenance, inspections, roof replacement, and emergency roofing.",

    url: "https://YOUR-MTM-DOMAIN.com",

    siteName: "MTM Roofing",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "MTM Roofing commercial roofing services in Alberta",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "MTM Roofing | Commercial Roofing Services Across Alberta",

    description:
      "Professional commercial roofing services including flat roofing, metal roofing, repairs, maintenance, inspections, replacement, and emergency roofing across Alberta.",

    images: ["/images/hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  themeColor: "#0F2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansNotch.variable}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
