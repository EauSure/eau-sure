'use client'

import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // --- NEW: Validation State ---
  const [emailError, setEmailError] = useState<string>('');

  // --- NEW: Regex Validation Function ---
  const validateEmail = (email: string) => {
    // Requires: chars + @ + chars + . + extension (2-6 chars)
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  // --- NEW: Check when user leaves the field ---
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (email && !validateEmail(email)) {
      setEmailError("Veuillez entrer une adresse email valide (ex: contact@domaine.com)");
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // --- NEW: Block submission if email is invalid ---
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    if (!validateEmail(email)) {
      setEmailError("Adresse email invalide. Impossible d'envoyer.");
      return; // STOP execution here
    }

    setIsSubmitting(true);
    setResult(null);
    setEmailError(''); // Clear previous errors

    // Add custom subject for your email inbox
    formData.append("subject", "Nouvelle demande - Site EauSûre"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult("Transmission réussie. Accusé de réception confirmé.");
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setStatus('error');
        setResult(data.message || "Échec de la transmission. Réessayez.");
      }
    } catch (error) {
      setStatus('error');
      setResult("Erreur de connexion au serveur relais.");
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds to allow new messages
      setTimeout(() => {
        if(status === 'success') setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="w-full py-24 px-6 relative overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000810] to-[#020c17] z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
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
              <span>+216 55 130 119</span>
            </div>
          </div>
        </div>

        {/* Right Column: The "Terminal" Form */}
        <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Loading/Success Overlay */}
            {status === 'success' && (
                <div className="absolute inset-0 z-20 bg-slate-900/90 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                    <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                    <h3 className="text-white text-xl font-bold">Transmission Reçue</h3>
                    <p className="text-slate-400 mt-2">{result}</p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                    >
                        Envoyer un autre message
                    </button>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            {/* SECURE KEY INJECTION */}
            <input 
              type="hidden" 
              name="access_key" 
              value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} 
            />
            
            {/* Honeypot to prevent spam bots (Hidden) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="group">
              <label className="block text-xs uppercase text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">Identité</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Nom complet ou Entreprise" 
                className="w-full bg-[#0b121c] border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
              />
            </div>

            {/* --- UPDATED EMAIL INPUT --- */}
            <div className="group">
              <label className="block text-xs uppercase text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">Email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="votre@email.com" 
                // Checks validity when clicking out of the box
                onBlur={handleEmailBlur}
                // Clears error when typing
                onChange={() => setEmailError('')}
                // Conditional styling based on error state
                className={`w-full bg-[#0b121c] border rounded-xl p-4 text-white focus:outline-none transition-colors placeholder:text-slate-600
                  ${emailError 
                    ? 'border-red-500 focus:border-red-500' // RED if error
                    : 'border-slate-700 focus:border-cyan-500' // NORMAL
                  }`}
              />
              {/* Error Message Text */}
              {emailError && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                   <AlertCircle className="w-3 h-3" /> {emailError}
                </p>
              )}
            </div>

            <div className="group">
              <label className="block text-xs uppercase text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">Message</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Détails de votre demande..." 
                className="w-full bg-[#0b121c] border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600 resize-none"
              />
            </div>

            {/* Global Error Message Display */}
            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/50">
                    <AlertCircle className="w-4 h-4" />
                    <span>{result}</span>
                </div>
            )}

            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-900/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Validation...
                  </>
              ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Initialiser la communication
                  </>
              )}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}