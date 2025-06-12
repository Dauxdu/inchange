import React from "react"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import Button from "../ui/Button"
import LogoLoader from "../components/LogoLoader"

const HeroSection = ({ content, sectionsLoaded, isDark, scrollToSection }) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Enhanced Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`neural-network-orange gpu-accelerated ${
            isDark ? "opacity-30" : "opacity-15"
          }`}
        />
        <div className="floating-particles-orange gpu-accelerated" />
        <div className="light-particles gpu-accelerated" />
        <div className="geometric-shapes gpu-accelerated" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              className={`p-8 rounded-3xl ${
                isDark
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-white/80 border border-gray-200/50 shadow-lg"
              } backdrop-blur-md`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={LogoLoader[isDark ? "inchange_white" : "inchange_dark"]}
                alt="INCHANGE.DEV Logo"
                className="w-24 h-24 mx-auto"
              />
            </motion.div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent leading-none">
            {content.name}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-light ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {content.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            onClick={() => scrollToSection("experience")}
            variant="primary"
            size="lg"
          >
            {content.experience}
          </Button>

          <Button
            onClick={() => scrollToSection("projects")}
            variant="secondary"
            size="lg"
            className={
              isDark ? "border-gray-600 text-gray-300 hover:bg-gray-700/50" : ""
            }
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            {content.viewProjects}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className={`w-6 h-12 border-2 rounded-full flex justify-center cursor-pointer ${
            isDark
              ? "border-gray-600 hover:border-orange-400"
              : "border-gray-400 hover:border-orange-500"
          } transition-colors`}
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("experience")}
        >
          <motion.div
            className={`w-1 h-3 rounded-full mt-2 ${
              isDark ? "bg-orange-500" : "bg-orange-600"
            }`}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
