import { createContext, ReactNode, useContext, useState } from 'react';

type AuthType = { accessToken: string };

const AuthContext = createContext<AuthType>({ accessToken: '' });

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [accessToken] = useState<string>('');

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
