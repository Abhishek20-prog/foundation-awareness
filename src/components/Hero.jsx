import React, { useEffect, useRef } from "react";
import { ArrowRight, HeartHandshake, Utensils, Leaf, Award, Heart, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const dashboardRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descRef.current, btnsRef.current, dashboardRef.current], {
        opacity: 0,
        y: 40
      });

      // Timeline for coordinated entrance
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2
      })
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        offset: "-=0.8"
      })
      .to(btnsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        offset: "-=0.7"
      })
      .to(dashboardRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        offset: "-=0.6"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden mesh-gradient-bg transition-colors duration-500 ${
        isDark ? "bg-[#070a13]" : "bg-slate-50"
      }`}
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full glow-orb-emerald -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full glow-orb-blue -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Grid overlay for tech look */}
      <div className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 pointer-events-none ${
        isDark 
          ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)]"
      }`} />

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center z-10">
        
        {/* Subtle Announcement Tag */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md mb-6 transition-all duration-300 ${
          isDark
            ? "bg-white/5 border border-white/10 hover:border-emerald-500/30 text-white/80"
            : "bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-800"
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-[10px] font-extrabold tracking-widest uppercase">
            Section 8 Registered Non-Profit
          </span>
        </div>

        {/* Catchy Headline */}
        <h1
          ref={titleRef}
          className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-[1.1] ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Empathy in <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-600">Action</span>.
          <br />
          Impact in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500">Communities</span>.
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className={`text-base sm:text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          We are dedicated to fostering community empowerment, animal welfare, women's self-reliance, and eco-sustainability across India.
        </p>

        {/* CTA Buttons */}
        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row gap-4 mb-20 justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-105 transition-all duration-300 focus:outline-none"
          >
            Explore Flagship Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScrollTo("contact")}
            className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold backdrop-blur-md hover:scale-105 transition-all duration-300 focus:outline-none ${
              isDark
                ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
                : "bg-white border border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800 shadow-md"
            }`}
          >
            Join as Volunteer
            <HeartHandshake className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Mini Dashboard of Key Metrics (Inline Stats Showcase) */}
        <div
          ref={dashboardRef}
          className={`w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl backdrop-blur-md transition-all duration-300 ${
            isDark
              ? "bg-slate-950/40 border border-white/5 shadow-2xl"
              : "bg-white/90 border border-slate-200/80 shadow-xl shadow-slate-200/60"
          }`}
        >
          <div className={`flex flex-col items-center p-4 rounded-2xl ${isDark ? "bg-white/2" : "bg-slate-50"}`}>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-2">
              <Utensils className="w-4 h-4 text-emerald-500" />
            </div>
            <span className={`text-xl sm:text-2xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>50K+</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Meals Distributed</span>
          </div>

          <div className={`flex flex-col items-center p-4 rounded-2xl ${isDark ? "bg-white/2" : "bg-slate-50"}`}>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
              <Leaf className="w-4 h-4 text-blue-500" />
            </div>
            <span className={`text-xl sm:text-2xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>20K+</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Trees Planted</span>
          </div>

          <div className={`flex flex-col items-center p-4 rounded-2xl ${isDark ? "bg-white/2" : "bg-slate-50"}`}>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-2">
              <Award className="w-4 h-4 text-indigo-500" />
            </div>
            <span className={`text-xl sm:text-2xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>30K+</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Interns Trained</span>
          </div>

          <div className={`flex flex-col items-center p-4 rounded-2xl col-span-2 md:col-span-1 ${isDark ? "bg-white/2" : "bg-slate-50"}`}>
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-2">
              <Heart className="w-4 h-4 text-rose-500" />
            </div>
            <span className={`text-xl sm:text-2xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>50+ Daily</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Animals Nourished</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient divider for section transition */}
      <div className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t pointer-events-none ${
        isDark ? "from-[#070a13] to-transparent" : "from-slate-50 to-transparent"
      }`} />
    </section>
  );
}
