import React from "react";
import { motion } from "framer-motion";

const featuredStories = [
  {
    id: 1,
    title: "Indore’s Best Poha-Jalebi Morning",
    desc: "A delicious morning story from the streets of Indore.",
    videoUrl: "https://www.youtube.com/embed/YQ8C7KWDlTY?si=fmYw6eRgZyA2Mxde",
  },
  {
    id: 2,
    title: "Street Food Tales from Sarafa Bazaar",
    desc: "Where flavors, lights, and laughter never sleep.",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 3,
    title: "Delhi’s Chaat Magic",
    desc: "Exploring spicy, tangy, and sweet street wonders of Delhi.",
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    id: 4,
    title: "Mumbai’s Rainy Vada Pav Trail",
    desc: "Because nothing beats chai and vada pav in the rain.",
    videoUrl: "https://www.youtube.com/embed/scdJ8n3Pf9E",
  },
];

const FeaturedStories = () => {
  return (
    <section className="bg-[#1b1b1b] text-[#f0ecd9] py-24 px-6 md:px-16 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-anton text-[#d93535] mb-4">
          🎬 Featured Stories
        </h2>
        <p className="text-lg md:text-xl font-open text-[#f0ecd9]/90">
          A glimpse of the flavors, people, and journeys that define Chacha
          Chatore.
        </p>
      </motion.div>

      {/* Video Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuredStories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="relative bg-[#242424] overflow-hidden shadow-lg hover:shadow-[0_0_25px_#d93535]/40 transition-all duration-500 group"
          >
            {/* Video Embed */}
            <div className="relative w-full h-[400px] overflow-hidden">
              <iframe
                src={story.videoUrl}
                title={story.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-95 transition-transform duration-700 ease-in-out"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Overlay Title Bar */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 py-4 px-5">
                <h3 className="text-xl font-anton text-white">
                  {story.title}
                </h3>
              </div>
            </div>

            {/* Text Content */}
            <div className="p-5">
              <p className="text-base text-[#f0ecd9]/90 font-open">
                {story.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStories;
