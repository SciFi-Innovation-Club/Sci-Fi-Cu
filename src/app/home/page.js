import ThemedBackground from "../../components/ThemedBackground";
import Image from "next/image";

export default function HomePage() {
  const features = [
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      description: "Explore machine learning, neural networks, and cutting-edge AI applications that are reshaping industries.",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"]
    },
    {
      icon: "🌌",
      title: "Space Technology",
      description: "Journey into space exploration, satellite systems, and the technologies enabling humanity's cosmic future.",
      technologies: ["Satellite Design", "Mission Planning", "Astrophysics", "Rocket Science"]
    },
    {
      icon: "⚛️",
      title: "Quantum Computing",
      description: "Dive into quantum mechanics, quantum algorithms, and the revolutionary computing power of the quantum realm.",
      technologies: ["Qiskit", "Quantum Algorithms", "Quantum Physics", "IBM Quantum"]
    },
    {
      icon: "🔗",
      title: "Blockchain & Web3",
      description: "Understand decentralized systems, smart contracts, and the next generation of internet technologies.",
      technologies: ["Ethereum", "Solidity", "DeFi", "NFTs"]
    },
    {
      icon: "🦾",
      title: "Robotics & IoT",
      description: "Build autonomous systems, smart devices, and robotic solutions for real-world challenges.",
      technologies: ["ROS", "Arduino", "Raspberry Pi", "Computer Vision"]
    },
    {
      icon: "🧬",
      title: "Biotechnology",
      description: "Merge biology with technology through bioengineering, synthetic biology, and medical innovations.",
      technologies: ["CRISPR", "Bioprinting", "Synthetic Biology", "Medical Devices"]
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Projects Completed" },
    { number: "100+", label: "Events Hosted" },
    { number: "15+", label: "Industry Partners" }
  ];

  const upcomingEvents = [
    {
      title: "AI & Machine Learning Workshop",
      date: "October 15, 2025",
      type: "Workshop",
      attendees: "30+ expected"
    },
    {
      title: "Space Tech Innovation Challenge", 
      date: "November 5, 2025",
      type: "Hackathon",
      attendees: "80+ expected"
    },
    {
      title: "Quantum Computing Seminar",
      date: "October 22, 2025", 
      type: "Seminar",
      attendees: "100+ expected"
    }
  ];

  return (
    <ThemedBackground>
      <div className="font-sans min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 dark:from-purple-900/40 dark:to-blue-900/40"></div>
          <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                    Sci-Fi Innovation
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Club</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                  Where imagination meets innovation. Join us in exploring cutting-edge technologies 
                  that will shape the future of humanity and unlock the mysteries of tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/join"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>🚀</span>
                    <span>Join the Revolution</span>
                  </a>
                  <a
                    href="/events"
                    className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>📅</span>
                    <span>Explore Events</span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🛸</div>
                    <h3 className="text-2xl font-bold mb-2">Future is Now</h3>
                    <p className="text-lg opacity-90">Explore • Innovate • Create</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  ⚡
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-pulse">
                  🌟
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Explore the Future
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Dive deep into the technologies that are reshaping our world and discover 
                the innovations that will define the next decade.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-none text-sm font-medium border border-black dark:border-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Preview */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Don&apos;t miss out on our exciting upcoming events and workshops
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 rounded-none shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-none text-sm font-medium border border-black dark:border-white">
                      {event.type}
                    </span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    📅 {event.date}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="/events"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <span>View All Events</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Join Our Club?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Learn from Experts
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Access to industry professionals, researchers, and academic leaders in cutting-edge fields.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Network & Collaborate
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Connect with like-minded innovators and work on groundbreaking projects together.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Shape the Future
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Contribute to projects that have real-world impact and help build tomorrow&apos;s technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 rounded-none shadow-2xl text-black dark:text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Join hundreds of students and professionals who are already part of our innovative community.
                </p>
                <div className="space-y-4">
                  <a
                    href="/join"
                    className="block w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-3 rounded-none font-semibold transition-colors duration-200 text-center border border-black dark:border-white"
                  >
                    Apply for Membership
                  </a>
                  <a
                    href="https://chat.whatsapp.com/your-group-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-6 py-3 rounded-none font-semibold transition-all duration-200 text-center flex items-center justify-center space-x-2"
                  >
                    <span>💬</span>
                    <span>Join WhatsApp Group</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest updates on events, workshops, and breakthrough innovations 
              delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </ThemedBackground>
  );
}