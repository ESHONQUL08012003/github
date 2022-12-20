import React from "react";
import { Link } from "react-router-dom";
import "./pullRequest.scss";
import MainContent from "../../components/MainContent";
const PullRequests = () => {
  return (
    <div className="containers">
      <MainContent />

      <div className="d-flex justify-content-center gap-2 mt-3">
        <strong className="text-white"> ProTip!</strong>
        <p>Adding</p>
        <a href="">no:label </a>
        <p>will show everything without a label.</p>
      </div>
    </div>
  );
};

export default PullRequests;
