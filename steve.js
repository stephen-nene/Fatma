import React, { useState } from "react";
import {
  Target,
  Heart,
  Brain,
  Dumbbell,
  BookOpen,
  Plane,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const ResolutionLanding = () => {
  const [activeSection, setActiveSection] = useState("goals");

  const resolutions = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Set Clear Goals",
      description:
        "Transform aspirations into achievable milestones with structured planning and dedication.",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Prioritize Health",
      description:
        "Focus on mental and physical well-being through balanced nutrition and regular exercise.",
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: "Learn & Grow",
      description:
        "Embrace continuous learning with new skills and knowledge acquisition every month.",
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-green-500" />,
      title: "Stay Active",
      description:
        "Maintain consistent physical activity with varied workouts and outdoor adventures.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-yellow-500" />,
      title: "Read More",
      description:
        "Expand horizons through literature, with a goal of 24 books throughout the year.",
    },
    {
      icon: <Plane className="w-6 h-6 text-indigo-500" />,
      title: "Travel & Explore",
      description:
        "Visit new places and experience different cultures to broaden perspectives.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
              2025 Resolution Journey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Transform your aspirations into achievements. Make 2025 your year
              of growth, learning, and meaningful progress.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center group transition-all">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>

      {/* Resolutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resolutions.map((resolution, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {resolution.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {resolution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {resolution.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Track Your Progress
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Every step forward is progress. Stay motivated by tracking your
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                365
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Days of Opportunity
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                12
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Monthly Milestones
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                ∞
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Possibilities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Resolution Journey. Make every day count.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResolutionLanding;
