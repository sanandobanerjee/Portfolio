import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-sooty-psi-17.vercel.app"),
  title: "Sanando Banerjee - Mission Log",
  description:
    "Mission log of Sanando Banerjee, a full-stack and AI engineer building orbital intelligence, agentic systems, and Earth-facing defenses.",
  openGraph: {
    title: "Sanando Banerjee - Mission Log",
    description:
      "Mission log of Sanando Banerjee, a full-stack and AI engineer building orbital intelligence, agentic systems, and Earth-facing defenses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanando Banerjee - Mission Log",
    description:
      "Mission log of Sanando Banerjee, a full-stack and AI engineer building orbital intelligence, agentic systems, and Earth-facing defenses.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0B0B12",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-bone">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}