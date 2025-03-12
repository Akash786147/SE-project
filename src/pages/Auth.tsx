
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { signInWithEmail } from '@/lib/auth';

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      const { user } = await signInWithEmail(email, password);
      
      // Get role from user metadata
      const role = user?.user_metadata?.role;
      
      // Navigate based on role
      if (role === 'student') {
        navigate('/');
      } else if (role === 'faculty') {
        navigate('/');
      } else {
        navigate('/');
      }
      
      toast({
        title: "Success",
        description: "Signed in successfully!",
      });
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md space-y-8">
        <CardHeader className="text-center">
          <img src="/lovable-uploads/1817417c-eedd-4fb3-96af-36a69fce8b3e.png" alt="BMU Logo" className="mx-auto h-20" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Welcome to BMU Portal
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
