import React, { useState, useEffect } from "react";
import {
  Code,
  Heart,
  Coffee,
  Book,
  Users,
  Brain,
  Terminal,
  Sparkles,
  Share2,
  MessageCircle,
  CheckCircle2,
  Circle,
} from "lucide-react";

export default function EnhancedResolutionsLanding() {
  // State for tracking progress
  const [goals, setGoals] = useState({
    technical: Array(3).fill(false),
    personal: Array(3).fill(false),
    community: Array(3).fill(false),
    learning: Array(3).fill(false),
    workLife: Array(3).fill(false),
    innovation: Array(3).fill(false),
  });

  // Community support counts (simulated)
  const [supporters, setSupporters] = useState({
    technical: 24,
    personal: 18,
    community: 32,
    learning: 28,
    workLife: 15,
    innovation: 42,
  });

  // Calculate overall progress
  const calculateProgress = () => {
    const totalGoals = Object.values(goals).flat().length;
    const completedGoals = Object.values(goals).flat().filter(Boolean).length;
    return Math.round((completedGoals / totalGoals) * 100);
  };

  // Toggle goal completion
  const toggleGoal = (category, index) => {
    setGoals((prev) => ({
      ...prev,
      [category]: prev[category].map((goal, i) => (i === index ? !goal : goal)),
    }));
  };

  // Progress bar component
  const ProgressBar = ({ progress }) => (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  // Goal card component
  const GoalCard = ({
    title,
    icon: Icon,
    color,
    goals,
    category,
    completedCount,
  }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <Icon className={`w-10 h-10 ${color} mb-4`} />
        <div className="text-sm text-gray-400">{completedCount}/3 Complete</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ProgressBar progress={(completedCount / 3) * 100} />
      <ul className="space-y-4 mt-4">
        {goals.map((goal, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-gray-300 cursor-pointer"
            onClick={() => toggleGoal(category, index)}
          >
            {goals[index] ? (
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
            ) : (
              <Circle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
            )}
            <span className={goals[index] ? "line-through text-gray-500" : ""}>
              {goalData[category][index]}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">
              {supporters[category]} supporters
            </span>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <MessageCircle className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <Share2 className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Goal data
  const goalData = {
    technical: [
      "Master Cloud Architecture (AWS & Azure)",
      "Contribute to 5 major open-source projects",
      "Build 2 impactful solutions for local businesses",
    ],
    personal: [
      "Embrace social situations with confidence",
      "Join local tech meetups monthly",
      "Start a tech podcast about Kenyan innovation",
    ],
    community: [
      "Mentor 5 junior developers",
      "Speak at 3 tech conferences",
      "Build a developer community in Nairobi",
    ],
    learning: [
      "Complete 2 AI/ML certifications",
      "Read 24 technical books",
      "Learn Swahili programming terms",
    ],
    workLife: [
      "Daily meditation practice",
      "Weekly coding-free days",
      "Monthly tech detox weekends",
    ],
    innovation: [
      "Launch a tech solution for local farmers",
      "Create an African programming language",
      "Develop a Kenyan tech resource hub",
    ],
  };

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

        {/* Overall Progress */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Overall Progress
            </h2>
            <ProgressBar progress={calculateProgress()} />
            <div className="mt-4 text-center text-gray-300">
              {calculateProgress()}% of goals completed
            </div>
          </div>
        </div>

        {/* Resolutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <GoalCard
            title="Technical Mastery"
            icon={Code}
            color="text-purple-400"
            goals={goals.technical}
            category="technical"
            completedCount={goals.technical.filter(Boolean).length}
          />
          <GoalCard
            title="Personal Growth"
            icon={Heart}
            color="text-red-400"
            goals={goals.personal}
            category="personal"
            completedCount={goals.personal.filter(Boolean).length}
          />
          <GoalCard
            title="Community Impact"
            icon={Users}
            color="text-blue-400"
            goals={goals.community}
            category="community"
            completedCount={goals.community.filter(Boolean).length}
          />
          <GoalCard
            title="Continuous Learning"
            icon={Book}
            color="text-green-400"
            goals={goals.learning}
            category="learning"
            completedCount={goals.learning.filter(Boolean).length}
          />
          <GoalCard
            title="Work-Life Harmony"
            icon={Coffee}
            color="text-yellow-400"
            goals={goals.workLife}
            category="workLife"
            completedCount={goals.workLife.filter(Boolean).length}
          />
          <GoalCard
            title="Innovation Projects"
            icon={Brain}
            color="text-pink-400"
            goals={goals.innovation}
            category="innovation"
            completedCount={goals.innovation.filter(Boolean).length}
          />
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
