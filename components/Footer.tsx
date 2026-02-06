"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isDarkMode = pathname.startsWith("/dj");

  return (
    <footer className={`border-t ${isDarkMode ? "border-white/20 bg-black" : "border-secondary-text/20 bg-background"} mt-auto relative z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${isDarkMode ? "text-white/80" : "text-secondary-text"}`}>
            © {new Date().getFullYear()} Arjun Kantamsetty
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/arjunk820"
              target="_blank"
              rel="noopener noreferrer"
              className={isDarkMode ? "text-white hover:text-white/80 transition-colors" : "text-primary-text hover:text-accent transition-colors"}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/arjun-kantamsetty-820"
              target="_blank"
              rel="noopener noreferrer"
              className={isDarkMode ? "text-white hover:text-white/80 transition-colors" : "text-primary-text hover:text-accent transition-colors"}
            >
              LinkedIn
            </a>
            <a
              href="https://soundcloud.com" // TODO: Add soundcloud URL
              target="_blank"
              rel="noopener noreferrer"
              className={isDarkMode ? "text-white hover:text-white/80 transition-colors" : "text-primary-text hover:text-accent transition-colors"}
            >
              SoundCloud
            </a>
            <a
              href="https://instagram.com" // TODO: Add instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className={isDarkMode ? "text-white hover:text-white/80 transition-colors" : "text-primary-text hover:text-accent transition-colors"}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

