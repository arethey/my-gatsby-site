import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <Link to="/" className="navbar-brand">
        <img
          className="img-fluid"
          src="https://static.wixstatic.com/media/60a143_0c01a3dc48984d2aa1e22282a99289f6~mv2.jpg/v1/fill/w_120,h_50,al_c,q_80,usm_0.66_1.00_0.01/60a143_0c01a3dc48984d2aa1e22282a99289f6~mv2.webp"
        />
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
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#room">
              Room
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
