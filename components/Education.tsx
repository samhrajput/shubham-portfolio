import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_DATA } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // smooth premium easing
    },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-6xl font-extrabold text-white mb-4">
          Education
        </h2>
        <p className="text-slate-400 text-lg max-w-xl">
          My academic journey and qualifications.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative border-l border-slate-800/80 ml-4 space-y-16 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {EDUCATION_DATA.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-12"
          >
            {/* Timeline Dot */}
            <span
              className={`absolute -left-[10px] top-6 w-4 h-4 rounded-full border-2 ${
                index === 0
                  ? "bg-[#E59173] border-[#E59173]/70 shadow-[0_0_12px_rgba(229,145,115,0.6)]"
                  : "bg-slate-700 border-slate-600"
              }`}
            />

            {/* Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 14,
              }}
              className="
                relative bg-[#0D121F]/50
                backdrop-blur-xl
                border border-white/10
                p-8 rounded-2xl
                shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                hover:border-[#E59173]/30
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.55)]
                transition-all duration-500
              "
            >
              {/* period */}
              <span className="text-xs font-bold text-[#E59173] uppercase tracking-widest block mb-3">
                {item.period}
              </span>

              <h3 className="text-2xl font-semibold text-white mb-1">
                {item.degree}
              </h3>

              <p className="text-slate-400 mb-4">
                {item.institution}
              </p>

              {item.score && (
                <p className="text-slate-500 font-medium">
                  {item.score}
                </p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
