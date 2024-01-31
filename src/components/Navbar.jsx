import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

// CSS
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/"><BiCameraMovie />CineShelf</Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme"/>
        <button type="submit">
            <BiSearchAlt2></BiSearchAlt2>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
