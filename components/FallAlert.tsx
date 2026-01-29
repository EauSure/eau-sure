'use client'
import { motion } from 'framer-motion'

export default function FallAlert() {
  return (
    <div className="bg-red-950/30 border border-red-500/50 p-6 rounded-xl">
      <h3 className="text-red-400 font-mono text-sm mb-2">CRITICAL ALERT: FALL DETECTED</h3>
      <div className="flex items-end gap-1 h-16">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 bg-red-500"
            animate={{ 
              height: i === 15 ? [10, 60, 10] : [10, 15, 10] // The "Spike"
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              delay: i * 0.05 
            }}
          />
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-2">
        MPU6050 Wake-on-Motion triggered. Instant LoRaWAN transmission.
      </p>
    </div>
  )
}