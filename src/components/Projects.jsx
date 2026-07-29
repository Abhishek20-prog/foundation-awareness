import React, { useEffect, useRef } from "react";
import { Utensils, BookOpen, Heart, Smile, Leaf, Award, ArrowUpRight } from "lucide-react";
import { projects } from "../data/ngoData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      className="relative py-24 sm:py-32 px-6 bg-[#070a13] border-t border-white/5 overflow-hidden"
    >
      {/* Background radial overlay */}
      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full glow-orb-blue opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Core Welfare Initiatives
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our Flagship Projects
          </h2>
          <p className="text-slate-400 font-medium text-base leading-relaxed">
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
                className="group relative h-[360px] rounded-3xl overflow-hidden glass-panel-card cursor-pointer border border-white/5 flex flex-col justify-between p-8"
              >
                {/* Decorative glowing gradient inside card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top Part: Icon & Category */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <IconComponent className={`w-5 h-5 ${project.textCol}`} />
                  </div>
                  <div className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest bg-white/2 px-2.5 py-1 rounded-full border border-white/5">
                    NGO FLAGSHIP
                  </div>
                </div>

                {/* Middle Part: Heading & Basic text */}
                <div className="relative z-10 text-left my-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h3>
                  <p className="text-slate-300 font-semibold text-xs tracking-wider uppercase mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Part: Short Stat Tag */}
                <div className="relative z-10 flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Key Impact Indicator
                  </span>
                  <span className={`text-xs font-extrabold ${project.textCol}`}>
                    Verified Impact
                  </span>
                </div>

                {/* Sliding details panel on hover (Stripe/Linear UX style) */}
                <div className="project-card-details absolute inset-x-0 bottom-0 bg-slate-950 border-t border-emerald-500/20 p-8 flex flex-col gap-4 text-left z-20">
                  <div className="flex items-center gap-2">
                    <IconComponent className={`w-5 h-5 ${project.textCol}`} />
                    <h4 className="text-base font-bold text-white">{project.title} Details</h4>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
                      Objective
                    </span>
                    <p className="text-xs font-semibold text-slate-300 leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
                      Measured Impact
                    </span>
                    <p className="text-xs font-extrabold text-emerald-400">
                      {project.impact}
                    </p>
                  </div>
                  
                  <span className="text-[10px] font-bold text-slate-500 self-end mt-2 uppercase tracking-widest cursor-pointer group-hover:text-emerald-400">
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
