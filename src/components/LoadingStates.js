import React from "react"
import { motion } from "framer-motion"

export const SkeletonCard = ({ isDark }) => {
  return (
    <div
      className={`p-6 h-full rounded-3xl border ${
        isDark
          ? "bg-gray-800/50 border-gray-700/50"
          : "bg-white/90 border-gray-200/50"
      }`}
    >
      <div className="animate-pulse">
        <div
          className={`w-16 h-16 rounded-2xl mb-4 ${
            isDark ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
        <div
          className={`h-6 rounded mb-3 ${
            isDark ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
        <div
          className={`h-4 rounded mb-2 ${
            isDark ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
        <div
          className={`h-4 rounded mb-4 w-3/4 ${
            isDark ? "bg-gray-700" : "bg-gray-200"
          }`}
        />
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-6 w-16 rounded-full ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <div
            className={`h-8 flex-1 rounded-full ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div
            className={`h-8 flex-1 rounded-full ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
        </div>
      </div>
    </div>
  )
}

export const SkeletonTimeline = ({ isDark }) => {
  return (
    <div className="relative">
      <div
        className={`absolute left-8 top-0 bottom-0 w-0.5 ${
          isDark ? "bg-gray-700" : "bg-gray-300"
        }`}
      />

      {[1, 2, 3].map((i) => (
        <div key={i} className="relative flex items-start mb-12 last:mb-0">
          <div
            className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-4 ${
              isDark
                ? "bg-gray-800 border-gray-600"
                : "bg-gray-100 border-gray-300"
            }`}
          />

          <div
            className={`ml-8 flex-grow p-6 rounded-2xl border ${
              isDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/90 border-gray-200/50"
            }`}
          >
            <div className="animate-pulse">
              <div
                className={`h-6 rounded mb-3 w-2/3 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div
                className={`h-4 rounded mb-2 w-1/2 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div
                className={`h-4 rounded mb-2 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div
                className={`h-4 rounded w-3/4 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const LoadingSpinner = ({ isDark }) => {
  return (
    <motion.div
      className="flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={`w-12 h-12 border-4 border-t-transparent rounded-full ${
          isDark ? "border-orange-500" : "border-orange-600"
        }`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  )
}

export const ProgressiveLoader = ({
  children,
  isLoading,
  skeleton,
  isDark,
}) => {
  if (isLoading) {
    return skeleton ? skeleton : <LoadingSpinner isDark={isDark} />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
