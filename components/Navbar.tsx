"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const showModeToggle = pathname.startsWith("/engineer") || pathname.startsWith("/dj");
  const isDarkMode = pathname.startsWith("/dj");

  return (
    <nav className={`border-b ${isDarkMode ? "border-white/20 bg-black" : "border-secondary-text/20 bg-background"} relative z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className={`text-xl font-heading font-bold ${isDarkMode ? "text-white" : "text-primary-text"}`}>
            Arjun Kantamsetty
          </Link>
          {showModeToggle && <ModeToggle />}
        </div>
      </div>
    </nav>
  );
}

