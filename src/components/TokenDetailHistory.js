import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

function TokenDetailHistory() {
  return (
    <div>
      <Header />
      <div className="token-history">
        <div className="token-history-detail-title">
          <h1>Token Detail History</h1>
        </div>
        <div className="token-history-details">
        <div className="profile-p1">
        <div className="profile-p1-header">
            <h5>Location Information</h5>
            </div>
            <div className="profile-p1-menu">
              <div className="profile-p1-com">
                <div className="com-title">City:</div>
                <div className="com-ans">Monroe</div>
              </div>
              <div className="profile-p1-com">
                <div className="com-title">Country:</div>
                <div className="com-ans">US</div>
              </div>
              <div className="profile-p1-com">
                <div className="com-title">Latitude:</div>
                <div className="com-ans">32.5530</div>
              </div>
              <div className="profile-p1-com">
                <div className="com-title">Longitude:</div>
                <div className="com-ans">-92.0422</div>
              </div>
            </div>
          </div>
        <div class="vertical-line"></div>
        <div className="profile-p1">
            <div className="profile-p1-header">
                <h5>Attackers Location</h5>
            </div>
            <div className="map">
                
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDetailHistory;
