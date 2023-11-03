import React from 'react';
import Header from './Header';
import {Link} from "react-router-dom";

function TokenHistory() {
  return (
    <div className='tokenhistory'>
      <Header/>
      <div className="token-history">
        <div className="token-history-title">
            <h2>Token History</h2>
        </div>
        <div className="token-history-list">
            <div className="token-history-each">
                <div className="token-history-name">
                    <p><b>Name: </b>word1</p>
                </div>
                <div className="token-history-date">
                    <p><b>Date: </b>2023-11-4</p>
                </div>
                <div className="token-history-time">
                    <p><b>Time: </b>11:05</p>
                </div>
                <div className="token-history-ip">
                    <p><b>IP: </b>12.121.24.25</p>
                </div>
                <div className="token-history-moreInfo">
                    <Link to="token-detail-history"><p><b>Details</b></p></Link>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="token-history-each">
                <div className="token-history-name">
                    <p><b>Name: </b>pdf1</p>
                </div>
                <div className="token-history-date">
                    <p><b>Date: </b>2023-11-4</p>
                </div>
                <div className="token-history-time">
                    <p><b>Time: </b>11:00</p>
                </div>
                <div className="token-history-ip">
                    <p><b>IP: </b>12.121.24.25</p>
                </div>
                <div className="token-history-moreInfo">
                <Link to="token-detail-history"><p><b>Details</b></p></Link>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="token-history-each">
                <div className="token-history-name">
                    <p><b>Name: </b>pdf2</p>
                </div>
                <div className="token-history-date">
                    <p><b>Date: </b>2023-11-4</p>
                </div>
                <div className="token-history-time">
                    <p><b>Time: </b>10:55</p>
                </div>
                <div className="token-history-ip">
                    <p><b>IP: </b>12.121.24.25</p>
                </div>
                <div className="token-history-moreInfo">
                <Link to="token-detail-history"><p><b>Details</b></p></Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TokenHistory
