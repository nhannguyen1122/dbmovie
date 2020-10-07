import React from 'react'
import GoogleMapReact from 'google-map-react';
const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

const googleComponent=(props)=> {
  return (
   
    //   googleMapsApiKey="AIzaSyBPLfP53yM7hPkOOPd3Ng1xaPG3FncTmbo"
    <div style={{ height:'100px', width:'100px' }}>
        
      <GoogleMapReact
      bootstrapURLKeys={{ key:'AIzaSyBPLfP53yM7hPkOOPd3Ng1xaPG3FncTmbo  '}}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMapReact>
      </div>
    
  )
}

export default googleComponent;