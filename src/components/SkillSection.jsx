import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages 💻",
    items: ["C++", "Javascript", "Typescript", "Python"],
  },
  {
    category: "Web Development 🌐",
    items: [
      "React Js",
      "Next Js",
      "Tailwind CSS",
      "Redux",
      "Node",
      "Express Js",
      "Socket",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    category: "DevOps & Tools 🛠️",
    items: ["Docker", "GitHub", "Firebase", "AWS"],
  },
];

const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="relative flex flex-col items-center py-12 px-6 min-h-[400px] overflow-hidden rounded-md"
    >
      {/* Background split effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary" />
        <div
          className="absolute inset-0 bg-gray-100 -skew-y-[20deg]"
          style={{
            transformOrigin: `50% 100%`,
            bottom: "50%",
            height: "70%",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-8 text-center text-primary">
          Skills 🛠️
        </h1>
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-6 w-[300px] flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {skill.category}
              </h2>
              <div className="grid grid-cols-3 gap-4 w-full">
                {skill.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <img
                      src={`/images/${item}.png`}
                      alt={item}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
