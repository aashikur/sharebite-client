// src/components/ExtraSection2.jsx
const testimonials = [
  {
    name: "Alice",
    text: "I love how easy it is to share food with my neighbors. ShareBite is a game changer!"
  },
  {
    name: "Bob",
    text: "I’ve met so many great people and reduced my food waste. Highly recommend!"
  },
  {
    name: "Charlie",
    text: "Such a wonderful initiative! I feel more connected to my community now."
  },
  {
    name: "Diana",
    text: "Sharing food is simple and meaningful with ShareBite."
  },
  {
    name: "Ethan",
    text: "I’ve saved money and built friendships thanks to this app."
  },
  {
    name: "Fiona",
    text: "Love the sustainability aspect — less waste and more smiles!"
  }
];

const ExtraSection2 = () => (
  <section className="container mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      What Our Users Say
    </h2>

    {/* Testimonial Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-4">"{t.text}"</p>
          <div className="font-bold text-orange-500">{t.name}</div>
        </div>
      ))}
    </div>

    {/* Call to Action */}
    <div className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-8 text-center max-w-4xl mx-auto">
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        ShareBite helps reduce food waste, supports your local community, 
        and makes sharing easy and fun. Join us to make a positive impact!
      </p>
    </div>
  </section>
);

export default ExtraSection2;
