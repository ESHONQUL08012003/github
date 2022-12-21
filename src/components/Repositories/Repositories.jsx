import { Link } from "react-router-dom";
import { API } from "../../api/Api";
import { useEffect, useState } from "react";
import "./resposiyory.scss";
import {MdArrowDropDown} from "react-icons/md"

const Repositories = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    API.getRepo().then((result) => setUser(result.data));
  }, []);

  console.log(user);

  return (
    <>
     <div className="mt-3">
     <div className="d-flex justify-content-between align-items-center">
        <div className="input-box">
          <input
            placeholder="Fine a repositorey.."
            className="start-input ps-4"
            type="text"
          />

        </div>

        <div className="d-flex gap-2">
          <button className="sort-select">
            Type <MdArrowDropDown fontSize="25px"/>
          </button>

          <button className="sort-select">
           Language <MdArrowDropDown fontSize="25px"/>
          </button>

          <div className="d-flex gap-2">
          <button className="sort-select">
            Sort <MdArrowDropDown fontSize="25px"/>
          </button>
          <button className="creat-list-btn px-4">New</button>
        </div>
        </div>
      </div>
     </div>
      <ul className="repos-list list-unstyled">
        {user.map((el, i) => {
          return (
            <li
              key={i}
              className="repos-list__item border-0 border-top border-bottom "
            >
              <div>
                <div className="d-flex justify-content-between align-items-center gap-5">
                  <Link className="fs-4">{el.name}</Link>
                  <button className="repo-btn">{el.visibility}</button>
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <span className="language_dev">{el.language}</span>
                  <strong className="language_dev">{el.updated_at}</strong>
                </div>
              </div>

              <div className="bookmark">
                <span>
                  <i className="far fa-star"></i>star
                </span>
                <select>
                  <option value=""></option>
                </select>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Repositories;
