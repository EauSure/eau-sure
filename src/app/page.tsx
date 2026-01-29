'use client'

import { motion, Variants } from 'framer-motion';
import FallAlert from '../../components/FallAlert';
import HeroSceneWrapper from '../../components/HeroSceneWrapper';
import DashboardPreview from '../../components/DashboardPreview';
import Connectivity from '../../components/Connectivity';
import FAQ from '../../components/FAQ';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

// --- Animation Config ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    }
  }
};

const fadeInUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      
      {/* --- SECTION 1: HERO SPLIT-SCREEN --- */}
      {/* 1. Removed 'pt-20'. Added 'min-h-[90vh]' to ensure it fits well on mobile screens */}
      <section className="relative min-h-[90vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT COLUMN: 3D Sphere */}
        {/* Changed 'h-[35vh]' to 'h-[45vh]' to give it more breathing room */}
        {/* Added 'overflow-visible' so the glow isn't cut off */}
        <div className="h-[45vh] lg:h-screen w-full relative z-0 lg:order-1 flex items-center justify-center overflow-visible cursor-move active:cursor-grabbing">
          {/* Removed 'scale-110' which was making it too big */}
          <div className="w-full h-full transform origin-center">
             <HeroSceneWrapper />
          </div>
        </div>

        {/* RIGHT COLUMN: Text & Content */}
        {/* 3. Reduced 'pb-20' and padding. Added '-mt-8' on mobile to pull text closer to sphere. */}
        <div className="relative z-10 px-6 lg:px-16 flex flex-col justify-center lg:order-2 pb-10 lg:pb-0 -mt-8 lg:mt-0">
          
          <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
            Eau<span className="text-cyan-400">Sûre</span>
          </h1>
          <p className="text-lg lg:text-xl text-cyan-200/90 max-w-lg font-light mb-8 lg:mb-12">
            L'intelligence artificielle au service de l'eau potable en milieux confinés.
          </p>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-6 border-l-2 border-cyan-500/30 pl-6"
          >
            <motion.div variants={fadeInUp} className="group">
              <h3 className="text-cyan-400 font-mono text-xs lg:text-sm uppercase mb-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Surveillance IoT Autonome
              </h3>
              <p className="text-sm lg:text-base text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                Déploiement "Drop & Forget". 10 ans d'autonomie (Li-SOCl2).
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
               <h3 className="text-cyan-400 font-mono text-xs lg:text-sm uppercase mb-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Sécurité Active (Wake-on-Motion)
              </h3>
              <p className="text-sm lg:text-base text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                Détection de chute instantanée via accéléromètre embarqué.
              </p>
            </motion.div>

             <motion.div variants={fadeInUp}>
              <button className="mt-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-500 hover:to-cyan-700 text-white rounded-full font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Découvrir la Solution →
              </button>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* --- SECTION 2: BENTO GRID (Inchanged) --- */}
      <section className="relative z-20 bg-[#000810] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-light mb-8 lg:mb-12 text-cyan-50">Architecture Technique</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-cyan-400 font-mono text-sm mb-2">CORE_UNIT</h3>
              <p className="text-2xl font-semibold">ESP32-S3 + LoRaWAN</p>
              <p className="text-slate-400 mt-2 text-sm">Transmission longue portée.</p>
            </div>
            <div className="md:col-span-2 p-1 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="h-full w-full bg-[#0b121c] rounded-[22px] p-8 flex flex-col justify-center">
                 <FallAlert />
              </div>
            </div>
            <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-green-400 font-mono text-sm mb-2">POWER_MGMT</h3>
              <div className="flex items-center gap-4">
                <span className="text-4xl lg:text-5xl font-bold text-white">10 Ans</span>
                <span className="text-slate-400 text-sm lg:text-base">d'autonomie estimée<br/>(Deep Sleep)</span>
              </div>
            </div>
             <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-purple-400 font-mono text-sm mb-2">ANALYSIS</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>pH / TDS</span> <span>Actifs</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Anti-Fouling</span> <span>Auto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CONNECTIVITY FLOW --- */}
      <section className="relative z-20 bg-[#000810] py-12 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white">De la source à l'écran</h2>
            <p className="text-slate-400 mt-2">Architecture réseau décentralisée et résiliente.</p>
          </div>
          <Connectivity />
        </div>
      </section>

      {/* --- SECTION 4: LIVE MONITORING PREVIEW --- */}
      <section className="relative z-20 bg-[#000810] py-24 px-6 overflow-hidden">
        {/* Un petit background gradient pour casser la monotonie du noir */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Contrôle Total. <span className="text-cyan-400">Temps Réel.</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Visualisez la qualité de l'eau instantanément. Recevez des notifications push en cas de détection de contaminant ou de mouvement suspect.
          </p>
          
          <DashboardPreview />
        </div>
      </section>
      {/* AJOUTER CECI APRES DashboardPreview */}

      {/* --- SECTION 5: FAQ --- */}
      <section className="relative z-20 bg-[#000810] border-t border-slate-900">
        <FAQ />
      </section>

      {/* --- SECTION 6: CONTACT --- */}
      <section className="relative z-20">
        <Contact />
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </main>
  );
}