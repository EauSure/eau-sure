import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#02060a] border-t border-slate-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          {/* Logo + Texte alignés */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <Logo className="w-16 h-12 text-cyan-500" />
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              Eau<span className="text-cyan-400">Sûre</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm ml-1">© 2026 EauSûre Project. All rights reserved.</p>
        </div>

        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-cyan-400 transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
          <a href="https://github.com/EauSure" className="hover:text-cyan-400 transition-colors">GitHub</a>
        </div>

      </div>
    </footer>
  );
}