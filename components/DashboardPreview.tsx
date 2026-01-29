'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Tilt from 'react-parallax-tilt';

const data = [
  { time: '00:00', ph: 7.2 }, { time: '04:00', ph: 7.1 },
  { time: '08:00', ph: 7.3 }, { time: '12:00', ph: 7.4 },
  { time: '16:00', ph: 7.2 }, { time: '20:00', ph: 7.1 },
  { time: '23:59', ph: 7.2 },
];

export default function DashboardPreview() {
  return (
    <div className="w-full flex justify-center py-12">
      <Tilt 
        tiltMaxAngleX={8} 
        tiltMaxAngleY={8} 
        perspective={1000} 
        glareEnable={true} 
        glareMaxOpacity={0.15} // Slightly increased visibility
        glareColor="#22d3ee"
        glarePosition="all"
        scale={1.02}
        // --- CRITICAL FIXES START HERE ---
        // 1. Force the Glare layer itself to have 24px corners (equals rounded-3xl)
        glareBorderRadius="24px"
        // 2. We apply the clipping to the TILT component (the wrapper), not just the inner div.
        className="w-full max-w-4xl rounded-3xl overflow-hidden"
        style={{ borderRadius: '24px' }} // Inline style ensures the 3D context respects the curve
        // --- CRITICAL FIXES END HERE ---
      >
        <div 
          // Removed 'rounded-3xl' from here because the parent Tilt handles it now
          className="bg-[#0b121c]/80 backdrop-blur-xl border border-slate-800 p-6 lg:p-10 shadow-2xl relative group select-none cursor-grab active:cursor-grabbing h-full"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            transform: 'translateZ(0)',
          }} 
        >
          
          {/* Background Glow */}
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Header */}
          <div className="flex justify-between items-center mb-8 relative z-10 pointer-events-none">
            <div className="text-left">
              <h3 className="text-slate-400 text-sm font-mono uppercase tracking-wider">Puits Secteur Nord</h3>
              <p className="text-3xl text-white font-bold mt-1">pH 7.2 <span className="text-green-400 text-sm font-normal bg-green-900/30 px-2 py-1 rounded-full ml-2">Stable</span></p>
            </div>
            <div className="text-right">
              <p className="text-slate-500 text-xs">Dernière Sync</p>
              <p className="text-cyan-400 font-mono">Just now</p>
            </div>
          </div>

          {/* Chart Container */}
          <div className="h-[300px] w-full relative z-10 pointer-events-none">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPh" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide domain={[6, 8]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="ph" 
                  stroke="#22d3ee" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPh)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Footer Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800/50 pointer-events-none">
             <div className="text-center">
                <p className="text-slate-500 text-xs uppercase">Batterie</p>
                <p className="text-white font-mono">98%</p>
             </div>
             <div className="text-center border-l border-slate-800/50">
                <p className="text-slate-500 text-xs uppercase">TDS</p>
                <p className="text-white font-mono">240 ppm</p>
             </div>
             <div className="text-center border-l border-slate-800/50">
                <p className="text-slate-500 text-xs uppercase">Signal</p>
                <p className="text-white font-mono">-92 dBm</p>
             </div>
          </div>

        </div>
      </Tilt>
    </div>
  );
}