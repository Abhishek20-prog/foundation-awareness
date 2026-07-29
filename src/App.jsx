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
    <div
      className={`min-h-screen antialiased overflow-x-hidden transition-colors duration-500`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-body)",
        /* Selection in earthy tones */
        "--tw-prose-body": "var(--text-body)"
      }}
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero Entrance */}
      <Hero />

      {/* Credential Ticker */}
      <Credentials />

      {/* Main Content */}
      <main>
        <About />
        <Projects />
        <Impact />
        <Gallery />
        <JoinUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll-to-top */}
      <ScrollToTop />
    </div>
  );
}
