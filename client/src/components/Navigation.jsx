import { Link } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../contexts/authContext";

export default function Navigation() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <span>JoroFit</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/whyUs">
                      {" "}
                      Why us{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/trainers">
                      {" "}
                      trainers
                    </Link>
                  </li>
                  {isAuthenticated && (
                    <li className="nav-item ">
                      <Link className="nav-link" to="/addTrainer">
                        {" "}
                        Add Trainer{" "}
                      </Link>
                    </li>
                  )}

                  <li className="nav-item">
                    <Link className="nav-link" to="/contactUs">
                      {" "}
                      Contact Us
                    </Link>
                  </li>
                  {!isAuthenticated && (
                    <li className="nav-item ">
                      <Link className="nav-link" to="/login">
                        {" "}
                        Login{" "}
                      </Link>
                    </li>
                  )}

                  {!isAuthenticated && (
                    <li className="nav-item ">
                      <Link className="nav-link" to="/register">
                        {" "}
                        Register{" "}
                      </Link>
                    </li>
                  )}
                  {isAuthenticated && (
                    <li className="nav-item ">
                      <Link className="nav-link" to="/logout">
                        {" "}
                        Logout{" "}
                      </Link>
                    </li>
                  )}
                </ul>
                <div className="user_option">
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <input
                      type="text"
                      className="search-name"
                      name="name"
                      placeholder="Search Trainer..."
                    />
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    />
                  </form>
                </div>
                {username}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
