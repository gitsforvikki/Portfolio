export default function Hero() {
  const skillIcons = [
    { icon: "⚛️", label: "React" },
    { icon: "🟢", label: "Node.js" },
    { icon: "🗄️", label: "MongoDB" },
    { icon: "📱", label: "Responsive" },
    { icon: "💻", label: "Full Stack" },
    { icon: "🚀", label: "Performance" },
    { icon: "🎨", label: "UI/UX" },
    { icon: "⚡", label: "Fast" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 py-20 md:py-0 overflow-hidden">
      {/* Side Icons - Right */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-10">
        {skillIcons.map((skill, index) => (
          <div
            key={index}
            className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-2xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            title={skill.label}
          >
            <span className="group-hover:-translate-y-1 transition-transform">
              {skill.icon}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* Avatar */}
          <div className="inline-block pop-in">
            <div className="relative">
              <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300">
                VK
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-lg animate-bounce">
                💼
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
              <span className="fade-in">Hi, I'm</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block typing-text">
                Vikash Kumar
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2 fade-in-delay-2">
              <span>Passionate Software Developer</span>
              <span className="animate-wave">🔥</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed fade-in-delay-3">
            I build beautiful, responsive web applications using the MERN stack. Passionate about clean code, user experience, and creating sustainable solutions with scalable technical systems. 🚀
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 fade-in-delay-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 text-center transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 text-center transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>

          {/* Tech Stack */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-700 fade-in-delay-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-semibold uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript", "Tailwind CSS"].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm border border-blue-200 dark:border-blue-800 transform hover:scale-110 hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${0.5 + idx * 0.08}s forwards`,
                    opacity: 0,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce fade-in-delay-4">
        <svg
          className="w-6 h-6 text-slate-400 dark:text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
