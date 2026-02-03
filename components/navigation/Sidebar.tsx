"use client";

import { useState } from "react";
import ThemeToggle from "../theme/ThemeToggler";
import { SocialLinks } from "./SocialLinks";
import { PersonalInfo } from "./PersonalInfo";

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
            <PersonalInfo />

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
          <SocialLinks />
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
