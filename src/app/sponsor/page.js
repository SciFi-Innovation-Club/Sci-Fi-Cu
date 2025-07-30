import Stars from '../../components/Stars';

export default function Sponsor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <Stars />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Sponsor
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Partner with Sci-Fi Innovation Club
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us in empowering the next generation of innovators and sci-fi enthusiasts. 
            Become a sponsor and help make our vision of the future a reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 font-medium"
            >
              Become a Sponsor
            </a>
            <a
              href="/about"
              className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
