import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api/api.ts";
import { IMovieDetails } from "../types.ts";

const DetailsPage = () => {
  const { movieId } = useParams() as { movieId: string };
  const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await fetchMovieDetails(Number(movieId));
        setMovieDetails(details);
      } catch (e) {
        console.error(e);
      }
    };

    getDetails();
  }, [movieId]);

  return (
    <>
      {movieDetails ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-800">
          <div className={"container flex bg-slate-700"}>
            <div className={"flex w-1/4 flex-col"}>
              <img
                src={
                  "https://image.tmdb.org/t/p/w300" + movieDetails.poster_path
                }
                alt={movieDetails.title}
              />
              <div className={"flex flex-grow flex-col bg-white"}>
                <div className={"details_aside-item"}>
                  <span className={"font-bold"}>Release date:</span>
                  <span>{movieDetails.release_date}</span>
                </div>
                <div className={"details_aside-item"}>
                  <span className={"font-bold"}>Rate:</span>
                  <span>{movieDetails.release_date}</span>
                </div>
                <div className={"details_aside-item"}>
                  <span className={"font-bold"}>Total vote</span>
                  <span>{movieDetails.vote_count}</span>
                </div>
                <Link
                  to={"/"}
                  className={
                    "m-1 w-fit self-center rounded border bg-blue-700 p-2 text-blue-100"
                  }
                >
                  Go Back
                </Link>
              </div>
            </div>
            <div className={"w-3/4 px-10 py-5"}>
              <h2 className={"pb-2 text-center text-2xl text-white"}>
                {movieDetails.title}
              </h2>
              <iframe
                className={"aspect-video w-full pb-4"}
                src={`https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`}
                title="Embedded YouTube Video"
              />
              <div>
                <h3 className={"pb-2 text-xl text-white"}>Overview</h3>
                <p className={"text-white"}>{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>details not found</div>
      )}
    </>
  );
};
export default DetailsPage;
