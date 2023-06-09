import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = styled.div`
  .header {
    background-color: #24292f;
    display: flex;
    padding: 1rem;
    align-items: center;
  }

  .logo {
    background-color: white;
    padding: 0.4rem;
    border-radius: 12px;
    transition: all 0.2s linear;
  }

  .logo:hover {
    filter: brightness(60%);
  }

  .search {
    padding: 0.4rem;
    margin: 0 1.2rem;
  }

  .search input {
    padding: 0.4rem;
    width: 14rem;
    border-radius: 6px;
    border: none;
    outline: none;
    border: 0.1px solid gray;
    background: inherit;
    color: white;
    transition: all 0.2s linear;
  }

  .search input:focus {
    background-color: white;
    color: black;
    width: 18rem;
  }

  .navbar ul {
    display: flex;
    gap: 1.2rem;
    font-family: sans-serif;
  }

  .navbar ul li {
    color: white;
    list-style-type: none;
    transition: all 0.2s linear;
  }

  .navbar ul li:hover {
    filter: brightness(60%);
  }

  .userNav {
    margin-left: auto;
  }

  .userNav button {
    margin: 0 0.6rem;
    background: inherit;
    color: white;
    border: 1.3px solid white;
    padding: 0.6rem;
    border-radius: 9px;
    font-size: 1rem;
    transition: all 0.2s linear;
  }

  .userNav button:hover {
    filter: brightness(60%);
  }
`;
export default function Navbar() {
  return (
    <Header>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src="/vite.svg" alt="Vercel Logo" width={100} height={24} />
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>

        <nav className="navbar">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/explore">
              <li>Explore</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/random">
              <li>Random</li>
            </Link>
          </ul>
        </nav>

        <div className="userNav">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </header>
    </Header>
  );
}
