import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between px-28 py-8">
        <Link to="/">
          <div className="flex items-center justify-between gap-8">
            <img src={logo} alt="logo" className="w-12" />
            <div className="text-3xl font-bold">Dish Mingle</div>
          </div>
        </Link>
        <div className="flex items-center justify-between gap-14">
          <Link to="/">
            <div className="text-lg font-semibold hover:text-gray-500 transition-all duration-300 ease-in-out">Home</div>
          </Link>
          <Link to="/create">
            <div className="text-lg font-semibold hover:text-gray-500 transition-all duration-300 ease-in-out">Create a Recipe</div>
          </Link>
          <Link to="/saved">
            <div className="text-lg font-semibold hover:text-gray-500 transition-all duration-300 ease-in-out">Saved Recipes</div>
          </Link>
          <Link to="/auth">
            <div className="text-lg font-semibold hover:text-gray-500 transition-all duration-300 ease-in-out">Login</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
