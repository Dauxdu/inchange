import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SkillsRadar = ({ isDark, language }) => {
  const canvasRef = useRef(null);

  const skills = {
    en: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'Terraform', level: 80 },
      { name: 'CI/CD', level: 90 },
      { name: 'Monitoring', level: 85 },
      { name: 'Linux', level: 95 },
      { name: 'Python', level: 70 }
    ],
    ru: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'Terraform', level: 80 },
      { name: 'CI/CD', level: 90 },
      { name: 'Мониторинг', level: 85 },
      { name: 'Linux', level: 95 },
      { name: 'Python', level: 70 }
    ]
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set colors based on theme
    const primaryColor = isDark ? '#f97316' : '#ea580c';
    const secondaryColor = isDark ? 'rgba(249, 115, 22, 0.1)' : 'rgba(234, 88, 12, 0.1)';
    const textColor = isDark ? '#e5e7eb' : '#374151';
    const gridColor = isDark ? 'rgba(249, 115, 22, 0.2)' : 'rgba(234, 88, 12, 0.2)';

    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    const currentSkills = skills[language] || skills.en;
    const angleStep = (2 * Math.PI) / currentSkills.length;

    // Draw grid lines
    currentSkills.forEach((_, index) => {
      const angle = index * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      );
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw skill area
    ctx.beginPath();
    currentSkills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const skillRadius = (radius * skill.level) / 100;
      const x = centerX + Math.cos(angle) * skillRadius;
      const y = centerY + Math.sin(angle) * skillRadius;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = secondaryColor;
    ctx.fill();
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw skill points
    currentSkills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const skillRadius = (radius * skill.level) / 100;
      const x = centerX + Math.cos(angle) * skillRadius;
      const y = centerY + Math.sin(angle) * skillRadius;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = primaryColor;
      ctx.fill();
    });

    // Draw skill labels
    ctx.fillStyle = textColor;
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    
    currentSkills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const labelRadius = radius + 20;
      const x = centerX + Math.cos(angle) * labelRadius;
      const y = centerY + Math.sin(angle) * labelRadius;
      
      ctx.fillText(skill.name, x, y + 4);
      
      // Draw percentage
      ctx.font = '10px Inter, sans-serif';
      ctx.fillStyle = primaryColor;
      ctx.fillText(`${skill.level}%`, x, y + 16);
      ctx.font = '12px Inter, sans-serif';
      ctx.fillStyle = textColor;
    });

  }, [isDark, language]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col items-center"
    >
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="max-w-full h-auto"
      />
    </motion.div>
  );
};

export default SkillsRadar;