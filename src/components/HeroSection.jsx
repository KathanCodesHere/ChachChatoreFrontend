import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/2311965/" // ✅ Replace with your own hosted video file
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Overlay (dark layer for better text contrast) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Text Content */}
      <motion.div
        className="relative z-10 px-6 sm:px-12 text-[#f0ecd9] max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl leading-tight text-[#e86b40] drop-shadow-lg">
          Kisse Kahaniyan with <br /> Chacha Ji
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[#f0ecd9]/90 font-open">
          Not just food videos. Not just vlogs. This is about people, plates,
          and the untold stories behind them.
        </p>

        {/* 🔹 CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-[#e86b40] hover:bg-[#f0ecd9] hover:text-[#e86b40] text-[#f0ecd9] px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            Watch Stories
          </button>
          <button className="border border-[#f0ecd9] hover:bg-[#f0ecd9] hover:text-[#e86b40] px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            Follow the Journey
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
