import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ServicesCarousel = ({ isDark, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Логотипы компаний в разных форматах (квадратные и прямоугольные)
  const companies = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      format: "rectangular"
    },
    {
      id: 2,
      logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
      format: "square"
    },
    {
      id: 3,
      logo: "https://kubernetes.io/images/kubernetes-horizontal-color.png", 
      format: "rectangular"
    },
    {
      id: 4,
      logo: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
      format: "square"
    },
    {
      id: 5,
      logo: "https://www.datocms-assets.com/2885/1629941242-logo-terraform-main.svg",
      format: "square"
    },
    {
      id: 6,
      logo: "https://prometheus.io/assets/prometheus_logo_grey.svg",
      format: "square"
    },
    {
      id: 7,
      logo: "https://grafana.com/static/img/menu/grafana2.svg",
      format: "rectangular"
    },
    {
      id: 8,
      logo: "https://about.gitlab.com/images/press/logo/svg/gitlab-logo-gray-rgb.svg",
      format: "rectangular"
    },
    {
      id: 9,
      logo: "https://www.redhat.com/cms/managed-files/Logo-Red_Hat-OpenShift-A-Standard-RGB.svg",
      format: "rectangular"
    },
    {
      id: 10,
      logo: "https://www.nginx.com/wp-content/uploads/2018/08/NGINX-logo-rgb-large.png",
      format: "rectangular"
    }
  ]

  const content = {
    en: {
      title: "Technologies & Services",
      subtitle: "Tools and platforms I work with professionally"
    },
    ru: {
      title: "Обслуживал",
      subtitle: "Инструменты и платформы, с которыми работаю профессионально"
    }
  }

  const t = content[language]

  // Непрерывная плавная анимация
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [companies.length])

  // Дублируем логотипы для бесконечной прокрутки
  const duplicatedCompanies = [...companies, ...companies, ...companies]

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

        {/* Плавная карусель в стиле Zabbix */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: `${-currentIndex * (200 + 32)}px` // 200px ширина + 32px gap
            }}
            transition={{
              duration: 2.5,
              ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier для плавности
            }}
            style={{
              width: `${duplicatedCompanies.length * (200 + 32)}px`
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={`${company.id}-${Math.floor(index / companies.length)}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`${
                    company.format === "square" ? "w-24 h-24" : "w-32 h-20"
                  } ${
                    isDark
                      ? "bg-gray-800/30 border border-gray-700/30"
                      : "bg-white/80 border border-gray-200/50"
                  } rounded-xl backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg gpu-accelerated`}
                  style={{
                    width: "200px",
                    height: "120px"
                  }}
                >
                  <img
                    src={company.logo}
                    alt={`Company ${company.id} logo`}
                    className={`max-w-full max-h-full object-contain filter transition-all duration-300 ${
                      isDark ? "brightness-90 hover:brightness-110" : "hover:brightness-95"
                    }`}
                    style={{
                      filter: company.logo.includes('prometheus') || company.logo.includes('gitlab') ? 
                        (isDark ? 'invert(1) brightness(0.9)' : 'none') : 'none'
                    }}
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

        {/* Индикатор прогресса */}
        <div className="flex justify-center mt-8">
          <div
            className={`w-64 h-1 rounded-full overflow-hidden ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width: `${((currentIndex % companies.length) + 1) * (100 / companies.length)}%`
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCarousel