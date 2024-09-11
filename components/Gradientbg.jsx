'use client'
import React, { useState, useEffect } from 'react'

const colorCombos = [
  {
    name: 'Blue Green',
    colors: ['#041e3c', '#04181f', '#000000'],
    accent: 'rgba(29, 78, 216, 0.15)'
  },
  {
    name: 'Purple Pink',
    colors: ['#4a0e4e', '#3d0a3d', '#000000'],
    accent: 'rgba(219, 39, 119, 0.15)'
  },
  {
    name: 'Teal Orange',
    colors: ['#0d4a4d', '#1f3a32', '#000000'],
    accent: 'rgba(245, 158, 11, 0.15)'
  },
  {
    name: 'Deep Red',
    colors: ['#4a0f0f', '#380c0c', '#000000'],
    accent: 'rgba(239, 68, 68, 0.15)'
  },
  {
    name: 'Emerald Gold',
    colors: ['#064e3b', '#065f46', '#000000'],
    accent: 'rgba(252, 211, 77, 0.15)'
  },
  {
    name: 'Indigo Lavender',
    colors: ['#3730a3', '#4338ca', '#000000'],
    accent: 'rgba(199, 210, 254, 0.15)'
  },
  {
    name: 'Crimson Rose',
    colors: ['#881337', '#9f1239', '#000000'],
    accent: 'rgba(253, 164, 175, 0.15)'
  },
  {
    name: 'Midnight Cyan',
    colors: ['#164e63', '#155e75', '#000000'],
    accent: 'rgba(103, 232, 249, 0.15)'
  }
]

export default function GradientBg({ children }) {
  const [colorCombo, setColorCombo] = useState(colorCombos[0])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const randomCombo = colorCombos[Math.floor(Math.random() * colorCombos.length)]
    setColorCombo(randomCombo)
    
    // Trigger the animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <style jsx>{`
        @keyframes fadeInSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient {
          animation: fadeInSlideDown 1.5s ease-in-out forwards;
        }
      `}</style>
      {/* Background gradient with animation */}
      <div 
        className={`absolute inset-0 ${isLoaded ? 'animate-gradient' : ''}`}
        style={{
          background: `
            radial-gradient(ellipse at top, ${colorCombo.accent}, transparent 60%),
            linear-gradient(to bottom, 
              ${colorCombo.colors[0]} 0%, 
              ${colorCombo.colors[1]} 30%, 
              ${colorCombo.colors[2]} 100%)
          `,
          backgroundBlendMode: 'screen',
          opacity: 0, // Start with 0 opacity
          transform: 'translateY(-50px)', // Start from top
        }}
      />
      {/* Content with animation */}
      <div 
        className={`relative z-10 ${isLoaded ? 'animate-gradient' : ''}`}
        style={{
          opacity: 0, // Start with 0 opacity
          transform: 'translateY(-50px)', // Start from top
        }}
      >
        {children}
      </div>
    </div>
  )
}