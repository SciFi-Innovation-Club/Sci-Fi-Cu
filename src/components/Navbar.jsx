// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">Sci-Fi CU</h2>
        <ul className="flex gap-4 text-sm text-gray-300">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
