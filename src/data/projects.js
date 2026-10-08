/** Project data from the current resume. */
export const projects = [
  {
    id: 3,
    title: 'Job Portal',
    description:
      'Full-stack job application web app built with Spring Boot and Spring MVC, using a layered Controller-Service-Repository architecture. Handles job posting through forms with data binding between JSP views and Java model objects, backed by a MySQL database.',
    techStack: ['Java', 'Spring Boot', 'Spring MVC', 'JSP', 'MySQL', 'Maven'],
  },
  {
    id: 1,
    title: 'ExamGuard AI',
    description:
      'Full-stack exam integrity and proctoring platform with dual student/admin authentication, role-based access, tab-switch detection, paste prevention, and behavioral anomaly logging.',
    techStack: ['React', 'FastAPI', 'MongoDB', 'Beanie ODM', 'JWT', 'bcrypt'],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com/SGhode/ExamGuard---AI-Project.git',
  },
  {
    id: 2,
    title: 'Smart Resume Analyzer + Job Matcher',
    description:
      'Resume analysis and job matching application with a React frontend, SQL-backed data layer, REST APIs, ML-based candidate scoring, and a data preprocessing pipeline.',
    techStack: ['React', 'SQL', 'REST APIs', 'Machine Learning', 'Git/GitHub'],
    liveDemoUrl: '#',
    githubUrl: '#',
  },
];
