import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Globe, Github, Mail, Zap } from "lucide-react"
import EnhancedProjectCard from "./components/EnhancedProjectCard"
import MagneticCursor from "./components/MagneticCursor"
import ServicesCarousel from "./components/ServicesCarousel"
import { ProgressiveLoader, SkeletonCard } from "./components/LoadingStates"
import "./App.css"
import LogoLoader from "./components/LogoLoader"

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

  const logoUrl = LogoLoader["logo"]

  const content = {
    en: {
      name: "INCHANGE.DEV",
      tagline: "Junior DevOps Engineer & Cloud Enthusiast",
      subtitle:
        "Building reliable infrastructure and automating deployment pipelines",
      about:
        "Passionate about infrastructure automation, cloud technologies, and continuous deployment practices.",
      experience: "Work Experience",
      projects: "Featured Projects",
      viewProjects: "View Projects",
      companies: [
        {
          name: "CloudTech Solutions",
          description:
            "Supporting CI/CD pipeline development and container orchestration with Docker and Kubernetes, implementing monitoring solutions and maintaining cloud infrastructure",
          years: "2024 - Present",
          role: "Junior DevOps Engineer",
          logo: logoUrl,
        },
        {
          name: "StartupBase",
          description:
            "Assisting with AWS infrastructure setup and monitoring system implementation, learning cloud best practices and automation tools",
          years: "2023 - 2024",
          role: "DevOps Intern",
          logo: logoUrl,
        },
        {
          name: "TechLab Academy",
          description:
            "Learning system administration and basic automation scripting with Python and Bash, building foundation in Linux systems",
          years: "2022 - 2023",
          role: "System Admin Trainee",
          logo: logoUrl,
        },
      ],
      petProjects: [
        {
          name: "Docker Monitoring Stack",
          description:
            "Complete monitoring solution using Prometheus, Grafana, and Docker Compose for container metrics visualization and alerting with custom dashboards",
          tech: [
            "Docker",
            "Prometheus",
            "Grafana",
            "Docker Compose",
            "AlertManager",
          ],
          link: "https://github.com/inchange-dev/docker-monitoring",
          demo: "https://monitoring-demo.inchange.dev",
          logo: logoUrl,
        },
        {
          name: "CI/CD Pipeline Automation",
          description:
            "Automated deployment pipeline using GitHub Actions for web applications with testing, security scanning, and multi-environment deployment stages",
          tech: ["GitHub Actions", "Docker", "AWS", "Terraform", "Jest"],
          link: "https://github.com/inchange-dev/cicd-pipeline",
          demo: "https://pipeline-demo.inchange.dev",
          logo: logoUrl,
        },
        {
          name: "Infrastructure as Code",
          description:
            "AWS infrastructure provisioning using Terraform with automated scaling, backup solutions, and comprehensive logging and monitoring setup",
          tech: ["Terraform", "AWS", "CloudWatch", "S3", "Lambda"],
          link: "https://github.com/inchange-dev/terraform-aws",
          demo: "https://infrastructure-demo.inchange.dev",
          logo: logoUrl,
        },
      ],
    },
    ru: {
      name: "INCHANGE.DEV",
      tagline: "Junior DevOps Инженер и Энтузиаст Облачных Технологий",
      subtitle:
        "Создаю надёжную инфраструктуру и автоматизирую пайплайны развёртывания",
      about:
        "Увлечён автоматизацией инфраструктуры, облачными технологиями и практиками непрерывного развёртывания.",
      experience: "Опыт Работы",
      projects: "Избранные Проекты",
      viewProjects: "Посмотреть Проекты",
      companies: [
        {
          name: "CloudTech Solutions",
          description:
            "Поддержка разработки CI/CD пайплайнов и оркестрации контейнеров с Docker и Kubernetes, внедрение решений мониторинга и поддержка облачной инфраструктуры",
          years: "2024 - Настоящее время",
          role: "Junior DevOps Инженер",
          logo: logoUrl,
        },
        {
          name: "StartupBase",
          description:
            "Помощь в настройке AWS инфраструктуры и внедрении систем мониторинга, изучение лучших практик облачных технологий и инструментов автоматизации",
          years: "2023 - 2024",
          role: "DevOps Стажёр",
          logo: logoUrl,
        },
        {
          name: "TechLab Academy",
          description:
            "Изучение системного администрирования и базовой автоматизации на Python и Bash, создание фундамента в Linux системах",
          years: "2022 - 2023",
          role: "Системный Администратор (Стажёр)",
          logo: logoUrl,
        },
      ],
      petProjects: [
        {
          name: "Docker Monitoring Stack",
          description:
            "Полное решение для мониторинга с использованием Prometheus, Grafana и Docker Compose для визуализации метрик контейнеров и оповещений с кастомными дашбордами",
          tech: [
            "Docker",
            "Prometheus",
            "Grafana",
            "Docker Compose",
            "AlertManager",
          ],
          link: "https://github.com/inchange-dev/docker-monitoring",
          demo: "https://monitoring-demo.inchange.dev",
          logo: logoUrl,
        },
        {
          name: "Автоматизация CI/CD Пайплайна",
          description:
            "Автоматизированный пайплайн развёртывания с использованием GitHub Actions для веб-приложений с тестированием, сканированием безопасности и развёртыванием в несколько сред",
          tech: ["GitHub Actions", "Docker", "AWS", "Terraform", "Jest"],
          link: "https://github.com/inchange-dev/cicd-pipeline",
          demo: "https://pipeline-demo.inchange.dev",
          logo: logoUrl,
        },
        {
          name: "Инфраструктура как Код",
          description:
            "Провизионирование AWS инфраструктуры с использованием Terraform с автоматическим масштабированием, решениями резервного копирования и комплексной настройкой логирования и мониторинга",
          tech: ["Terraform", "AWS", "CloudWatch", "S3", "Lambda"],
          link: "https://github.com/inchange-dev/terraform-aws",
          demo: "https://infrastructure-demo.inchange.dev",
          logo: logoUrl,
        },
      ],
    },
  }

  const t = content[language]

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Custom Magnetic Cursor */}
      <MagneticCursor isDark={isDark} />

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

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        id="hero"
      >
        <ProgressiveLoader isLoading={!sectionsLoaded.hero} isDark={isDark}>
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
                    src={logoUrl}
                    alt="INCHANGE.DEV Logo"
                    className="w-24 h-24 mx-auto"
                  />
                </motion.div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent leading-none">
                {t.name}
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
              {t.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className={`text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("experience")}
                className="magnetic-button px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.experience}
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("projects")}
                className={`magnetic-button px-6 sm:px-8 py-3 sm:py-4 border rounded-full backdrop-blur-sm transition-all duration-300 ${
                  isDark
                    ? "border-gray-600 text-gray-300 hover:bg-gray-700/50"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t.viewProjects}
                </span>
              </motion.button>
            </motion.div>
          </div>
        </ProgressiveLoader>

        {/* Enhanced Scroll Indicator */}
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

      {/* Work Experience */}
      <section className="py-20 px-6 relative" id="experience">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
          >
            {t.experience}
          </motion.h2>

          <div className="grid gap-8">
            {t.companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div
                  className={`p-6 sm:p-8 backdrop-blur-md rounded-3xl border transition-all duration-500 hover:shadow-2xl ${
                    isDark
                      ? "bg-gray-800/50 border-gray-700/50 hover:border-orange-400/30 hover:shadow-orange-500/10"
                      : "bg-white/90 border-gray-200/50 hover:border-orange-400/50 hover:shadow-orange-500/20"
                  }`}
                >
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
                        <div
                          className={`text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full mt-4 md:mt-0 ${
                            isDark
                              ? "text-gray-300 bg-gray-700/50"
                              : "text-gray-600 bg-gray-100"
                          }`}
                        >
                          {company.years}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <ServicesCarousel isDark={isDark} language={language} />

      {/* Enhanced Projects */}
      <section className="py-20 px-6 relative" id="projects">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent"
          >
            {t.projects}
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
              {t.petProjects.map((project, index) => (
                <EnhancedProjectCard
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

      {/* Enhanced Footer */}
      <footer
        className={`py-12 px-6 border-t ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              className="text-center md:text-left"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                {t.name}
              </h3>
              <p
                className={`text-sm sm:text-base ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.about}
              </p>
            </motion.div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setLanguage(language === "en" ? "ru" : "en")}
                className={`magnetic-element flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-sm rounded-full text-xs sm:text-sm transition-colors ${
                  isDark
                    ? "bg-gray-700/50 hover:bg-gray-600/50 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                {language === "en" ? "RU" : "EN"}
              </motion.button>

              <motion.button
                onClick={() => setIsDark(!isDark)}
                className={`magnetic-element p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                  isDark
                    ? "bg-gray-700/50 hover:bg-gray-600/50"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                )}
              </motion.button>

              <div className="flex gap-3">
                <motion.a
                  href="mailto:contact@inchange.dev"
                  className={`magnetic-element p-2 sm:p-3 backdrop-blur-sm rounded-full transition-colors ${
                    isDark
                      ? "bg-gray-700/50 hover:bg-orange-500/20 text-orange-400"
                      : "bg-gray-100 hover:bg-orange-500/20 text-orange-600"
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/dauxdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`magnetic-element p-2 sm:p-3 backdrop-blur-sm rounded-full transition-colors ${
                    isDark
                      ? "bg-gray-700/50 hover:bg-red-500/20 text-red-400"
                      : "bg-gray-100 hover:bg-red-500/20 text-red-600"
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          <motion.div
            className={`mt-8 pt-8 border-t text-center text-xs sm:text-sm ${
              isDark
                ? "border-gray-700 text-gray-400"
                : "border-gray-200 text-gray-500"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © 2025 INCHANGE.DEV. Building reliable infrastructure with passion.
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App
