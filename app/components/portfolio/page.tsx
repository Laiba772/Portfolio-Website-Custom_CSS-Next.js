'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/app/styles/style.css'; // Import the custom CSS

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState<Record<number, boolean>>({});

  const projects = [
    {
      id: 1,
      imageSrc: '/service-2.PNG',
      title: 'Travelling-Website',
      description: 'Travel, enjoy and live a new and full life Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening Park Gate sell they west hard for the.',
      link: 'https://travelling-website-next-js.vercel.app/'
    },
    {
      id: 2,
      imageSrc: '/Screenshot 2024-11-13 160905.png',
      title: 'Resume Builder',
      description: 'Whether youre in tech, finance, or any other industry, our platform makes creating a professional resume quick and easy. Just fill in your details and youre ready to impress.',
      link: 'https://hackatone1-mile1-2.vercel.app/'
    },
    {
      id: 3,
      imageSrc: '/service-1.PNG',
      title: 'E-Commerce-Website',
      description: ' The blog features a variety of articles discussing coffee beans, brewing techniques, product reviews, and stories from the coffee world.',
      link: 'https://e-commerce-shopping-website-next-js.vercel.app/'
    },
  ];

  useEffect(() => {
    const projectElements = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => ({ ...prev, [index]: true }));
          } else {
            setVisibleProjects((prev) => ({ ...prev, [index]: false }));
          }
        });
      },
      { threshold: 0.5 }
    );

    projectElements.forEach((project) => observer.observe(project));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="project-section">
      <h2>Project</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-index={index}
            className={`project-card ${visibleProjects[index] ? 'visible' : ''}`}
          >
            <div className="project-image-wrapper">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-md"
              />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">
              {project.description}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
