import React from 'react';
import '../styles/Location.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '80%',
};

class Location extends React.Component {

    render() {
        return (
            <Map
                style={mapStyles}
                google={this.props.google}
                zoom={15}

                initialCenter={{ lat: -19.745322, lng: -47.930422 }}
            >
                <Marker name={'Líbero seguros'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyASwd63znA1F8SeK4r87pngwEHQhx8g4o4' })(Location);
