import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../api/Api";
import "./overview.scss";

const Overview = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    API.getUser().then((result) => console.log(result.data));
  }, []);

  
  return (
    <ul className="list-unstyled row p-0">
      {user.map((el, i) => {
        return (
          <Link key={i} className="col-6 mt-3">
            <li className="overview">
              <div className="d-flex justify-content-between mb-3 ">
                <a href="">{el.login}</a>
                <button>Public</button>
              </div>

              <strong>HTML</strong>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Overview;
