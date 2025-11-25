import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";   
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";



  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

export const metadata = {
  title: "Blogs - Your Source for the Latest Coding Articles",
description: "Discover insightful articles, news, and stories on a variety of topics. Stay updated with our regularly updated blog platform."
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
      <Navbar />
        {children}
        {/* <Footer /> */}
          </ThemeProvider>
      </body>
    </html>
  );
}
