import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { educationData, experienceData } from "../ultis";
const Experience = () => {
  // Data Experience
  const experiences = experienceData;

  // Data Education (Pendidikan)
  const educations = educationData;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-richBlack pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header Page */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-luxuryGold text-sm uppercase tracking-[0.3em] mb-3">
            My Journey
          </h2>
          <h1 className="font-serif text-4xl md:text-5xl text-platinum">
            Experience & Education
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* --- LEFT COLUMN: WORK EXPERIENCE --- */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 bg-luxuryGold/10 rounded-full text-luxuryGold">
                <FaBriefcase className="text-xl" />
              </div>
              <h3 className="text-2xl font-serif text-platinum">
                Professional Career
              </h3>
            </motion.div>

            <div className="space-y-8 border-l-2 border-white/10 ml-4 pl-8 relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Dot Timeline */}
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-richBlack bg-gray-600 group-hover:bg-luxuryGold transition-colors duration-300"></span>

                  <div className="bg-gunmetal/30 p-6 rounded-2xl border border-white/5 hover:border-luxuryGold/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-luxuryGold transition-colors">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-luxuryGold border border-luxuryGold/20 px-2 py-1 rounded">
                        {exp.type}
                      </span>
                    </div>

                    <h5 className="text-gray-400 text-sm mb-2">
                      {exp.company}
                    </h5>

                    <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-4">
                      <FaCalendarAlt />
                      {exp.date}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: EDUCATION --- */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 bg-luxuryGold/10 rounded-full text-luxuryGold">
                <FaGraduationCap className="text-xl" />
              </div>
              <h3 className="text-2xl font-serif text-platinum">
                Education History
              </h3>
            </motion.div>

            <div className="space-y-8 border-l-2 border-white/10 ml-4 pl-8 relative">
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Dot Timeline */}
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-richBlack bg-gray-600 group-hover:bg-luxuryGold transition-colors duration-300"></span>

                  <div className="bg-gunmetal/30 p-6 rounded-2xl border border-white/5 hover:border-luxuryGold/30 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white group-hover:text-luxuryGold transition-colors mb-1">
                      {edu.school}
                    </h4>

                    <h5 className="text-gray-300 text-sm font-medium mb-2">
                      {edu.degree}
                    </h5>

                    <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-4">
                      <FaCalendarAlt />
                      {edu.date}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
