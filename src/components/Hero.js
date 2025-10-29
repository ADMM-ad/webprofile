import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



/**
 * Hero Component dengan gambar dominan di tengah & animasi
 */
const Hero = () => {
  const [imageOrder, setImageOrder] = useState([0, 1, 2]); // Indexes: left, center, right

  const images = [
    { id: 1, src: "/image/pp4.png", alt: "Profile 1" },
    { id: 2, src: "/image/pp5.webp", alt: "Profile 2" },
    { id: 3, src: "/image/pp4.png", alt: "Profile 3" },
  ];

  const handleClickImage = (position) => {
    if (position === "left") {
      setImageOrder([imageOrder[1], imageOrder[0], imageOrder[2]]);
    } else if (position === "right") {
      setImageOrder([imageOrder[0], imageOrder[2], imageOrder[1]]);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-8 lg:pt-16 flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Text Content: Intro */}
        <motion.div
          className="space-y-4 order-2 lg:order-1 text-center lg:text-right"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-navy-600 text-lg font-medium">Hello, I'm</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-800 leading-tight">
            <span className="block text-navy-600">Muhammad</span>
            Adam
            <span className="block text-navy-600">Abdurrahman</span>
          </h1>
        </motion.div>

        {/* Center: Profile Images with Dominant in Middle */}
        <motion.div
          className="relative flex justify-center items-center order-1 lg:order-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-end justify-center relative">
            {/* Left Small Image */}
            <div className="relative z-0" style={{ marginRight: "-2rem" }}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-400 opacity-30 rounded-full blur-md z-0" />
              <motion.img
                layout
                src={images[imageOrder[0]].src}
                alt={images[imageOrder[0]].alt}
                className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-full bg-navy cursor-pointer shadow-lg hover:shadow-xl transition-shadow z-10"
                onClick={() => handleClickImage("left")}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ marginBottom: "2rem" }}
              />
            </div>

            {/* Center Dominant Image */}
            <div className="relative z-20">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-400 opacity-30 rounded-full blur-md z-0" />
              <motion.img
                layout
                src={images[imageOrder[1]].src}
                alt={images[imageOrder[1]].alt}
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full bg-navy shadow-2xl z-20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>

            {/* Right Small Image */}
            <div className="relative z-0" style={{ marginLeft: "-2rem" }}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-400 opacity-30 rounded-full blur-md z-0" />
              <motion.img
                layout
                src={images[imageOrder[2]].src}
                alt={images[imageOrder[2]].alt}
                className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-full bg-navy cursor-pointer shadow-lg hover:shadow-xl transition-shadow z-10"
                onClick={() => handleClickImage("right")}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ marginBottom: "2rem" }}
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 border-2 border-navy-600 rounded-md opacity-30 z-0"
            animate={{ rotate: [0, 45, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-4 left-4 w-12 h-12 border-2 border-navy-600 rounded-md opacity-30 z-0"
            animate={{ rotate: [0, 45, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>

        {/* Right Text Content: Description */}
        <motion.div
          className="space-y-4 order-3 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-navy-800 leading-tight">
            <span className="block text-navy-600">A Junior</span>
            Web and Mobile Developer
          </h1>
          <div className="flex justify-center lg:justify-start space-x-4 pt-4">
  <a
    href="https://instagram.com/m.adam.abd"
    target="_blank"
    rel="noopener noreferrer"
    className="text-navy-600 hover:text-navy-800 transition-colors"
  >
    <FaInstagram className="w-6 h-6" />
  </a>

  <a
    href="https://wa.me/6282338428435"
    target="_blank"
    rel="noopener noreferrer"
    className="text-navy-600 hover:text-navy-800 transition-colors"
  >
    <FaWhatsapp className="w-6 h-6" />
  </a>

  <a
    href="mailto:adamabdurrahman514@gmail.com"
    className="text-navy-600 hover:text-navy-800 transition-colors"
  >
    <HiOutlineMail className="w-6 h-6" />
  </a>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;