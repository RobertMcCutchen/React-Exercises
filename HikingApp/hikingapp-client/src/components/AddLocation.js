import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'

function AddLocation(props) {
    // const [latitude, setLatitude] = useState(0)
    // const [longitude, setLongitude] = useState(0)

   

    const handleAddLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
          }
        let location = navigator.geolocation.getCurrentPosition()
        console.log(location.coords.latitude)
        console.log(location.coords.longitude)
        let latitude = location.coords.latitude
        let longitude = location.coords.longitude
    }

          

    return (
        <div>
            {/* <input type="test" name="lat" placeholder="Enter latitude" onChange={(e) => handleTextChange(e.target.value)}/>
            <input type="test" name="long" placeholder="Enter longitude" onChange={(e) => handleTextChange(e.target.value)}/> */}
            <button onClick={() => handleAddLocation()}>Add Location</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // onLatitude: latitude,
        // onLongitude: longitude
    }
}

export default connect(mapStateToProps)(AddLocation)