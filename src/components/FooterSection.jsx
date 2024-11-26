import React from "react";

const Footer = () => {
  const socials = ["GitHub", "LinkedIn", "Twitter"];
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-6 rounded-md">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Social Links */}
        <div className="flex gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://${social.toLowerCase()}.com/mrvineetraj`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition rounded-lg bg-white p-1"
            >
              <img
                src={`/images/${social}.png`}
                alt="Twitter"
                className="size-10"
              />
            </a>
          ))}
        </div>

        {/* Email */}
        <a
          href="mailto:vineetraj@example.com"
          className="text-blue-400 hover:text-blue-500 transition"
        >
          Send Mail
        </a>

        {/* Resume Download */}
        <a
          href="/files/vineet_fullstack_resume.pdf"
          download
          className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vineet Raj. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
