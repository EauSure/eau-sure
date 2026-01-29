import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using a clean technical font
import "./globals.css";
import SmoothScroll from "../../components/SmoothScroll"; // Import your component

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
        {/* Wrap everything inside SmoothScroll */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}