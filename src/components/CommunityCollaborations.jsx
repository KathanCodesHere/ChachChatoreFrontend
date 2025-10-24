import React from "react";
import { motion } from "framer-motion";

const brands = [
  { id: 1, logo: "https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" },
  { id: 2, logo: "https://res.cloudinary.com/vistaprint/images/w_1024,h_389,c_scale,w_1024,h_389,dpr_1.25/f_auto,q_auto/v1719942405/ideas-and-advice-prod/blogadmin/nike-logo/nike-logo.png?_i=AA" },
  { id: 3, logo: "https://res.cloudinary.com/vistaprint/images/c_scale,w_587,h_391,dpr_1.25/f_auto,q_auto/v1719942393/ideas-and-advice-prod/blogadmin/logo-chanel/logo-chanel.png?_i=AA" },
  { id: 4, logo: "https://res.cloudinary.com/vistaprint/images/c_scale,w_772,h_444,dpr_1.25/f_auto,q_auto/v1719942371/ideas-and-advice-prod/blogadmin/mc-donald-logo/mc-donald-logo.jpg?_i=AA" },
  { id: 5, logo: "https://res.cloudinary.com/vistaprint/images/c_scale,w_600,h_556,dpr_1.25/f_auto,q_auto/v1719942431/ideas-and-advice-prod/blogadmin/shell-logo/shell-logo.png?_i=AA" },
  { id: 6, logo: "https://res.cloudinary.com/vistaprint/images/c_scale,w_1048,h_342,dpr_1.25/f_auto,q_auto/v1706089184/ideas-and-advice-prod/en-us/Coca-Cola_logo.svg_/Coca-Cola_logo.svg_.png?_i=AA" },
];

const CommunityCollaborations = () => {
  return (
    <section className="bg-[#1b1b1b] text-[#f0ecd9] py-24 px-6 md:px-16 overflow-hidden" id='comm'>
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-anton text-[#e86b40] mb-4">
           Where Stories Meet People
        </h2>
        <p className="text-lg md:text-xl font-open text-[#f0ecd9]/90 max-w-3xl mx-auto">
          Chacha Chatore isn’t just me — it’s the community we’ve built. From food
          walks and tasting events to online collaborations with creators, the
          idea is always to celebrate food together.
        </p>
      </motion.div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full overflow-hidden py-8">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...brands, ...brands,...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-full bg-[#242424] flex items-center justify-center p-4 shadow-lg"
            >
              <img
                src={brand.logo}
                alt="Brand logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-wrap justify-center gap-6"
      >
        <button className="bg-[#e86b40] text-[#f0ecd9] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b72d2d] transition-all duration-300">
          Join a Food Walk
        </button>
        <button className="border-2 border-[#e86b40] text-[#e86b40] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e86b40] hover:text-[#f0ecd9] transition-all duration-300">
          Partner with Me
        </button>
      </motion.div>
    </section>
  );
};

export default CommunityCollaborations;
