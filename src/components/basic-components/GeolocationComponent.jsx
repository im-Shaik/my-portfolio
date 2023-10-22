import React, { useState, useEffect } from "react";

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
        <h1 className="text-center text-3xl font-bold text-secondary">
          Thanks for visited...!
        </h1>
        <div className="text-center font-medium">
          {location ? (
            <p className="font-semibold mt-5">
              Your geolocation is: Latitude{" "}
              <span className="font-bold text-primary">
                {location.latitude}{" "}
              </span>
              , Longitude{" "}
              <span className="font-bold text-primary">
                {location.longitude}
              </span>
            </p>
          ) : (
            <div>
              {error ? (
                <p className="font-semibold mt-5">
                  Error:
                  <span className="ml-5 p-1 bg-error font-bold text-error-content">
                    {error}
                  </span>
                </p>
              ) : (
                <p className="font-semibold">
                  Waiting for permission to access your location.
                </p>
              )}
              {error && (
                <button
                  className="btn btn-primary rounded-md text-white font-semibold my-5"
                  onClick={getLocation}
                >
                  Ask for Permission Again
                </button>
              )}
            </div>
          )}
          {hostname && (
            <p className="font-semibold">
              Your computer name (hostname) is:{" "}
              <span className="font-bold text-primary">{hostname}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeolocationComponent;
