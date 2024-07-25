import React, { createContext } from "react";
import { User } from "firebase/auth";
import { IMovie } from "../types.ts";

export interface IAuthContext {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<User | null>(null);

export interface IMovieContext {
  movies: IMovie[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

export const MoviesContext = createContext<IMovieContext | null>(null);
