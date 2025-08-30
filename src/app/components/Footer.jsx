export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-6 flex flex-col items-center border-t border-blue-900/30 mt-16">
      <div className="text-sm mb-2">&copy; {new Date().getFullYear()} Sci-Fi Innovation Club | Chandigarh University</div>
      <div className="flex gap-4">
        <a href="/" className="hover:text-blue-400 transition">Home</a>
        <a href="/about" className="hover:text-blue-400 transition">About</a>
        <a href="/events" className="hover:text-blue-400 transition">Events</a>
        <a href="/team" className="hover:text-blue-400 transition">Team</a>
      </div>
      <div className="mt-2 text-xs text-gray-600">Made with <span className="text-blue-400">&#10084;</span> by the Sci-Fi Innovation Club</div>
    </footer>
  );
}
