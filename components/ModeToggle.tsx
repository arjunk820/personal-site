"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ModeToggle() {
  const pathname = usePathname();
  const router = useRouter();
  
  const currentMode = pathname.startsWith("/dj") ? "dj" : "engineer";
  const isDarkMode = pathname.startsWith("/dj");

  const toggleMode = () => {
    if (currentMode === "engineer") {
      router.push("/dj");
    } else {
      router.push("/engineer");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-medium transition-colors ${
        currentMode === "engineer" 
          ? (isDarkMode ? "text-white" : "text-primary-text") 
          : (isDarkMode ? "text-white/60" : "text-secondary-text")
      }`}>
        Engineer
      </span>
      <button
        onClick={toggleMode}
        className={`relative w-14 h-7 ${isDarkMode ? "bg-white/20" : "bg-secondary-text/20"} rounded-full transition-colors focus:outline-none focus:ring-2 ${isDarkMode ? "focus:ring-white/20" : "focus:ring-primary-text/20"}`}
        aria-label="Toggle mode"
      >
        <span
          className={`absolute top-1 left-1 w-5 h-5 ${isDarkMode ? "bg-white" : "bg-button-bg"} rounded-full transition-transform duration-300 ${
            currentMode === "dj" ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>
      <span className={`text-sm font-medium transition-colors ${
        currentMode === "dj" 
          ? (isDarkMode ? "text-white" : "text-primary-text") 
          : (isDarkMode ? "text-white/60" : "text-secondary-text")
      }`}>
        DJ
      </span>
    </div>
  );
}

