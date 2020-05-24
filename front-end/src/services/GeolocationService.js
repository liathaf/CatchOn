import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAomBI0lRzP0QpN31wTxSY3V8W8LRVYTHI");
Geocode.setRegion("il");

function getLatLng(loc) {
    return (

        Geocode.fromAddress(loc).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
                return {lat,lng}
            },
            error => {
                console.error(error);
            }
            )
    )  
    
}

export const GeolocationService = {
    getLatLng
}