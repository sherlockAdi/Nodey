import React from 'react';
import { ArrowLeft, Clock, BookOpen, Star, Play, CheckCircle, Lock, Users } from 'lucide-react';
import { Course, Lesson } from '../types';
import { lessons } from '../data/courses';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onLessonSelect: (lessonId: string) => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack, onLessonSelect }) => {
  const courseLessons = lessons.filter(lesson => lesson.courseId === course.id);
  
  const levelColors = {
    beginner: 'from-green-400 to-emerald-500',
    intermediate: 'from-yellow-400 to-orange-500',
    advanced: 'from-red-400 to-pink-500'
  };

  const categoryColors = {
    nodejs: 'from-green-500 to-emerald-600',
    react: 'from-blue-500 to-cyan-600',
    'react-native': 'from-purple-500 to-indigo-600'
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to courses</span>
      </button>

      {/* Course Header */}
      <div className={`bg-gradient-to-r ${categoryColors[course.category]} rounded-2xl p-8 text-white`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 backdrop-blur-sm capitalize`}>
                {course.level}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 backdrop-blur-sm capitalize">
                {course.category.replace('-', ' ')}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg opacity-90 mb-6 max-w-2xl">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>12,543 students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-current" />
                <span>4.8 (2,341 reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <button className="w-full lg:w-auto bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>{course.progress > 0 ? 'Continue Course' : 'Start Course'}</span>
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        {/* {course.progress > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Course Progress</span>
              <span className="text-sm font-bold">{course.progress}%</span>
            </div>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )} */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* What You'll Learn */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.topics.map((topic, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Course Content</h2>
            <div className="space-y-3">
              {courseLessons.map((lesson, index) => (
                <div key={lesson.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      {lesson.completed ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : index < 2 ? (
                        <Play className="w-4 h-4 text-blue-500" />
                      ) : (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className={`font-medium ${lesson.completed ? 'text-gray-900' : index < 2 ? 'text-gray-900' : 'text-gray-500'}`}>
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-500">{lesson.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                    <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 text-xs font-medium hover:bg-blue-200 transition-colors" onClick={() => onLessonSelect(lesson.id)}>View Lesson</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Course Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Difficulty</span>
                <span className="font-medium capitalize">{course.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lessons</span>
                <span className="font-medium">{course.lessons}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Students</span>
                <span className="font-medium">12,543</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Language</span>
                <span className="font-medium">English</span>
              </div>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Prerequisites</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Basic understanding of JavaScript</li>
              <li>• Familiarity with web development concepts</li>
              <li>• Access to a computer with internet</li>
            </ul>
          </div>

          {/* Instructor */}
          {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Instructor</h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JD</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">John Smith</p>
                <p className="text-sm text-gray-600">Senior Full-Stack Developer</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.9 • 15,432 students</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;