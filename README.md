# Shivraj — Personal Portfolio

A modern, responsive personal portfolio built with **React.js**, **Tailwind CSS**, and **JavaScript**. Single-page layout with Hero, About, Skills, Projects, Contact, and Footer. Includes dark mode toggle and smooth scrolling.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- JavaScript (JSX)

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx    # Sticky nav + dark mode toggle
│   ├── Hero.jsx      # Name, role, CTAs
│   ├── About.jsx     # Professional intro
│   ├── Skills.jsx    # Frontend, Backend, Tools
│   ├── Projects.jsx  # Project grid + resume CTA
│   ├── ProjectCard.jsx
│   ├── Contact.jsx   # Contact form
│   ├── Footer.jsx    # Social links
│   └── Button.jsx    # Reusable button
├── context/
│   └── ThemeContext.jsx   # Dark/light mode
├── data/
│   └── projects.js   # Project entries
├── App.jsx
├── main.jsx
└── index.css
```

## Setup

```bash
npm install
npm run dev
```

Open [(https://portfolio-drab-five-80.vercel.app/)](https://portfolio-drab-five-80.vercel.app/).

## Build

```bash
npm run build
npm run preview   # optional: preview production build
```

## Customize Before Deploy

1. **Resume**  
   Place your `resume.pdf` in the `public/` folder. The "Download Resume" button links to `/resume.pdf`.

2. **Contact form**  
   In `src/components/Contact.jsx`, replace `your-email@example.com` in the `mailto:` URL with your real email (or wire the form to a backend/Formspree/etc.).

3. **Social links**  
   In `src/components/Footer.jsx`, update the `socialLinks` array with your GitHub, LinkedIn, and Twitter URLs.

4. **Projects**  
   Edit `src/data/projects.js` to add/update project title, description, tech stack, and GitHub links.

## Deploy

- **Vercel**: Connect the repo; build command and output dir are set in `vercel.json`.
- **Netlify**: Connect the repo; build settings are in `netlify.toml` (SPA redirect included).

Both platforms will run `npm run build` and publish the `dist/` folder.
