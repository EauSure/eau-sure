'use client'

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FAQ from '../../../components/FAQ'; // On réutilise ta FAQ ici
import { FileCode, Server, Shield, Cpu } from 'lucide-react';

export default function Documentation() {
  return (
    <main className="min-h-screen bg-[#000810] text-slate-300">
      <Navbar />
      
      <div className="pt-32 pb-12 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* SIDEBAR NAVIGATION (Sticky) */}
        <aside className="hidden lg:block col-span-1">
          <div className="sticky top-32 space-y-8 border-r border-slate-800 pr-6">
            <div>
              <h3 className="text-white font-bold mb-4">Introduction</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#start" className="hover:text-cyan-400 block">Quick Start</a></li>
                <li><a href="#architecture" className="hover:text-cyan-400 block">Architecture</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Hardware</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#esp32" className="hover:text-cyan-400 block">ESP32 Config</a></li>
                <li><a href="#sensors" className="hover:text-cyan-400 block">Capteurs</a></li>
                <li><a href="#lora" className="hover:text-cyan-400 block">LoRaWAN</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq-section" className="hover:text-cyan-400 block">FAQ</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="col-span-1 lg:col-span-3 space-y-16">
          
          {/* Section: Header */}
          <div id="start">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Documentation Technique</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Bienvenue dans la documentation officielle d'EauSûre. Vous trouverez ici toutes les références techniques pour déployer, configurer et maintenir les modules de surveillance.
            </p>
          </div>

          <div className="h-px w-full bg-slate-800" />

          {/* Section: API Example */}
          <section id="architecture" className="space-y-6">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <Server className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Endpoints API</h2>
            </div>
            <p>Les données sont transmises via MQTT ou HTTPs vers notre cloud sécurisé.</p>
            
            {/* Code Block Style */}
            <div className="bg-[#0b121c] border border-slate-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                <span className="text-green-400 font-bold">GET</span>
                <span className="text-slate-400">/api/v1/sensors/{'{id}'}/latest</span>
              </div>
              <pre className="text-slate-300">
{`{
  "sensor_id": "ES-X99",
  "timestamp": "2026-01-29T10:00:00Z",
  "data": {
    "ph": 7.2,
    "tds": 240,
    "battery": 98,
    "signal": -92
  }
}`}
              </pre>
            </div>
          </section>

          {/* Section: Hardware Specs */}
          <section id="esp32" className="space-y-6">
             <div className="flex items-center gap-3 text-purple-400 mb-4">
              <Cpu className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Spécifications Hardware</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                <h3 className="text-white font-bold mb-2">Microcontrôleur</h3>
                <p className="text-sm">ESP32-S3 Dual Core 240MHz</p>
                <p className="text-sm text-slate-500 mt-1">Ultra-low power coprocessor activé.</p>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                <h3 className="text-white font-bold mb-2">Module LoRa</h3>
                <p className="text-sm">SX1262 (868MHz / 915MHz)</p>
                <p className="text-sm text-slate-500 mt-1">Portée max: 15km (Line of Sight).</p>
              </div>
            </div>
          </section>

          {/* Section: FAQ Integration */}
          <section id="faq-section">
             <div className="flex items-center gap-3 text-green-400 mb-4">
              <Shield className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Questions Fréquentes</h2>
            </div>
            {/* On réutilise ton composant FAQ ici */}
            <div className="-ml-6">
              <FAQ />
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}