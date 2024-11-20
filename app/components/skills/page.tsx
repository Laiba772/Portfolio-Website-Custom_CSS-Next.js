'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import '@/app/styles/style.css'; // Import the custom CSS

const Skills = () => {
  const skills = [
    { src: "/typescript.png", alt: "TypeScript", name: "TypeScript" },
    { src: "/react.svg", alt: "React", name: "React" },
    { src: "/tailwind.png", alt: "Tailwind CSS", name: "Tailwind CSS" },
    { src: "/Figma.webp", alt: "Figma", name: "Figma" },
    { src: "/next-js.svg", alt: "Next.js", name: "Next.js" },
    { src: "/uiux.jpeg", alt: "UI/UX Design", name: "UI/UX Design" },
  ];

  const variants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="skills-section">
      <h3>
        <span>SKILLS</span>
        <p>The Skills and tools I am really good at:</p>
      </h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={variants}
            className="skill-card"
          >
            <motion.div className="skill-image-wrapper">
              <Image
                src={skill.src}
                alt={skill.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </motion.div>
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
