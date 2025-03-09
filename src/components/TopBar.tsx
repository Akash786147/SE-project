
import { FC, useState, useRef, useEffect } from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import NotificationPanel from './NotificationPanel';
import { useToast } from '@/hooks/use-toast';

interface TopBarProps {
  title?: string;
}

const TopBar: FC<TopBarProps> = ({ title }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };
  
  const handleMessagesClick = () => {
    toast({
      title: "Messages",
      description: "You have no new messages.",
    });
    console.log('Messages');
  };
  
  return (
    <div className="flex items-center justify-between">
      {title && (
        <h1 className="text-4xl font-medium text-purple/90 slide-up">{title}</h1>
      )}
      
      <div className="flex items-center ml-auto gap-4">
        <div className="relative" ref={notificationRef}>
          <button 
            className={`p-3 rounded-full ${notificationsOpen ? 'bg-purple/10' : 'hover:bg-gray-100'} transition-colors relative`}
            onClick={toggleNotifications}
          >
            <Bell className="h-6 w-6 text-gray-700" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <NotificationPanel 
            isOpen={notificationsOpen} 
            onClose={() => setNotificationsOpen(false)} 
          />
        </div>
        <button 
          className="p-3 rounded-full hover:bg-gray-100 transition-colors"
          onClick={handleMessagesClick}
        >
          <MessageSquare className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
