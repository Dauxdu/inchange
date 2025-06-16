import React from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Globe, Github, Mail } from "lucide-react"
import Button from "../components/Button"
import SocialIcon from "../components/SocialIcon"

const TelegramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 2.38 11.7c-.84-.25-.85-.84.18-1.25l17.06-6.2c.73-.27 1.4.18 1.15 1.25l-2.9 13.85c-.2.95-.74 1.19-1.5.74L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
  </svg>
)

const FooterSection = ({
  content,
  language,
  setLanguage,
  isDark,
  setIsDark,
}) => {
  return (
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
              {content.name}
            </h3>
            <p
              className={`text-sm sm:text-base ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {content.about}
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => setLanguage(language === "en" ? "ru" : "en")}
              variant="ghost"
              size="sm"
              className={`magnetic-element ${
                isDark
                  ? "bg-gray-700/50 hover:bg-gray-600/50 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              {language === "en" ? "RU" : "EN"}
            </Button>

            <Button
              onClick={() => setIsDark(!isDark)}
              variant="ghost"
              size="sm"
              className={`magnetic-element p-2 sm:p-3 rounded-full ${
                isDark
                  ? "bg-gray-700/50 hover:bg-gray-600/50"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
              )}
            </Button>

            <div className="flex gap-3">
              <SocialIcon
                href="mailto:contact@inchange.dev"
                icon={Mail}
                label="Email"
                color="orange"
                isDark={isDark}
              />
              <SocialIcon
                href="https://t.me/zeroxc6zero1"
                icon={TelegramIcon}
                label="Telegram"
                color="blue"
                isDark={isDark}
              />
              <SocialIcon
                href="https://github.com/dauxdu"
                icon={Github}
                label="GitHub"
                color="red"
                isDark={isDark}
              />
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
          <p>© 2025 INCHANGE.DEV. All rights reserved.</p>

          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterSection
