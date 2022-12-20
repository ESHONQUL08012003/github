import React from "react";
import { Link } from "react-router-dom";

function MainContent(props) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="request-menu">
          <Link className="componentRequst">Created</Link>
          <Link className="componentRequst">Assigned</Link>
          <Link className="componentRequst">Mentioned</Link>
          <Link className="componentRequst">Review requests</Link>
        </div>

        <input
          style={{ width: "650px" }}
          className="form-control py-0 bg-black"
          type="text"
          placeholder="is:open is:pr assignee:ESHONQUL08012003 archived:false "
        />
      </div>
      <div className="card border pullRequest-card rounded">
        <div className="card-header d-flex justify-content-between ">
          <div className="d-flex align-items-center gap-2">
            <span>
              <i className="fas fa-code-branch"></i>0 open
            </span>
            <span>
              <i className="fas fa-check"></i>open
            </span>
          </div>

          <div className="d-flex gap-4">
            <strong>Visiblity</strong>
            <strong>organizatsion</strong>
            <strong>Sort</strong>
          </div>
        </div>

        <div className="card-body not-result">
          <div>
            <i className="far fa-dot-circle mb-5 fa-2x"></i>
            <p className="text-white m-0 p-0">No results matched your search.</p>
            <div className="d-flex align-items-center gap-2">
              <span>You could search</span>
              <Link>all of GitHub </Link>
              <span>or try an</span>
              <Link> advanced search.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
