
import { FC, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import SemesterTabs from '@/components/SemesterTabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Result: FC = () => {
  const [activeSemester, setActiveSemester] = useState(1);
  
  const semesterResults = [
    {
      subject: 'COA',
      code: 'CSE2709',
      internalMarks: 25,
      externalMarks: 65,
      totalMarks: 90,
      grade: 'A',
      credits: 3,
    },
    {
      subject: 'SE',
      code: 'CSE3005',
      internalMarks: 24,
      externalMarks: 58,
      totalMarks: 82,
      grade: 'B+',
      credits: 3,
    },
    {
      subject: 'MAD',
      code: 'CSE3709',
      internalMarks: 28,
      externalMarks: 62,
      totalMarks: 90,
      grade: 'A',
      credits: 3,
    },
    {
      subject: 'Design Thinking',
      code: 'PSP2709',
      internalMarks: 22,
      externalMarks: 55,
      totalMarks: 77,
      grade: 'B',
      credits: 2,
    },
    {
      subject: 'Machine Learning',
      code: 'CSE2032',
      internalMarks: 28,
      externalMarks: 68,
      totalMarks: 96,
      grade: 'A+',
      credits: 3,
    },
  ];
  
  const chartData = semesterResults.map(result => ({
    name: result.subject,
    marks: result.totalMarks,
  }));
  
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+':
        return 'text-purple';
      case 'A':
        return 'text-green-600';
      case 'B+':
        return 'text-blue-600';
      case 'B':
        return 'text-yellow-600';
      default:
        return 'text-gray-700';
    }
  };
  
  const calculateSGPA = () => {
    const totalCredits = semesterResults.reduce((sum, subject) => sum + subject.credits, 0);
    const totalGradePoints = semesterResults.reduce((sum, subject) => {
      let gradePoints = 0;
      switch (subject.grade) {
        case 'A+': gradePoints = 10; break;
        case 'A': gradePoints = 9; break;
        case 'B+': gradePoints = 8; break;
        case 'B': gradePoints = 7; break;
        default: gradePoints = 6; break;
      }
      return sum + (gradePoints * subject.credits);
    }, 0);
    
    return (totalGradePoints / totalCredits).toFixed(2);
  };
  
  return (
    <PageLayout title="Result">
      <SemesterTabs activeSemester={activeSemester} onChange={setActiveSemester} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="shadow-md rounded-2xl p-6 appear">
          <h3 className="text-lg font-medium mb-2">SGPA</h3>
          <div className="text-4xl font-bold text-purple">{calculateSGPA()}</div>
          <p className="text-sm text-gray-600 mt-2">Semester {activeSemester} Performance</p>
        </Card>
        
        <Card className="shadow-md rounded-2xl p-6 appear">
          <h3 className="text-lg font-medium mb-2">CGPA</h3>
          <div className="text-4xl font-bold text-purple">8.75</div>
          <p className="text-sm text-gray-600 mt-2">Overall Performance</p>
        </Card>
        
        <Card className="shadow-md rounded-2xl p-6 appear">
          <h3 className="text-lg font-medium mb-2">Highest Marks</h3>
          <div className="text-4xl font-bold text-purple">96</div>
          <p className="text-sm text-gray-600 mt-2">Machine Learning</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md rounded-2xl p-6 appear">
          <h3 className="text-xl font-semibold mb-4">Results Summary</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left font-medium text-gray-600">Subject</th>
                  <th className="py-3 text-left font-medium text-gray-600">Code</th>
                  <th className="py-3 text-left font-medium text-gray-600">Internal</th>
                  <th className="py-3 text-left font-medium text-gray-600">External</th>
                  <th className="py-3 text-left font-medium text-gray-600">Total</th>
                  <th className="py-3 text-left font-medium text-gray-600">Grade</th>
                </tr>
              </thead>
              <tbody>
                {semesterResults.map((result, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3 font-medium">{result.subject}</td>
                    <td className="py-3 text-gray-600">{result.code}</td>
                    <td className="py-3 text-gray-700">{result.internalMarks}</td>
                    <td className="py-3 text-gray-700">{result.externalMarks}</td>
                    <td className="py-3 font-medium">{result.totalMarks}</td>
                    <td className={`py-3 font-medium ${getGradeColor(result.grade)}`}>
                      {result.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card className="shadow-md rounded-2xl p-6 appear">
          <h3 className="text-xl font-semibold mb-4">Performance Graph</h3>
          
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="marks" fill="#7963ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Result;
