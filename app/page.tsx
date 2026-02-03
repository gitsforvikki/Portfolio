import Sidebar from "@/components/navigation/Sidebar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-slate-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-72">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

        {/* Footer */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 md:ml-0">
          <div className="max-w-6xl mx-auto text-center">
            <p>Made with 💖 by Vikash</p>
            <p className="text-slate-400">
              © 2026 Vikash Kumar. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
