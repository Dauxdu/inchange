import React, { useEffect, useState, useCallback, useRef } from "react"
import { motion, useSpring } from "framer-motion"

const MagneticCursor = ({ isDark }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")
  const cursorRef = useRef(null)

  // Использование useSpring для более плавного следования курсора
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  // Optimized throttle function
  const throttledMouseMove = useCallback(
    throttle((x, y) => {
      mouseX.set(x)
      mouseY.set(y)
    }, 8), // ~120fps for smoother movement
    [mouseX, mouseY]
  )

  useEffect(() => {
    const mouseMove = (e) => {
      // Add boundary checks to prevent cursor from jumping
      const x = Math.max(0, Math.min(window.innerWidth, e.clientX))
      const y = Math.max(0, Math.min(window.innerHeight, e.clientY))
      throttledMouseMove(x, y)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.matches(
        "button, a, .magnetic-element, .magnetic-button, [role='button']"
      )

      if (isInteractive) {
        setIsHovering(true)
        if (target.matches(".magnetic-button")) {
          setCursorVariant("button")
        } else if (target.matches("a")) {
          setCursorVariant("link")
        } else {
          setCursorVariant("hover")
        }
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      const isInteractive = target.matches(
        "button, a, .magnetic-element, .magnetic-button, [role='button']"
      )

      if (isInteractive) {
        setIsHovering(false)
        setCursorVariant("default")
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorVariant("default")
    }

    // Only add listeners if user has a mouse (not touch device)
    const mediaQuery = window.matchMedia("(pointer: fine)")
    if (mediaQuery.matches) {
      window.addEventListener("mousemove", mouseMove, { passive: true })
      document.addEventListener("mouseover", handleMouseOver, { passive: true })
      document.addEventListener("mouseout", handleMouseOut, { passive: true })
      document.addEventListener("mouseleave", handleMouseLeave, {
        passive: true,
      })
    }

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

  const getCursorSize = (variant) => {
    switch (variant) {
      case "button":
        return 32
      case "link":
        return 24
      case "hover":
        return 20
      default:
        return 16
    }
  }

  const size = getCursorSize(cursorVariant)

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: getOrangeColor(cursorVariant),
          mixBlendMode: isDark ? "difference" : "multiply",
          x: mouseX,
          y: mouseY,
          translateX: -size / 2,
          translateY: -size / 2,
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-50 hidden md:block rounded-full border ${
          isDark ? "border-orange-400/60" : "border-orange-500/60"
        }`}
        style={{
          width: 32,
          height: 32,
          x: mouseX,
          y: mouseY,
          translateX: -16,
          translateY: -16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
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
