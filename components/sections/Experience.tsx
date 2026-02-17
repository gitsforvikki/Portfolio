export default function Experience() {
  const experiences = [
    {
      company: "Independent Development / Professional Growth",
      role: "Full Stack Developer",
      duration: "Oct 2025 - Present",
      description:
        "Independently developed production-grade web applications including CodeBuddy, a real-time developer networking platform, and ShopHub, a scalable e-commerce system with secure payment integration. Currently expanding expertise in System Design, focusing on scalable architectures, distributed systems, database optimization, and performance engineering to build large-scale applications.",
      skills: [
        "Next.js",
        "React.js",
        "Node.js",
        "MongoDB",
        "WebSockets",
        "Razorpay",
        "Tailwind CSS",
        "Docker",
        "System Design",
        "Scalability",
        "Architecture Patterns",
      ],
      icon: "🚀",
    },
    {
      company: "Webelight Solutions Pvt. Ltd., Ahmedabad, Gujarat",
      role: "Next js Developer",
      duration: "Sep 2024 - Aug 2025",
      description:
        "Specialized in developing scalable web applications using Next.js and React with TypeScript, focusing on SEO optimization, advanced UI animations, and Docker-based deployment.",
      skills: [
        "Next js",
        "React js",
        "Javascript",
        "Typescript",
        "Docker",
        "Tailwind css",
        "SEO",
        "Animation",
      ],
      icon: "💻",
    },
    {
      company: "Webelight Solutions Pvt. Ltd., Ahmedabad, Gujarat",
      role: "React js Intern",
      duration: "May 2024 - Sep 2024",
      description:
        "Completed a React.js internship focused on building responsive UI, integrating APIs, managing state with Redux, and developing modern web interfaces using Tailwind CSS.",
      skills: [
        "JavaScript",
        "React",
        "API Integration",
        "Tailwind css",
        "HTML/CSS",
        "React Redux",
      ],
      icon: "🌱",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
              Work <span className="custom-text-gradient">Experience</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              My professional journey and roles I've held
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2"></div>

            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="fade-in"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${0.2 + index * 0.15}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div
                    className={`flex gap-4 md:gap-0 md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Desktop Content */}
                    <div className="hidden md:block md:w-1/2 md:px-8">
                      <div
                        className={`text-right group ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transform hover:-translate-y-2">
                          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-3">
                            {exp.duration}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {exp.role}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                            @ {exp.company}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 mb-4">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end md:justify-start">
                            {exp.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="flex justify-center md:w-auto">
                      <div className="relative z-10">
                        <div
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg ring-4 ring-white dark:ring-slate-950 transform hover:scale-110 transition-transform duration-300 animate-bounce"
                          style={{
                            animation: `popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${0.2 + index * 0.15}s forwards`,
                            opacity: 0,
                          }}
                        >
                          {exp.icon}
                        </div>
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div className="flex-1 md:hidden pl-4">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold mb-2">
                          {exp.duration}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
                          {exp.company}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Empty Space */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center fade-in-delay-4">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Looking for more details about my experience?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Let's Connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
