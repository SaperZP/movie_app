import { FC, ReactNode, useState } from "react";
import { AuthContext } from ".";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../auth/fierbase.ts";

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    setAuthUser(user);
  });

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
