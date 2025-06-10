import React, { useEffect, useState } from "react"

const CustomCursor = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 hidden md:block ${
        isDark ? "bg-orange-400" : "bg-orange-500"
      }`}
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        transition: "all 0.1s ease-out",
      }}
    />
  )
}

export default CustomCursor
