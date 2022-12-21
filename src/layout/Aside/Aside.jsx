import { useEffect, useState } from "react";
import "./Aside.scss";
import { Link } from "react-router-dom";
import { API } from "../../api/Api";
const Aside = () => {
  const [myProfil, setMyProfil] = useState([]);

  useEffect(() => {
    API.getUser().then((result) => setMyProfil(result.data));
  }, []);


  return (
    <div>
      <div className="container">
        <div className="">
          <div className="aside">
            <div className="position-relative">
              <img
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "-40px",
                }}
                src={myProfil.avatar_url}
                alt=""
              />
            </div>

            <div style={{ paddingTop: "250px" }}>
              <h2 className="text-white mt-4">{myProfil.name}</h2>
              <Link className="fs-4">{myProfil.login}</Link>
              <button className="edit-btn">Edit Profile</button>
            </div>

            <div>
              <Link to="/home/followers" className="text-light" >
                {myProfil.followers}
                <i className="fas fa-user-friends text-light ms-1"></i>
                followers .
              </Link>
              <Link to="/home/following" className="text-light">
                {myProfil.following} following
              </Link>
            </div>

            <div className="py-3 border-0">
              <a
                className="text-light"
                target="_blank"
                href={"https://twitter.com/eshonqul74"}
              >
                <i className="fab me-2 fa-twitter"></i>@eshonqul03
              </a>
            </div>

            <div className="position-absolute  mt-4">
              <strong className="text-white">Organizations</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
