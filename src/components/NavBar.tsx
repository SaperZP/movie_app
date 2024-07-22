import CustomNavLink from "./CustomNavLink.tsx";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={"flex justify-between bg-black p-2"}>
      <div
        onClick={() => navigate("/")}
        className={"flex cursor-pointer items-center"}
      >
        <h2 className={"text-2xl text-red-500"}>React Movie App</h2>
      </div>
      <div>
        <div className={"flex gap-1"}>
          <CustomNavLink to="/Login">Login</CustomNavLink>
          <CustomNavLink to="/Register">Register</CustomNavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
