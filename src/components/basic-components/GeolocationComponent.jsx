import React, { useState, useEffect } from "react";
import "../basic-components/geo.css";

const GeolocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [hostname, setHostname] = useState(null);

  const getLocation = () => {
    // Get geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError("Geolocation error:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported in your browser.");
    }
  };

  useEffect(() => {
    getLocation();
    // Get computer name (hostname)
    setHostname(window.location.hostname);
  }, []);

  return (
    <section className="my-[20px] pt-[50px] pb-[180px]">
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="geo-card">
          <h1 className="text-center text-base md:text-3xl font-bold text-secondary">
            Thanks for visited...!
          </h1>
          <div className="text-center font-medium">
            {location ? (
              <p className="text-sm md:text-lg font-semibold mt-5">
                Your geolocation is:{" "}
                <span className="font-bold block md:inline-block">
                  <span className="text-primary">Latitude</span>
                  {" : "}
                  {location.latitude}
                </span>
                ,
                <span className="font-bold block md:inline-block">
                  <span className="text-primary">Longitude</span> {":"}{" "}
                  {location.longitude}
                </span>
              </p>
            ) : (
              <div>
                {error ? (
                  <p className="text-sm md:text-lg font-semibold mt-5">
                    Error:
                    <span className="ml-5 p-1 bg-error font-bold text-error-content">
                      {error}
                    </span>
                  </p>
                ) : (
                  <p className="text-sm md:text-lg font-semibold">
                    Waiting for permission to access your location.
                  </p>
                )}
                {error && (
                  <button
                    className="btn btn-primary rounded-md text-white font-semibold my-5"
                    onClick={getLocation}
                  >
                    Give Permission
                  </button>
                )}
              </div>
            )}
            {hostname && (
              <p className="text-sm md:text-lg font-semibold">
                Your computer name (hostname) is:{" "}
                <span className="font-bold text-primary">{hostname}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeolocationComponent;
