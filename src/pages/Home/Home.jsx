import React from "react";
import { NavLink,Routes, Route } from "react-router-dom";
import Aside from "../../layout/Aside";
import "./Home.scss";
import Overview from "../HomeContext/Overview";
import Repositories from "../HomeContext/Repositories";
import Following from "../HomeContext/Repositories";
import Project from "../HomeContext/Project";
import Peckejs from "../HomeContext/Peckejs";
import Startes from "../HomeContext/Startes";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="menu border-0 border-bottom pt-5">
          <div className="container">
            <ul className="d-flex justify-content-center gap-4 list-unstyled">
              <li className="d-flex align-items-center">
                <NavLink
                  to="/home/oerview"
                  className={({ isActive }) =>
                    isActive ? "NavLink active" : "NavLink"
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
                  <i className="fas fa-cube"></i>Packages
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
          <div className="d-flex  gap-3">
            <Aside />
            <div>
              <Routes>
                <Route>
                  <Route index path="/home/oerview" element={<Overview />} />
                  <Route path="/home/repositories" element={<Repositories />} />
                  <Route path="/home/following" element={<Following />} />
                  <Route path="/home/project" element={<Project />} />
                  <Route path="/home/pacejs" element={<Peckejs />} />
                  <Route path="/home/star" element={<Startes />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <div className="container"></div>
    </div>
  );
};

export default Home;
