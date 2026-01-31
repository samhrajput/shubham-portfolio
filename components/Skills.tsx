import React from "react";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "../constants";

/* =========================
   Types
========================= */
interface SkillCategory {
  name: string;
  emoji: string;
  skills: string[];
}

/* =========================
   Animation Variants
========================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================
   Tech Icons Map
========================= */
const techIcons: Record<string, string> = {
  Java: "☕",
  JavaScript: "🟨",
  TypeScript: "🔷",
  React: "⚛️",
  HTML: "📄",
  CSS: "🎨",
  Tailwind: "🌊",
  Node: "🟢",
  Express: "🚂",
  MongoDB: "🍃",
  MySQL: "🐬",
  Git: "🌿",
  GitHub: "🐙",
  Docker: "🐳",
};

/* =========================
   Component
========================= */
const Skills: React.FC = () => {
  return (
    <section
      id="skills"
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
          Skills
        </h2>
        <p className="text-slate-400 text-lg max-w-xl">
          Technologies and tools I use to build high-quality software.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {(SKILLS_DATA as SkillCategory[]).map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
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
              p-8 rounded-3xl
              shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              hover:border-[#E59173]/30
              hover:shadow-[0_30px_70px_rgba(0,0,0,0.55)]
              transition-all duration-500
            "
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">{category.emoji}</span>
              <h3 className="text-2xl font-semibold text-white">
                {category.name}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 320 }}
                  className="
                    flex items-center gap-2
                    px-3 py-1.5
                    bg-white/5
                    border border-white/10
                    text-slate-300
                    rounded-lg text-xs font-medium
                    hover:border-[#E59173]/40
                    hover:text-white
                    hover:bg-white/10
                    transition-colors
                  "
                >
                  <span>{techIcons[skill] ?? "💻"}</span>
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
