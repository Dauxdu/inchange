import React from "react"
import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import { ProgressiveLoader, SkeletonCard } from "../components/LoadingStates"

const ProjectsSection = ({ content, sectionsLoaded, isDark }) => {
  return (
    <section className="py-20 px-6 relative" id="projects">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent"
        >
          {content.projects}
        </motion.h2>

        <ProgressiveLoader
          isLoading={!sectionsLoaded.projects}
          isDark={isDark}
          skeleton={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <SkeletonCard key={i} isDark={isDark} />
              ))}
            </div>
          }
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.petProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>
        </ProgressiveLoader>
      </div>
    </section>
  )
}

export default ProjectsSection
