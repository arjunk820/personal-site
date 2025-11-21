import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              {/* Placeholder - replace with actual image */}
              <span className="text-4xl">AK</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Arjun Kantamsetty</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Software Engineer & DJ
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              Building intelligent, scalable systems and creating music experiences. 
              Passionate about AI, software engineering, and the intersection of technology and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

