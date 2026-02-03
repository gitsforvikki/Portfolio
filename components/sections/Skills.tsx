export default function Skills() {
  const skillCategories = [
    {
      icon: "⚛️",
      category: "Frontend",
      skills: [
        "Next.js",
        "React.js",
        "JavaScript/TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      icon: "🟢",
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "PostgreSQL",
        "NestJS -> Learning",
      ],
    },
    {
      icon: "🛠️",
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "Postman", "Vercel"],
    },
    {
      icon: "🎯",
      category: "Other Skills",
      skills: ["Responsive Design", "Database Design", "Authentication", "SEO"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          <div className="text-center fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
              Skills &{" "}
              <span className="custom-text-gradient">Technologies</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 dark:border-slate-700 group fade-in"
                style={{
                  animation: `fadeIn 0.6s ease-out ${0.1 + index * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <p className="text-xl md:text-2xl font-semibold mb-4">
              Always eager to learn new technologies and improve my skills! 🚀
            </p>
            <p className="text-blue-100 text-lg">
              Open to new opportunities and exciting collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
