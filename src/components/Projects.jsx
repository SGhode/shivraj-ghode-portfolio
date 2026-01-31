import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Button from './Button';

/**
 * Projects section: grid of project cards and optional resume CTA.
 */
export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-800/50"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section-title text-center mb-4">
        Projects
      </h2>
      <p className="section-subtitle text-center mx-auto mb-10">
        A selection of things I&apos;ve built. More on GitHub.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="secondary"
          href="/Resume_Shivraj_Ghode.pdf"
          download="Resume_Shivraj_Ghode.pdf"
          className="inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </Button>
      </div>
    </section>
  );
}
