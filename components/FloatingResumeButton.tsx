import React from "react";
import { motion } from "framer-motion";

// IMPORTANT: adjust path if your structure is slightly different
import resumePdf from "../resume/resume.pdf";

const FloatingResumeButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Shubham_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-6 z-50"
    >
        
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0px rgba(229,145,115,0.4)",
            "0 0 28px rgba(229,145,115,0.85)",
            "0 0 0px rgba(229,145,115,0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-3 px-6 py-3 bg-[#E59173] text-white font-bold rounded-full rounded-full shadow-lg"
      >
        {/* Download Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>

        <span className="hidden sm:block">Resume</span>
      </motion.div>
    </motion.button>
  );
};

export default FloatingResumeButton;
