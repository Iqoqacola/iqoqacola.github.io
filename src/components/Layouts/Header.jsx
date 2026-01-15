import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "project" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 px-4"
      >
        <nav
          className={`
            flex justify-between items-center transition-all duration-500 ease-in-out relative z-50
            ${
              scrolled || isOpen
                ? "w-full max-w-4xl bg-richBlack/80 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6 rounded-full"
                : "w-full max-w-6xl bg-transparent border border-transparent py-4 px-4"
            }
          `}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-serif font-bold text-platinum z-50 relative"
          >
            Iqoqacola
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="group relative text-sm font-sans tracking-wide text-gray-300 hover:text-luxuryGold transition-colors duration-300 uppercase"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxuryGold transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-platinum p-2 z-50 relative focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-current transition-transform"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-0.5 bg-current transition-opacity"
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -8, width: 24 }
                    : { rotate: 0, y: 0, width: 16 }
                }
                className="block h-0.5 bg-current transition-all"
                style={{ width: isOpen ? 24 : 16 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-richBlack/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-serif text-platinum hover:text-luxuryGold transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
