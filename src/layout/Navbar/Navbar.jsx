import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import icon from "../../assets/imgs/photo_2022-12-07_13-41-21.jpg";

const Navbar = () => {
  return (
    <>
      <header className="header py-3">
        <div className="containers">
          <div className="header__logo d-flex gap-4 align-items-center justify-content-between">
            <div className="d-flex gap-4 align-items-center">
              <Link to='/home'>
                <i className="fab fa-github fa-2x text-white"></i>
              </Link>

              <input className="header__input px-2" type="text" placeholder="search or jump to..." />

              <nav>
                <ul className="list-unstyled d-flex gap-4 align-items-center m-0 p-0 ">
                  <li>
                    <Link to="/pulrequest" className="text-white header__link">
                      Pull requests
                    </Link>
                  </li>
                  <li>
                    <Link to="*" className="text-white header__link">
                      Issues
                    </Link>
                  </li>
                  <li>
                    <Link to="*" className="text-white header__link">
                      Codespaces
                    </Link>
                  </li>
                  <li>
                    <Link to="*" className="text-white header__link">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link to="*" className="text-white header__link">
                      Explore
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <a href="">
                <i className="fas fa-bell notfiy"></i>
              </a>

              <a className="text-white" href="">
                <i className="fas fa-plus me-1"></i>
                <i className="fas fa-caret-down"></i>
              </a>

              <div className="d-flex align-items-center gap-2">
                <button className="your-btn">
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    src={icon}
                    alt=""
                  />
                </button>
                <i className="fas fa-caret-down text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
