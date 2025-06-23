import { Course, Lesson } from '../types';

export const courses: Course[] = [
  // Node.js Courses
  {
    id: 'nodejs-basics',
    title: 'Node.js Fundamentals',
    description: 'Master the basics of Node.js, from installation to building your first server',
    category: 'nodejs',
    level: 'beginner',
    duration: '8 hours',
    lessons: 24,
    progress: 65,
    icon: 'Server',
    topics: [
      'What is Node.js?',
      'Installing Node.js',
      'Node.js REPL',
      'Modules and npm',
      'File System Operations',
      'HTTP Module',
      'Building a Simple Server',
      'Event Loop Understanding'
    ]
  },
  {
    id: 'nodejs-intermediate',
    title: 'Node.js Intermediate',
    description: 'Dive deeper into Node.js with Express, middleware, and database integration',
    category: 'nodejs',
    level: 'intermediate',
    duration: '12 hours',
    lessons: 32,
    progress: 30,
    icon: 'Database',
    topics: [
      'Express.js Framework',
      'Middleware Functions',
      'Routing and Route Handlers',
      'Template Engines',
      'Database Integration (MongoDB)',
      'Authentication & Authorization',
      'Error Handling',
      'RESTful API Design'
    ]
  },
  {
    id: 'nodejs-advanced',
    title: 'Advanced Node.js',
    description: 'Master advanced concepts like clustering, microservices, and performance optimization',
    category: 'nodejs',
    level: 'advanced',
    duration: '16 hours',
    lessons: 28,
    progress: 0,
    icon: 'Cpu',
    topics: [
      'Clustering and Child Processes',
      'Microservices Architecture',
      'GraphQL Implementation',
      'WebSocket Communication',
      'Performance Optimization',
      'Testing Strategies',
      'Deployment and DevOps',
      'Security Best Practices'
    ]
  },
  // React Courses
  {
    id: 'react-basics',
    title: 'React Fundamentals',
    description: 'Learn React from scratch - components, JSX, props, and state management',
    category: 'react',
    level: 'beginner',
    duration: '10 hours',
    lessons: 28,
    progress: 85,
    icon: 'Layout',
    topics: [
      'Introduction to React',
      'JSX Syntax',
      'Components and Props',
      'State and Event Handling',
      'Conditional Rendering',
      'Lists and Keys',
      'Forms and Controlled Components',
      'Component Lifecycle'
    ]
  },
  {
    id: 'react-intermediate',
    title: 'Intermediate React',
    description: 'Advanced React concepts including hooks, context, and modern patterns',
    category: 'react',
    level: 'intermediate',
    duration: '14 hours',
    lessons: 35,
    progress: 45,
    icon: 'Zap',
    topics: [
      'React Hooks (useState, useEffect)',
      'Custom Hooks',
      'Context API',
      'React Router',
      'Performance Optimization',
      'Error Boundaries',
      'Code Splitting',
      'Testing React Components'
    ]
  },
  {
    id: 'react-advanced',
    title: 'Advanced React',
    description: 'Master advanced React patterns, state management, and modern development practices',
    category: 'react',
    level: 'advanced',
    duration: '18 hours',
    lessons: 32,
    progress: 10,
    icon: 'Rocket',
    topics: [
      'Advanced Hooks Patterns',
      'State Management (Redux Toolkit)',
      'Server-Side Rendering (Next.js)',
      'React Suspense and Concurrent Features',
      'Advanced Performance Optimization',
      'Micro-frontends',
      'TypeScript with React',
      'Production Deployment'
    ]
  },
  // React Native Courses
  {
    id: 'react-native-basics',
    title: 'React Native Fundamentals',
    description: 'Build mobile apps with React Native - from setup to your first app',
    category: 'react-native',
    level: 'beginner',
    duration: '12 hours',
    lessons: 30,
    progress: 20,
    icon: 'Smartphone',
    topics: [
      'Introduction to React Native',
      'Development Environment Setup',
      'Core Components',
      'Styling with StyleSheet',
      'Navigation Basics',
      'Handling User Input',
      'Lists and FlatList',
      'Images and Media'
    ]
  },
  {
    id: 'react-native-intermediate',
    title: 'Intermediate React Native',
    description: 'Advanced mobile development with navigation, state management, and native features',
    category: 'react-native',
    level: 'intermediate',
    duration: '16 hours',
    lessons: 36,
    progress: 0,
    icon: 'Monitor',
    topics: [
      'React Navigation',
      'State Management in Mobile Apps',
      'Native Device Features',
      'Camera and Gallery Integration',
      'Push Notifications',
      'Offline Storage',
      'API Integration',
      'Performance Optimization'
    ]
  },
  {
    id: 'react-native-advanced',
    title: 'Advanced React Native',
    description: 'Master advanced mobile development, native modules, and app store deployment',
    category: 'react-native',
    level: 'advanced',
    duration: '20 hours',
    lessons: 40,
    progress: 0,
    icon: 'Settings',
    topics: [
      'Native Modules Development',
      'Advanced Animations',
      'Testing Mobile Applications',
      'Code Push and Updates',
      'App Store Deployment',
      'Performance Monitoring',
      'Security Best Practices',
      'CI/CD for Mobile Apps'
    ]
  }
];

export const lessons: Lesson[] = [
  // Sample lessons for nodejs-basics
  {
    id: 'nodejs-basics-1',
    title: 'What is Node.js and Why Use It?',
    courseId: 'nodejs-basics',
    duration: '15 min',
    completed: true,
    description: 'Introduction to Node.js, its history, and core concepts',
    content: `
## What is Node.js?
Node.js is a runtime environment for executing JavaScript code outside of a browser.\n\n**Key Features:**\n- Event-driven\n- Non-blocking I/O\n- Built on Chrome's V8 engine\n\n\`\`\`js\nconsole.log('Hello from Node.js!');\n\`\`\`
    `
  },
  {
    id: 'nodejs-basics-2',
    title: 'Installing Node.js and Setting Up Development Environment',
    courseId: 'nodejs-basics',
    duration: '20 min',
    completed: true,
    description: 'Step-by-step guide to install Node.js and set up your development environment',
    content: `
## Installing Node.js
Download Node.js from the [official website](https://nodejs.org/).\n\n**Steps:**\n1. Download the installer\n2. Run the installer\n3. Verify installation with:\n\`\`\`bash\nnode -v\nnpm -v\n\`\`\`
    `
  },
  {
    id: 'nodejs-basics-3',
    title: 'Understanding the Node.js REPL',
    courseId: 'nodejs-basics',
    duration: '12 min',
    completed: false,
    description: 'Hands-on practice with Node.js Read-Eval-Print Loop',
    content: `
## Node.js REPL
REPL stands for Read-Eval-Print Loop. It is an interactive shell for Node.js.\n\n**Try it:**\n\`\`\`bash\nnode\n> 2 + 2\n4\n\`\`\`
    `
  }
];


