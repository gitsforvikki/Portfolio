"use client";

import { useState } from "react";
import ThemeToggle from "./theme/ThemeToggler";
import Link from "next/link";
// import resume from "@/public/assets/vikas.pdf";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", icon: "🏠" },
    { label: "About", href: "#about", icon: "👤" },
    { label: "Experience", href: "#experience", icon: "📈" },
    { label: "Projects", href: "#projects", icon: "💼" },
    { label: "Skills", href: "#skills", icon: "⚡" },
    { label: "Contact", href: "#contact", icon: "📧" },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 md:translate-x-0 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-6 border-b border-slate-700">
            {/* Avatar */}
            <div className="mb-4 flex justify-center">
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                VK
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-2xl font-bold text-center mb-1">
              Vikash Kumar
            </h1>
            <p className="text-center text-blue-400 font-semibold text-sm mb-4">
              Software Engineer
            </p>

            {/* Profile Details */}
            <div className="space-y-3 text-sm">
              {/* Email */}
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg flex-shrink-0">✉️</span>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-slate-200 truncate text-xs">
                    vk6484412@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg flex-shrink-0">📍</span>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-slate-200 text-xs">Patna, India</p>
                </div>
              </div>

              {/* Birthday */}
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg flex-shrink-0">🎂</span>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">
                    Birthday
                  </p>
                  <p className="text-slate-200 text-xs">Dec 31, 1999</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <a
                href="/assets/Vikash_kumar_resume.pdf"
                download
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 rounded-lg transition-colors text-sm"
              >
                Download CV
              </a>
              {/* <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                Cover Letter
              </button> */}
            </div>
          </div>

          {/* Social Links */}
          <div className="px-6 py-4 border-b border-slate-700">
            <div className="flex gap-3 justify-center">
              <a
                href="#"
                className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.313-.229-4.425-.229-4.404 0-7.42 2.703-7.42 7.622v1.708z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.2-5.2 8.3A15.7 15.7 0 010 19" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path
                    d="M16.5 7.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
                    fill="#1f2937"
                  />
                  <circle cx="12" cy="12" r="4" fill="#1f2937" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="p-4 border-t border-slate-700">
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
