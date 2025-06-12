import React from "react"
import { motion } from "framer-motion"
import Card from "../components/Card"
import Badge from "../components/Badge"

const ExperienceSection = ({ content, isDark }) => {
  return (
    <section className="py-20 px-6 relative" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
        >
          {content.experience}
        </motion.h2>

        <div className="grid gap-8">
          {content.companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <Card isDark={isDark} hover={true} className="group">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 shadow-lg ${
                        isDark ? "border-gray-600" : "border-gray-200"
                      }`}
                    />
                  </div>

                  {/* Company Info */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors ${
                            isDark ? "text-gray-100" : "text-gray-900"
                          }`}
                        >
                          {company.name}
                        </h3>
                        <p className="text-orange-400 font-semibold mb-3">
                          {company.role}
                        </p>
                        <p
                          className={`text-sm sm:text-base ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {company.description}
                        </p>
                      </div>
                      <Badge
                        variant="gradient"
                        size="md"
                        className="mt-4 md:mt-0 min-w-[140px] text-center font-medium"
                        hover={false}
                      >
                        {company.years}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection