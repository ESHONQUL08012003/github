import React from "react";
import logo from "../../assets/imgs/photo_2022-12-07_13-41-21.jpg";
import "./Aside.scss"

const Aside = () => {
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
                position:"absolute",
                top:"-60px"
              }}
              src={logo}
              alt=""
            />
           </div>

            <div style={{paddingTop:"250px"}}>
              <h2 className="text-white mt-4">Eshonqul</h2>
              <p className="fs-4">ESHONQUL08012003</p>
              <button className="edit-btn">Edit Profile</button>
            </div>

            <div>
              <a className="text-light" href="">0 <i className="fas fa-user-friends text-light ms-1"></i> followers .</a>
              <a className="text-light" href=""> 2 following</a>
            </div>

            <div className="py-3 border-0">
              <a className="text-light" href={"https://twitter.com/eshonqul74"}><i className="fab me-2 fa-twitter"></i>@eshonqul03</a>
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
