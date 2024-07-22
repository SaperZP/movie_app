import {FC, ReactNode, useState} from "react";
import {AuthContext} from ".";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../auth/fierbase.ts";


const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  onAuthStateChanged(auth, (user) => {
    setIsAuthenticated(!!user)
  });

  return (
      <AuthContext.Provider value={{isAuthenticated}}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider;
