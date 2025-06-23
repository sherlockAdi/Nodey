export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'nodejs' | 'react' | 'react-native';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: number;
  progress: number;
  icon: string;
  topics: string[];
}

export interface Lesson {
  id: string;
  title: string;
  courseId: string;
  duration: string;
  completed: boolean;
  description: string;
  content: string; // Markdown or HTML for the lesson page
}

export interface User {
  id: string;
  name: string;
  email: string;
  completedCourses: number;
  totalHours: number;
  streak: number;
}