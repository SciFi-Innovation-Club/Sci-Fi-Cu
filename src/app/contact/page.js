'use client';
import { useState } from 'react';
import Stars from '../../components/Stars';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
      } else {
        console.error('API Error:', result.error);
        setSubmitStatus('error');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <Stars />
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to join our cosmic journey? Have questions about our events? Let's connect and explore the future together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Send us a Message</h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <h4 className="text-green-400 font-bold">Message Sent Successfully!</h4>
                      <p className="text-green-300 text-sm">We'll get back to you within 12 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <h4 className="text-red-400 font-bold">Something went wrong!</h4>
                      <p className="text-red-300 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors ${
                        errors.firstName ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors ${
                        errors.lastName ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Join the Club">Join the Club</option>
                    <option value="Event Information">Event Information</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Tell us about your interest in sci-fi, technology, or any questions you have..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/50'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending to the Future...</span>
                    </div>
                  ) : (
                    'Send Message to the Future 🚀'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Email</p>
                      <a href="mailto:contact@scificlub.cu.edu.in" className="text-purple-400 hover:text-purple-300">
                        scificlub@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Location</p>
                      <p className="text-purple-400">Chandigarh University, Punjab, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Response Time</p>
                      <p className="text-purple-400">Within 12 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Follow Our Journey</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.instagram.com/scifiinnovationclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">📸</div>
                      <p className="text-pink-400 font-medium">Instagram</p>
                      <p className="text-gray-400 text-sm">@scifiinnovationclub</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/103704187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">💼</div>
                      <p className="text-blue-400 font-medium">LinkedIn</p>
                      <p className="text-gray-400 text-sm">Sci-Fi Innovation Club</p>
                    </div>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCrZ84phJVmXK0o5MArsNlbQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 group"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">📺</div>
                      <p className="text-red-400 font-medium">YouTube</p>
                      <p className="text-gray-400 text-sm">Our Channel</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/sandeepvashishtha/sci-fi-cu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 group"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">�</div>
                      <p className="text-gray-400 font-medium">GitHub</p>
                      <p className="text-gray-400 text-sm">Our Projects</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-cyan-400 mb-3">How do I join the club?</h4>
                <p className="text-gray-300 text-sm">
                  Simply fill out our membership form on the "Join Us" page or contact us directly. We welcome all students passionate about sci-fi and innovation!
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-blue-400 mb-3">Are there any membership fees?</h4>
                <p className="text-gray-300 text-sm">
                  No! Our club is completely free to join. We believe knowledge and innovation should be accessible to everyone.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-purple-400 mb-3">What events do you organize?</h4>
                <p className="text-gray-300 text-sm">
                  We host TECH-A-HUNT, THINK-A-THON, workshops, guest lectures, and networking sessions. Check our events calendar for upcoming activities!
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-green-400 mb-3">Can I collaborate on projects?</h4>
                <p className="text-gray-300 text-sm">
                  Absolutely! We encourage collaborative projects. Join our community and connect with like-minded innovators to build amazing things together.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore the Future?</h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Don't just dream about the future – help create it! Join our community of innovators and sci-fi enthusiasts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/join"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 font-medium"
                >
                  Join Our Mission
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
