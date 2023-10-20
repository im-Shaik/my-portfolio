import React, { useEffect, useState } from "react";

const VisitIP = () => {
  const [info, setInfo] = useState(null);

  const fetchVisitorInfo = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/visitor-info");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        setInfo(data);
      } else {
        console.error("Failed to fetch visitor information.");
      }
    };

    xhr.onerror = () => {
      console.error("An error occurred while fetching visitor information.");
    };

    xhr.send();
  };

  useEffect(() => {
    fetchVisitorInfo();
  }, []);

  return (
    <div>
      <h2>Visitor Information</h2>
      {info ? (
        <div>
          <p>IP Address: {info.ip}</p>
          <p>User Agent: {info.userAgent}</p>
          <p>
            Screen Resolution: {info.screenWidth} x {info.screenHeight}
          </p>
          <p>Geolocation: {info.geolocation}</p>
        </div>
      ) : (
        <p>Loading visitor information...</p>
      )}
    </div>
  );
};

export default VisitIP;
