import React from "react";
import {
  Code,
  User,
  Heart,
  Coffee,
  Book,
  Globe,
  Users,
  Brain,
  Terminal,
  Sparkles,
} from "lucide-react";

export default function ResolutionsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in space-y-6">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-purple-500 flex items-center justify-center">
              <Terminal className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Steve Nene
          </h1>
          <p className="text-xl text-gray-300">
            Kenyan Tech Enthusiast | Software Developer | Growing Extrovert
          </p>
          <div className="flex justify-center space-x-4">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400">2025 Vision & Goals</span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Vision Statement */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-xl text-gray-300 italic">
            "From writing code in quiet corners to building connections across
            Kenya's tech landscape. 2025 is my year of growth, impact, and
            stepping out of my comfort zone."
          </p>
        </div>

        {/* Resolutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Technical Growth */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <Code className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Technical Mastery</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Master Cloud Architecture (AWS & Azure)</li>
              <li>• Contribute to 5 major open-source projects</li>
              <li>• Build 2 impactful solutions for local businesses</li>
            </ul>
          </div>

          {/* Personal Growth */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <Heart className="w-10 h-10 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Personal Growth</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Embrace social situations with confidence</li>
              <li>• Join local tech meetups monthly</li>
              <li>• Start a tech podcast about Kenyan innovation</li>
            </ul>
          </div>

          {/* Professional Network */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <Users className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Mentor 5 junior developers</li>
              <li>• Speak at 3 tech conferences</li>
              <li>• Build a developer community in Nairobi</li>
            </ul>
          </div>

          {/* Learning Goals */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <Book className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Complete 2 AI/ML certifications</li>
              <li>• Read 24 technical books</li>
              <li>• Learn Swahili programming terms</li>
            </ul>
          </div>

          {/* Work-Life Balance */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <Coffee className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Work-Life Harmony</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Daily meditation practice</li>
              <li>• Weekly coding-free days</li>
              <li>• Monthly tech detox weekends</li>
            </ul>
          </div>

          {/* Innovation Goals */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <Brain className="w-10 h-10 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Innovation Projects</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Launch a tech solution for local farmers</li>
              <li>• Create an African programming language</li>
              <li>• Develop a Kenyan tech resource hub</li>
            </ul>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">2025 Progress Tracker</h2>
          <div className="flex justify-center space-x-4">
            <div className="w-32 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-3xl font-bold text-purple-400">0/12</div>
              <div className="text-sm text-gray-400">Months</div>
            </div>
            <div className="w-32 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-3xl font-bold text-green-400">0%</div>
              <div className="text-sm text-gray-400">Progress</div>
            </div>
            <div className="w-32 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-3xl font-bold text-blue-400">0</div>
              <div className="text-sm text-gray-400">Goals Met</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>Built with 💜 by Steve Nene in Kenya</p>
        <p className="text-sm mt-2">
          Powered by determination and Kenyan coffee ☕
        </p>
      </footer>
    </div>
  );
}
