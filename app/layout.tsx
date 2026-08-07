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
  title:
    "Rhino Roofing Ltd. | Flat, Metal & Commercial Roofing in Alberta & Saskatchewan",

  icons: {
    icon: "/images/rhinologo.webp",
    shortcut: "/images/rhinologo.webp",
    apple: "/images/rhinologo.webp",
  },

  description:
    "Rhino Roofing Ltd. delivers premium flat roofing, metal roofing, commercial roofing, residential roofing, roof repairs, inspections, and solar roofing solutions across Alberta and Saskatchewan.",

  keywords: [
    "Rhino Roofing Ltd",
    "Rhino Roofing",
    "roofing company Alberta",
    "roofing company Saskatchewan",
    "flat roofing Alberta",
    "metal roofing Alberta",
    "commercial roofing",
    "residential roofing",
    "roof repairs",
    "roof inspections",
    "solar roofing",
    "roof replacement",
    "emergency roofing",
    "roof restoration",
    "industrial roofing",
    "roofing contractor",
    "Calgary roofing",
    "Edmonton roofing",
    "Lloydminster roofing",
    "Cold Lake roofing",
    "Bonnyville roofing",
    "North Battleford roofing",
    "Vermilion roofing",
    "St. Paul roofing",
    "Wainwright roofing",
    "Provost roofing",
    "roofing experts Alberta",
  ],

  authors: [
    {
      name: "Rhino Roofing Ltd.",
    },
  ],

  creator: "Rhino Roofing Ltd.",
  publisher: "Rhino Roofing Ltd.",
  applicationName: "Rhino Roofing Ltd.",

  category: "Roofing & Construction",

  metadataBase: new URL("https://rhinoroofing.ca"),

  openGraph: {
    title:
      "Rhino Roofing Ltd. | Alberta & Saskatchewan's Trusted Roofing Specialists",

    description:
      "Professional flat roofing, metal roofing, commercial roofing, residential roofing, roof repairs, inspections, and solar roofing solutions throughout Alberta and Saskatchewan.",

    url: "https://rhinoroofing.ca",

    siteName: "Rhino Roofing Ltd.",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Rhino Roofing Ltd.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rhino Roofing Ltd. | Premium Roofing Services Across Alberta & Saskatchewan",

    description:
      "Trusted specialists in flat roofing, metal roofing, commercial roofing, residential roofing, repairs, inspections, and solar roofing.",

    images: ["/images/og-image.webp"],
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
