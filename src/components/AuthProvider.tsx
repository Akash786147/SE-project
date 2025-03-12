
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { Profile } from '@/lib/auth';

type AuthContextType = {
  user: Profile | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

// Mock user data
const mockStudentUser: Profile = {
  id: 'student-123',
  first_name: 'Student',
  last_name: 'User',
  email: 'student@example.com',
  role: 'student',
  batch: '2023-2027',
  course: 'B.Tech',
};

const mockFacultyUser: Profile = {
  id: 'faculty-123',
  first_name: 'Faculty',
  last_name: 'User',
  email: 'faculty@example.com',
  role: 'faculty',
  department: 'Computer Science',
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Use student as default mock user
  const [user, setUser] = useState<Profile | null>(mockStudentUser);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set mock user based on path
    // This is just to handle initial load
    if (location.pathname !== '/auth') {
      setUser(mockStudentUser);
    }
    setIsLoading(false);
  }, [location.pathname]);

  // This function would be used to switch between student and faculty
  // (not used in current implementation but kept for future)
  const setUserRole = (role: 'student' | 'faculty') => {
    setUser(role === 'student' ? mockStudentUser : mockFacultyUser);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
