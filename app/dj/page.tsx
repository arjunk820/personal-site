"use client";

import Image from "next/image";
import WaveformBackground from "@/components/WaveformBackground";
import ComingSoon from "@/components/ComingSoon";

export default function DJPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <WaveformBackground variant="dj" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-white/10 overflow-hidden border-2 border-white/20 relative">
                  <Image
                    src="/images/linkedin.jpeg"
                    alt="DJ"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-6xl md:text-7xl font-heading font-bold mb-4 text-white">
                  DJ
                </h1>
                <h2 className="text-3xl font-heading text-white/80 mb-6">
                  I enjoy mixing music and listen and play all types of music → open-format.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section id="coming-soon" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <ComingSoon
              title="DJ Content Coming Soon"
              message="DJ content coming soon. Follow me on SoundCloud and Instagram for updates."
              links={[
                { label: "SoundCloud", url: "https://soundcloud.com" },
                { label: "Instagram", url: "https://instagram.com" },
              ]}
              dark={true}
            />
          </div>
        </section>

        {/* Placeholder Sections */}
        <section id="mixes" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-heading font-bold mb-8 text-white text-center md:text-left">
              Mixes & Sets
            </h2>
            <ComingSoon
              title="Coming Soon"
              message="My mixes and live sets will be available here soon."
              dark={true}
            />
          </div>
        </section>

        <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-heading font-bold mb-8 text-white text-center md:text-left">
              Photos & Gallery
            </h2>
            <ComingSoon
              title="Coming Soon"
              message="Event photos and gallery coming soon."
              dark={true}
            />
          </div>
        </section>

        <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-heading font-bold mb-8 text-white text-center md:text-left">
              Events
            </h2>
            <ComingSoon
              title="Coming Soon"
              message="Upcoming events and performances will be listed here."
              dark={true}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-heading font-bold mb-4 text-white">
              Get In Touch
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Interested in collaborating or want to book me for a gig? Feel free to reach out.
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("arjunkan2003@gmail.com");
                alert("Email copied to clipboard!");
              }}
              className="inline-block px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-colors font-medium text-lg"
            >
              Contact Me
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

