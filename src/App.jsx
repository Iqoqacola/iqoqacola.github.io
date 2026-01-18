import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-richBlack overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />

            <section id="home">
              <Home />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="project">
              <Project />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
