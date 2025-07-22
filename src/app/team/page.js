export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-4">
      <h1 className="text-5xl font-bold text-blue-400">👨‍💻👨‍🍳 Team Page Cooking!</h1>
      <p className="mt-4 text-lg text-gray-400">
        Our dev-chefs are busy preparing an awesome team experience for you!<br />
        Hand-picking ingredients: creativity 🧠, collaboration 🤝, and clean code 💻.<br />
        Stay tuned — it's going to be worth the wait! 🍽️🚀
      </p>
      <div className="text-center mt-12">
        <a
          href="/join"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 font-medium"
        >
          🍽️ Join the Kitchen
        </a>
      </div>
    </main>
  );
}
