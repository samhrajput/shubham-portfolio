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
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-6xl font-extrabold text-white mb-4">
          Education
        </h2>
        <p className="text-slate-400 text-lg">
          My academic journey and qualifications.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative border-l-2 border-slate-800 ml-4 space-y-12 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {EDUCATION_DATA.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-12"
          >
            {/* Timeline Dot */}
            <span
              className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-slate-900 ${
                index === 0
                  ? "bg-[#E59173]"
                  : "bg-slate-700"
              }`}
            />

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#0D121F]/40 border border-white/5 p-8 rounded-2xl hover:border-white/10 hover:shadow-xl hover:shadow-black/30"
            >
              <span className="text-xs font-bold text-[#E59173] uppercase tracking-widest block mb-2">
                {item.period}
              </span>

              <h3 className="text-xl font-bold text-white mb-1">
                {item.degree}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {item.institution}
              </p>

              {item.score && (
                <p className="text-slate-500 text-sm font-medium">
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
