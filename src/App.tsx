import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect } from "react";
import { fetchDiscoverMovies } from "./api/api.ts";
import useMovies from "./hooks/useMovies.ts";

function App() {
  const { setMovies } = useMovies();

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
  }, [setMovies]);

  return <RouterProvider router={router} />;
}

export default App;
