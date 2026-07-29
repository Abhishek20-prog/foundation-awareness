import React, { useEffect, useRef } from "react";
import { Utensils, BookOpen, Heart, Smile, Leaf, Award, ArrowUpRight } from "lucide-react";
import { projects } from "../data/ngoData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Utensils: Utensils,
  BookOpen: BookOpen,
  Heart: Heart,
  Smile: Smile,
  Leaf: Leaf,
  Award: Award
};

export default function Projects() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate cards
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative py-24 sm:py-32 px-6 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#070a13] border-t border-white/5" : "bg-slate-50 border-t border-slate-200"
      }`}
    >
      {/* Background radial overlay */}
      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full glow-orb-blue opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Core Welfare Initiatives
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Our Flagship Projects
          </h2>
          <p className={`font-medium text-base leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            InAmigos Foundation operates six distinct projects aimed at delivering compassionate service, environmental preservation, animal rescue, and youth capacity building.
          </p>
        </div>

        {/* Projects Cards Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Award;
            return (
              <div
                key={project.id}
                className={`group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-8 transition-all duration-300 ${
                  isDark
                    ? "glass-panel-card border border-white/5"
                    : "bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-emerald-500/40"
                }`}
              >
                {/* Decorative glowing gradient inside card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top Part: Icon & Category */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                    isDark ? "bg-white/5 border border-white/10" : "bg-slate-100 border border-slate-200"
                  }`}>
                    <IconComponent className={`w-5 h-5 ${project.textCol}`} />
                  </div>
                  <div className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                    isDark ? "text-slate-400 bg-white/2 border-white/5" : "text-slate-600 bg-slate-100 border-slate-200"
                  }`}>
                    NGO FLAGSHIP
                  </div>
                </div>

                {/* Middle Part: Heading & Basic text */}
                <div className="relative z-10 text-left my-4">
                  <h3 className={`text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors flex items-center gap-2 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h3>
                  <p className={`font-semibold text-xs tracking-wider uppercase mb-3 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {project.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed font-medium line-clamp-3 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Bottom Part: Short Stat Tag */}
                <div className={`relative z-10 flex justify-between items-center pt-4 border-t ${
                  isDark ? "border-white/5" : "border-slate-100"
                }`}>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}>
                    Key Impact Indicator
                  </span>
                  <span className={`text-xs font-extrabold ${project.textCol}`}>
                    Verified Impact
                  </span>
                </div>

                {/* Sliding details panel on hover (Stripe/Linear UX style) */}
                <div className={`project-card-details absolute inset-x-0 bottom-0 border-t p-8 flex flex-col gap-4 text-left z-20 ${
                  isDark ? "bg-slate-950 border-emerald-500/20" : "bg-white border-emerald-500/30 shadow-2xl"
                }`}>
                  <div className="flex items-center gap-2">
                    <IconComponent className={`w-5 h-5 ${project.textCol}`} />
                    <h4 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{project.title} Details</h4>
                  </div>
                  
                  <div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider block mb-1 ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      Objective
                    </span>
                    <p className={`text-xs font-semibold leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}>
                      {project.objective}
                    </p>
                  </div>

                  <div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider block mb-1 ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      Measured Impact
                    </span>
                    <p className="text-xs font-extrabold text-emerald-500">
                      {project.impact}
                    </p>
                  </div>
                  
                  <span className="text-[10px] font-bold text-slate-400 self-end mt-2 uppercase tracking-widest cursor-pointer group-hover:text-emerald-500">
                    Hover out to close
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
