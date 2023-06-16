import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i
              className="fa-solid fa-book"
              style={{ color: "#ff9503", marginRight: "5px" }}
            ></i>
            iDiary
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Help
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://twitter.com/emonrahmann"
                    >
                      Join me on
                      <i
                        className="fa-brands fa-twitter"
                        style={{ color: "#005eff", marginLeft: "10px" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control  me-2"
                type="search"
                placeholder="Search Notes"
                aria-label="Search"
                style={{
                  marginLeft: "150px",
                  width: "450px",
                  backgroundColor: "black",
                  outlineColor: "black",
                  borderRadius: "40px",
                  borderColor: "rgb(6 37 82)",
                }}
              />
              <button
                className="btn btn-primary "
                type="button"
                style={{
                  paddingY: "1rem",
                  paddingX: ".05rem",
                  fontSize: "1rem",
                  width: "auto",
                  borderRadius: "25px",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"  data-bs-display="static"
    
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                width: "50px",
                borderRadius: "25px",
              }}
            >
              <i
                className="fa-solid fa-user fa-lg"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" data-bs-popper=''>
              <li>
                <a className="dropdown-item" href="/">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Change Password
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}