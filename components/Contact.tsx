'use client'

export default function Contact() {
  return (
    <div className="w-full py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000810] to-[#020c17] z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Texte de gauche */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Intéressé par <span className="text-cyan-400">la solution ?</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Nous recherchons des partenaires industriels et des investisseurs pour passer à l'échelle supérieure.
            <br/><br/>
            Contactez l'équipe technique pour une démo ou pour discuter de l'acquisition de la propriété intellectuelle.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">@</div>
              <span>contact@eausure.io</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">#</div>
              <span>+216 XX XXX XXX</span>
            </div>
          </div>
        </div>

        {/* Formulaire Style "Terminal" */}
        <form className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="space-y-6">
            
            <div className="group">
              <label className="block text-xs uppercase text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">Identité</label>
              <input 
                type="text" 
                placeholder="Nom complet" 
                className="w-full bg-[#0b121c] border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
              />
            </div>

            <div className="group">
              <label className="block text-xs uppercase text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">Email</label>
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full bg-[#0b121c] border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
              />
            </div>

            <div className="group">
              <label className="block text-xs uppercase text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">Message</label>
              <textarea 
                rows={4}
                placeholder="Détails de votre demande..." 
                className="w-full bg-[#0b121c] border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600 resize-none"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-900/20 active:scale-95">
              Initialiser la communication
            </button>

          </div>
        </form>

      </div>
    </div>
  );
}