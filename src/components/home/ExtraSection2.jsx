// src/components/ExtraSection2.jsx
const testimonials = [
  {
    name: "Alice",
    text: "I love how easy it is to share food with my neighbors. ShareBite is a game changer!"
  },
  {
    name: "Bob",
    text: "I’ve met so many great people and reduced my food waste. Highly recommend!"
  }
];

const ExtraSection2 = () => (
  <section className="max-w-6xl mx-auto py-12">
    <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">"{t.text}"</p>
          <div className="font-bold text-orange-500">{t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ExtraSection2;