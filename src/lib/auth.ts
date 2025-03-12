
import { supabase } from "@/integrations/supabase/client";
import { type User } from "@supabase/supabase-js";

export type UserRole = 'student' | 'faculty';

export type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: UserRole;
  batch?: string;
  department?: string;
  course?: string;
  profile_image?: string;
};

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = async (): Promise<User | null> => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const getCurrentProfile = async (): Promise<Profile | null> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) throw error;
  return data;
};
