import type { Metadata } from "next";
import {Big_Shoulders,Inter,JetBrains_Mono} from "next/font/google"
import "./globals.css"
import React from "react";

const bigShoulders= Big_Shoulders({
  variable:"--font-big-shoulders",
  subsets:["latin"],
  weight:["600","700","800"]
})

const inter =Inter({
  variable:"--font-inter",
  subsets:["latin"]
})

const jetbrainsMono=JetBrains_Mono({
  variable:"--font-jetbrains-mono",
  subsets:["latin"]
})

export const metadata: Metadata={
  title: "Sanando - Full Stack / AI Engineer",
  description: "Portfolio of Sanando - builiding AI pipelines and full-stack systems."
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return(
    <html
      lang="en"
      className={`${bigShoulders.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-bone">{children}</body>
    </html>
  )
}