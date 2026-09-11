import { useState } from 'react';
import Button from './Button';

/**
 * Hero section: name, role, profile image, and primary CTA buttons.
 * Profile photo appears on the right (desktop) or above text (mobile).
 * Place your image at public/profile.jpg or public/profile.png.
 */
export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="section-padding min-h-[85vh] flex flex-col justify-center relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative gradient blob */}
      <div
        className="absolute top-1/4 -right-20 w-72 h-72 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-20 w-64 h-64 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-5xl mx-auto w-full">
        {/* Text block */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 animate-fade-in">
            Hello, I&apos;m
          </p>
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium border border-green-200 dark:border-green-800 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
            Open to Full-Stack Internships
          </span>
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-up"
          >
            Shivraj Ghode
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Full-Stack Web Developer
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Building responsive, database-driven web applications and RESTful APIs with Django/Flask and SQL. Exploring data science, ML, and cloud platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="primary" onClick={scrollToContact}>
              Get in Touch
            </Button>
            <Button variant="outline" onClick={scrollToProjects}>
              View Projects
            </Button>
          </div>
        </div>

        {/* Profile image: add public/profile.jpg or public/profile.png */}
        <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-in">
          <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden border-4 border-indigo-200 dark:border-indigo-800 shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            {!imageError ? (
              <img
                src="/profile.jpg"
                alt="Shivraj Ghode"
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (e.target.src.endsWith('.jpg')) {
                    e.target.src = '/profile.png';
                  } else {
                    setImageError(true);
                  }
                }}
              />
            ) : (
              <span className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
                SG
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
