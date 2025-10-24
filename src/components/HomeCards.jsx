import { Link } from "react-router-dom";

const HomeCards = () => {
  const cards = [
    {
      id: 1,
      title: "Chacha Chatore",
      image:
        "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=764",
      link: "/chacha",
    },
    {
      id: 2,
      title: "Production House",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1159",
      link: "/production",
    },
  ];

  return (
    <section className="flex flex-col sm:flex-row h-[calc(100vh-180px)]">
      {cards.map((card) => (
        <Link
          key={card.id}
          to={card.link}
          className="relative group flex-1 overflow-hidden transition-all duration-500"
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-[#f0ecd9] text-4xl sm:text-5xl font-anton uppercase tracking-wider text-center group-hover:text-[#e86b40] transition-colors duration-300">
              {card.title}
            </h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default HomeCards;
