const experience = {
  role: 'Java Full-Stack Development Intern',
  company: 'CodeForSuccess Pvt. Ltd.',
  period: 'Feb 2025 - Jun 2025',
  details: [
    'Developed Spring Boot and MySQL REST services consumed by a React frontend.',
    'Built interactive user interfaces with HTML, CSS, and JavaScript.',
    'Contributed to a microservices architecture and containerized services with Docker.',
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800/50" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="experience-heading" className="section-title text-center mb-4">Experience</h2>
        <p className="section-subtitle text-center mx-auto mb-10">Building practical full-stack software in collaborative teams.</p>
        <article className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.role}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">{experience.company}</p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</p>
          </div>
          <ul className="space-y-3">
            {experience.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-gray-600 dark:text-gray-400">
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}