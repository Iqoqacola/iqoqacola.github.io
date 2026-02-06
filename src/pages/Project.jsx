import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaLaptopCode,
  FaServer,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { projectData } from "../ultis";

const Projects = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // DATA PROJECT
  // (Desktop 16:9, Mobile 9:16)
  const projects = [...projectData].sort((a, b) => b.id - a.id);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < projects.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const { offset } = info;

    if (offset.x < -swipeThreshold) {
      nextSlide();
    } else if (offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + itemsPerView,
  );

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

        {/* --- CAROUSEL WRAPPER --- */}
        <div className="relative">
          {/* LEFT ARROW (Hidden on Mobile) */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full border border-luxuryGold/30 transition-all duration-300 ${
              currentIndex === 0
                ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                : "bg-richBlack/80 text-luxuryGold hover:bg-luxuryGold hover:text-richBlack shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            }`}
          >
            <FaChevronLeft className="text-xl" />
          </button>

          {/* RIGHT ARROW (Hidden on Mobile) */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= projects.length - itemsPerView}
            className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full border border-luxuryGold/30 transition-all duration-300 ${
              currentIndex >= projects.length - itemsPerView
                ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                : "bg-richBlack/80 text-luxuryGold hover:bg-luxuryGold hover:text-richBlack shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            }`}
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Grid Projects Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[500px]">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  style={{ touchAction: "pan-y" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-gunmetal/20 rounded-3xl border border-white/5 overflow-visible hover:border-luxuryGold/30 transition-all duration-300 group flex flex-col shadow-2xl relative z-0 hover:z-10 h-full cursor-grab active:cursor-grabbing"
                >
                  {/* --- 1. DEVICE SHOWCASE AREA --- */}
                  <div className="relative bg-gradient-to-b from-gray-800 to-richBlack p-8 pb-0 flex items-end justify-center h-[170px] md:h-[280px] overflow-hidden rounded-t-3xl shrink-0 pointer-events-none">
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
                            <div className="w-full h-full flex items-center justify-center text-gray-600/50 text-xs font-mono bg-gray-900/50">
                              Preview N/A
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="bg-gray-800 h-3 w-[104%] -ml-[2%] rounded-b-md shadow-lg border-t border-gray-700 relative flex justify-center">
                        <div className="w-16 h-[2px] bg-gray-600 rounded-b mt-[1px]"></div>
                      </div>
                    </div>

                    {/* Mobile Mockup */}
                    <div className="relative w-[22%] z-20 -ml-8 -mb-2 md:-ml-16 md:-mb-4 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                      {/* Frame HP */}
                      <div className="bg-gray-900 rounded-[10px] p-[4%] border-[1.5px] md:border-4 border-gray-800 shadow-xl md:shadow-2xl ring-1 ring-white/10 relative">
                        {/* Notch / Poni HP */}
                        <div className="absolute top-[2px] md:top-2 left-1/2 -translate-x-1/2 w-[30%] h-[1.5px] md:h-1 bg-black rounded-full z-30"></div>
                        {/* Layar HP */}
                        <div className="relative w-full aspect-[9/19] bg-black rounded-[6px] overflow-hidden">
                          {project.mobileImg ? (
                            <img
                              src={project.mobileImg}
                              alt="Mobile"
                              className="w-full h-full object-fit"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-600/50 text-[8px] font-mono text-center bg-gray-900/50">
                              N/A
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
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
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
                    <div
                      className="flex items-center gap-4 pt-4 border-t border-white/5 relative"
                      onPointerDownCapture={(e) => e.stopPropagation()}
                    >
                      {project.githubLink ? (
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
                                    transition={{ duration: 0.2 }}
                                    z
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
                      ) : (
                        <>
                          {" "}
                          <FaGithub className="text-lg" />
                          <span>Private</span>
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
            </AnimatePresence>
          </div>

          {/* Page Indicators (Dots) */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: projects.length - itemsPerView + 1 }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-luxuryGold w-6"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
