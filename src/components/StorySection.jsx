import React from "react";
import { motion } from "framer-motion";

const storyPoints = [
  {
    id: 1,
    title: "Street-side vibes",
    desc: "Relatable, unfiltered, raw.",
    img: "https://images.unsplash.com/photo-1759659136459-fad26e62a675?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  },
  {
    id: 2,
    title: "Desi humor",
    desc: "A little spice, a little satire.",
    img: "https://images.unsplash.com/photo-1737656700846-67a83cb5b13d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  },
  {
    id: 3,
    title: "Heart of India",
    desc: "Celebrating local culture with global relatability.",
    img: "https://images.unsplash.com/photo-1757451631936-a4d7a51954c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=914",
  },
  {
    id: 4,
    title: "Beyond food",
    desc: "People, places, history, and the quirks that make them unique.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
  },
];

const StorySection = () => {
  return (
    <section className="relative bg-[#1b1b1b] text-[#f0ecd9] py-24 px-6 md:px-16 overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-anton text-[#d93535] mb-6">
          📖 The Way I Tell Stories
        </h2>
      </div>

      {/* Vertical Line */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[3px] bg-[#d93535]/60 h-full rounded-full shadow-[0_0_10px_#d93535]" />

        {/* Story Points */}
        <div className="flex flex-col items-center space-y-20">
          {storyPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative flex flex-col items-center text-center w-full max-w-md"
            >
              {/* Connector Dot */}
              <div className="w-5 h-5 rounded-full bg-[#d93535] border-2 border-[#f0ecd9] shadow-[0_0_10px_#d93535] mb-6" />

              {/* Text */}
              <div className="bg-[#242424] p-6 rounded-2xl shadow-lg w-full">
                <h3 className="text-2xl md:text-3xl font-anton text-[#d93535] mb-3">
                  {point.title}
                </h3>
                <p className="text-base sm:text-lg font-open">{point.desc}</p>
              </div>

              {/* Image */}
              <motion.img
                src={point.img}
                alt={point.title}
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-[#d93535] mt-6 shadow-[0_0_15px_#d93535]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing Line */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-lg md:text-xl font-open mt-20 italic text-[#f0ecd9]/90 max-w-2xl mx-auto"
      >
        Because food is never just food — it’s an emotion, a memory, a story
        waiting to be shared.
      </motion.p>
    </section>
  );
};

export default StorySection;
