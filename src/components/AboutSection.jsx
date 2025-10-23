import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);

  // Track scroll position relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers from bottom to top of viewport
  });

  // Parallax transform — image moves slower than page scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="bg-[#1b1b1b] text-[#f0ecd9] py-22 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">

        {/* Left: Image (with parallax) */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 md:pl-10 flex justify-center h-120"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            alt="Chacha Chatore"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md object-cover"
          />
        </motion.div>

        {/* Center Divider Line */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block w-[2px] bg-[#d93535] h-110 rounded-full mx-auto origin-top shadow-[0_0_10px_#d93535]"
        />

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 md:pr-10 font-open"
        >
          <h2 className="text-4xl md:text-5xl font-anton text-[#d93535] mb-6">
            👋 Who is Chacha Chatore?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I’m not just a food blogger. I’m a storyteller.
            <br />
            From the{" "}
            <span className="text-[#d93535] font-semibold">gali ke thelas</span>{" "}
            to luxury dinings, I believe that every plate carries a memory — of
            a street corner, of friends laughing, of a city’s pride.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            Chacha Chatore is about capturing these flavors and turning them
            into stories you can taste even through a screen.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            For me, it’s never been about just what’s on the plate. It’s about
            what it means — the{" "}
            <span className="text-[#d93535] font-semibold">chai pe charcha</span>,
            the warmth of{" "}
            <span className="text-[#d93535] font-semibold">samosas</span> on a
            rainy evening, the sweet crunch of{" "}
            <span className="text-[#d93535] font-semibold">jalebi</span> that
            takes you back to childhood.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            Through every video, every reel, and every bite, my goal is simple —
            to connect people, places, and plates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
