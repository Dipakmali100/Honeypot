import React, { useState } from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";

function TokenHistory() {
  const navigate = useNavigate();
  const location = useLocation();

  const [historyData, setHistoryData] = useState([
    {
      name: "word1",
      date: "2024-02-22",
      time: "11:05",
      city: "Dhule",
      country: "India",
      latitude: 20.931179,
      longitude: 74.760115,
      vpn: "No",
      ip: "202.160.146.248"
    },
    {
      name: "word1",
      date: "2024-02-22",
      time: "11:12",
      city: "Dhule",
      country: "India",
      latitude: 20.931179,
      longitude: 74.760115,
      vpn: "Yes",
      ip: "202.160.146.248"
    },
    {
      name: "word1",
      date: "2024-02-22",
      time: "11:18",
      city: "Dhule",
      country: "India",
      latitude: 20.931179,
      longitude: 74.760115,
      vpn: "No",
      ip: "202.160.146.248"
    },
  ]);

  function addEntry() {
    // Clone the original array before pushing a new item
    const newHistoryData = [...historyData];
    
    // Define the delay (in milliseconds)
    const delay = 5000; // 5 seconds
    
    setTimeout(() => {
      const currentDate = new Date();
      // Adjust the time to GMT+5:30
      currentDate.setHours(currentDate.getHours() + 5);
      currentDate.setMinutes(currentDate.getMinutes() + 30);
  
      // Extract date and time in the desired format
      const date = currentDate.toISOString().substring(0, 10); // Format: YYYY-MM-DD
      const time = `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`; // Format: HH:MM
  
      newHistoryData.push({
        name: location.state.file,
        date: date,
        time: time,
        city: "Dhule",
        country: "India",
        latitude: 20.870585,
        longitude: 74.768782,
        vpn:"Yes",
        ip:"202.160.146.248"
      });
  
      setHistoryData(newHistoryData);
    }, delay);
  }
  

  function getDetails(data) {
    navigate("./token-detail-history", {
      state: {
        city: data.city,
        country: data.country,
        latitude: data.latitude,
        longitude: data.longitude,
        vpn:data.vpn,
        ip:data.ip
      },
    });
  }

  return (
    <div className="tokenhistory">
      <Header />
      <div className="token-history">
        <div className="token-history-title">
          <h2>Token History</h2>
        </div>
        <div className="refresh">
          <button onClick={addEntry}>Refresh</button>
        </div>
        <div className="refresh2">
          <button onClick={addEntry}>Refresh</button>
        </div>
        <div className="token-history-list">
          {historyData.map((data, index) => (
            <div>
              <div key={index} className="token-history-each">
                <div className="token-history-name">
                  <p>
                    <b>Name: </b>
                    {data.name}
                  </p>
                </div>
                <div className="token-history-date">
                  <p>
                    <b>Date: </b>
                    {data.date}
                  </p>
                </div>
                <div className="token-history-time">
                  <p>
                    <b>Time: </b>
                    {data.time}
                  </p>
                </div>
                <div className="token-history-moreInfo">
                  <div onClick={() => getDetails(data)}>
                    <p>
                      <b>Details</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="horizontal-line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TokenHistory;
