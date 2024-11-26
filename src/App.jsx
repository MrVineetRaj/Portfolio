import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";
import Footer from "./components/FooterSection";
import EducationSection from "./components/EducationSection";

const App = () => {
  return (
    <main className="flex flex-col w-full gap-16 px-8">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default App;
