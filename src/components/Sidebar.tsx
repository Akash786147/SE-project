
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, MessageSquare, BarChart2, FolderOpen, Calendar, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar: FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Clock, label: 'TimeTable', path: '/timetable' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: BarChart2, label: 'Result', path: '/result' },
    { icon: FolderOpen, label: 'Courses', path: '/courses' },
    { icon: Calendar, label: 'Attendance', path: '/attendance' },
    { icon: Users, label: 'Group Evaluation', path: '/group-evaluation' },
  ];

  return (
    <div className="w-[240px] h-screen bg-sidebar fixed left-0 top-0 rounded-tr-[24px] rounded-br-[24px] overflow-hidden shadow-xl z-10">
      <div className="p-6">
        <div className="flex items-center justify-center mb-12">
          <img src="/lovable-uploads/1817417c-eedd-4fb3-96af-36a69fce8b3e.png" alt="BMU Logo" className="h-16" />
        </div>
        
        <nav className="space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 text-white/90 hover:text-white py-2 px-4 rounded-lg transition-all duration-200 ease-in-out",
                isActive(item.path) ? 'bg-white/10 text-white font-medium' : 'hover:bg-white/5'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
