/**
 * Footer with social links and copyright.
 */
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/SGhode', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivraj-ghode-15563a28b/', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/ShivrajGhode', icon: 'twitter' },
  { label: 'WhatsApp', href: 'https://wa.me/917028792266?text=Hi%20Shivraj%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect', icon: 'whatsapp' },
];

const iconPaths = {
  github: (
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  twitter: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  whatsapp: (
    <path d="M20.52 3.48A11.86 11.86 0 0012.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 005.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43zm-8.44 18.3h-.01a9.88 9.88 0 01-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 01-1.51-5.26C2.21 6.46 6.64 2.03 12.08 2.03c2.64 0 5.12 1.03 6.98 2.89a9.82 9.82 0 012.89 6.99c0 5.44-4.43 9.87-9.87 9.87zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="section-padding bg-gray-900 dark:bg-black text-gray-300 border-t border-gray-800"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400">
          © {currentYear} Shivraj Ghode. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-200 text-sm font-medium hover:border-indigo-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span aria-hidden="true">↓</span>
            Download Resume
          </a>
          <ul className="flex items-center gap-5">
            {socialLinks.map(({ label, href, icon }) => (
              <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                aria-label={label}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {iconPaths[icon]}
                </svg>
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
