import React from "react"
import { motion } from "framer-motion"

const Badge = ({
  children,
  variant = "default",
  size = "sm",
  className = "",
  hover = true,
  ...props
}) => {
  const baseClasses = "font-medium rounded-full text-center transition-all"

  const variants = {
    default: "bg-orange-500/20 text-orange-300 hover:bg-orange-500/30",
    success: "bg-green-500/20 text-green-300",
    primary: "bg-blue-500/20 text-blue-300",
    gradient:
      "bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-400/30",
  }

  const sizes = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  const variantClass = variants[variant] || variants.default
  const sizeClass = sizes[size] || sizes.sm

  const Component = hover ? motion.span : "span"
  const motionProps = hover
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      }
    : {}

  return (
    <Component
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Badge
