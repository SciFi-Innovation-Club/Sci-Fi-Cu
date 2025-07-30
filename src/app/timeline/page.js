import Stars from '../../components/Stars';

export default function Timeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <Stars />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Timeline
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Sci-Fi Innovation Club 2025 Events Schedule
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the key dates and milestones of our upcoming events and activities.
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Registration Period</h3>
              <p className="text-gray-300">Join our club and become part of the sci-fi innovation community!</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Workshop Series</h3>
              <p className="text-gray-300">Exciting workshops on AI, robotics, and futuristic technologies.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Innovation Projects</h3>
              <p className="text-gray-300">Collaborate on groundbreaking projects that shape the future.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
