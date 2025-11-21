"use client";

import Link from "next/link";
import WaveformBackground from "@/components/WaveformBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <WaveformBackground variant="engineer" />
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-heading font-bold mb-12 text-primary-text">
          Arjun Kantamsetty
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/engineer"
            className="px-8 py-4 bg-button-bg text-button-text rounded-lg hover:bg-button-hover transition-colors font-medium text-lg min-w-[200px]"
          >
            Enter as Engineer
          </Link>
          <Link
            href="/dj"
            className="px-8 py-4 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text/5 transition-colors font-medium text-lg min-w-[200px]"
          >
            Enter as DJ
          </Link>
        </div>
      </div>
    </div>
  );
}

