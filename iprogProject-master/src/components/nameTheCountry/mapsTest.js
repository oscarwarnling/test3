import React from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
//import {Link} from "react-router-dom";
import Map from './map'
import {
    dud,
} from "react-simple-maps"

const MapsTest = () => {
    return (

        <div className="container main" >
            
            <div>
                <Map />
            </div>

        </div>
    )
}


export default MapsTest;
