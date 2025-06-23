import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CoursesGrid from './components/CoursesGrid';
import CourseDetail from './components/CourseDetail';
import LessonPage from './components/LessonPage';
import { courses, lessons } from './data/courses';
import { Course, Lesson } from './types';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setSelectedCourse(null);
    setSelectedLesson(null);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const handleCourseClick = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
    }
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSelectedLesson(null);
  };

  const renderContent = () => {
    if (selectedLesson) {
      const courseLessons = lessons.filter(l => l.courseId === selectedLesson.courseId);
      const idx = courseLessons.findIndex(l => l.id === selectedLesson.id);
      const prevLesson = idx > 0 ? courseLessons[idx - 1] : undefined;
      const nextLesson = idx < courseLessons.length - 1 ? courseLessons[idx + 1] : undefined;
      return (
        <LessonPage
          lesson={selectedLesson}
          onBack={() => setSelectedLesson(null)}
          prevLesson={prevLesson}
          nextLesson={nextLesson}
          onLessonSelect={lessonId => {
            const lesson = lessons.find(l => l.id === lessonId);
            if (lesson) setSelectedLesson(lesson);
          }}
        />
      );
    }

    if (selectedCourse) {
      return (
        <CourseDetail
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
          onLessonSelect={lessonId => {
            const lesson = lessons.find(l => l.id === lessonId);
            if (lesson) setSelectedLesson(lesson);
          }}
        />
      );
    }

    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'nodejs':
        return (
          <CoursesGrid
            courses={courses.filter(c => c.category === 'nodejs')}
            title="Node.js Courses"
            onCourseClick={handleCourseClick}
          />
        );
      case 'react':
        return (
          <CoursesGrid
            courses={courses.filter(c => c.category === 'react')}
            title="React Courses"
            onCourseClick={handleCourseClick}
          />
        );
      case 'react-native':
        return (
          <CoursesGrid
            courses={courses.filter(c => c.category === 'react-native')}
            title="React Native Courses"
            onCourseClick={handleCourseClick}
          />
        );
      case 'all-courses':
        return (
          <CoursesGrid
            courses={courses}
            title="All Courses"
            onCourseClick={handleCourseClick}
          />
        );
      case 'achievements':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-gray-600">Your achievements and certificates will appear here.</p>
          </div>
        );
      case 'progress':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Progress</h2>
            <p className="text-gray-600">Detailed progress analytics coming soon.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">Account and learning preferences.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={handleMenuToggle} isSidebarOpen={isSidebarOpen} />


      <div className="flex h-screen ">
      <Sidebar
        isOpen={isSidebarOpen}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <main className="flex-1 overflow-y-auto h-screen m-5 ml-64">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;