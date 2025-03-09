
import { FC, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import SemesterTabs from '@/components/SemesterTabs';
import { Calendar } from '@/components/ui/calendar';

const Timetable: FC = () => {
  const [activeSemester, setActiveSemester] = useState(1);
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Weekly schedule data
  const scheduleData = {
    Monday: [
      { subject: 'Software Engineering', startTime: '9:30', endTime: '11:00' },
      { subject: 'Machine Learning', startTime: '13:00', endTime: '14:30' }
    ],
    Tuesday: [
      { subject: 'Data Structures', startTime: '9:30', endTime: '11:00' },
      { subject: 'COA', startTime: '13:00', endTime: '14:30' }
    ],
    Wednesday: [
      { subject: 'Design Thinking', startTime: '9:30', endTime: '11:00' },
      { subject: 'MAD', startTime: '13:00', endTime: '14:30' }
    ],
    Thursday: [
      { subject: 'Software Lab', startTime: '9:30', endTime: '12:30', cancelled: false },
      { subject: 'Cancelled', startTime: '14:00', endTime: '15:30', cancelled: true }
    ],
    Friday: [
      { subject: 'Machine Learning', startTime: '9:30', endTime: '11:00' },
      { subject: 'MAD', startTime: '13:00', endTime: '14:30' }
    ],
    Saturday: [],
    Sunday: []
  };
  
  // Today's schedule
  const todaySchedule = [
    { subject: 'Software Engineering', startTime: '9:15', endTime: '10:10' },
    { subject: 'Software Engineering', startTime: '10:15', endTime: '11:10' },
    { subject: 'Cancelled', startTime: '11:15', endTime: '12:10', cancelled: true },
    { subject: 'Lunch', startTime: '12:15', endTime: '13:15' },
    { subject: 'Machine Learning', startTime: '14:15', endTime: '15:10' },
    { subject: 'Machine Learning', startTime: '15:15', endTime: '16:15' }
  ];
  
  return (
    <PageLayout title="Timetable">
      <SemesterTabs activeSemester={activeSemester} onChange={setActiveSemester} />
      
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 bg-white rounded-2xl shadow-lg p-6 appear">
        {days.map((day) => (
          <div key={day} className="col-span-1">
            <div className="bg-gray-100 rounded-lg p-4 h-full">
              <h3 className="font-medium text-lg mb-2">{day}</h3>
              <div className="space-y-2">
                {scheduleData[day as keyof typeof scheduleData].length > 0 ? (
                  scheduleData[day as keyof typeof scheduleData].map((session, index) => (
                    <div 
                      key={index} 
                      className={`p-3 rounded-lg ${
                        session.cancelled ? 'bg-red-100' : 'bg-purple/10'
                      }`}
                    >
                      <p className={`font-medium ${session.cancelled ? 'text-red-600' : ''}`}>
                        {session.subject}
                      </p>
                      <p className="text-sm text-gray-600">{session.startTime} - {session.endTime}</p>
                    </div>
                  ))
                ) : (
                  <div className="h-24 flex items-center justify-center">
                    <p className="text-gray-500">No Classes</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 appear">
        <h3 className="text-xl font-semibold mb-4">Today's Schedule</h3>
        
        <div className="grid grid-cols-3 bg-gray-100 p-3 rounded-xl mb-4">
          <div className="text-center font-medium text-purple bg-white rounded-lg py-2 shadow-sm">Subject</div>
          <div className="text-center text-gray-700">Start Time</div>
          <div className="text-center text-gray-700">End Time</div>
        </div>
        
        <div className="space-y-2">
          {todaySchedule.map((session, index) => (
            <div 
              key={index}
              className="grid grid-cols-3 py-3 border-b last:border-0"
            >
              <div className={`pl-4 font-medium ${session.cancelled ? 'text-red-500' : ''}`}>
                {session.subject}
              </div>
              <div className="text-center text-gray-700">{session.startTime}</div>
              <div className="text-center text-gray-700">{session.endTime}</div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Timetable;
