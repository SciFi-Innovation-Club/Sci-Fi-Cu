export default function Join() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Join the Future
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to explore the future through creativity, innovation, and science fiction? 
            Join the Sci-Fi Innovation Club and embark on an exciting journey!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-blue-500/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Why Join Us?</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">🚀</span>
                Explore cutting-edge technologies and futuristic concepts
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">🧠</span>
                Participate in innovation workshops and brainstorming sessions
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">🤝</span>
                Network with like-minded innovators and creators
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">🎯</span>
                Take part in hackathons, tech hunts, and competitions
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">📚</span>
                Access exclusive resources and guest lectures
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-500/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Membership Benefits</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✨</span>
                Free access to all club events and workshops
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">🏆</span>
                Participation certificates and achievement badges
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">💡</span>
                Mentorship from senior members and industry experts
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">🎨</span>
                Opportunities to showcase your projects and ideas
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">🌟</span>
                Leadership opportunities within the club
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Connect with us on our social media platforms or reach out directly!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/scifiinnovationclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/103704187"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://www.youtube.com/channel/UCrZ84phJVmXK0o5MArsNlbQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
            >
              Subscribe on YouTube
            </a>
          </div>

          <div className="text-gray-400">
            <p>Or contact us directly at our events on campus!</p>
            <p className="mt-2">
              <span className="text-blue-400">📍</span> Chandigarh University, Punjab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
