// src/components/HowItWorks.jsx
const steps = [
  {
    number: 1,
    title: "Snap",
    desc: "Take a photo of your surplus food and add it to ShareBite.",
    color: "text-orange-400"
  },
  {
    number: 2,
    title: "Message",
    desc: "Chat with neighbors to arrange pickup.",
    color: "text-pink-400"
  },
  {
    number: 3,
    title: "Share",
    desc: "Give or get food, and help reduce waste!",
    color: "text-purple-900 dark:text-yellow-400"
  }
];

const HowItWorks = () => (
  <section className="max-w-6xl mx-auto py-20 my-20  px-12 rounded-4xl bg-gradient-to-br from-orange-100 to-pink-100 dark:from-[#393053] dark:to-[#18122B]">
    <h2 className="text-2xl font-bold text-center mb-8">How to ShareBite</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map(step => (
        <div key={step.number} className="text-center border border-gray-500/30 rounded-3xl p-6 py-10">
          <div className={`text-5xl font-bold mb-2 ${step.color}`}>{step.number}</div>
          <h3 className="font-bold mb-2 py-3">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;