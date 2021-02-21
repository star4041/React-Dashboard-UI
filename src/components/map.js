import React from "react";

const Map = () => {
  return (
    <div className="map-container">
      <div className="map-title">
        <h1>Maps</h1>
      </div>
      <div className="map-area">
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198741.2754492872!2d-77.15466045238108!3d38.89351276339647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sin!4v1613820747652!5m2!1sen!2sin"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            style: "border:0",
          }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
