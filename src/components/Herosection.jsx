import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-[600px] flex flex-col justify-center items-center bg-primary text-white">
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="italic text-blue-500">Vineet Raj</span> 👋
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full-Stack Developer | Blockchain Enthusiast | Tech Innovator 🚀
      </motion.p>
      <motion.p
        className="mt-2 text-center text-gray-400 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Working to empower communities through technology 🌍💡
      </motion.p>
      <div className="mt-6 flex gap-4">
        <motion.a
          href="#projects"
          className="px-6 py-3 bg-white text-indigo-500 rounded-md font-semibold hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work 🔍
        </motion.a>
        <motion.a
          href="#contact"
          className="px-6 py-3 bg-transparent border-2 border-white rounded-md text-white font-semibold hover:bg-white hover:text-indigo-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me 📧
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
