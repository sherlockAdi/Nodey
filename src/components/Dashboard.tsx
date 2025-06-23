import React from 'react';
import { TrendingUp, Clock, Award, Target, Play, BookOpen, Users, Star } from 'lucide-react';
import { courses } from '../data/courses';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Courses Completed', value: '3', icon: Award, color: 'from-green-400 to-emerald-500' },
    { label: 'Hours Learned', value: '47', icon: Clock, color: 'from-blue-400 to-cyan-500' },
    { label: 'Current Streak', value: '7', icon: TrendingUp, color: 'from-orange-400 to-red-500' },
    { label: 'Certificates', value: '2', icon: Star, color: 'from-purple-400 to-pink-500' },
  ];

  const recentCourses = courses.filter(course => course.progress > 0).slice(0, 3);
  const recommendedCourses = courses.filter(course => course.progress === 0).slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-blue-100 text-lg">Ready to continue your full-stack journey?</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <Target className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center space-x-2">
            <Play className="w-4 h-4" />
            <span>Continue Learning</span>
          </button>
          <button className="border border-white border-opacity-30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
            View All Courses
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Courses */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          {recentCourses.map((course) => (
            <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.lessons} lessons • {course.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{course.progress}% complete</p>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <Play className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{course.title}</h3>
                  <p className="text-xs text-gray-600 capitalize">{course.level}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{course.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{course.duration}</span>
                <span>{course.lessons} lessons</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Your Learning Path</h2>
            <p className="text-green-700">Full-Stack Developer Track</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Node.js Basics ✓</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <span className="text-sm font-medium text-gray-700">React Fundamentals (In Progress)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-bold">3</span>
            </div>
            <span className="text-sm font-medium text-gray-500">Advanced Concepts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;