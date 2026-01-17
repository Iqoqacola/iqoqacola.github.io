import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import HeroScene from "../components/3d/HeroScene";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaTiktok,
} from "react-icons/fa";

export const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative min-h-screen w-full bg-richBlack overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10 pt-20 md:pt-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full md:w-1/2 mt-10 md:mt-0 md:pr-4 md:pl-0 lg:pl-24"
          >
            <motion.h2
              variants={fadeUp}
              className="text-luxuryGold text-xl md:text-2xl font-sans font-medium mb-2 flex items-center gap-2"
            >
              Hello there! <span className="animate-bounce">👋</span>, I'm
            </motion.h2>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-platinum mb-4 leading-tight"
            >
              Muhammad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxuryGold to-yellow-100">
                Iqbal
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-400 font-light mb-4"
            >
              <h3 className="text-platinum font-semibold text-2xl mb-2">
                Software Engineer 💻
              </h3>
              <div className="font-mono text-sm md:text-base text-gray-500">
                End-to-End Solution:
                <div className="text-luxuryGold font-semibold text-lg min-h-[3.5rem] md:min-h-fit">
                  <Typewriter
                    words={[
                      "Building the Future, One App at a Time",
                      "Reliable Software. Real Solutions",
                      "Bringing Ideas to Life through Code",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-6">
              <a
                href="/resume.pdf"
                download="CV_Muhammad_Iqbal.pdf"
                className="inline-flex items-center gap-3 bg-luxuryGold text-richBlack px-8 py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <span>Resume</span>
                <FaDownload className="text-lg" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 text-gray-400 mt-4"
            >
              <SocialLink
                href="https://www.instagram.com/iqoqacola_/"
                icon={<FaInstagram />}
              />
              <SocialLink
                href="https://www.tiktok.com/@iqoqacolaa_"
                icon={<FaTiktok />}
              />
              <SocialLink
                href="https://www.facebook.com/iqoqacola/"
                icon={<FaFacebookF />}
              />
              <SocialLink
                href="https://twitter.com/iqoqacolaa"
                icon={<FaTwitter />}
              />
              <SocialLink
                href="https://github.com/Iqoqacola"
                icon={<FaGithub />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/iqoqacola/"
                icon={<FaLinkedinIn />}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 h-[350px] md:h-[500px] relative flex items-center justify-center"
          >
            <div className="w-full h-full">
              <HeroScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-2xl hover:text-luxuryGold hover:-translate-y-1 transition-transform duration-300"
  >
    {icon}
  </a>
);

export default Home;
