import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ title, category, image }) => {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative h-[400px] w-full rounded-xl overflow-hidden cursor-pointer bg-gunmetal"
      >
        {/* Image Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

        {/* Content (Text Reveal) */}
        <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-luxuryGold font-sans text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {category}
          </p>
          <h3 className="font-serif text-3xl text-white mb-2">{title}</h3>
          <div className="h-[1px] w-0 group-hover:w-full bg-luxuryGold transition-all duration-700 ease-in-out" />
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
