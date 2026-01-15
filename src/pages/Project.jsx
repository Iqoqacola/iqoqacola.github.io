import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

const Projects = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // DATA PROJECT
  // (Desktop 16:9, Mobile 9:16)
  const projects = [
    {
      id: 1,
      title: "Asapmu Parumu",
      description:
        "A mobile-focused application designed to help users quit smoking. Features include progress tracking, health improvement statistics, and community support forums.",
      tech: ["React", "Tailwind", "Spring Boot", "PostgreSQL"],

      githubLink: {
        frontend: "https://github.com/Iqoqacola/asapmu-parumu",
        backend: "https://github.com/Iqoqacola/asapmu-parumu-api",
      },
      liveLink: "https://asapmu-parumu.vercel.app",
      laptopImg: "/projects/asapmu-laptop.png",
      mobileImg: "/projects/asapmu-mobile.png",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-richBlack pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-luxuryGold text-sm uppercase tracking-[0.3em] mb-4">
            My Portfolio
          </h2>
          <h1 className="font-serif text-4xl md:text-5xl text-platinum">
            Featured Projects
          </h1>
        </motion.div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gunmetal/20 rounded-3xl border border-white/5 overflow-visible hover:border-luxuryGold/30 transition-all duration-300 group flex flex-col shadow-2xl relative z-0 hover:z-10"
            >
              {/* --- 1. DEVICE SHOWCASE AREA --- */}
              <div className="relative bg-gradient-to-b from-gray-800 to-richBlack p-8 pb-0 flex items-end justify-center h-[170px] md:h-[280px] overflow-hidden rounded-t-3xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-luxuryGold/5 blur-3xl group-hover:bg-luxuryGold/10 transition-colors duration-500"></div>

                {/* Laptop Mockup */}
                <div className="relative w-[75%] z-10 transform transition-transform duration-500 group-hover:scale-105 origin-bottom">
                  <div className="bg-gray-900 rounded-t-xl p-[3%] border-t border-x border-gray-700 shadow-2xl relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full z-20"></div>
                    <div className="relative w-full aspect-video bg-black rounded overflow-hidden border border-gray-800">
                      {project.laptopImg ? (
                        <img
                          src={project.laptopImg}
                          alt="Desktop"
                          className="w-full h-full object-fit"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-700 text-xs font-mono">
                          1920x1080 Img
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-gray-800 h-3 w-[104%] -ml-[2%] rounded-b-md shadow-lg border-t border-gray-700 relative flex justify-center">
                    <div className="w-16 h-[2px] bg-gray-600 rounded-b mt-[1px]"></div>
                  </div>
                </div>

                {/* Mobile Mockup */}
                <div className="relative w-[22%] z-20 -ml-16 -mb-4 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <div className="bg-gray-900 rounded-[1.5rem] p-[4%] border-4 border-gray-800 shadow-2xl ring-1 ring-white/10 relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-1 bg-black rounded-full z-30"></div>
                    <div className="relative w-full aspect-[9/19] bg-black rounded-[1rem] overflow-hidden">
                      {project.mobileImg ? (
                        <img
                          src={project.mobileImg}
                          alt="Mobile"
                          className="w-full h-full object-fit"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-700 text-[8px] font-mono text-center">
                          Mobile Img
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* --- 2. CONTENT AREA --- */}
              <div className="p-8 flex flex-col flex-grow bg-richBlack/50 backdrop-blur-sm border-t border-white/5 rounded-b-3xl">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif text-platinum group-hover:text-luxuryGold transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-luxuryGold bg-luxuryGold/5 px-3 py-1 rounded-full border border-luxuryGold/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5 relative">
                  {project.githubLink && (
                    <>
                      {typeof project.githubLink === "string" ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:underline transition-all"
                        >
                          <FaGithub className="text-lg" />
                          <span>Source Code</span>
                        </a>
                      ) : (
                        <div className="relative">
                          <button
                            onClick={() => toggleDropdown(project.id)}
                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all focus:outline-none"
                          >
                            <FaGithub className="text-lg" />
                            <span>Source Code</span>
                            <FaChevronDown
                              className={`text-xs transition-transform duration-300 ${
                                activeDropdown === project.id
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {/* Dropdown Menu */}
                          <AnimatePresence>
                            {activeDropdown === project.id && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute bottom-full left-0 mb-3 w-40 bg-gunmetal border border-white/10 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col"
                              >
                                <a
                                  href={project.githubLink.frontend}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center gap-3 px-4 py-3 text-xs text-gray-300 hover:bg-white/5 hover:text-luxuryGold transition-colors border-b border-white/5"
                                >
                                  <FaLaptopCode /> Frontend
                                </a>
                                <a
                                  href={project.githubLink.backend}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center gap-3 px-4 py-3 text-xs text-gray-300 hover:bg-white/5 hover:text-luxuryGold transition-colors"
                                >
                                  <FaServer /> Backend
                                </a>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </>
                  )}

                  {/* Live Link */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-luxuryGold transition-all ml-auto"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
