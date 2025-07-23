import Stars from '../../components/Stars';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <Stars />
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              About Our Vision
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exploring the future through creativity, innovation, and the boundless imagination of science fiction.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                To create a dynamic and inclusive community at Chandigarh University where students can explore the realms of science fiction and harness its power to inspire real-world innovation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We foster a culture of creativity, critical thinking, and collaboration, encouraging members to dream beyond conventional boundaries and contribute to the advancement of technology and society.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-purple-400 mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                To be the leading platform for sci-fi enthusiasts and innovators, bridging the gap between imagination and reality.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a future where our club members become the pioneers of tomorrow's technologies, inspired by the limitless possibilities of science fiction.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-12">
              What We Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Explore Science Fiction</h3>
                <p className="text-gray-300">
                  Dive deep into sci-fi literature, movies, and concepts that challenge our understanding of the possible and impossible.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Innovation Workshops</h3>
                <p className="text-gray-300">
                  Hands-on sessions where we turn futuristic ideas into reality through practical experimentation and prototyping.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Tech Events</h3>
                <p className="text-gray-300">
                  Organize hackathons, think-a-thons, and tech hunts that challenge conventional thinking and spark innovation.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Community Building</h3>
                <p className="text-gray-300">
                  Create a space for like-minded individuals to collaborate, share ideas, and build lasting connections.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Future Technologies</h3>
                <p className="text-gray-300">
                  Research and discuss emerging technologies like AI, robotics, space exploration, and quantum computing.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-red-500/20 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Skills Development</h3>
                <p className="text-gray-300">
                  Build technical skills, critical thinking abilities, and leadership qualities through engaging activities.
                </p>
              </div>
            </div>
          </div>

          {/* Our Events */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-12">
              Signature Events
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 p-8 rounded-xl border border-pink-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">TECH-A-HUNT</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our flagship technical treasure hunt that challenges participants to solve complex puzzles, 
                  decode futuristic scenarios, and navigate through mind-bending challenges that test both 
                  technical skills and creative thinking.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">THINK-A-THON</h3>
                <p className="text-gray-300 leading-relaxed">
                  Intensive brainstorming sessions where brilliant minds come together to tackle real-world 
                  problems using sci-fi inspired solutions. From sustainable cities to space colonization, 
                  no idea is too ambitious.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Innovation Workshops</h3>
                <p className="text-gray-300 leading-relaxed">
                  Hands-on learning experiences covering cutting-edge technologies, from AI and machine learning 
                  to robotics and virtual reality. Learn by doing, create by imagining.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-8 rounded-xl border border-green-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Guest Lectures</h3>
                <p className="text-gray-300 leading-relaxed">
                  Industry experts, researchers, and visionaries share their insights on the future of 
                  technology, space exploration, and the intersection of science fiction with reality.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="text-lg font-bold text-green-400 mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">Pushing boundaries and thinking beyond limits</p>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Exploration</h3>
                <p className="text-gray-400 text-sm">Venturing into uncharted territories of knowledge</p>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">Technology</h3>
                <p className="text-gray-400 text-sm">Embracing the power of emerging technologies</p>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-lg font-bold text-purple-400 mb-2">Impact</h3>
                <p className="text-gray-400 text-sm">Creating positive change for humanity</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Shape the Future?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join a community of dreamers, innovators, and future-builders at Chandigarh University.
              </p>
              <a
                href="/join"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 font-medium text-lg"
              >
                Join the Revolution
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
