import React from "react"
import { motion } from "framer-motion"
import { technologiesData } from "../data/content"

const TechnologiesCarousel = ({ isDark, language }) => {
  const content = {
    en: {
      title: "Technologies & Services",
      subtitle: "Tools and platforms I work with professionally",
    },
    ru: {
      title: "Обслуживал",
      subtitle: "Инструменты и платформы, с которыми работаю профессионально",
    },
  }

  const t = content[language]
  const companies = technologiesData

  // Дублируем логотипы для бесконечной прокрутки
  const duplicatedCompanies = [...companies, ...companies, ...companies]

  return (
    <section className="py-20 px-6 relative" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-tight pb-2"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-center mb-16 text-lg ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t.subtitle}
        </motion.p>

        {/* Бесконечная плавная карусель */}
        <div className="relative overflow-hidden py-4 px-8">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: [0, -(companies.length * (200 + 32))],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: companies.length * 2.5,
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedCompanies.length * (200 + 32)}px`,
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.id}-${Math.floor(index / companies.length)}`}
                className="flex-shrink-0 group"
              >
                <div
                  className={`${
                    company.format === "square" ? "w-24 h-24" : "w-32 h-20"
                  } ${
                    isDark
                      ? "bg-gray-800/30 border border-gray-700/30"
                      : "bg-white/80 border border-gray-200/50"
                  } rounded-xl backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg group-hover:scale-105 transform-gpu`}
                  style={{
                    width: "200px",
                    height: "120px",
                  }}
                >
                  <img
                    src={company.logo}
                    alt={`Company ${company.id} logo`}
                    className={`max-w-full max-h-full object-contain filter transition-all duration-300 ${
                      isDark
                        ? "brightness-90 group-hover:brightness-110"
                        : "group-hover:brightness-95"
                    }`}
                    style={{
                      filter:
                        company.logo.includes("prometheus") ||
                        company.logo.includes("gitlab")
                          ? isDark
                            ? "invert(1) brightness(0.9)"
                            : "none"
                          : "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Градиентные маски по краям для плавного исчезновения */}
          <div
            className={`absolute left-0 top-0 w-20 h-full pointer-events-none z-10 ${
              isDark
                ? "bg-gradient-to-r from-gray-900 to-transparent"
                : "bg-gradient-to-r from-gray-50 to-transparent"
            }`}
          />
          <div
            className={`absolute right-0 top-0 w-20 h-full pointer-events-none z-10 ${
              isDark
                ? "bg-gradient-to-l from-gray-900 to-transparent"
                : "bg-gradient-to-l from-gray-50 to-transparent"
            }`}
          />
        </div>
      </div>
    </section>
  )
}

export default TechnologiesCarousel
