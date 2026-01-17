import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myEmail = "balbaloy3@gmail.com";

    const subject = `Project Inquiry from ${formState.name}`;
    const body = `Hi Iqbal,%0D%0A%0D%0AMy name is ${formState.name}.%0D%0AEmail: ${formState.email}%0D%0A%0D%0AI would like to talk about:%0D%0A${formState.message}`;

    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="min-h-screen bg-richBlack pt-24 pb-20 px-6 flex items-center justify-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
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
                  <span className="break-all md:break-normal">
                    balbaloy3@gmail.com
                  </span>
                </a>

                {/* WhatsApp Item */}
                <a
                  href="https://wa.me/6287805625342"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-luxuryGold transition-colors group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-richBlack flex items-center justify-center border border-white/10 group-hover:border-luxuryGold transition-colors">
                    <FaWhatsapp />
                  </div>
                  <span className="break-all md:break-normal">
                    +62 878-0562-5342
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="relative group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:outline-none focus:border-luxuryGold transition-colors duration-300 placeholder-transparent peer"
              />
              <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-luxuryGold peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text pointer-events-none">
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:outline-none focus:border-luxuryGold transition-colors duration-300 placeholder-transparent peer"
              />
              <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-luxuryGold peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text pointer-events-none">
                Email Address
              </label>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                placeholder="Project Details"
                rows="4"
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:outline-none focus:border-luxuryGold transition-colors duration-300 placeholder-transparent peer resize-none"
              ></textarea>
              <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-luxuryGold peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text pointer-events-none">
                Tell me about your project...
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-luxuryGold text-richBlack font-bold uppercase tracking-widest mt-4 hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3"
            >
              <span>Send Message</span>
              <FaPaperPlane className="text-sm" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
