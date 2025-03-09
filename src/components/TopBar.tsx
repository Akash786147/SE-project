
import { FC } from 'react';
import { Bell, MessageSquare } from 'lucide-react';

interface TopBarProps {
  title?: string;
}

const TopBar: FC<TopBarProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between">
      {title && (
        <h1 className="text-4xl font-medium text-purple/90 slide-up">{title}</h1>
      )}
      
      <div className="flex items-center ml-auto gap-4">
        <button 
          className="p-3 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => console.log('Notifications')}
        >
          <Bell className="h-6 w-6 text-gray-700" />
        </button>
        <button 
          className="p-3 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => console.log('Messages')}
        >
          <MessageSquare className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
