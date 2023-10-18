import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { BeersContext } from "../../BeersContext";
import { useState, useEffect, useContext } from "react";
import { makeApiCall } from "../../utils/fetchBeers";

const Header = () => {
  const [search, setSearch] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { beers, handleAddBeers, searchInput, handleSearchBar } =
    useContext(BeersContext);
  const URL = "https://api.punkapi.com/v2/beers";
  useEffect(() => {
    if (beers.length === 0) {
      makeApiCall(URL)
        .then((results) => {
          handleAddBeers(results);
        })
        .catch((error) => {
          setErrorMessage(error);
          console.log(error);
          // setLoading(false);
        });
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <ul className="navlinks">
          <Link to="/" className="link" onClick={() => setMenuOpen(false)}>
            <li>Beer Bar</li>
          </Link>

          <Link to="/beers" className="link" onClick={() => setMenuOpen(false)}>
            <li>Beers</li>
          </Link>

          <Link
            to="/random_beer"
            className="link"
            onClick={() => setMenuOpen(false)}
          >
            <li style={{ color: "grey" }}>Random Beer</li>
          </Link>
        </ul>
        <div className="search">
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
            onChange={(e) => handleSearchBar(e.target.value)}
            value={searchInput}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
