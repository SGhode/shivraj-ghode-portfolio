/**
 * About Me section: short professional intro.
 */
export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-gray-800/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="about-heading" className="section-title">
          About Me
        </h2>
        <p className="section-subtitle mb-4">
          Final-year Information Technology Engineering student with a strong foundation in full-stack development (Java, Spring Boot, React, MySQL) and hands-on experience across internships in Java Full-Stack Development and AI/ML. Skilled in building end-to-end applications using REST APIs, Spring Security, and modern frontend frameworks, including database-driven web applications and RESTful APIs with Flask/FastAPI and SQL. Currently seeking opportunities to apply and grow these skills in a full-stack development role.
        </p>
      </div>
    </section>
  );
}
