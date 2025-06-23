import React from 'react';
import { Clock, BookOpen, Star, ChevronRight } from 'lucide-react';
import { Course } from '../types';
import * as LucideIcons from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  const IconComponent = LucideIcons[course.icon as keyof typeof LucideIcons] as React.ElementType;
  
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
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
      onClick={() => onClick(course.id)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[course.category]}`}>
          {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-600">4.8</span>
        </div>
      </div>

      {/* Course Info */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {course.description}
        </p>
        
        {/* Level Badge */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${levelColors[course.level]} capitalize`}>
          {course.level}
        </span>
      </div>

      {/* Course Stats */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <BookOpen className="w-4 h-4" />
          <span>{course.lessons} lessons</span>
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-bold text-blue-600">{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[course.category]} transition-all duration-500`}
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div> */}

      {/* Action Button */}
      <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 text-gray-700 hover:text-blue-600 py-3 rounded-lg transition-all duration-200 group-hover:shadow-md">
        <span className="font-medium">
          {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
        </span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CourseCard;