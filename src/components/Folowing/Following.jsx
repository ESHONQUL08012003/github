import React from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../api/Api";
import "./Follow.scss";

const Following = () => {
  const [follow, setFollow] = useState([]);

  useEffect(() => {
    API.getFollow()
      .then((result) => {
        setFollow(result.data);
      })
      .catch((err) => {});
  }, []);

  console.log(follow);

  return (
    <div className="follow-list">
      {follow.map((el, i) => {
        return (
          <div key={i}>
            <div className="d-flex follow-item">
              <div>
                <div>
                  <img
                    className="follow-item__icon"
                    src={el.avatar_url}
                    alt=""
                  />
                </div>

                <div>
                  <span className="me-2">{el.name}</span>
                  <a href={el.html_url} target="_blank">{el.login}</a>
                 
                </div>
              </div>

              <div>
                <button>Unfollow</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Following;
