import Link from "next/link";

const links = {
  facebook: "#",
  twitter: "#",
  github: "https://github.com/gitsforvikki",
  linkedin: "https://www.linkedin.com/in/vikash-developer/",
  instagram: "#",
};

export const SocialLinks = () => {
  return (
    <>
      <div className="px-6 py-4 border-b border-slate-700">
        <div className="flex gap-3 justify-center">
          <Link
            href={links.github}
            className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="GitHub"
            title="GitHub"
            target="_blank"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link
            href={links.linkedin}
            className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </Link>
          {/* <Link
            href={links.facebook}
            className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="Facebook"
            title="Facebook"
            target="_blank"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.313-.229-4.425-.229-4.404 0-7.42 2.703-7.42 7.622v1.708z" />
            </svg>
          </Link>
          <Link
            href={links.twitter}
            className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="Twitter"
            title="Twitter"
            target="_blank"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.2-5.2 8.3A15.7 15.7 0 010 19" />
            </svg>
          </Link>
          <Link
            href={links.instagram}
            className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="Instagram"
            title="Instagram"
            target="_blank"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16.5 7.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0" fill="#1f2937" />
              <circle cx="12" cy="12" r="4" fill="#1f2937" />
            </svg>
          </Link> */}
        </div>
      </div>
    </>
  );
};
