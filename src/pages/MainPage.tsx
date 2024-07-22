import { useEffect, useState } from "react";
import { IMovie } from "../types.ts";
import { fetchDiscoverMovies } from "../api/api.ts";
import Card from "../components/Card.tsx";

const MainPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchDiscoverMovies();
        setMovies(response.results);
      } catch {
        setMovies([]);
      }
    };

    getMovies();
  }, []);

  return (
    <div className={"mt-4 flex flex-wrap justify-center gap-4"}>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MainPage;
