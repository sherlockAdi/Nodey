import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { Lesson } from '../types';

interface LessonPageProps {
  lesson: Lesson;
  onBack: () => void;
  nextLesson?: Lesson;
  prevLesson?: Lesson;
  onLessonSelect?: (lessonId: string) => void;
}

const LessonPage: React.FC<LessonPageProps> = ({ lesson, onBack, nextLesson, prevLesson, onLessonSelect }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto py-8 px-4">
      {/* Sidebar for navigation (optional) */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white rounded-xl shadow p-4 border border-gray-100">
          <button onClick={onBack} className="mb-4 text-blue-600 hover:underline font-medium">&larr; Back to Course</button>
          <div className="space-y-2">
            {prevLesson && (
              <button onClick={() => onLessonSelect && onLessonSelect(prevLesson.id)} className="block w-full text-left text-gray-700 hover:text-blue-600">&uarr; Previous Lesson</button>
            )}
            {nextLesson && (
              <button onClick={() => onLessonSelect && onLessonSelect(nextLesson.id)} className="block w-full text-left text-gray-700 hover:text-blue-600">&darr; Next Lesson</button>
            )}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-white rounded-xl shadow p-8 border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{lesson.title}</h1>
        <p className="text-gray-500 mb-6">{lesson.duration} • {lesson.description}</p>
        <div className="prose max-w-none prose-blue prose-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg my-4"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-100 rounded px-1 py-0.5 text-sm" {...props}>{children}</code>
                );
              },
              blockquote({ children }) {
                return <blockquote className="border-l-4 border-blue-400 bg-blue-50 p-4 italic text-blue-900 rounded">{children}</blockquote>;
              },
              table({ children }) {
                return <table className="table-auto border-collapse w-full my-4">{children}</table>;
              },
              th({ children }) {
                return <th className="border px-4 py-2 bg-gray-100 text-left">{children}</th>;
              },
              td({ children }) {
                return <td className="border px-4 py-2">{children}</td>;
              },
            }}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>
        {/* Navigation for mobile */}
        <div className="flex md:hidden justify-between mt-8">
          {prevLesson && (
            <button onClick={() => onLessonSelect && onLessonSelect(prevLesson.id)} className="text-blue-600 hover:underline">&larr; Previous</button>
          )}
          {nextLesson && (
            <button onClick={() => onLessonSelect && onLessonSelect(nextLesson.id)} className="text-blue-600 hover:underline ml-auto">Next &rarr;</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPage; 