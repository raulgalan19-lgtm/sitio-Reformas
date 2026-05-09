import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReformasJG Madrid",
  description: "Especialistas en reformas y mantenimiento en Madrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen font-sans text-slate-900 bg-white selection:bg-blue-200 selection:text-blue-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
