import { createContext } from "react";
import { User } from "firebase/auth";

export interface IAuthContext {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<User | null>(null);
