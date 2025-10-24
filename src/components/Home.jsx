import HomeCards from "../components/HomeCards";

const Home = () => {
  return (
    <div className="bg-[#1b1b1b] min-h-screen flex flex-col">
      {/* Heading Section */}
      <section className="text-center py-10">
        <h1 className="text-5xl sm:text-6xl tracking-wide font-bold text-[#e86b40] mb-2 uppercase font-anton">
          Chacha's World
        </h1>
      </section>

      {/* Fullscreen Cards Section */}
      <HomeCards />
    </div>
  );
};

export default Home;
