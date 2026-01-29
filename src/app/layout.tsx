import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../../components/SmoothScroll";
import ParticlesBackground from "../../components/ParticlesBackground"; // <-- IMPORT

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EauSûre | IoT Water Monitoring",
  description: "Autonomous water quality surveillance system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-[#000810] text-slate-200 antialiased`}>
        
        {/* --- L'EFFET PARTICULES --- */}
        {/* Il est en position fixed (z-0) derrière le contenu */}
        <ParticlesBackground />

        <SmoothScroll>
          {/* Le contenu doit avoir un z-index relatif pour passer devant les particules */}
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScroll>
        
      </body>
    </html>
  );
}