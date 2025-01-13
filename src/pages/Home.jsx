import React, { useState } from "react";
import Header from "../components/Header";
import AnimatedHero from "../components/AnimatedHero";
import {
  MapPin,
  Shield,
  Zap,
  Clock,
  ThumbsUp,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";
import mobileDesign from "../assets/mobile-design.png";
import homeVideo from "../assets/homevideo.mp4";
import homeMap from "../assets/home-map.png";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-4">
                <span className="block">Navigate Safely with</span>
                <span className="block text-blue-600">
                  Safe<span className="text-green-500">Route</span>
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Explore any area with confidence. Our AI-powered system
                recommends the safest routes based on real-time data and your
                preferences.
              </p>
              <div className="mt-10 flex justify-center space-x-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-md transition duration-300 ease-in-out">
                  Start Your Safe Route
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg font-semibold rounded-md transition duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
            {/* <AnimatedHero /> */}
            {/* Video goes here */}
            <div className="mt-12 max-w-7xl mx-auto relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                >
                  <source src={homeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={handleToggleMute}
                  className="absolute bottom-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6" />
                  ) : (
                    <Volume2 className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
              Why Choose SafeJourney?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Intelligent Safe Routes",
                  description:
                    "Our AI analyzes historical and real-time data to suggest the safest routes for your journey.",
                },
                {
                  icon: Zap,
                  title: "Instant Updates",
                  description:
                    "Receive real-time alerts and route adjustments based on the latest safety information.",
                },
                {
                  icon: Clock,
                  title: "Time-Optimized Travel",
                  description:
                    "Get route suggestions optimized for different times of day to ensure maximum safety and efficiency.",
                },
                {
                  icon: ThumbsUp,
                  title: "User-Friendly Experience",
                  description:
                    "Intuitive design makes it easy for anyone to find and follow safe routes quickly.",
                },
                {
                  icon: Users,
                  title: "Community-Powered Insights",
                  description:
                    "Benefit from real-time reports and tips from our active user community.",
                },
                {
                  icon: MapPin,
                  title: "Personalized Safety",
                  description:
                    "Set your own safety priorities and let our system tailor routes to your specific needs.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
              How SafeJourney Works
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
                    <div className="flex-1">
                      <label
                        htmlFor="start"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Starting Point
                      </label>
                      <div className="relative">
                        <input
                          id="start"
                          type="text"
                          placeholder="Enter starting location"
                          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <MapPin
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="destination"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Destination
                      </label>
                      <div className="relative">
                        <input
                          id="destination"
                          type="text"
                          placeholder="Enter destination"
                          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <MapPin
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                    Find Safe Route
                  </button>
                </div>
                {/* <AnimatedHero /> */}
              <img
                src={homeMap}
                alt="Safe Route Demonstration"
                className="w-full h-90 object-cover rounded-b-lg"
              />
              </div>
            </div>
          </div>
        </section>

        {/* Features Explained Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-2 p-8 rounded-lg">
              <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                Features Explained
              </p>
              <h2 className="mt-2 text-4xl font-extrabold text-gray-900 lg:text-5xl">
                Interactive Chart Displays
                <br />
                Key Metrics and Trends.
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Your Trusted Partner in Data Protection with Cutting-Edge
                Solutions for Comprehensive Data Security.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="space-y-12">
                  <div className="bg-cyan-200 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900">
                      Security Status Indicator
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Displays the current security status of your organization
                      with a clear color-coded indicator.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900">
                      Threat Landscape Overview
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Breaks down the threats by type (e.g., phishing, malware,
                      ransomware) to give a detailed overview of the threat
                      landscape.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900">
                      Incident Management
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Lists the number of active security incidents currently
                      being addressed.
                    </p>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-[320px]">
                  <div className="relative aspect-[320/680] mx-auto">
                    <img
                      src={mobileDesign}
                      alt="Security Status Overview Interface"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900">
                      User Activity Monitoring
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Highlights the most frequently accessed sensitive files or
                      databases and the users involved, ensuring transparency
                      and control.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900">
                      Data Access Monitoring
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Highlights the most frequently accessed sensitive files or
                      databases and the users involved.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900">
                      Compliance Monitoring
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Our system continuously monitors your network and data
                      environments for any suspicious activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {/* Testimonial Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800/50" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Join our community of satisfied users who navigate with
                confidence using SafeRoute
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah L.",
                  role: "Business Owner",
                  location: "New York",
                  quote:
                    "SafeRoute has revolutionized how I navigate the city. I feel so much more secure and confident now!",
                  rating: 5,
                },
                {
                  name: "Michael R.",
                  role: "Parent",
                  location: "Chicago",
                  quote:
                    "As a parent, I love that I can ensure my kids are taking the safest routes to school and back. It's a game-changer!",
                  rating: 5,
                },
                {
                  name: "Emily T.",
                  role: "Daily Commuter",
                  location: "San Francisco",
                  quote:
                    "The real-time updates have saved me from potentially dangerous situations multiple times. It's like having a personal safety guide!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-white rounded-xl p-8 ring-1 ring-gray-900/5 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white text-xl font-bold ring-4 ring-white">
                          {testimonial.name[0]}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ring-2 ring-white">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.role} • {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Verified User</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-gray-500">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                          </svg>
                        </button>
                        <button className="text-gray-400 hover:text-gray-500">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
              <div className="space-y-4">
                <span className="text-2xl font-bold text-white">
                  Safe<span className="text-green-500">Journey</span>
                </span>
                <p className="text-sm text-gray-400 mt-2">
                  Making your journey safer with AI-powered route
                  recommendations and real-time safety updates.
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Data Protection
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Newsletter
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Subscribe to our newsletter for safety tips and updates.
                </p>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
                  />
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="border-t border-gray-800 py-8">
              <p className="text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} SafeJourney. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
