import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    university: "Netaji Subhas University of Technology, Delhi 🎓",
    degree: "Bachelor of Technology 🖥️",
    major: "Computer Science and Engineering 💻",
    year: "2022-2026",
    courseWork: [
      "DSA 🔍",
      "Web Development 🌐",
      "Software Engineering 🛠️",
      "Operating Systems 🖥️",
      "Compiler Design 🧑‍💻",
      "Machine Learning 🤖",
    ],
  },
  {
    university: "Govt. Boys Sr. Sec School No.1, Samalkha, New Delhi 🏫",
    degree: "Senior Secondary School 📚",
    major: "Science 🔬",
    year: "2019-2021",
    courseWork: ["Physics ⚛️", "Chemistry 🧪", "Mathematics ➗"],
  },
];

const EducationSection = () => {
  return (
    <div
      id="education"
      className="flex flex-col items-center bg-gray-100 py-12 px-6 rounded-lg"
    >
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Education 🎓
      </h1>
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-black">
              {edu.university}
            </h2>
            <p className="text-lg font-medium text-gray-700">
              {edu.degree} in {edu.major} ({edu.year})
            </p>
            <h3 className="text-lg font-semibold text-gray-600">
              Coursework 📚:
            </h3>
            <ul className="list-disc list-inside text-gray-800">
              {edu.courseWork.map((course, idx) => (
                <li key={idx} className="text-sm">
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
