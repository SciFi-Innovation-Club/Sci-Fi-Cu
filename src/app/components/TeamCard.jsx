export default function TeamCard({ member }) {
  return (
  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group w-full max-w-[320px] md:w-[320px] md:h-[455px] flex flex-col justify-between">
      {/* Profile Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Floating badge */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">⭐</span>
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
        <p className="text-blue-400 font-medium mb-3">{member.role}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {member.description}
        </p>
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Specialties:</h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {member.specialties.map((specialty, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mt-auto">
        {/* LinkedIn Link */}
        <a
          href={`https://linkedin.com/in/${member.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
          aria-label={`${member.name}'s LinkedIn Profile`}
        >
          <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        {/* GitHub Link */}
        <a
          href={`https://github.com/${member.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-gray-600/20 hover:bg-gray-600/40 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 group"
          aria-label={`${member.name}'s GitHub Profile`}
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}