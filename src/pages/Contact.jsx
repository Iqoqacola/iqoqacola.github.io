import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// No backend for a contact form, so the button opens the visitor's email app
const mailtoLink = `mailto:balbaloy3@gmail.com?subject=${encodeURIComponent(
  "Hello Iqbal",
)}`;

const Contact = () => {
  return (
    <section className="min-h-screen bg-richBlack pt-24 pb-20 px-0 sm:px-6 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-luxuryGold text-sm uppercase tracking-[0.3em] mb-4">
            Get in Touch
          </h2>
          <h1 className="font-serif text-4xl md:text-6xl text-platinum mb-6">
            Let's Collaborate
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Connect Box */}
            <div className="p-6 md:p-8 bg-gunmetal/30 rounded-2xl border border-white/5 hover:border-luxuryGold/30 transition-all duration-300">
              <h3 className="text-xl font-serif text-white mb-6">
                Quick Connect
              </h3>

              <div className="space-y-6">
                {/* Email Item */}
                <a
                  href="mailto:balbaloy3@gmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-luxuryGold transition-colors group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-richBlack flex items-center justify-center border border-white/10 group-hover:border-luxuryGold transition-colors">
                    <FaEnvelope />
                  </div>
                  <span className="break-all md:break-normal text-sm md:text-md">
                    balbaloy3@gmail.com
                  </span>
                </a>

                {/* WhatsApp Item */}
                <a
                  href="https://wa.me/6289690772452"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-luxuryGold transition-colors group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-richBlack flex items-center justify-center border border-white/10 group-hover:border-luxuryGold transition-colors">
                    <FaWhatsapp />
                  </div>
                  <span className="break-all md:break-normal text-sm md:text-md">
                    +62 896-9077-2452
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-gunmetal/30 rounded-2xl border border-white/5 hover:border-luxuryGold/30 transition-all duration-300"
          >
            <h3 className="text-xl font-serif text-white mb-4">
              Send an Email
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Got a role or a project in mind? Email me the details and
              I&apos;ll get back to you.
            </p>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={mailtoLink}
              className="w-full py-4 bg-luxuryGold text-richBlack font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3"
            >
              <span>Email Me</span>
              <FaPaperPlane className="text-sm" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
