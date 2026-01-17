import { motion } from "framer-motion";
import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiTailwindcss } from "react-icons/si";
import AboutScene from "../components/3d/AboutScene";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" }, // New Skill
    { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  ];

  return (
    <section className="min-h-screen bg-richBlack pt-28 pb-20 px-6 flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full md:w-7/12"
          >
            <h2 className="text-luxuryGold text-sm uppercase tracking-[0.3em] mb-4">
              About Me
            </h2>
            <h1 className="font-serif text-2xl md:text-5xl text-platinum mb-6 leading-tight">
              Software Engineer for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxuryGold to-yellow-100">
                Scalable Solutions.
              </span>
            </h1>

            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed mb-10">
              <p>
                I am a Software Engineer based in Indonesia with a deep focus on
                backend development and system architecture.
              </p>
              <p>
                Currently pursuing a degree in Information Systems, I am
                passionate about solving complex technical challenges and
                continuously expanding my knowledge in the ever-evolving tech
                landscape.
              </p>
            </div>

            {/* TECH STACK */}
            <div>
              <h3 className="text-white font-serif text-xl mb-6 border-b border-white/10 pb-2 inline-block">
                Core Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-gunmetal/30 p-3 md:p-4 rounded-lg border border-white/5 hover:border-luxuryGold/30 transition-all duration-300 group"
                  >
                    <span
                      className={`text-2xl md:text-3xl ${skill.color} group-hover:scale-110 transition-transform shrink-0`}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 font-medium text-sm md:text-base break-words">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: 3D OBJECT CONTAINER --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12"
          >
            <div className="relative group">
              <div className="relative w-full aspect-[4/5] bg-gray-800/50 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                {/* <AboutScene /> */}
                <AboutScene />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
