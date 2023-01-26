import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete"
import { useState } from "react"


export default function Map2(props){

    const [address, setAddress] = useState("")
    const [coordinates, setCoordinates] = useState({lat: null, lng: null})

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value)
        const latLng = await getLatLng(results[0])
        setAddress(value)
        setCoordinates(latLng)
    }

    return (<>
    
    <div>

        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => {
                return (
                
                <div>

                    <p>Latitude: {coordinates.lat}</p>
                    <p>Longitude: {coordinates.lng}</p>

                    <input {...getInputProps({placeholder: "type venue", })}/>

                    <div>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map((suggestion, index )=> {

                            const style = {
                                backgroundColor: suggestion.active ? "#41b636" : "#fff"
                            }

                            return <div key={index} {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                        })}
                        
                    </div>
                </div>)
            }}
        </PlacesAutocomplete>
    </div>
    
    </>)
}