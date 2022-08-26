import "./Header.css";
import marvel_logo from "../../assets/marvel_logo.gif";
import { Link } from "react-router-dom";

const Header = ({ addCharacter, setAddCharacter, addComics, setAddComics }) => {
  return (
    <header>
      <div>
        <img src={marvel_logo} alt="Marvel" />
      </div>
      <nav>
        <Link to="/">
          <div className="characters menu">
            <span>Personnages</span>
          </div>
        </Link>
        <Link to="/comics">
          <div className="comics menu">
            <span>Comics</span>
          </div>
        </Link>
        <Link to="/favoris">
          <div className="favoris menu">
            <span>Favoris</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
