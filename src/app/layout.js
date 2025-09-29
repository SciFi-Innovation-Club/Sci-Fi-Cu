import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { FaviconHandler } from "../components/FaviconHandler";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sci-Fi Innovation Club",
  description: "Sci-Fi Innovation Club | Chandigarh University",
  author: "Sandeep Vashishtha",
  icons: {
    icon: [
      {
        url: '/LOGO-black.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/LOGO.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/LOGO-black.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/LOGO.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-white dark:!bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <FaviconHandler />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
