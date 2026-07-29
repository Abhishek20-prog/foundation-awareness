import React from "react";
import { ShieldCheck, Info } from "lucide-react";
import { certifications } from "../data/ngoData";

export default function Credentials() {
  // Double the certifications to achieve a smooth loop
  const tickerItems = [...certifications, ...certifications, ...certifications];

  return (
    <section className="relative py-8 bg-[#090d17] border-y border-white/5 overflow-hidden z-20">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070a13] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070a13] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-center gap-2">
        <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Verified Non-Profit Certifications
        </span>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="flex overflow-hidden">
        <div className="animate-ticker-left flex items-center gap-8 py-2">
          {tickerItems.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-emerald-500/20 backdrop-blur-sm transition-all duration-300 group cursor-help relative"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all duration-300">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-wide flex items-center gap-1">
                  {cert.name}
                  <Info className="w-3 h-3 text-slate-500 group-hover:text-slate-400 transition-colors" />
                </span>
                <span className="text-[10px] text-slate-500 font-semibold group-hover:text-slate-400 transition-colors max-w-[200px] truncate">
                  {cert.desc}
                </span>
              </div>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 rounded-xl bg-[#0b0f19] border border-white/10 shadow-2xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none z-30">
                <p className="text-[11px] leading-relaxed text-slate-300 font-medium">
                  {cert.desc}
                </p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-4 border-transparent border-t-[#0b0f19]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
