import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import "./starts.scss";
import { BiSearch } from "react-icons/bi";
import {AiOutlineStar} from "react-icons/ai"

function Startest() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="fs-4 fw-3">Lists (1)</span>

        <div className="d-flex gap-2">
          <button className="sort-select">
            Sort <MdArrowDropDown fontSize="25px"/>
          </button>
          <button className="creat-list-btn">Create list</button>
        </div>
      </div>

      <div>
        <div className="startes-box">
          <div className="d-flex gap-3">
            <strong>EARGSTR</strong>
            <span>SRTH</span>
          </div>
        </div>

        <div className="d-flex my-3 gap-2">
          <button className="btn btn-outline-success rounded-pill px-2 py-0">
            Beta
          </button>
          <p className="p-0 m-0">Lists are currently in beta.</p>
          <a href="#">Share feedback and report bugs.</a>
        </div>
      </div>

      <div>
        <p className="fs-4 text-white mt-4">Stars</p>

        <div className="d-flex justify-content-between align-items-center">
          <div className="input-box">
            <input
              placeholder="search stars"
              className="start-input ps-4"
              type="text"
            />
            <div className="searchIcon">
              <BiSearch />
            </div>
          </div>

         <div className="d-flex gap-2">
         <button className="sort-select">
            Type: All <MdArrowDropDown fontSize="25px"/>
          </button>

          <button className="sort-select">
            Sort by: Recently starred <MdArrowDropDown fontSize="25px"/>
          </button>
         </div>
        </div>

        <div className="text-center mt-5">
            <AiOutlineStar fontSize={"30px"}/>
            <p>You don’t have any starred repositories yet.</p>
            <p>As you <a href="">explore GitHub,</a> star repositories to save them for later and they’ll show up here.</p>
        </div>
      </div>
    </div>
  );
}

export default Startest;
