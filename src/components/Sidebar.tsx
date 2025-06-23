import React from 'react';
import { 
  Home, 
  Server, 
  Layout, 
  Smartphone, 
  BookOpen, 
  Trophy, 
  BarChart3, 
  Settings,
  ChevronRight,
  Play
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'nodejs', label: 'Node.js', icon: Server },
  { id: 'react', label: 'React', icon: Layout },
  { id: 'react-native', label: 'React Native', icon: Smartphone },
  { id: 'all-courses', label: 'All Courses', icon: BookOpen },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'progress', label: 'Progress', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeSection, onSectionChange }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => onSectionChange(activeSection)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)]
      `}>
        <div className="flex flex-col h-full">
          {/* Quick Stats */}
          <div className="p-4 border-b border-gray-100">
            {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg"> */}
              {/* <div className="flex items-center justify-between mb-2"> */}
                {/* <span className="text-sm font-medium text-gray-700">Learning Streak</span> */}
                {/* <span className="text-sm font-bold text-orange-600">7 days</span> */}
              {/* </div> */}
              {/* <div className="flex items-center space-x-2"> */}
                {/* <Play className="w-4 h-4 text-green-500" /> */}
                {/* <span className="text-xs text-gray-600">3 courses in progress</span> */}
              {/* </div> */}
            {/* </div> */}
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onSectionChange(item.id)}
                      className={`
                        w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200
                        ${isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                          : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-gray-100">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-gray-700 mb-1">Course Completion</p>
              <div className="flex items-center justify-between">
                <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <span className="text-xs font-bold text-green-600">68%</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;