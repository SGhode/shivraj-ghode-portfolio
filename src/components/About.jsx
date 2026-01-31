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
          Full-Stack Web Developer based in Pune, with a focus on building responsive, database-driven web applications and RESTful APIs using Django/Flask and SQL. I also work with data analysis and machine learning using Python, Scikit-Learn, and feature engineering.
        </p>
        <p className="section-subtitle">
          I&apos;ve developed full-stack web applications integrated with REST APIs and SQL databases, integrated data analysis and ML models into web-based solutions, and performed EDA and visualization on real-world datasets. I maintain clean code standards and version control with Git and GitHub, and I&apos;m always open to collaboration and new opportunities.
        </p>
      </div>
    </section>
  );
}
