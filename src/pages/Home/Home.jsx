import React from "react";
import { Link } from "react-router-dom";
import Aside from "../../layout/Aside";
import Overview from "../../components/Overview/Overview";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="menu border-0 border-bottom pt-5">
          <div className="container">
            <ul className="d-flex justify-content-center gap-4 list-unstyled">
              <li className="d-flex ">
                <Link className="text-light d-flex align-items-center gap-2">
                  <i className="fas fa-book-open"></i>Overview
                </Link>
              </li>
              <li>
                <Link className="text-light d-flex align-items-center gap-2">
                  <i className="fas fa-book"></i>Repositories
                </Link>
              </li>
              <li>
                <Link className="text-light d-flex align-items-center gap-2">
                  <i className="fas fa-file-archive"></i>Projects
                </Link>
              </li>
              <li>
                <Link className="text-light d-flex align-items-center gap-2">
                  <i className="fas fa-cube"></i>Packages
                </Link>
              </li>
              <li>
                <Link className="text-light d-flex align-items-center gap-2">
                  <i className="far fa-star"></i>Stars
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="d-flex justify-content-between gap-3">
            <Aside />

            <Overview />
          </div>
        </div>
      </div>

      <div className="container"></div>
    </div>
  );
};

export default Home;
