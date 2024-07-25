import CustomNavLink from "./CustomNavLink.tsx";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context";
import { signOut } from "firebase/auth";
import { auth } from "../auth/fierbase.ts";
import { fetchSearchMovies } from "../api/api.ts";
import useMovies from "../hooks/useMovies.ts";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const { setMovies } = useMovies();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value);

  const searchHandler = () => {
    const searchMovies = async () => {
      try {
        const fetchMovies = await fetchSearchMovies(searchQuery);
        console.log(fetchMovies);

        setMovies(fetchMovies.results);
      } catch (e) {
        console.error(e);
      }
    };

    if (searchQuery.length) {
      searchMovies();
    }
  };

  return (
    <nav className={"flex justify-between bg-black p-2"}>
      <div
        onClick={() => navigate("/")}
        className={"flex cursor-pointer items-center"}
      >
        <h2 className={"text-2xl text-red-500"}>React Movie App</h2>
      </div>

      {user ? (
        <div className={"flex items-center justify-center gap-3 text-xl"}>
          <div className={"flex items-center justify-center gap-2"}>
            <input
              onChange={onChangeHandler}
              placeholder={"Search"}
              className={"rounded px-2 py-1"}
              type="text"
            />
            <button
              onClick={searchHandler}
              className={
                "rounded border-2 border-green-800 px-2 py-1 text-green-800 hover:bg-green-400"
              }
            >
              Search
            </button>
          </div>

          <span className={"text-yellow-500"}>{user.displayName}</span>

          <button
            className={
              "rounded border-2 px-2 py-1 text-white hover:bg-white hover:text-black"
            }
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className={"flex gap-1"}>
          <CustomNavLink to="/login">Login</CustomNavLink>
          <CustomNavLink to="/register">Register</CustomNavLink>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
