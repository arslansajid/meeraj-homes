import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => {
    return (
        // <i className="fas fa-2x fa-map-marker-alt map-marker" style={{color: "red"}} />
        <i className="fa fa-3x fa-map-marker map-marker" />
    )
}

const Locations = [
  {
    label: "Daska",
    cordinates: {lat: "32.20", lng: "74.21"}
  },
  {
    label: "Sialkot Airport",
    cordinates: {lat: "32.3208", lng: "74.2150"}
  },
  {
    label: "Daska Pasrur road interchange",
    cordinates: {lat: "32.20", lng: "74.21"}
  },
  {
    label: "Sialkot City",
    cordinates: {lat: "32.2933", lng: "74.3152"}
  },
  {
    label: "Sambrial",
    cordinates: {lat: "32.16", lng: "74.40"}
  },
]

function createMapOptions(maps, image) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      zoomControl: image ? false : true, 
      mapTypeControl: image ? false : true,
      fullscreenControl: image ? false : true,
      scaleControl: image ? false : true,
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
    //   mapTypeId: 'satellite',
      streetViewControl: image ? false : true,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ],
    };
  }

const Map = (props) => {
  const {image, marker} = props;
    const handleGoogleMapApi = (google) => {
      var flightPath = new google.maps.Polyline({
        path: [{ "lat": 32.20, "lng": 74.21 },{ "lat": 32.3208, "lng": 74.2150 },{ "lat": 32.2933, "lng": 74.3152 },{ "lat": 32.16, "lng": 74.40 },{ "lat": 32.20, "lng": 74.21 }],
        geodesic: true,
        strokeColor: '#33BD4E',
        strokeOpacity: 1,
        strokeWeight: 2
      });
      if(!image) {
        flightPath.setMap(google.map);
      }
    }
    return (
        <div className="map" style={{ height: image ? '300px' : '400px', width: '100%', background: "lightgrey", borderRadius: image ? '10px' : 0, overflow: 'hidden' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDai50O1JJN5mgRPVI4qb7kr7SUxDZvpnA' }}
                defaultCenter={image ? marker : { lat: 32.22, lng: 74.3152 }}
                defaultZoom={11}
                options={(maps) => createMapOptions(maps, image)}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={handleGoogleMapApi}
              >
              {!image && Locations.map((location, index) => {
                return(
                  <Marker key={index} lat={location.cordinates.lat} lng={location.cordinates.lng} />
                )
              })}
              {
                image
                ?
                <Marker lat={marker.lat} lng={marker.lng} />
                :
                null
              }
            </GoogleMapReact>
        </div>
    )
}

export default Map;