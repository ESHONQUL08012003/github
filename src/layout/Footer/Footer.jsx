import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-5 py-5">
      <div className="container border-0 border-top">
        <div className="d-flex justify-content-between align-items-center pt-4">
          <Link to="/home" className="d-flex align-items-center">
            <i className="fab fa-github fa-2x"></i>© 2022 GitHub, Inc.
          </Link>

          <ul className="d-flex justify-content-between w-75 m-0 list-unstyled">
            <li>
              <Link to="/home">Terms</Link>
            </li>
            <li>
              <Link to="/home">Privice</Link>
            </li>
            <li>
              <Link to="/home">Security</Link>
            </li>
            <li>
              <Link to="/home">Status</Link>
            </li>
            <li>
              <Link to="/home">Docs</Link>
            </li>
            <li>
              <Link to="/home">Contact Github</Link>
            </li>
            <li>
              <Link to="/home">Pricing</Link>
            </li>
            <li>
              <Link to="/home">Api</Link>
            </li>
            <li>
              <Link to="/home">Traning</Link>
            </li>
            <li>
              <Link to="/home">Blog</Link>
            </li>
            <li>
              <Link to="/home">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
