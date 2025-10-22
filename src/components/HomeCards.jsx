import { Link } from "react-router-dom";

const HomeCards = () => {
  const cards = [
    {
      id: 1,
      title: "Chacha Chatore",
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764", // put your image in /public/images/
      link: "/chacha",
    },
    {
      id: 2,
      title: "Production House",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1159",
      link: "/production",
    },
  ];

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={card.link}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Background image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/70 to-transparent py-4 text-center">
              <h3 className="text-[#f0ecd9] text-3xl uppercase font-anton tracking-wider font-medium">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeCards;

