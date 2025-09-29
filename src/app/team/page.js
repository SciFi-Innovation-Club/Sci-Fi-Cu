import ThemedBackground from "../../components/ThemedBackground";
import teamData from "../../data/team.json";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <Linkedin size={16} />,
    };
    return icons[platform] || "🔗";
  };

  const MemberCard = ({ member, type = "member" }) => (
    <div className="bg-gray-800 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-sm font-mono">
          {member.name.toLowerCase().replace(' ', '_')}.js
        </div>
        <div className="w-16"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm">
        {/* Comment */}
        <div className="text-gray-400 mb-4 text-center">{'// ' + member.role}</div>
        
        {/* Profile Photo - Centered */}
        <div className="flex justify-center mb-4">
          {member.avatar ? (
            <Image 
              src={member.avatar} 
              alt={member.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-lg object-cover"
            />
          ) : (
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        
        {/* Developer Object - Simplified */}
        <div className="space-y-1 text-center">
          <div>
            <span className="text-purple-400">const </span>
            <span className="text-blue-400">developer</span>
            <span className="text-yellow-400"> = {`{`}</span>
          </div>
          
          <div className="ml-4">
            <span className="text-red-400">name:</span>
            <span className="text-green-400"> &apos;{member.name}&apos;</span>,
          </div>
          
          <div className="ml-4">
            <span className="text-red-400">role:</span>
            <span className="text-green-400"> &apos;{member.role}&apos;</span>
          </div>
          
          <div>
            <span className="text-yellow-400">{`};`}</span>
          </div>
        </div>
        
        {/* LinkedIn Link */}
        {member.social?.linkedin && (
          <div className="mt-4 flex justify-center">
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <Linkedin size={16} />
              <span className="text-xs font-mono">{'// LinkedIn'}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <ThemedBackground>
      <div className="min-h-screen pt-20">
        {/* Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Team
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamData.team.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who want to push 
              the boundaries of technology and innovation. Join us in shaping the future!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Apply to Join
              </a>
              <a
                href="/contact"
                className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </ThemedBackground>
  );
}