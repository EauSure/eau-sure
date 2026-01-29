'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const questions = [
  {
    q: "Quelle est la portée réelle du signal LoRaWAN ?",
    a: "En milieu rural ouvert, la portée peut atteindre 10 à 15 km. En milieu confiné (puits profonds), nous avons testé avec succès une transmission à 25m de profondeur grâce à une modulation SF12 adaptée."
  },
  {
    q: "Comment fonctionne le système Anti-Fouling ?",
    a: "L'appareil effectue des micro-vibrations ultrasoniques programmées et dispose d'un revêtement hydrophobe spécifique qui empêche l'accumulation d'algues sur les sondes pH et TDS."
  },
  {
    q: "Que se passe-t-il si la batterie est vide ?",
    a: "Le système envoie une alerte critique 'Low Battery' 3 mois avant l'épuisement estimé. La batterie Li-SOCl2 est conçue pour être remplacée facilement sans outillage complexe."
  },
  {
    q: "Le système est-il résistant aux inondations ?",
    a: "Oui, la Sphère est certifiée IP68. Elle est totalement hermétique et flotte, ce qui lui permet de s'adapter aux variations extrêmes du niveau de l'eau."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-light text-white mb-12 text-center">Questions Fréquentes</h2>
      
      <div className="space-y-4">
        {questions.map((item, i) => (
          <div key={i} className="border border-slate-800 rounded-2xl bg-slate-900/30 overflow-hidden">
            <button
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <span className={`font-medium transition-colors ${activeIndex === i ? 'text-cyan-400' : 'text-slate-300 group-hover:text-white'}`}>
                {item.q}
              </span>
              <ChevronDown 
                className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeIndex === i ? 'rotate-180 text-cyan-400' : ''}`} 
              />
            </button>
            
            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}