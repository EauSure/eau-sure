import { Radio, Cloud, Smartphone, Server } from 'lucide-react'; // Assure-toi d'avoir lucide-react installé

export default function Connectivity() {
  const steps = [
    { icon: Radio, title: "LoRaWAN", desc: "Transmission longue portée (jusqu'à 15km) depuis le puits." },
    { icon: Server, title: "Gateway DIY", desc: "Réception locale et transfert sécurisé via WiFi/4G." },
    { icon: Cloud, title: "Cloud Engine", desc: "Analyse IA des signatures de chute et stockage." },
    { icon: Smartphone, title: "App Mobile", desc: "Alertes instantanées et historique complet." },
  ];

  return (
    <div className="w-full py-24 relative">
      {/* Ligne de connexion derrière */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-900 to-transparent hidden md:block" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            
            {/* Cercle Icone */}
            <div className="w-16 h-16 rounded-full bg-[#0b121c] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-500 relative">
              <step.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              {/* Petit point de connexion */}
              <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-slate-800 hidden md:block group-last:hidden" />
            </div>

            <h4 className="text-white font-bold mb-2">{step.title}</h4>
            <p className="text-slate-400 text-sm px-4">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}