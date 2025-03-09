
import { FC, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Pen } from 'lucide-react';

const GroupEvaluation: FC = () => {
  const [activeSubject, setActiveSubject] = useState('COA');
  
  const subjects = ['COA', 'DT', 'ML', 'MAD'];
  
  const teamMembers = [
    {
      id: 1,
      name: 'Akash',
      srNo: 1,
      task: 'Mongo DB',
      marks: 8,
      maxMarks: 10
    },
    {
      id: 2,
      name: 'Akshit',
      srNo: 2,
      task: 'Login/Signup pages',
      marks: 9,
      maxMarks: 10
    },
    {
      id: 3,
      name: 'Palak',
      srNo: 3,
      task: '',
      marks: 7,
      maxMarks: 10
    },
    {
      id: 4,
      name: 'Ketan',
      srNo: 4,
      task: 'create Ride page',
      marks: 8,
      maxMarks: 10
    }
  ];
  
  return (
    <PageLayout title="Group Evaluation">
      <div className="flex rounded-full bg-purple-200/40 p-2 w-full mb-8 fade-in">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setActiveSubject(subject)}
            className={`
              flex-1 py-3 text-center rounded-full transition-all duration-300 text-lg font-medium
              ${activeSubject === subject ? 'bg-purple text-white shadow-lg' : 'text-purple hover:bg-purple/10'}
            `}
          >
            {subject}
          </button>
        ))}
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden appear">
        <div className="p-6">
          <div className="grid grid-cols-4 py-4 border-b">
            <div className="px-6 font-medium text-gray-600">Sr.No</div>
            <div className="px-6 font-medium text-gray-600">Name</div>
            <div className="px-6 font-medium text-gray-600">Tasks</div>
            <div className="px-6 font-medium text-gray-600">Marks</div>
          </div>
          
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="grid grid-cols-4 py-6 hover:bg-gray-50 transition-colors border-b last:border-b-0"
            >
              <div className="px-6 text-gray-700">{member.srNo}.</div>
              <div className="px-6 text-gray-800 font-medium">{member.name}</div>
              <div className="px-6 text-gray-700 flex items-center">
                {member.task ? (
                  <>
                    {member.task === 'Login/Signup pages' && <Pen className="h-4 w-4 mr-2 text-gray-500" />}
                    {member.task}
                  </>
                ) : (
                  <span className="text-gray-400">Not assigned</span>
                )}
              </div>
              <div className="px-6 text-gray-700">/{member.maxMarks}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end mt-8">
        <Button className="bg-purple hover:bg-purple/90 text-white px-8 py-6 text-lg rounded-full">
          Review Others
        </Button>
      </div>
    </PageLayout>
  );
};

export default GroupEvaluation;
