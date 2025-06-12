import React from "react"
import CustomCursor from "./CustomCursor"

const PageLayout = ({ children, isDark }) => {
  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <CustomCursor isDark={isDark} />
      {children}
    </div>
  )
}

export default PageLayout