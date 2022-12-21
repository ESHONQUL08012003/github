import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../api/Api";
import "./overview.scss";

const Overview = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    API.getRepo().then((result) => setUser(result.data));
  }, []);
  
  user.splice("6")



  
  return (
    
    <div className="row p-0">
      <div className="d-flex justify-content-between mt-3 text-white">
        <p>Popular repositories</p>
        <p>customize you pins</p>
      </div>
      {user.map((el, i) => {
        return (
          <Link key={i} className="col-6 mb-3">
            <div className="overview">
              <div className="d-flex justify-content-between mb-3 ">
                <Link>{el.name}</Link>
                <button>{el.visibility}</button>
              </div>

              <strong>{el.language}</strong>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Overview;
