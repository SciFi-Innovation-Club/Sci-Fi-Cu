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
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-black/85" />
          <div className="relative z-10 text-center px-6">
            <div className="inline-block mb-6">
              <span className="text-sm bg-white/5 text-gray-200 px-4 py-2 rounded-full border border-white/10">Chandigarh University&apos;s</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
              Sci-Fi Innovation
              <br />
              <span className="block">Club</span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
              A community exploring future technologies and building meaningful projects.
            </p>

            <div className="mt-8">
              <a href="/join" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full font-semibold shadow-lg hover:opacity-95 transition">Apply Now</a>
            </div>


            {/* edit this part to write something below the apply now button */}
            {/* <div className="mt-4 text-gray-300 text-sm flex items-center justify-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              <span></span>
            </div> */}
          </div>
        </section>
      </div>
    </ThemedBackground>
  );
}