import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ACCESS_TOKEN } from '@/shared/const/local-storage.ts';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(localStorage.getItem(ACCESS_TOKEN));

  useEffect(() => {
    const handleStorageChange = () => {
      const newToken = localStorage.getItem(ACCESS_TOKEN);
      setToken(newToken);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('local-storage-change', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage-change', handleStorageChange);
    };
  }, []);

  const updateToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem(ACCESS_TOKEN, newToken);
    } else {
      localStorage.removeItem(ACCESS_TOKEN);
    }
    setToken(newToken);
    window.dispatchEvent(new Event('local-storage-change'));
  };

  return (
    <AuthContext.Provider value={{ token, setToken: updateToken }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
