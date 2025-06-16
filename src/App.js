import React, { useState, useEffect } from "react"
import TechnologiesCarousel from "./components/TechnologiesCarousel"
import HeroSection from "./sections/HeroSection"
import ExperienceSection from "./sections/ExperienceSection"
import ProjectsSection from "./sections/ProjectsSection"
import FooterSection from "./sections/FooterSection"
import { portfolioContent } from "./data/content"
import "./App.css"

const App = () => {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState("en")
  const [isLoading, setIsLoading] = useState(true)
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    experience: false,
    projects: false,
  })

  // Detect browser language
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "ru") {
      setLanguage("ru")
    }
  }, [])

  // Simulate progressive loading
  useEffect(() => {
    const loadSequence = async () => {
      // Hero loads first
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, hero: true }))
      }, 500)

      // Experience loads next
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, experience: true }))
      }, 1000)

      // Projects load last
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, projects: true }))
        setIsLoading(false)
      }, 1500)
    }

    loadSequence()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const content = portfolioContent[language]

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <HeroSection
        content={content}
        sectionsLoaded={sectionsLoaded}
        isDark={isDark}
        scrollToSection={scrollToSection}
      />

      {/* Work Experience */}
      <ExperienceSection content={content} isDark={isDark} />

      {/* Technologies Carousel */}
      <TechnologiesCarousel isDark={isDark} language={language} />

      {/* Projects */}
      <ProjectsSection
        content={content}
        sectionsLoaded={sectionsLoaded}
        isDark={isDark}
      />

      {/* Footer */}
      <FooterSection
        content={content}
        language={language}
        setLanguage={setLanguage}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  )
}

export default App
