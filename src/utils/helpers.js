import { SCROLL_BEHAVIOR } from "./constants"

/**
 * Scroll to a section smoothly
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: SCROLL_BEHAVIOR.SMOOTH })
  }
}

/**
 * Detect browser language
 * @returns {string} - Two letter language code
 */
export const detectBrowserLanguage = () => {
  return navigator.language.split("-")[0]
}

/**
 * Format duration for animations
 * @param {number} index - Index for delay calculation
 * @param {number} baseDelay - Base delay amount
 * @returns {number} - Calculated delay
 */
export const calculateDelay = (index, baseDelay = 0.2) => {
  return index * baseDelay
}

/**
 * Get theme-appropriate classes
 * @param {boolean} isDark - Whether dark theme is active
 * @param {string} darkClass - Classes for dark theme
 * @param {string} lightClass - Classes for light theme
 * @returns {string} - Appropriate classes
 */
export const getThemeClasses = (isDark, darkClass, lightClass) => {
  return isDark ? darkClass : lightClass
}
