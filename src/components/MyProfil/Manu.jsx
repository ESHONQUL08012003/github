import React from "react";
import "./myProfil.scss";

function Manu() {
  return (
    <div className="myProfil">
      <div className="myProfil__title">
        <p className="m-0">Signed in as</p>
        <h3 className="fs-6 ">ESHONQUL08012003</h3>
      </div>

      <div>
        <div  style={{ borderBottom: "1px solid rgb(138, 135, 131)" }}>
          <button>
            <i className="fab fa-react"></i>I my be slow to
          </button>
        </div>

        <ul style={{ borderBottom: "1px solid rgb(138, 135, 131)", margin:"10px 0" }}>
          <li className="myProfil__item">Your profile</li>
          <li className="myProfil__item">Your repositories</li>
          <li className="myProfil__item">Your organizatsion</li>
          <li className="myProfil__item">Your projects</li>
          <li className="myProfil__item">Your stars</li>
          <li className="myProfil__item">Your gists</li>
          <li className="myProfil__item">Your sponsors</li>
        </ul>

        <ul style={{ borderBottom: "1px solid rgb(138, 135, 131)", margin:"10px 0" }}>
          <li className="li myProfil__item-medlle">Ubgrade</li>
          <li className="li myProfil__item-medlle">Try Enterprise</li>
          <li className="li myProfil__item-medlle">Feature preview</li>
          <li className="li myProfil__item-medlle">Help</li>
          <li className="li myProfil__item-medlle">Settings</li>
        </ul>

        <ul style={{margin:"5px 0"}}>
          <li className="myProfil__item-bottom">Sign out</li>
        </ul>
      </div>
    </div>
  );
}

export default Manu;
