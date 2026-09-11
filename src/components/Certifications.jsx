const certifications = [
  {
    title: 'Oracle Certified Professional: OCI 2025 Data Science Professional & Generative AI Professional',
    issuer: 'Oracle',
    mark: 'O',
    date: 'Aug 2025',
  },
  {
    title: 'Foundation Course on IR4.0 Technologies',
    issuer: 'TechSaksham (Microsoft & SAP)',
    mark: 'MS',
    date: 'Feb 2025',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" aria-labelledby="certifications-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="certifications-heading" className="section-title text-center mb-4">Certifications</h2>
        <p className="section-subtitle text-center mx-auto mb-10">Credentials supporting my work across software and emerging technologies.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((certification) => (
            <article key={certification.title} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 shrink-0 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-sm" aria-label={`${certification.issuer} logo`}>{certification.mark}</span>
                <div>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">{certification.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{certification.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{certification.issuer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}