
import { FC, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';

const Attendance: FC = () => {
  const [activeTab, setActiveTab] = useState('present');
  
  const subjectAttendance = [
    { subject: 'Software Engineering', present: 12, total: 15, percentage: 80 },
    { subject: 'Machine Learning', present: 8, total: 10, percentage: 80 },
    { subject: 'COA', present: 14, total: 15, percentage: 93 },
    { subject: 'MAD', present: 9, total: 12, percentage: 75 },
    { subject: 'Design Thinking', present: 6, total: 8, percentage: 75 },
  ];
  
  const attendanceHistory = [
    { date: '15 Feb 2023', day: 'Monday', status: 'Present', subject: 'Software Engineering' },
    { date: '16 Feb 2023', day: 'Tuesday', status: 'Present', subject: 'COA' },
    { date: '17 Feb 2023', day: 'Wednesday', status: 'Present', subject: 'Machine Learning' },
    { date: '18 Feb 2023', day: 'Thursday', status: 'Absent', subject: 'MAD' },
    { date: '19 Feb 2023', day: 'Friday', status: 'Present', subject: 'Design Thinking' },
  ];
  
  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  return (
    <PageLayout title="Attendance">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="shadow-md rounded-2xl overflow-hidden appear">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Subject Attendance</h2>
              
              <div className="space-y-4">
                {subjectAttendance.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{item.subject}</h3>
                      <span className={`font-semibold ${getPercentageColor(item.percentage)}`}>
                        {item.percentage}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-purple" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    
                    <div className="text-sm text-gray-600 mt-1">
                      {item.present} / {item.total} classes
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-1">
          <Card className="shadow-md rounded-2xl overflow-hidden appear h-full">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Attendance Overview</h2>
              
              <div className="relative h-52 w-52 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-[20px] border-purple/20 relative flex items-center justify-center">
                  <div className="absolute text-4xl font-bold">87%</div>
                </div>
                
                <div className="absolute -right-4 top-6 bg-purple/20 text-purple rounded-xl p-3 text-center">
                  <div className="text-lg font-semibold">93%</div>
                  <div className="text-sm">COA</div>
                </div>
                
                <div className="absolute -left-4 bottom-6 bg-yellow-100 text-yellow-700 rounded-xl p-3 text-center">
                  <div className="text-lg font-semibold">75%</div>
                  <div className="text-sm">MAD</div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-600">Current Status</div>
                <div className="text-xl font-semibold text-green-600">Good Standing</div>
                <div className="text-sm text-gray-600 mt-1">
                  Minimum required: 75%
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <Card className="shadow-md rounded-2xl overflow-hidden mt-6 appear">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Attendance History</h2>
          
          <div className="flex space-x-4 mb-6">
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'present' 
                  ? 'bg-purple text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('present')}
            >
              Present
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'absent' 
                  ? 'bg-purple text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('absent')}
            >
              Absent
            </button>
          </div>
          
          <div className="grid grid-cols-4 py-3 border-b font-medium text-gray-600">
            <div className="px-4">Date</div>
            <div className="px-4">Day</div>
            <div className="px-4">Status</div>
            <div className="px-4">Subject</div>
          </div>
          
          {attendanceHistory
            .filter(item => activeTab === 'present' 
              ? item.status === 'Present' 
              : item.status === 'Absent')
            .map((item, index) => (
              <div key={index} className="grid grid-cols-4 py-4 border-b last:border-b-0">
                <div className="px-4">{item.date}</div>
                <div className="px-4">{item.day}</div>
                <div className={`px-4 font-medium ${
                  item.status === 'Present' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.status}
                </div>
                <div className="px-4">{item.subject}</div>
              </div>
            ))}
        </div>
      </Card>
    </PageLayout>
  );
};

export default Attendance;
