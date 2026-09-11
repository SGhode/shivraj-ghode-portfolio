/**
 * Skills section: grouped directly from the current resume.
 */
const skillCategories = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML/CSS'],
    icon: '01',
  },
  {
    title: 'Frameworks/Libraries',
    items: ['Spring Boot', 'React', 'Node.js', 'Flask', 'Bootstrap'],
    icon: '02',
  },
  {
    title: 'Databases',
    items: ['MySQL', 'SQL'],
    icon: '03',
  },
  {
    title: 'Tools/Platforms',
    items: ['Git/GitHub', 'Docker', 'Postman', 'VS Code', 'Linux'],
    icon: '04',
  },
  {
    title: 'Core Competencies',
    items: ['Data Structures & Algorithms', 'REST API Design', 'Full-Stack Web Development', 'Software Development Life Cycle'],
    icon: '05',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title text-center mb-4">
        Skills
      </h2>
      <p className="section-subtitle text-center mx-auto mb-12">
        Technologies and tools I work with to build and ship projects.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-3xl mb-3 block" aria-hidden="true">
              {category.icon}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
