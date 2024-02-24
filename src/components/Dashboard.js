import React from "react";
import Header from "./Header.js";
import {Link} from "react-router-dom";

function Dashboard() {
    
  return (
    <div className="dashboard">
      <Header/>
      <div className="homepage">
        <div className="profile-p1">
            <div className="profile-p1-header">
                PROFILE INFO
            </div>
            <div className="profile-p1-menu">
                <div className="profile-p1-com">
                    <div className="com-title">
                        Full Name: 
                    </div>
                    <div className="com-ans">
                        Dipak Bapu Mali
                    </div>
                </div>
                <div className="profile-p1-com">
                    <div className="com-title">
                        Username: 
                    </div>
                    <div className="com-ans">
                        dipakmali100
                    </div>
                </div>
                <div className="profile-p1-com">
                    <div className="com-title">
                        Email Address: 
                    </div>
                    <div className="com-ans">
                        malidipakb2002@gmail.com
                    </div>
                </div>
                <div className="profile-p1-com">
                    <div className="com-title">
                        No. Of Tokens Generated:  
                    </div>
                    <div className="com-ans">
                        2
                    </div>
                </div>
            </div>
            <div className="p1-button">
                <Link to="/token-generator"><button className="formbold-btn-d">Token Generator</button></Link>
            </div>
        </div>
        <div class="vertical-line"></div>
        <div className="profile-p1">
            <div className="profile-p1-header">
                TOKEN DETAILS
            </div>
            <div className="profile-p1-menu">
                <div className="profile-p1-com">
                    <div className="com-title">
                        Data Secure: 
                    </div>
                    <div className="com-ans">
                        YES
                    </div>
                </div>
                <div className="profile-p1-com">
                    <div className="com-title">
                        PDF Tokens: 
                    </div>
                    <div className="com-ans">
                        2 Tokens, 0 Secured
                    </div>
                </div>
                <div className="profile-p1-com">
                    <div className="com-title">
                        DOCS Tokens: 
                    </div>
                    <div className="com-ans">
                        1 Tokens, 1 Secured
                    </div>
                </div>
                <div className="profile-p1-com">
                    <div className="com-title">
                        EXCEL Tokens: 
                    </div>
                    <div className="com-ans">
                        0 Tokens, 0 Secured
                    </div>
                </div>
            </div>
            <div className="p2-button">
                <Link to="/token-generator"><button className="formbold-btn-d">Token History</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
