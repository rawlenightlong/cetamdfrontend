import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"




export default function Map(props){
    console.log(props)

    const center = props.gig.location.coordinates

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    if(!isLoaded){
        return <h1>loading...</h1>
    }

     
    return (<>


   <div style={{backgroundColor: "grey", height: "300px", width: "300px", marginLeft: "auto", marginRight: "auto"}} className="map">
            <GoogleMap center={center} zoom={15} mapContainerStyle={{height: '100%',  width: '100%'}}>
                <Marker position={center}></Marker>
                <Marker position={center}></Marker>
            </GoogleMap>


    </div>

    
    </>)
}