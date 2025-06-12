import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Code, Star, Users } from "lucide-react"
import Card from "./Card"
import Badge from "./Badge"

const ProjectCard = ({ project, index, isDark }) => {
  const [isHovered, setIsHovered] = useState(false)

  const projectMetrics = {
    0: { stars: 124, commits: 89, contributors: 3 },
    1: { stars: 67, commits: 156, contributors: 2 },
    2: { stars: 203, commits: 234, contributors: 5 },
  }

  const metrics = projectMetrics[index] || {
    stars: 0,
    commits: 0,
    contributors: 0,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card isDark={isDark} hover={true} className="h-full cursor-pointer">
        {/* Animated Background Overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(234, 88, 12, 0.05) 100%)"
              : "linear-gradient(135deg, rgba(249, 115, 22, 0.03) 0%, rgba(234, 88, 12, 0.03) 100%)",
          }}
        />

        <div className="relative z-10">
          {/* Header with Logo and Status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.img
                src={project.logo}
                alt={`${project.name} logo`}
                className={`w-16 h-16 rounded-2xl border-2 shadow-md ${
                  isDark ? "border-gray-600" : "border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <Badge variant="success" size="xs">
                Active
              </Badge>
            </div>

            {/* Project Metrics */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex gap-3 text-xs"
                >
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {metrics.stars}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="w-3 h-3 text-blue-500" />
                    <span
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {metrics.commits}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-purple-500" />
                    <span
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {metrics.contributors}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Project Title */}
          <motion.h3
            className={`text-xl font-bold mb-3 transition-colors ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
            animate={{
              color: isHovered ? "#f97316" : isDark ? "#f3f4f6" : "#111827",
            }}
          >
            {project.name}
          </motion.h3>

          {/* Description */}
          <p
            className={`mb-4 text-sm leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <Badge key={techIndex} variant="default" size="xs" hover={true}>
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all flex-1 justify-center ${
                isDark
                  ? "bg-gray-700/50 hover:bg-gray-600/50 text-white hover:text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>

            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all flex-1 justify-center ${
                isDark
                  ? "bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 hover:text-orange-200"
                  : "bg-orange-600/10 hover:bg-orange-600/20 text-orange-600 hover:text-orange-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <motion.span
                animate={{ opacity: isHovered ? [1, 0.7, 1] : 1 }}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
              >
                Demo
              </motion.span>
            </motion.a>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default ProjectCard