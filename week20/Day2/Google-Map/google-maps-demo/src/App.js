import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";

const center = {
  lat: 32.0853,
  lng: 34.7818
};

const containerStyle = {
  width: '100%',
  height: '400px'
};

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <LoadScript googleMapsApiKey="AIzaSyCG_EnE6xn1V2Uu6E4KLxqAx9HPK8IbNaE">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default App;
