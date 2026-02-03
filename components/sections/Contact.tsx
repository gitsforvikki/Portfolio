export default function Contact() {
  const contactInfo = [
    { icon: "📧", label: "Email", value: "vk6484412@gmail.com" },
    { icon: "📱", label: "Phone", value: "+91 62014 48872" },
    { icon: "📍", label: "Location", value: "Patna, India" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
              Get In <span className="custom-text-gradient">Touch</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Have a question or want to work together? I'd love to hear from
              you! Let's create something amazing together.
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 space-y-6 fade-in-delay-1">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-slate-900 dark:text-white font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-slate-900 dark:text-white font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-slate-900 dark:text-white font-semibold">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry, collaboration, etc."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-900 dark:text-white font-semibold">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or idea..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 fade-in"
                style={{
                  animation: `fadeIn 0.6s ease-out ${0.2 + idx * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  {info.label}
                </p>
                <p className="text-slate-900 dark:text-white font-semibold break-all">
                  {info.value}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl border border-blue-100 dark:border-slate-700 fade-in-delay-2">
            <p className="text-slate-700 dark:text-slate-300 text-lg">
              💡 Prefer a quick chat?{" "}
              <span className="font-semibold">
                Feel free to reach out on any of my social platforms!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
