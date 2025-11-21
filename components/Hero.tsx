import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-secondary-text/10 overflow-hidden border-2 border-secondary-text/20 relative">
              <Image
                src="/images/linkedin.jpeg"
                alt="Arjun Kantamsetty"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-heading font-bold mb-4 text-primary-text">Arjun Kantamsetty</h1>
            <h2 className="text-2xl font-heading text-secondary-text mb-6">
              Software Engineer
            </h2>
            <p className="text-lg text-secondary-text mb-8 max-w-2xl">
              Building intelligent, scalable systems. 
              Passionate about AI, software engineering, and the intersection of technology and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="px-6 py-3 bg-button-bg text-button-text rounded-lg hover:bg-button-hover transition-colors font-medium"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text/5 transition-colors font-medium"
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

