import React, { useEffect, useRef } from "react";
import { Utensils, Leaf, Award, Heart, Smile, CheckCircle } from "lucide-react";
import { statistics } from "../data/ngoData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  "stat-meals": Utensils,
  "stat-saplings": Leaf,
  "stat-interns": Award,
  "stat-animals": Heart,
  "stat-women": Smile
};

const textCols = {
  "stat-meals": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "stat-saplings": "text-green-400 bg-green-500/10 border-green-500/20",
  "stat-interns": "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  "stat-animals": "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "stat-women": "text-purple-400 bg-purple-500/10 border-purple-500/20"
};

function CounterItem({ value, suffix, id }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    const obj = { val: 0 };
    
    const anim = gsap.to(obj, {
      val: value,
      duration: 2.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        if (el) {
          el.textContent = Math.floor(obj.val).toLocaleString("en-US");
        }
      }
    });

    return () => {
      anim.kill();
    };
  }, [value]);

  return (
    <span ref={numRef} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
      0
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef(null);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 bg-[#090d16] border-t border-white/5 overflow-hidden"
    >
      {/* Background decoration orbs */}
      <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full glow-orb-blue opacity-40 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[40vw] h-[40vw] rounded-full glow-orb-emerald opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 text-left">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Impact In Numbers
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Measuring the Change We Bring to Communities
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-400 font-medium text-base leading-relaxed">
              Every single metric listed here represents genuine grassroots initiatives coordinated by InAmigos Foundation. From meals shared during hardships to ecological plantations and youth empowerment programs.
            </p>
          </div>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {statistics.map((stat) => {
            const Icon = iconMap[stat.id] || Award;
            const styleClasses = textCols[stat.id] || "text-emerald-400 bg-emerald-500/10";
            return (
              <div
                key={stat.id}
                className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md hover:border-emerald-500/20 hover:bg-slate-900/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left justify-between min-h-[220px]"
              >
                {/* Icon Container */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${styleClasses}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Counter */}
                <div className="my-4">
                  <div className="flex items-baseline justify-center sm:justify-start gap-0.5">
                    <CounterItem value={stat.value} suffix={stat.suffix} id={stat.id} />
                    <span className="text-3xl font-extrabold text-emerald-400">{stat.suffix}</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-white mt-1 uppercase tracking-wider">
                    {stat.label}
                  </h3>
                </div>

                {/* Micro Description */}
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certificates assurance line */}
        <div className="mt-16 p-6 rounded-2xl bg-white/2 border border-white/5 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-left">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Audited & CSR-1 Compliant</span>
              <span className="text-[10px] text-slate-500 font-semibold leading-none">Transparency audits guarantee every rupee is spent directly on social projects.</span>
            </div>
          </div>
          <span className="text-[10px] font-extrabold text-emerald-400 tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full uppercase border border-emerald-500/20">
            Section 8 Non-Profit
          </span>
        </div>

      </div>
    </section>
  );
}
