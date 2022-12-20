import { Link } from "react-router-dom";
import { API } from "../../api/Api";
import { useEffect, useState } from "react";
import "./resposiyory.scss";

const Repositories = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    API.getRepo().then((result) => setUser(result.data));
  }, []);

  return (
    <ul className="repos-list list-unstyled">
      {user.map((el, i) => {
        return (

          <li key={i} className="repos-list__item border-0 border-top border-bottom">
            <div>
              <div className="d-flex justify-content-between align-items-center gap-5">
                <Link className="fs-4">{el.name}</Link>
                <button className="repo-btn">{el.visibility}</button>
              </div>

              <div className="d-flex gap-3">
                <span className="text-white">{el.language}</span>
                <strong>{el.updated_at}</strong>
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
  );
};

export default Repositories;
