import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Arjun Kantamsetty
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400">
              Home
            </Link>
            <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-400">
              Projects
            </Link>
            <Link href="/resume" className="hover:text-gray-600 dark:hover:text-gray-400">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

