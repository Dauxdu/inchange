import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const ServicesCarousel = ({ isDark, language }) => {
  const controls = useAnimation()
  const containerRef = useRef(null)

  // Логотипы компаний в разных форматах (квадратные и прямоугольные)
  const companies = [
    {
      id: 1,
      logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
      format: "square",
      name: "Docker",
    },
    {
      id: 2,
      logo: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
      format: "square",
      name: "Jenkins",
    },
    {
      id: 3,
      logo: "https://www.datocms-assets.com/2885/1629941242-logo-terraform-main.svg",
      format: "square",
      name: "Terraform",
    },
    {
      id: 4,
      logo: "https://grafana.com/static/img/menu/grafana2.svg",
      format: "rectangular",
      name: "Grafana",
    },
    {
      id: 5,
      logo: "https://about.gitlab.com/images/press/logo/svg/gitlab-logo-gray-rgb.svg",
      format: "rectangular",
      name: "GitLab",
    },
    {
      id: 6,
      logo: "https://www.redhat.com/cms/managed-files/Logo-Red_Hat-OpenShift-A-Standard-RGB.svg",
      format: "rectangular",
      name: "OpenShift",
    },
  ]

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

  // Конфигурация анимации
  const itemWidth = 220 // 200px width + 20px gap
  const totalWidth = companies.length * itemWidth

  // Дублируем логотипы для бесконечной прокрутки (минимум 3 копии для плавности)
  const duplicatedCompanies = [...companies, ...companies, ...companies]

  // Непрерывная бесконечная анимация
  useEffect(() => {
    const startAnimation = async () => {
      // Начинаем с позиции одного полного набора (чтобы избежать видимых скачков)
      await controls.set({ x: -totalWidth })

      // Запускаем бесконечную анимацию
      controls.start({
        x: -totalWidth * 2, // Двигаемся к концу второго набора
        transition: {
          duration: companies.length * 3, // 3 секунды на компанию
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      })
    }

    startAnimation()
  }, [controls, totalWidth, companies.length])

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="services">
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

        {/* Плавная карусель с паузой при наведении */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-5"
            animate={controls}
            style={{
              width: `${duplicatedCompanies.length * itemWidth}px`,
              willChange: "transform",
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={`${company.id}-${Math.floor(
                  index / companies.length
                )}-${index}`}
                className="flex-shrink-0"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                style={{ width: "200px" }}
              >
                <div
                  className={`w-full h-32 ${
                    isDark
                      ? "bg-gray-800/40 border border-gray-700/40 hover:bg-gray-800/60 hover:border-gray-600/60"
                      : "bg-white/90 border border-gray-200/60 hover:bg-white hover:border-gray-300/80"
                  } rounded-2xl backdrop-blur-sm flex items-center justify-center p-6 transition-all duration-300 hover:shadow-xl group cursor-pointer`}
                  title={company.name}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className={`max-w-full max-h-full object-contain filter transition-all duration-300 ${
                      isDark
                        ? "brightness-90 group-hover:brightness-110"
                        : "brightness-100 group-hover:brightness-90"
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
                    loading="lazy"
                  />
                </div>
              </motion.div>
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

        {/* Улучшенный индикатор прогресса */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <div
              className={`w-72 h-1.5 rounded-full overflow-hidden ${
                isDark ? "bg-gray-700/50" : "bg-gray-200"
              }`}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full"
                initial={{ x: "-100%" }}
                animate={{
                  x: ["0%", "100%"],
                  transition: {
                    duration: companies.length * 3,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }}
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCarousel
