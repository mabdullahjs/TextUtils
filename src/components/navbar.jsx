import React from "react";
import { Link } from "react-router-dom";

export default function navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Abdullah
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li> */}
            </ul>
          </div>


          <div className="form-check form-switch">
            <input
              onClick={props.func}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label fs-6 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "Dark" : "Light"} mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
