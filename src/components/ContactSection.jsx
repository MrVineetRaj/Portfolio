import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center py-12 px-6 rounded-lg bg-gray-100"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Feel free to reach out for collaboration, project inquiries, or just to
        say hello!
      </p>
      <motion.div
        className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Email Card */}
        <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-xl p-6 w-[300px]">
          <img
            src="/icons/email.png"
            alt="Email Icon"
            className="w-12 h-12 object-contain"
          />
          <h2 className="text-xl font-semibold text-black">Email</h2>
          <p className="text-sm text-gray-700 text-center">
            vineetraj@example.com
          </p>
          <a
            href="mailto:vineetraj@example.com"
            className="text-blue-500 hover:underline"
          >
            Send an Email
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-xl p-6 w-[300px]">
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn Icon"
            className="w-12 h-12 object-contain"
          />
          <h2 className="text-xl font-semibold text-black">LinkedIn</h2>
          <p className="text-sm text-gray-700 text-center">
            Connect with me on LinkedIn.
          </p>
          <a
            href="https://linkedin.com/in/vineetraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Profile
          </a>
        </div>

        {/* GitHub Card */}
        <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-xl p-6 w-[300px]">
          <img
            src="/icons/github.png"
            alt="GitHub Icon"
            className="w-12 h-12 object-contain"
          />
          <h2 className="text-xl font-semibold text-black">GitHub</h2>
          <p className="text-sm text-gray-700 text-center">
            Check out my projects and repositories.
          </p>
          <a
            href="https://github.com/vineetraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit GitHub
          </a>
        </div>
      </motion.div>

      {/* Resume Download Section */}
      <motion.div
        className="mt-8 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-2">Download My Resume</h2>
        <a
          href="/resume.pdf" // Ensure you add your resume file in the public folder as "resume.pdf"
          download
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default ContactSection;
