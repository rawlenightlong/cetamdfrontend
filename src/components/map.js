import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"



const center ={ lat: 48.8584, lng: 2.2945}


export default function Map(props){



    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    if(!isLoaded){
        return <h1>loading...</h1>
    }

     
    return (<>


   <div style={{backgroundColor: "grey", height: "400px", width: "400px", marginLeft: "auto", marginRight: "auto"}} className="map">
            <GoogleMap center={center} zoom={15} mapContainerStyle={{height: '100%',  width: '100%'}}>
                <Marker position={center}/>
                <Marker position={center}/>

            </GoogleMap>


    </div>

    
    </>)
}