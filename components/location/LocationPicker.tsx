import React, { useState } from 'react'
import {Location, LocationBtn, LocationH1,} from "../location/LocationElements"
import {StandardButton, ButtonLink} from "../home/HomePageElements"
import LocationModal from './LocationModal'

import type { Locale } from '../../assets/store'

interface SetLocale{
    setL: (city:Locale) => void
}

const LocationPicker = (props:{city: Locale, locationSetter: SetLocale["setL"] }) => {

    const [openMenu, setOpenMenu] = useState(false)
    // const [location, setLocation] = useState<string>('')

    //mock data. real data will come from an api call to our 
    //Locations api endpoint which we have to create.
    const location = ['Pacoima, Ca', 'Granada Hills, Ca', 'Encino, Ca']

    const selectLocation = (selectedCity:Locale) => {
        props.locationSetter(selectedCity)
        console.log(typeof location, location)
    }   

    const openModal = () => {
        setOpenMenu(true)
    } 

    const closeModal = () => {
        setOpenMenu(false)
    }

    return (            

        <Location>
            <LocationModal open={openMenu} close={closeModal} cities={locations} chooseLocation={selectLocation}/>
            <LocationH1>Current Location: {props.city.toString()} </LocationH1>
            <LocationBtn onClick={openModal}>Select Location</LocationBtn>
        </Location>
    )
}

export default LocationPicker