import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Aside from "../../layout/Aside";
import "./Home.scss";
import {FiPackage} from "react-icons/fi"


const Home = () => {
  return (
    <div>
      <div className="">
        <div className="menu border-0 border-bottom pt-5">
          <div className="container">
            <ul className="d-flex justify-content-center gap-4 list-unstyled mb-1">
              <li className="d-flex align-items-center">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "NavLink " : "NavLink"
                  }
                >
                  <i className="fas fa-book-open"></i>Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/repositories"
                  className={({ isActive }) =>
                    isActive ? "NavLink active" : "NavLink"
                  }
                >
                  <i className="fas fa-book"></i>Repositories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/project"
                  className={({ isActive }) =>
                    isActive ? "NavLink active" : "NavLink"
                  }
                >
                  <i className="fas fa-file-archive"></i>Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/pacejs"
                  className={({ isActive }) =>
                    isActive ? "NavLink active" : "NavLink"
                  }
                >
                  <FiPackage/>Packages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/star"
                  className={({ isActive }) =>
                    isActive ? "NavLink active" : "NavLink"
                  }
                >
                  <i className="far fa-star"></i>Stars
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="d-flex justify-content-between gap-3">
            <Aside />
            <div className="home-containers">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>

      <div className="container"></div>
    </div>
  );
};

export default Home;
