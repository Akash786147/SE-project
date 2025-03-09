
import { FC } from 'react';
import PageLayout from '@/components/PageLayout';

const Timetable: FC = () => {
  return (
    <PageLayout title="Timetable">
      <div className="bg-white rounded-2xl shadow-lg p-6 appear">
        <h2 className="text-2xl font-semibold mb-6">Weekly Schedule</h2>
        
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Monday</h3>
              <div className="space-y-2">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">Software Engineering</p>
                  <p className="text-sm text-gray-600">9:30 - 11:00</p>
                </div>
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">Machine Learning</p>
                  <p className="text-sm text-gray-600">13:00 - 14:30</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Tuesday</h3>
              <div className="space-y-2">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">Data Structures</p>
                  <p className="text-sm text-gray-600">9:30 - 11:00</p>
                </div>
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">COA</p>
                  <p className="text-sm text-gray-600">13:00 - 14:30</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Wednesday</h3>
              <div className="space-y-2">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">Design Thinking</p>
                  <p className="text-sm text-gray-600">9:30 - 11:00</p>
                </div>
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">MAD</p>
                  <p className="text-sm text-gray-600">13:00 - 14:30</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Thursday</h3>
              <div className="space-y-2">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">Software Lab</p>
                  <p className="text-sm text-gray-600">9:30 - 12:30</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="font-medium text-red-600">Cancelled</p>
                  <p className="text-sm text-gray-600">14:00 - 15:30</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Friday</h3>
              <div className="space-y-2">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">Machine Learning</p>
                  <p className="text-sm text-gray-600">9:30 - 11:00</p>
                </div>
                <div className="bg-purple/10 p-3 rounded-lg">
                  <p className="font-medium">MAD</p>
                  <p className="text-sm text-gray-600">13:00 - 14:30</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Saturday</h3>
              <div className="h-24 flex items-center justify-center">
                <p className="text-gray-500">No Classes</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Today's Schedule</h3>
          
          <div className="grid grid-cols-3 bg-gray-100 p-3 rounded-xl mb-4">
            <div className="text-center font-medium text-purple bg-white rounded-lg py-2 shadow-sm">Subject</div>
            <div className="text-center text-gray-700">Start Time</div>
            <div className="text-center text-gray-700">End Time</div>
          </div>
          
          <div className="space-y-2">
            {[
              { subject: 'Software Engineering', startTime: '9:15', endTime: '10:10' },
              { subject: 'Software Engineering', startTime: '10:15', endTime: '11:10' },
              { subject: 'Cancelled', startTime: '11:15', endTime: '12:10', cancelled: true },
              { subject: 'Lunch', startTime: '12:15', endTime: '13:15' },
              { subject: 'Machine Learning', startTime: '14:15', endTime: '15:10' },
              { subject: 'Machine Learning', startTime: '15:15', endTime: '16:15' },
            ].map((session, index) => (
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
      </div>
    </PageLayout>
  );
};

export default Timetable;
