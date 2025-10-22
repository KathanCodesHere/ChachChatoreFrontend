import HomeCards from "../components/HomeCards";

const Home = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <section className="text-center py-16">
        <h1 className="text-5xl sm:text-6xl tracking-wide font-bold text-[#d93535] mb-4 uppercase font-anton">
          Chacha's World
        </h1>
        <p className="text-[#f0ecd9] text-lg max-w-2xl mx-auto">
          Discover the different sections of our site below.
        </p>
      </section>

      {/* 2 cards section */}
      <HomeCards />
    </div>
  );
};

export default Home;
