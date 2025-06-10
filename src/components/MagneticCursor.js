import React, { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

const MagneticCursor = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  // Debounce mouse movement for better performance
  const throttledMouseMove = useCallback(
    throttle((x, y) => {
      setMousePosition({ x, y })
    }, 16), // ~60fps
    []
  )

  useEffect(() => {
    const mouseMove = (e) => {
      // Add boundary checks to prevent cursor from jumping
      const x = Math.max(0, Math.min(window.innerWidth, e.clientX))
      const y = Math.max(0, Math.min(window.innerHeight, e.clientY))
      throttledMouseMove(x, y)
    }

    const handleMouseOver = (e) => {
      if (e.target.matches("button, a, .magnetic-element, .magnetic-button")) {
        setIsHovering(true)
        if (e.target.matches(".magnetic-button")) {
          setCursorVariant("button")
        } else if (e.target.matches("a")) {
          setCursorVariant("link")
        } else {
          setCursorVariant("hover")
        }
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.matches("button, a, .magnetic-element, .magnetic-button")) {
        setIsHovering(false)
        setCursorVariant("default")
      }
    }

    const handleMouseLeave = () => {
      // Reset cursor when mouse leaves window
      setIsHovering(false)
      setCursorVariant("default")
    }

    window.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [throttledMouseMove])

  const getOrangeColor = (variant) => {
    switch (variant) {
      case "button":
        return "#ea580c" // orange-600
      case "link":
        return "#fb923c" // orange-400
      case "hover":
        return "#f97316" // orange-500
      default:
        return "#f97316" // orange-500
    }
  }

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: getOrangeColor("default"),
      mixBlendMode: isDark ? "difference" : "multiply",
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: getOrangeColor("button"),
      mixBlendMode: isDark ? "difference" : "multiply",
    },
    link: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1.5,
      backgroundColor: getOrangeColor("link"),
      mixBlendMode: isDark ? "difference" : "multiply",
    },
    hover: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1.3,
      backgroundColor: getOrangeColor("hover"),
      mixBlendMode: isDark ? "difference" : "multiply",
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-50 hidden md:block ${
          isDark ? "border-orange-400" : "border-orange-500"
        }`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
      />
    </>
  )
}

// Throttle function for performance optimization
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export default MagneticCursor
