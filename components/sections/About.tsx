export default function About() {
  const passions = [
    { icon: "🏗️", text: "Building scalable web applications" },
    { icon: "🎨", text: "Creating intuitive user experiences" },
    { icon: "📚", text: "Learning new technologies" },
    { icon: "🤝", text: "Open source contribution" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-8">
          <div className="text-center fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
              About <span className="custom-text-gradient">Me</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Get to know more about who I am and what drives me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Section */}
            <div className="flex justify-center slide-in-left">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform -rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-9xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  👨‍💻
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 fade-in-delay-1">
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  I'm a passionate full-stack developer with expertise in the
                  MERN stack (MongoDB, Express, React, Node.js). I love creating
                  interactive web applications that solve real-world problems.
                </p>

                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  With experience in both frontend and backend development, I
                  can take your project from conception to deployment. I'm
                  committed to writing clean, maintainable code and staying
                  updated with the latest technologies.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  What I'm passionate about
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {passions.map((passion, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-100 dark:bg-slate-800 hover:shadow-lg transition-shadow fade-in"
                      style={{
                        animation: `fadeIn 0.6s ease-out ${0.3 + idx * 0.1}s forwards`,
                        opacity: 0,
                      }}
                    >
                      <span className="text-3xl flex-shrink-0">
                        {passion.icon}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {passion.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
