'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/app/styles/style.css'; // Import the custom CSS

const Hero = () => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const paragraphText = "A Creative Frontend Developer and UI/UX Designer.".split(" ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHeroVisible(true);
    }, 600);

    let index = 0;
    const interval = setInterval(() => {
      if (index < paragraphText.length) {
        setDisplayedText((prev) => [...prev, paragraphText[index]]);
        index++;
      } else {
        setDisplayedText([]);
        index = 0;
      }
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main
      className={`hero-container ${isHeroVisible ? 'visible' : 'hidden'}`}
    >
      <div className="image-wrapper sm">
        <Image className="rounded-md border-white border-2" src="/u-portfolio.avif" alt="portfolio" width={250} height={250} />
      </div>
      <div className="hero-text">
        <span className="hero-subtitle">Hey, I am Laiba Naz</span>
        <h1 className="hero-title">
          {displayedText.join(" ")}
        </h1>
        <p className="hero-paragraph">
          My journey in frontend development has equipped me with the skills to design intuitive interfaces that not only look great but also enhance usability.
        </p>
      </div>
      <div className="hidden md:block image-wrapper lg">
        <Image className="rounded-md" src="/u-portfolio.avif" alt="portfolio" width={400} height={500} />
      </div>
    </main>
  );
};

export default Hero;
