
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface SemesterTabsProps {
  activeSemester: number;
  onChange: (semester: number) => void;
}

const SemesterTabs: FC<SemesterTabsProps> = ({ activeSemester, onChange }) => {
  const semesters = [1, 2, 3, 4];
  
  return (
    <div className="flex rounded-full bg-purple/20 p-2 w-full mb-8 fade-in">
      {semesters.map((semester) => (
        <button
          key={semester}
          onClick={() => onChange(semester)}
          className={cn(
            "flex-1 py-3 text-center rounded-full transition-all duration-300 text-lg font-medium",
            activeSemester === semester 
              ? "bg-purple text-white shadow-lg" 
              : "text-purple hover:bg-purple/10"
          )}
        >
          Semester {semester}
        </button>
      ))}
    </div>
  );
};

export default SemesterTabs;
