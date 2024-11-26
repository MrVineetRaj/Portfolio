import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    _id: 0,
    title: "Blockchain Learning Platform",
    tech_stack: ["Next Js", "MongoDB", "Gemini", "Typescript"],
    status: "In Progress",
    description:
      "A platform offering personalized learning paths, quizzes, and rewards using blockchain.",
    source_code: "https://github.com/vineetraj/blockchain-learning",
    video_url:
      "https://www.youtube.com/embed/uy6LGbCQqwk?si=KSIVjvce3AoCD-dw?autoplay=1&mute=1&enablejsapi=1",
  },
  {
    _id: 1,
    title: "ATSai",
    tech_stack: ["Next Js", "MongoDB", "Gemini"],
    status: "Completed",
    description:
      "Ai powered resume builder for job seekers to create ATS friendly resume using dynamic ATS friendly templates.",
    source_code: "https://github.com/MrVineetRaj/ATSai-resume-builder",
    video_url: "https://www.youtube.com/embed/uy6LGbCQqwk?si=KSIVjvce3AoCD-dw",
  },
  {
    _id: 2,
    title: "Tracky App",
    tech_stack: ["React Native", "MongoDB", "Express Js", "Node"],
    status: "Completed",
    description:
      "A React Native app to manage finances, nutritional intake, and habits, integrated with Aptos rewards.",
    source_code: "https://github.com/MrVineetRaj/personal-tracker",
    video_url: "https://www.youtube.com/embed/uy6LGbCQqwk?si=KSIVjvce3AoCD-dw",
  },
  {
    _id: 2,
    title: "WritoCode",
    tech_stack: ["Next Js"],
    status: "Completed",
    description:
      "A blogging platform for developers to share their code snippets and articles.",
    source_code: "https://github.com/MrVineetRaj/blogging-platform",
    video_url: "https://www.youtube.com/embed/uy6LGbCQqwk?si=KSIVjvce3AoCD-dw",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = React.useState(-1);
  return (
    <div
      id="projects"
      className="mx-2 md:mx-10  bg-primary rounded-xl flex flex-col items-center gap-16 py-8"
    >
      <h1 className="text-5xl font-bold text-center">My Projects</h1>
      <div className="flex flex-col items-center justify-center w-full md:px-8 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={clsx(
              "flex gap-4 m:gap-2 w-full  py-8 rounded-3xl flex-col px-4 ",
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            )}
            whileHover={{
              scale: 1.01,
              boxShadow: "0px 0px 20px 10px rgba(255,255,255,0.2)",
            }}
            initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            onMouseOver={() => setSelectedProject(index)}
            onMouseLeave={() => setSelectedProject(-1)}
          >
            <div className="flex-[0.5] flex flex-col items-center gap-2 ">
              <div className="md:w-[80%] flex flex-col items-start justify-center h-full gap-2">
                <h1 className="text-white font-bold text-2xl ">
                  {project.title}
                </h1>
                <p className="text-gray-500 italic">{project.status}</p>
                <p className="text-gray-200 text-wrap">{project.description}</p>
                <a
                  href={project.source_code}
                  target="__blank"
                  className="text-blue-500  cursor-pointer "
                >
                  Source Code {">"}
                </a>

                <div className="flex gap-2">
                  {project.tech_stack.map((tech, index) => (
                    <img
                      src={`/images/${tech}.png`}
                      alt={tech}
                      key={index}
                      className="size-[50px]  rounded-md  bg-white p-2"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-[0.5] flex flex-col md:px-4 md:items-center ">
              <iframe
                src={`${project.video_url}`} // Add autoplay=1 and mute=1
                title="YouTube video player"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl md:min-h-[315px] md:w-[80%]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
