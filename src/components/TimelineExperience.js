import React from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

const TimelineExperience = ({ companies, isDark }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div
        className={`absolute left-8 top-0 bottom-0 w-0.5 ${
          isDark
            ? "bg-gradient-to-b from-orange-500 to-red-600"
            : "bg-gradient-to-b from-orange-600 to-red-700"
        }`}
      />

      {companies.map((company, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="relative flex items-start mb-12 last:mb-0"
        >
          {/* Timeline Dot */}
          <div
            className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
              isDark
                ? "bg-gray-900 border-orange-500"
                : "bg-white border-orange-600 shadow-lg"
            }`}
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-8 h-8 rounded-lg"
            />
          </div>

          {/* Content Card */}
          <motion.div
            whileHover={{ scale: 1.02, x: 10 }}
            className={`ml-8 flex-grow p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:shadow-xl ${
              isDark
                ? "bg-gray-800/50 border-gray-700/50 hover:border-orange-400/30 hover:shadow-orange-500/10"
                : "bg-white/90 border-gray-200/50 hover:border-orange-400/50 hover:shadow-orange-500/20"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div className="flex-grow">
                <h3
                  className={`text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors ${
                    isDark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {company.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 font-semibold">
                    {company.role}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {company.description}
                </p>
              </div>

              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs mt-4 md:mt-0 ${
                  isDark
                    ? "text-gray-300 bg-gray-700/50"
                    : "text-gray-600 bg-gray-100"
                }`}
              >
                <Calendar className="w-3 h-3" />
                {company.years}
              </div>
            </div>

            {/* Progress indicator for current role */}
            {index === 0 && (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className={`h-1 rounded-full ${
                  isDark
                    ? "bg-gradient-to-r from-orange-500 to-red-600"
                    : "bg-gradient-to-r from-orange-600 to-red-700"
                }`}
              />
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default TimelineExperience
