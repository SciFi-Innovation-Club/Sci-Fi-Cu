import Stars from '../components/Stars';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <Stars />
      
      {/* Blue Orbital Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Large blue orbital ring */}
          <div className="w-[800px] h-[400px] md:w-[1200px] md:h-[600px] border border-blue-500/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          
          {/* Medium blue orbital ring */}
          <div className="w-[600px] h-[300px] md:w-[900px] md:h-[450px] border border-blue-400/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-75"></div>
          
          {/* Inner blue glow */}
          <div className="w-[400px] h-[200px] md:w-[600px] md:h-[300px] bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-purple-500/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          
          {/* Central bright spot */}
          <div className="w-[200px] h-[100px] md:w-[300px] md:h-[150px] bg-gradient-to-r from-blue-400/30 via-blue-300/40 to-purple-400/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl animate-pulse delay-150"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Small subtitle */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide">
              Chandigarh University's premier science fiction and innovation hub with passionate tech enthusiasts.
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Sci-Fi Innovation
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Club
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light max-w-3xl mx-auto">
            A new era of technological innovation and sci-fi exploration.
          </p>

          {/* Join Now Button */}
          <div className="mb-8">
            <a
              href="/join"
              className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              Join Now
            </a>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Registrations Open!</span>
          </div>
        </div>
      </main>
    </div>
  );
}
