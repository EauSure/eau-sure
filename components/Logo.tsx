import Image from 'next/image';

export default function Logo({ className = "w-100 h-100" }: { className?: string }) {
  return (
    // Le div parent contrôle la taille (w-8 h-8) via la prop className
    <div className={`${className} relative`}>
      <Image 
        src="/logo.webp" // Next.js va chercher directement dans le dossier public
        alt="EauSûre Logo"
        fill // L'image remplit le div parent
        className="object-contain" // Garde les proportions sans déformer
        priority // Charge le logo en priorité (important pour le LCP)
      />
    </div>
  );
}