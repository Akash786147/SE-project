
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { signInWithEmail, signUpWithEmail, type UserRole } from '@/lib/auth';

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      await signInWithEmail(email, password);
      navigate('/');
    } catch (error) {
      console.error('Sign in error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to sign in",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const firstName = formData.get('firstName') as string;
      const lastName = formData.get('lastName') as string;
      const role = formData.get('role') as UserRole;
      const department = formData.get('department') as string;
      
      if (!email || !password || !firstName || !lastName || !role || !department) {
        throw new Error('Please fill in all required fields');
      }

      await signUpWithEmail(
        email,
        password,
        {
          first_name: firstName,
          last_name: lastName,
          role,
          batch: role === 'student' ? formData.get('batch') as string : undefined,
          department,
          course: role === 'student' ? formData.get('course') as string : undefined,
        }
      );
      
      toast({
        title: "Success",
        description: "Account created successfully! Please sign in.",
      });
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to sign up",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md space-y-8">
        <CardHeader className="text-center">
          <img src="/lovable-uploads/1817417c-eedd-4fb3-96af-36a69fce8b3e.png" alt="BMU Logo" className="mx-auto h-20" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Welcome to BMU Portal
          </h2>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-purple"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="First name"
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Last name"
                    required
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <select
                  name="role"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                </select>
                <Input
                  name="department"
                  placeholder="Department"
                  required
                />
                <div className="student-fields">
                  <Input
                    name="batch"
                    placeholder="Batch (e.g., 2024)"
                  />
                  <Input
                    name="course"
                    placeholder="Course (e.g., B.Tech CSE)"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
