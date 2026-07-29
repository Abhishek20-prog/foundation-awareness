import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { contactDetails } from "../data/ngoData";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 72, behavior: "smooth" });
  };

  /* Nature Theme Footer — Deep Forest & Night Canopy */
  const footerBg  = isDark ? "#0A121E" : "#11221B";
  const borderClr = "rgba(21,128,61,0.2)";
  const linkColor = "#A3B8AC";
  const linkHover = "var(--grass)";

  return (
    <footer
      className="pt-14 pb-8 px-6 text-left relative"
      style={{ backgroundColor: footerBg, borderTop: `1px solid ${borderClr}` }}
    >
      {/* Grass green top accent rule */}
      <div
        className="absolute top-0 left-0 h-[2px] w-48"
        style={{ background: "linear-gradient(to right, var(--grass), transparent)" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

        {/* Col 1 — Brand */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleScrollTo("home"); }}
            className="flex items-center gap-3 focus:outline-none group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border"
              style={{ borderColor: "rgba(21,128,61,0.3)" }}>
              <img
                src="https://www.inamigosfoundation.org.in/public/storage/settings/1744214680.jpg"
                alt="InAmigos Foundation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-base tracking-wide"
                style={{ fontFamily: "'Lora', Georgia, serif", color: "#F4F8F4" }}
              >
                InAmigos
              </span>
              <span
                className="text-[8px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(244,248,244,0.5)" }}
              >
                Foundation
              </span>
            </div>
          </a>

          <p
            className="leading-relaxed max-w-xs"
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", color: "#A3B8AC" }}
          >
            InAmigos Foundation is a Section 8 registered non-profit promoting community
            empowerment, animal protection, reforestation, and skill internships across India.
          </p>

          {/* Cert badges */}
          <div className="flex flex-wrap gap-2 mt-1">
            {["80G Certified", "12A Registered", "CSR-1 Compliant"].map((cert) => (
              <span
                key={cert}
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#8FA89B",
                  backgroundColor: "rgba(244,248,244,0.04)",
                  border: "1px solid rgba(21,128,61,0.2)",
                  padding: "2px 8px",
                  borderRadius: "2px"
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Col 2 — Flagship Projects */}
        <div className="lg:col-span-2">
          <h4
            className="mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.625rem", fontWeight: 700, color: "#F4F8F4" }}
          >
            Initiatives
          </h4>
          <ul className="flex flex-col gap-2.5">
            {["Project SEVA", "Project Bachpanshala", "Project JEEV", "Project UDAAN", "Project PRAKRITI", "Project VIKAS"].map((p) => (
              <li key={p}>
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }}
                  className="transition-colors duration-200"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", color: linkColor }}
                  onMouseEnter={(e) => e.target.style.color = "#4ADE80"}
                  onMouseLeave={(e) => e.target.style.color = linkColor}
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Quick Nav */}
        <div className="lg:col-span-2">
          <h4
            className="mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.625rem", fontWeight: 700, color: "#F4F8F4" }}
          >
            Navigate
          </h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Impact", id: "impact" },
              { label: "Gallery", id: "gallery" },
              { label: "Get Involved", id: "contact" }
            ].map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); handleScrollTo(id); }}
                  className="transition-colors duration-200"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", color: linkColor }}
                  onMouseEnter={(e) => e.target.style.color = "#4ADE80"}
                  onMouseLeave={(e) => e.target.style.color = linkColor}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Address / Contact */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h4
            className="mb-1 uppercase tracking-widest"
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.625rem", fontWeight: 700, color: "#F4F8F4" }}
          >
            Registered Office
          </h4>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--grass)" }} />
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", color: linkColor, lineHeight: 1.65 }}>
              {contactDetails.address}
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-3" style={{ borderTop: `1px solid ${borderClr}` }}>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--grass)" }} />
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "#D1E3D8" }}>
                {contactDetails.phone}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--grass)" }} />
              <div className="flex flex-col">
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "#D1E3D8" }}>
                  {contactDetails.email}
                </span>
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.7rem", color: "#8FA89B" }}>
                  {contactDetails.altEmail}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        className="max-w-7xl mx-auto pt-7 flex flex-col md:flex-row items-center justify-between gap-5"
        style={{ borderTop: `1px solid ${borderClr}` }}
      >
        {/* Copyright + hashtags */}
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.06em", color: "#607C6E" }}>
            © {new Date().getFullYear()} InAmigos Foundation. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            {contactDetails.hashtags.map((tag) => (
              <span
                key={tag}
                style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.06em", color: "#607C6E" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2.5">
          {/* Facebook */}
          <a
            href={contactDetails.socials.facebook}
            target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-sm transition-colors duration-200"
            style={{ border: `1px solid ${borderClr}`, color: linkColor }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#4ADE80"; e.currentTarget.style.borderColor = "rgba(74,222,128,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; e.currentTarget.style.borderColor = borderClr; }}
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href={contactDetails.socials.instagram}
            target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-sm transition-colors duration-200"
            style={{ border: `1px solid ${borderClr}`, color: linkColor }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#4ADE80"; e.currentTarget.style.borderColor = "rgba(74,222,128,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; e.currentTarget.style.borderColor = borderClr; }}
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href={contactDetails.socials.linkedin}
            target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-sm transition-colors duration-200"
            style={{ border: `1px solid ${borderClr}`, color: linkColor }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#4ADE80"; e.currentTarget.style.borderColor = "rgba(74,222,128,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; e.currentTarget.style.borderColor = borderClr; }}
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href={contactDetails.socials.youtube}
            target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-sm transition-colors duration-200"
            style={{ border: `1px solid ${borderClr}`, color: linkColor }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#4ADE80"; e.currentTarget.style.borderColor = "rgba(74,222,128,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; e.currentTarget.style.borderColor = borderClr; }}
            aria-label="YouTube"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.098-1.854-.5-9.399-.5-9.399-.5s-7.545 0-9.399.5c-1.025.272-1.827 1.076-2.1 2.098-.5 1.857-.5 5.737-.5 5.737s0 3.88.5 5.738c.273 1.022 1.075 1.826 2.1 2.098 1.854.5 9.399.5 9.399.5s7.545 0 9.399-.5c1.025-.272 1.827-1.076 2.099-2.098.5-1.857.5-5.738.5-5.738s0-3.88-.5-5.737zm-14.498 9.337v-7l6.5 3.5-6.5 3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
