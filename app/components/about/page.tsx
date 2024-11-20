'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/app/styles/style.css'; // Import the custom CSS

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      const sectionTop = aboutSection?.getBoundingClientRect().top;
      const triggerHeight = window.innerHeight * 0.75;
      if (sectionTop && sectionTop < triggerHeight) {
        setIsVisible(true);
      }
    };

    // Run handleScroll on mount to check visibility
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="mt-16 md:mt-20 lg:my-28">
      <div
        id="about-section"
        className={`about-section ${isVisible ? 'visible' : 'hidden'}`}
      >
        {/* Heading for Mobile */}
        <h3 className="about-heading-mobile md:hidden">
          ABOUT
        </h3>

        {/* Image Section */}
        <div className="about-image">
          <Image
            src="/about-3-removebg-preview (1).png"
            alt="about-image"
            width={500}
            height={400}
          />
        </div>

        {/* Text Section */}
        <div className="about-text-section">
          <h3 className="about-heading-desktop hidden md:inline-block">
          <span>ABOUT ME</span>

          </h3>
          <h2 className="about-title">
            Curious About me? Here you have it:
          </h2>
          <p className="about-paragraph">
            I&apos;m Laiba Naz, a dedicated Frontend Developer and passionate
            UI/UX Designer who thrives on crafting intuitive and visually
            engaging digital experiences. With a strong foundation in frontend
            technologies and a keen eye for design, I specialize in building
            clean, responsive interfaces that balance form and function.
          </p>
          <br />
          <p className="about-paragraph">
            My journey in web development is driven by a love for learning and
            the constant pursuit of improvement. Beyond coding, I&apos;m always
            exploring new design trends and techniques to keep my work both
            innovative and impactful.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
