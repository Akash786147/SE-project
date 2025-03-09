
import { FC, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import SemesterTabs from '@/components/SemesterTabs';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Courses: FC = () => {
  const [activeSemester, setActiveSemester] = useState(1);
  const navigate = useNavigate();
  
  const courseData = [
    {
      code: 'CSE2709',
      name: 'COA',
      sessions: 50,
      credits: 3.0,
      faculty: 'Dr.Satyendr Singh',
    },
    {
      code: 'CSE3005',
      name: 'SE',
      sessions: 120,
      credits: 3.0,
      faculty: 'Dr.Nishtha Phutela',
    },
    {
      code: 'CSE3709',
      name: 'MAD',
      sessions: 40,
      credits: 3.0,
      faculty: 'Mr.Gautam Gupta',
    },
    {
      code: 'PSP2709',
      name: 'Design Thinking',
      sessions: 60,
      credits: 3.0,
      faculty: 'Mr.Avijit Chakarvarti',
    },
    {
      code: 'CSE2032',
      name: 'Machine Learning',
      sessions: 120,
      credits: 3.0,
      faculty: 'Prof.Anantha Rao',
    },
  ];
  
  const goToCourseRegistration = () => {
    navigate('/course-registration');
  };
  
  return (
    <PageLayout title="Courses">
      <SemesterTabs activeSemester={activeSemester} onChange={setActiveSemester} />
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden appear">
        <div className="grid grid-cols-5 py-4 border-b">
          <div className="px-6 font-medium text-gray-600">Code</div>
          <div className="px-6 font-medium text-gray-600">Course Name</div>
          <div className="px-6 font-medium text-gray-600">Sessions</div>
          <div className="px-6 font-medium text-gray-600">Credits</div>
          <div className="px-6 font-medium text-gray-600">Faculty Name</div>
        </div>
        
        {courseData.map((course, index) => (
          <div 
            key={index} 
            className="grid grid-cols-5 py-6 hover:bg-gray-50 transition-colors border-b last:border-b-0"
          >
            <div className="px-6 text-gray-700">{course.code}</div>
            <div className="px-6 text-gray-800 font-medium">{course.name}</div>
            <div className="px-6 text-gray-700">{course.sessions}</div>
            <div className="px-6 text-gray-700">{course.credits}</div>
            <div className="px-6 text-gray-700">{course.faculty}</div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-4 space-x-4">
        <Button 
          onClick={goToCourseRegistration}
          className="bg-purple hover:bg-purple/90 text-white"
        >
          Course Registration
        </Button>
        <Button className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200">
          Next
        </Button>
      </div>
    </PageLayout>
  );
};

export default Courses;
