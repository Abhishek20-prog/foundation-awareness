import React from "react";
import { HeartHandshake, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { contactDetails } from "../data/ngoData";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

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
    <footer className={`pt-16 pb-8 px-6 text-left relative z-20 transition-colors duration-500 ${
      isDark ? "bg-[#05070d] border-t border-white/5" : "bg-slate-900 border-t border-slate-800 text-slate-100"
    }`}>
      
      {/* Decorative Top Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-emerald-500/25 via-blue-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        
        {/* Col 1: About Brand */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleScrollTo("home"); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <HeartHandshake className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base tracking-wider leading-none">
                InAmigos
              </span>
              <span className="text-white/40 font-semibold text-[8px] tracking-widest uppercase">
                Foundation
              </span>
            </div>
          </a>
          
          <p className="text-slate-400 font-medium text-xs leading-relaxed max-w-sm">
            InAmigos Foundation is a Section 8 registered non-profit organization promoting community empowerment, animal protection, local reforestation, and virtual/remote skill internships across India.
          </p>

          {/* Certificates Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-[8px] font-extrabold text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider">
              80G Certified
            </span>
            <span className="text-[8px] font-extrabold text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider">
              12A Registered
            </span>
            <span className="text-[8px] font-extrabold text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider">
              CSR-1 Compliant
            </span>
          </div>
        </div>

        {/* Col 2: Flagship Projects */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4">
            Flagship Projects
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }} className="hover:text-emerald-400 transition-colors">
                Project SEVA
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }} className="hover:text-emerald-400 transition-colors">
                Project Bachpanshala
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }} className="hover:text-emerald-400 transition-colors">
                Project JEEV
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }} className="hover:text-emerald-400 transition-colors">
                Project UDAAN
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }} className="hover:text-emerald-400 transition-colors">
                Project PRAKRITI
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }} className="hover:text-emerald-400 transition-colors">
                Project VIKAS
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4">
            Quick Nav
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo("home"); }} className="hover:text-emerald-400 transition-colors">
                Home Section
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo("about"); }} className="hover:text-emerald-400 transition-colors">
                About NGO
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }} className="hover:text-emerald-400 transition-colors">
                Flagship Projects
              </a>
            </li>
            <li>
              <a href="#impact" onClick={(e) => { e.preventDefault(); handleScrollTo("impact"); }} className="hover:text-emerald-400 transition-colors">
                Impact Statistics
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); handleScrollTo("gallery"); }} className="hover:text-emerald-400 transition-colors">
                Activity Gallery
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo("contact"); }} className="hover:text-emerald-400 transition-colors">
                Get Involved / FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Address / Info */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-2">
            Registered Address
          </h4>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              {contactDetails.address}
            </p>
          </div>
          
          <div className="flex flex-col gap-2 border-t border-white/5 pt-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-slate-300">{contactDetails.phone}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-300">{contactDetails.email}</span>
                <span className="text-[10px] text-slate-500 font-semibold">{contactDetails.altEmail}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Row bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright & Hashtags */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            &copy; {new Date().getFullYear()} InAmigos Foundation. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {contactDetails.hashtags.map((tag) => (
              <span key={tag} className="text-[9px] font-extrabold text-slate-400 hover:text-emerald-400 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center gap-3">
          <a
            href={contactDetails.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all duration-300"
            aria-label="Facebook Profile Link"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href={contactDetails.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all duration-300"
            aria-label="Instagram Profile Link"
          >
            <svg className="w-4.5 h-4.5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href={contactDetails.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all duration-300"
            aria-label="LinkedIn Company Link"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href={contactDetails.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all duration-300"
            aria-label="YouTube Channel Link"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.098-1.854-.5-9.399-.5-9.399-.5s-7.545 0-9.399.5c-1.025.272-1.827 1.076-2.1 2.098-.5 1.857-.5 5.737-.5 5.737s0 3.88.5 5.738c.273 1.022 1.075 1.826 2.1 2.098 1.854.5 9.399.5 9.399.5s7.545 0 9.399-.5c1.025-.272 1.827-1.076 2.099-2.098.5-1.857.5-5.738.5-5.738s0-3.88-.5-5.737zm-14.498 9.337v-7l6.5 3.5-6.5 3z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
