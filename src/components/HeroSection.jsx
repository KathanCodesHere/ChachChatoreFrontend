import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#1b1b1b] text-[#f0ecd9] px-6 md:px-12 overflow-hidden"
    >
      {/* Left: Content Section */}
      <motion.div
        className={`flex flex-col justify-center ${
          expanded ? "md:w-[30%]" : "md:w-[70%]"
        } w-full space-y-6 transition-all duration-700 ease-in-out`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#d93535] leading-tight font-anton">
          Kisse Kahaniyan with <br/> Chacha Ji
        </h1>
        <p className="text-lg text-[#f0ecd9]/90 max-w-lg font-open">
          Not just food videos. Not just vlogs. This is about people, plates,
          and the untold stories behind them.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-[#d93535] hover:bg-[#f0ecd9] hover:text-[#d93535] text-[#f0ecd9] px-6 py-3 rounded-lg font-semibold transition-all duration-300">
             Watch Stories
          </button>
          <button className="border border-[#f0ecd9] hover:bg-[#f0ecd9] hover:text-[#d93535] px-6 py-3 rounded-lg font-semibold transition-all duration-300">
             Follow the Journey
          </button>
        </div>
      </motion.div>

      {/* Right: Video Section */}
      <motion.div
        className={`relative ${
          expanded ? "md:w-[70%]" : "md:w-[30%]"
        } w-full mt-10 md:mt-0 transition-all duration-700 ease-in-out`}
      >
        <div
          className="cursor-pointer rounded-xl overflow-hidden shadow-xl"
          onClick={() => setExpanded(!expanded)}
        >
          <motion.video
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-64 md:h-[400px] object-cover"
            src="https://www.pexels.com/download/video/29324085/" // <-- place your video in /public/videos/
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-[#f0ecd9] text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            Click to {expanded ? "shrink" : "expand"} 🎬
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
