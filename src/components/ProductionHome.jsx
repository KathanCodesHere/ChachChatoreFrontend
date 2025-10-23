// ProductionHome.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { FaPlay, FaCameraRetro, FaHamburger } from "react-icons/fa";
import NavBarP from "../components/NavBarP"; // adjust path if yours differs

// ---------------------- Helper data (replace / hook to API) ----------------------
const SERVICES = [
  {
    id: "short",
    title: "Short-form Masala (Reels & Shorts)",
    desc: "Concept → Shoot → Edit → Upload-ready.",
  },
  {
    id: "long",
    title: "Long-form Thali (Brand Films)",
    desc: "Full platter storytelling with scripts, shoots & post-production.",
  },
  {
    id: "social",
    title: "Social Media Tandoor",
    desc: "Hot content calendars, growth tactics, and ad guidance to keep you trending.",
  },
  {
    id: "edit",
    title: "Editing & Motion Garnish",
    desc: "Smooth cuts, subtitles, motion graphics — that perfect finishing tadka.",
  },
  {
    id: "influencer",
    title: "Influencer Zaika",
    desc: "Events, collabs, and activations — bringing real people to the table.",
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Client A",
    text:
      "Working with Chacha Chatore Productions was like mixing fun with professionalism. Our campaign didn’t just reach people — it connected.",
  },
  {
    id: 2,
    name: "Client B",
    text:
      "Fast, local, and creative — the team delivered a story we loved.",
  },
  {
    id: 3,
    name: "Client C",
    text:
      "Pure desi storytelling magic with cinematic polish!",
  }
];

