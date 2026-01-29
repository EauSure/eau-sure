'use client'

import dynamic from 'next/dynamic'

// Move the dynamic import logic HERE
const HeroSphere = dynamic(() => import('./HeroSphere'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full flex items-center justify-center text-cyan-500">
      Loading Sphere...
    </div>
  )
})

export default function HeroSceneWrapper() {
  return <HeroSphere />
}