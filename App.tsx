import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import GitHubActivity from "./components/GitHubActivity";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import FloatingResumeButton from "./components/FloatingResumeButton";

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen selection:bg-[#E59173] selection:text-white overflow-hidden">
      {/* ========= GLOBAL BACKGROUND (Hero-style) ========= */}
          <div className="fixed top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E59173]/25 blur-[160px] rounded-full -z-50" />
          <div className="fixed bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full -z-50" />
          <div className="fixed inset-0 bg-white/[0.03] backdrop-blur-[2px] -z-50" />
      {/* ========= UI ========= */}
      <Cursor />
      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <GitHubActivity />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />

      {/* ========= FLOATING BUTTONS ========= */}
      <FloatingResumeButton />

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-8 p-3 rounded-full bg-[#E59173] text-white shadow-xl transition-all duration-300 z-50
          hover:scale-110 active:scale-95 ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default App;