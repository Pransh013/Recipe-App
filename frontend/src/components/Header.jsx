import logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const location = useLocation();

  const onLogout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  return (
    <>
      <div className="flex items-center justify-between px-28 py-7 bg-gray-500 rounded-md">
        <Link to="/">
          <div className="flex items-center justify-between gap-8">
            <img src={logo} alt="logo" className="w-12" />
            <div className="text-3xl font-bold">Dish Mingle</div>
          </div>
        </Link>
        <div className="flex items-center justify-between gap-14">
          <Link to="/">
            <div
              className={`text-md font-semibold transition-all duration-300 ease-in-out border-2 border-black px-10 py-1 rounded-md ${
                location.pathname === "/"
                  ? "border-yellow-400 text-yellow-400 bg-gray-400"
                  : "hover:text-white hover:border-white"
              }`}
            >
              Home
            </div>
          </Link>
          <Link to="/create">
            <div
              className={`text-md font-semibold transition-all duration-300 ease-in-out border-2 border-black px-2 py-1 rounded-md ${
                location.pathname === "/create"
                  ? "border-yellow-400 text-yellow-400 bg-gray-400"
                  : "hover:text-white hover:border-white"
              }`}
            >
              Create a Recipe
            </div>
          </Link>
          <Link to="/saved">
            <div
              className={`text-md font-semibold transition-all duration-300 ease-in-out border-2 border-black px-3 py-1 rounded-md ${
                location.pathname === "/saved"
                  ? "border-yellow-400 text-yellow-400 bg-gray-400"
                  : "hover:text-white hover:border-white"
              }`}
            >
              Saved Recipes
            </div>
          </Link>
          {!cookies.access_token ? (
            <Link to="/auth">
              <div
                className={`text-md font-semibold transition-all duration-300 ease-in-out border-2 border-black px-10 py-1 rounded-md ${
                  location.pathname === "/auth"
                    ? "border-yellow-400 text-yellow-400 bg-gray-400"
                    : "hover:text-white hover:border-white"
                }`}
              >
                Login
              </div>
            </Link>
          ) : (
            <button
              onClick={onLogout}
              className="text-md font-semibold hover:text-white transition-all duration-300 ease-in-out border-2 border-black hover:border-white px-8 py-1 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
