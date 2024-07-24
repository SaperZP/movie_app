import CustomNavLink from "./CustomNavLink.tsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context";
import { signOut } from "firebase/auth";
import { auth } from "../auth/fierbase.ts";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

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
              placeholder={"Search"}
              className={"rounded px-2 py-1"}
              type="text"
            />
            <button
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
