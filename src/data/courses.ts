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
  {
    id: 'nodejs-basics-1',
    title: 'What is Node.js and Why Use It?',
    courseId: 'nodejs-basics',
    duration: '15 min',
    completed: false,
    description: 'Introduction to Node.js, its history, and core concepts',
    content: `
# 🟢 What is Node.js and Why Use It?

> **Node.js** is a powerful, open-source runtime that lets you run JavaScript on the server, not just in the browser.


---

## 🚀 Quick Facts

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Release Year**       | 2009                                                                        |
| **Creator**            | Ryan Dahl                                                                   |
| **Engine**             | Chrome V8 JavaScript Engine                                                 |
| **Package Manager**    | npm (Node Package Manager)                                                  |
| **Main Use**           | Building scalable, fast, and efficient server-side applications             |

---

## 🎯 Why Node.js?

- **Unified Language:** Use JavaScript everywhere (front-end & back-end).
- **Non-blocking I/O:** Handles many connections at once without waiting for slow operations.
- **Event-driven:** Perfect for real-time apps (like chat, games, APIs).
- **Massive Ecosystem:** Over 1 million npm packages for every need.

---

## 🧠 How Does Node.js Work?


- **Single-threaded:** One main thread, but can handle thousands of connections.
- **Event Loop:** Keeps checking for new work (like incoming requests or file reads).
- **Asynchronous:** Uses callbacks, promises, or async/await to avoid blocking.

---

## 📦 npm: The Node Package Manager

> **npm** is like an app store for Node.js code. It lets you install, update, and share code easily.

\`\`\`bash
npm install express
\`\`\`

---

## 💡 Example: Your First Node.js Script

\`\`\`js
console.log('Hello from Node.js!');
\`\`\`

Save this as hello.js and run:

\`\`\`
node hello.js
\`\`\`

---

## 🏗️ What Can You Build with Node.js?

- Real-time chat apps (WhatsApp, Slack clones)
- REST APIs and GraphQL APIs
- Streaming servers (like Netflix)
- Command-line tools
- IoT and robotics

---

## 📝 Did You Know?

> Node.js powers major companies like Netflix, LinkedIn, Uber, and PayPal!

---

## 🔑 Key Takeaways

- Node.js lets you use JavaScript for server-side programming.
- It is fast, scalable, and has a huge ecosystem.
- Perfect for modern web, mobile, and IoT applications.

---

Ready to dive deeper? Let's get Node.js installed and start coding!
    `
  },
  {
    id: 'nodejs-basics-2',
    title: 'Installing Node.js and Setting Up Development Environment',
    courseId: 'nodejs-basics',
    duration: '20 min',
    completed: false,
    description: 'Step-by-step guide to install Node.js and set up your development environment',
    content: `
## Installing Node.js
Download Node.js from the [official website](https://nodejs.org/).

**Steps:**
1. Download the installer
2. Run the installer
3. Verify installation:
\`\`\`bash
node -v
npm -v
\`\`\`
    `
  },
  {
    id: 'nodejs-basics-2',
    title: 'Installing Node.js and Setting Up Development Environment',
    courseId: 'nodejs-intermediate',
    duration: '20 min',
    completed: false,
    description: 'Step-by-step guide to install Node.js and set up your development environment',
    content: `
## Installing Node.js
Download Node.js from the [official website](https://nodejs.org/).

**Steps:**
1. Download the installer
2. Run the installer
3. Verify installation:
\`\`\`bash
node -v
npm -v
\`\`\`
    `
  },
]