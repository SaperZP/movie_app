import Card from "../components/Card.tsx";
import useMovies from "../hooks/useMovies.ts";

const MainPage = () => {
  // const [movies, setMovies] = useState<IMovie[]>([]);
  //
  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       const response = await fetchDiscoverMovies();
  //       setMovies(response.results);
  //     } catch {
  //       setMovies([]);
  //     }
  //   };
  //
  //   getMovies();
  // }, []);

  const { movies } = useMovies();

  return (
    <div className={"mt-4 flex flex-wrap justify-center gap-4"}>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MainPage;
