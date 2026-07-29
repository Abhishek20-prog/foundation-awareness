import React, { useEffect, useRef } from "react";
import { ArrowRight, HeartHandshake, Utensils, Leaf, Award, Heart, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const dashboardRef = useRef(null);

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
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden mesh-gradient-bg"
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full glow-orb-emerald -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full glow-orb-blue -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Grid overlay for tech look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center z-10">
        
        {/* Subtle Announcement Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:border-emerald-500/30 transition-all duration-300">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-white/80 text-[10px] font-extrabold tracking-widest uppercase">
            Section 8 Registered Non-Profit
          </span>
        </div>

        {/* Catchy Headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
        >
          Empathy in <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500">Action</span>.
          <br />
          Impact in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400">Communities</span>.
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-base sm:text-lg md:text-xl text-slate-400 font-medium max-w-2xl mb-10 leading-relaxed"
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
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 focus:outline-none"
          >
            Explore Flagship Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScrollTo("contact")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-sm font-semibold text-white backdrop-blur-md hover:scale-105 transition-all duration-300 focus:outline-none"
          >
            Join as Volunteer
            <HeartHandshake className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Mini Dashboard of Key Metrics (Inline Stats Showcase) */}
        <div
          ref={dashboardRef}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-slate-950/40 border border-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-2">
              <Utensils className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold text-white">50K+</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Meals Distributed</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
              <Leaf className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold text-white">20K+</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Trees Planted</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-2">
              <Award className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold text-white">30K+</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Interns Trained</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/2 col-span-2 md:col-span-1">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-2">
              <Heart className="w-4 h-4 text-rose-400" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold text-white">50+ Daily</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Animals Nourished</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient divider for section transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#070a13] to-transparent pointer-events-none" />
    </section>
  );
}
