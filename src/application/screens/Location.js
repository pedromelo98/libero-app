import React from 'react';


import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class Location extends React.Component {

    state = {

    }

    render() {
        return (
            <>
                <Map
                    styles={mapStyles}
                    google={this.props.google}
                    zoom={15}

                    initialCenter={{ lat: -19.743590, lng: -47.932910 }}
                />
                <Marker />
            </>
        );
    }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyASwd63znA1F8SeK4r87pngwEHQhx8g4o4' })(Location);
