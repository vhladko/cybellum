import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { User } from '../../store/login/types';

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  login: (user: User, accessToken: string) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(localStorage.getItem('user'));
  const [accessToken, setToken] = React.useState<string | null>(localStorage.getItem('accessToken'));

  const login = (user: User, accessToken: string) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('accessToken', accessToken);
    setUser(JSON.stringify(user));
    setToken(accessToken);
  };

  const value = { user: user ? JSON.parse(user) : user, login, accessToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
