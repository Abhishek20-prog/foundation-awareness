import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Credentials from "./components/Credentials";
import About from "./components/About";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen antialiased selection:bg-emerald-500/30 selection:text-white transition-colors duration-500 ${
      isDark ? "bg-[#070a13] text-slate-300" : "bg-slate-50 text-slate-700"
    }`}>
      {/* Navigation Menu */}
      <Navbar />

      {/* Hero Entrance Panel */}
      <Hero />

      {/* Official NGO Registration Badges Loop */}
      <Credentials />

      {/* Main Core Sections */}
      <main>
        {/* Mission / Vision / History */}
        <About />

        {/* Six Flagship Project Cards */}
        <Projects />

        {/* Scaled Count statistics dashboard */}
        <Impact />

        {/* Bento Activity Grid with Lightbox popup */}
        <Gallery />

        {/* Volunteer, Donate, FAQ, and Contact Forms */}
        <JoinUs />
      </main>

      {/* Comprehensive Footer and Links */}
      <Footer />

      {/* Scroll Spy Indicator */}
      <ScrollToTop />
    </div>
  );
}