// ---------------------- Page Component ----------------------
export default function ProductionHome() {
  // hero video player ref (optional)
  const playerRef = useRef(null);

  // testimonials state (auto-rotate)
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    // rotate testimonials every 4.8s (matching reference feel)
    const id = setInterval(() => {
      setTIndex((s) => (s + 1) % TESTIMONIALS.length);
    }, 4800);
    return () => clearInterval(id);
  }, []);

  // Manage navbar transparency toggle on scroll
  useEffect(() => {
    const onScroll = () => {
      // if scrolled beyond hero height -> add 'scrolled' to body
      if (window.scrollY > 60) document.body.classList.add("scrolled-nav");
      else document.body.classList.remove("scrolled-nav");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Framer motion variants
  const staggerParent = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* Navbar (keeps existing NavBarP but we rely on body.scrolled-nav for style toggle) */}
      <NavBarP />

      {/* HERO / BANNER (Section 1) */}
      <header className="relative w-full h-screen min-h-[680px] bg-black text-white overflow-hidden">
        {/* hero video (looping webm) - placeholder path: /assets/hero.webm */}
        {/* Replace /assets/hero.webm with your video's relative path if you want a real video */}
        <ReactPlayer
          ref={playerRef}
          url="/assets/hero.webm"
          playing
          loop
          muted
          playsinline
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        {/* dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/65"></div>

        {/* floating subtle icons for vibe */}
        <motion.div
          className="absolute left-8 top-24 text-[#ffb07a] opacity-70 text-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <FaCameraRetro />
        </motion.div>
        <motion.div
          className="absolute right-12 top-40 text-[#ffb07a] opacity-70 text-4xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4.4 }}
        >
          <FaHamburger />
        </motion.div>

        {/* hero content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 h-full flex items-center">
          <div className="w-full md:w-3/5 py-16">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span role="img" aria-label="camera">🎥</span>{" "}
              <span className="block">Stories with</span>
              <span className="block text-[#ffd1b0] font-extrabold">Tandoori Tadka</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg max-w-2xl text-[#f3e8df]"
            >
              We don’t just create content. We serve stories — hot, authentic, and scroll-stopping.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-3 bg-[#ffb07a] text-black px-5 py-3 rounded-md font-semibold shadow hover:scale-105 transition"
              >
                <FaPlay /> See Our Work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-[#ffb07a]/60 text-[#ffb07a] px-5 py-3 rounded-md font-semibold hover:bg-[#ffb07a] hover:text-black transition"
              >
                Work With Us
              </a>
            </motion.div>
          </div>

          {/* right-side small hero visual */}
          <div className="hidden md:block md:w-2/5">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-black/30"
            >
              <img src="/assets/prod-hero.jpg" alt="hero visual" className="w-full h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* SECTION 2: ABOUT PRODUCTIONS */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-[#0f0f0f] text-[#f3e8df]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">🍿 What is Chacha Chatore Productions?</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#dcd0c6]">
              Born out of the same passion for storytelling, Chacha Chatore Productions is the professional arm that helps brands, creators, and businesses tell their own kahaniyan. We blend the authenticity of street storytelling with polished production — so your brand feels relatable and premium at the same time. Think of us as your creative kitchen — where raw ideas become sizzling stories, ready to serve.
            </p>
            <div className="mt-6">
              <a href="#services" className="px-5 py-3 bg-[#ffb07a] text-black rounded-md font-semibold hover:scale-105 transition">See Services</a>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img src="/assets/about-photo.jpg" alt="About" className="w-full h-80 object-cover" />
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 3: SERVICES (What We Offer) - inspired by your reference webm */}
      <section id="services" className="py-16 bg-[#111] text-[#f3e8df]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#ffb07a]">🍴 On the Menu – Our Services</h3>
          <p className="mt-2 text-[#d3c8bf]">Short descriptions to the right — animated and staggered like the reference.</p>

          {/* animated grid: large center card + smaller cards around (feel from reference) */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {/* Left column: stacked small cards */}
            <div className="space-y-6">
              <motion.div variants={cardVariant} className="bg-[#0f0f0f] border border-[#1f1f1f] p-5 rounded-xl shadow-lg">
                <div className="text-sm text-[#ffb07a] font-semibold">Short-form Masala</div>
                <div className="mt-2 text-[#d3c8bf]">Reels & Shorts: Concept → Shoot → Edit → Upload-ready.</div>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-[#0f0f0f] border border-[#1f1f1f] p-5 rounded-xl shadow-lg">
                <div className="text-sm text-[#ffb07a] font-semibold">Long-form Thali</div>
                <div className="mt-2 text-[#d3c8bf]">Brand Films: Full platter storytelling with scripts, shoots & post-production.</div>
              </motion.div>
            </div>

            {/* Center column: highlighted card */}
            <motion.div variants={cardVariant} className="bg-gradient-to-br from-[#2a2a2a] to-[#111] p-8 rounded-2xl shadow-2xl flex flex-col justify-center items-start">
              <div className="text-xl font-bold text-[#ffb07a] mb-3">Social Media Tandoor</div>
              <p className="text-[#d3c8bf]">Hot content calendars, growth tactics, and ad guidance to keep you trending.</p>
              <div className="mt-6 inline-flex items-center gap-3">
                <a className="px-4 py-2 bg-[#ffb07a] text-black rounded-md font-semibold">See Examples</a>
                <a className="px-4 py-2 border border-[#fff4e0]/10 rounded-md text-[#fff4e0]">Talk to us</a>
              </div>
            </motion.div>

            {/* Right column: stacked small cards */}
            <div className="space-y-6">
              <motion.div variants={cardVariant} className="bg-[#0f0f0f] border border-[#1f1f1f] p-5 rounded-xl shadow-lg">
                <div className="text-sm text-[#ffb07a] font-semibold">Editing & Motion Garnish</div>
                <div className="mt-2 text-[#d3c8bf]">Smooth cuts, subtitles, motion graphics — that perfect finishing tadka.</div>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-[#0f0f0f] border border-[#1f1f1f] p-5 rounded-xl shadow-lg">
                <div className="text-sm text-[#ffb07a] font-semibold">Influencer Zaika</div>
                <div className="mt-2 text-[#d3c8bf]">Events, collabs, and activations — bringing real people to the table.</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WHY WORK WITH US */}
      <motion.section
        id="why"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-[#0f0f0f] text-[#f3e8df]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold">💡 Why Choose Chacha Chatore Productions?</h3>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <motion.div variants={cardVariant} className="bg-[#111] p-6 rounded-xl border border-[#1f1f1f]">
              <div className="font-semibold text-[#ffb07a]">Creator-first approach</div>
              <div className="mt-2 text-[#d3c8bf]">We know what works on reels, shorts, and trends.</div>
            </motion.div>

            <motion.div variants={cardVariant} className="bg-[#111] p-6 rounded-xl border border-[#1f1f1f]">
              <div className="font-semibold text-[#ffb07a]">Local authenticity</div>
              <div className="mt-2 text-[#d3c8bf]">Pure local tadka — deep Indore roots, real connections.</div>
            </motion.div>

            <motion.div variants={cardVariant} className="bg-[#111] p-6 rounded-xl border border-[#1f1f1f]">
              <div className="font-semibold text-[#ffb07a]">End-to-end kitchen</div>
              <div className="mt-2 text-[#d3c8bf]">One-stop kitchen — everything in-house, no middlemen, no delays.</div>
            </motion.div>

            <motion.div variants={cardVariant} className="bg-[#111] p-6 rounded-xl border border-[#1f1f1f]">
              <div className="font-semibold text-[#ffb07a]">Fast turnarounds</div>
              <div className="mt-2 text-[#d3c8bf]">Because content ka zamaana slow nahi hota.</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 5: FEATURED WORK / PORTFOLIO */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-[#090909] text-[#f3e8df]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#ffb07a]">🎬 Our Recipe in Action</h3>
          <p className="mt-2 text-[#d3c8bf]">Showcase reels, campaigns, brand films, events — with brand names/logos where possible.</p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="relative rounded-xl overflow-hidden group">
                <img src={`/assets/portfolio${i}.jpg`} alt={`portfolio ${i}`} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute left-4 bottom-4 bg-black/60 text-white px-3 py-1 rounded">{`Brand ${i}`}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 6: TESTIMONIALS (carousel fade like reference) */}
      <section className="py-20 bg-[#0f0f0f] text-[#f3e8df]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-2xl font-bold text-[#ffb07a]">💬 People Who’ve Tasted Our Work</h3>
          <p className="mt-3 text-[#d3c8bf]">Short, fun client reviews</p>

          <div className="mt-8 relative max-w-3xl mx-auto">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={TESTIMONIALS[tIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="card-soft bg-[#111] p-8 rounded-xl shadow-lg text-left"
              >
                <p className="text-[#dcd0c6] italic">“{TESTIMONIALS[tIndex].text}”</p>
                <div className="mt-4 font-semibold text-[#ffb07a]">— {TESTIMONIALS[tIndex].name}</div>
              </motion.div>
            </AnimatePresence>

            {/* small pager */}
            <div className="mt-6 flex items-center justify-center gap-3">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setTIndex(idx)}
                  className={`w-3 h-3 rounded-full ${idx === tIndex ? "bg-[#ffb07a]" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#ffb07a] to-[#ff9966] text-[#111] text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold">🚀 Let’s Cook Something Together</h3>
          <p className="mt-4 text-lg">Whether it’s a 15-second reel or a full-fledged brand film, we’re here to serve stories that your audience won’t forget.</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact-form" className="px-6 py-3 bg-[#0f0f0f] text-[#ffb07a] font-semibold rounded-md">Get in Touch</a>
            <a href="#services" className="px-6 py-3 border border-[#0f0f0f]/20 rounded-md text-[#0f0f0f] font-semibold">See Services</a>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOOTER */}
      <footer className="py-12 bg-[#080808] text-[#dcd0c6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg">Chacha Chatore Productions</div>
            <div className="text-sm mt-1">Stories best served with a pinch of spice and a lot of soul.</div>
          </div>

          <div className="flex gap-6">
            <a href="/" className="hover:text-[#ffb07a]">Home</a>
            <a href="#about" className="hover:text-[#ffb07a]">About</a>
            <a href="#services" className="hover:text-[#ffb07a]">Services</a>
            <a href="#work" className="hover:text-[#ffb07a]">Work</a>
            <a href="#contact" className="hover:text-[#ffb07a]">Contact</a>
          </div>

          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-[#ffb07a]">Instagram</a>
            <a href="#" className="hover:text-[#ffb07a]">YouTube</a>
            <a href="#" className="hover:text-[#ffb07a]">LinkedIn</a>
            <a href="mailto:connect@chachachatore.com" className="hover:text-[#ffb07a]">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
