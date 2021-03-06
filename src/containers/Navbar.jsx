import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  const linkItems = props.links
    .filter(item => item.isLink)
    .map((linkItem, index) => (
      <li>
        <Link
          className={index === 0 ? "active" : ""}
          key={index}
          to={linkItem.link}
        >
          {linkItem.title} <span className="line" />
        </Link>
      </li>
    ));
  return (
    <header className="header_area">
      <div className="header_navbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className={"navbar-brand"} to={"/"}>
              <img
                id="logo"
                src={"http://firmadukkani.com/odev/project-2/images/logo.png"}
                alt="Logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="fasse"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon" />
              <span className="toggler-icon" />
              <span className="toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse sub-menu-bar"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mr-0">{linkItems}</ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
