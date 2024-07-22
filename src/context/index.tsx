import {createContext} from "react";

export interface IAuthContext {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
