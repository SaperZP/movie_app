import React, { useState } from "react";
import { MoviesContext } from "./index.tsx";
import { IMovie } from "../types.ts";

type MoviesProviderProps = {
  children: React.ReactNode;
};

const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
export default MoviesProvider;
