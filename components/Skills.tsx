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
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
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
          Skills
        </h2>
        <p className="text-slate-400 text-lg">
          Technologies and tools I use to build high-quality software.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {(SKILLS_DATA as SkillCategory[]).map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#0D121F]/40 border border-white/5 p-8 rounded-3xl hover:border-white/10 hover:shadow-xl hover:shadow-black/30"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">{category.emoji}</span>
              <h3 className="text-xl font-bold text-white">
                {category.name}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 text-slate-300 rounded-lg text-xs font-medium hover:border-[#E59173]/40 hover:text-white"
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
