import ThemedBackground from "../../components/ThemedBackground";

export default function Join() {
  const membershipBenefits = [
    {
      icon: "🎓",
      title: "Exclusive Workshops",
      description: "Access to hands-on workshops, masterclasses, and skill-building sessions led by industry experts."
    },
    {
      icon: "🤝",
      title: "Networking Opportunities",
      description: "Connect with like-minded innovators, researchers, and professionals in cutting-edge technology fields."
    },
    {
      icon: "🔬",
      title: "Research Projects",
      description: "Participate in collaborative research projects and contribute to breakthrough innovations."
    },
    {
      icon: "💼",
      title: "Career Development",
      description: "Get mentorship, career guidance, and access to internship and job opportunities."
    },
    {
      icon: "🚀",
      title: "Innovation Lab Access",
      description: "Use our state-of-the-art facilities and equipment for your projects and experiments."
    },
    {
      icon: "🏆",
      title: "Competition Opportunities",
      description: "Participate in hackathons, innovation challenges, and represent the club in tech competitions."
    }
  ];

  const membershipTiers = [
    {
      name: "Explorer",
      price: "Free",
      duration: "Lifetime",
      features: [
        "Access to public events and workshops",
        "Community Discord access",
        "Monthly newsletter",
        "Basic networking opportunities",
        "Online resource library"
      ],
      popular: false
    },
    {
      name: "Innovator",
      price: "$29",
      duration: "per semester",
      features: [
        "All Explorer benefits",
        "Priority event registration",
        "Exclusive member-only workshops",
        "Innovation lab access (20 hours/month)",
        "Mentorship program participation",
        "Research project opportunities"
      ],
      popular: true
    },
    {
      name: "Pioneer",
      price: "$89",
      duration: "per semester",
      features: [
        "All Innovator benefits",
        "Unlimited lab access",
        "1-on-1 mentorship sessions",
        "Leadership opportunity eligibility",
        "Conference attendance sponsorship",
        "Exclusive industry connections"
      ],
      popular: false
    }
  ];

  const requirements = [
    "Passion for technology and innovation",
    "Willingness to learn and collaborate",
    "Commitment to club values and activities",
    "Open to all skill levels and backgrounds"
  ];

  return (
    <ThemedBackground>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Become part of a vibrant community of innovators, researchers, 
              and tech enthusiasts shaping the future of technology.
            </p>
            <a
              href="#membership"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              Choose Your Membership
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Why Join Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {membershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="text-4xl mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section id="membership" className="bg-gray-50 dark:bg-gray-800/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Membership Options
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {membershipTiers.map((tier, index) => (
                <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${tier.popular ? 'ring-4 ring-purple-500 scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                      {tier.name}
                    </h3>
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                        {tier.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        {tier.duration}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transform hover:scale-105 shadow-lg' 
                        : 'border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900'
                    }`}>
                      {tier.price === "Free" ? "Join Now" : "Select Plan"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    Application Form
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          University/Organization
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Field of Study/Work
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Membership Tier *
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
                        <option value="">Select membership tier</option>
                        <option value="explorer">Explorer (Free)</option>
                        <option value="innovator">Innovator ($29/semester)</option>
                        <option value="pioneer">Pioneer ($89/semester)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Areas of Interest
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Artificial Intelligence", "Quantum Computing", "Space Technology", "Robotics", "Blockchain", "Biotech"].map((interest) => (
                          <label key={interest} className="flex items-center">
                            <input type="checkbox" className="mr-2 rounded" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Why do you want to join? *
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell us about your interests and what you hope to achieve..."
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>

                {/* Requirements & Info */}
                <div className="space-y-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Membership Requirements
                    </h3>
                    <ul className="space-y-3">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-100">
                      Application Process
                    </h3>
                    <ol className="space-y-2 text-purple-800 dark:text-purple-200">
                      <li>1. Submit your application form</li>
                      <li>2. Attend a brief welcome interview</li>
                      <li>3. Complete orientation session</li>
                      <li>4. Start participating in activities!</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">
                      Questions?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 mb-4">
                      Need help choosing the right membership or have questions about joining?
                    </p>
                    <div className="space-y-2">
                      <a href="/contact" className="block text-blue-600 dark:text-blue-400 hover:underline">
                        📧 Contact us directly
                      </a>
                      <a href="https://chat.whatsapp.com/your-group-link" className="block text-blue-600 dark:text-blue-400 hover:underline">
                        💬 Join our WhatsApp group
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 dark:bg-gray-800/50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of innovators who are already part of our community 
              and help shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#membership"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="/events"
                className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Explore Events First
              </a>
            </div>
          </div>
        </section>
      </div>
    </ThemedBackground>
  );
}