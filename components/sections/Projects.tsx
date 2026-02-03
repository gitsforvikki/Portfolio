export default function Projects() {
  const projects = [
    {
      icon: "🛒",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with MERN stack featuring product catalog, shopping cart, and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      icon: "✅",
      title: "Task Management App",
      description:
        "Real-time task management application with user authentication, drag-and-drop functionality, and collaborative features.",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      link: "#",
    },
    {
      icon: "📊",
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media with real-time notifications, user profiles, and engagement metrics.",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      link: "#",
    },
    {
      icon: "🌤️",
      title: "Weather Forecast App",
      description:
        "Interactive weather application with location search, detailed forecasts, and historical weather data.",
      tech: ["React", "REST API", "Tailwind CSS"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className="text-center fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
              Featured <span className="custom-text-gradient">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Check out some of my recent work and projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 fade-in"
                style={{
                  animation: `fadeIn 0.6s ease-out ${0.1 + index * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all duration-300 group/link pt-2"
                  >
                    View Project
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
