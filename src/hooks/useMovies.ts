import { useContext } from "react";
import { MoviesContext } from "../context";

const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }
  return context;
};

export default useMovies;
