import { createContext, ReactNode, useState } from "react";
import { AuthContextProps, initialAuthContext } from "./auth.types";

export const AuthContext = createContext<AuthContextProps>(initialAuthContext);

function AuthProvider({children}: {children: ReactNode}){
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setIsAuthenticated(true);
  }

  return <AuthContext.Provider value={{isAuthenticated, login}}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider;
