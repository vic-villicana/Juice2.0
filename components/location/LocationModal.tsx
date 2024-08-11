import {Modal, Fade, Backdrop} from '@mui/material'
import { BtnContainer,LocationSelector, LocalModal, LocationSelectBtn, LocationText, LocationTitle, MapContainer } from './LocationElements';
import { Locale } from '@/assets/store';

interface LocationModalProps {
    open:boolean;
    close:() => void;
    cities:Locale[];
    chooseLocation:(city:Locale) => void
}
const LocationModal = ({open, close,cities, chooseLocation}:LocationModalProps) => {


    //create function that stores the state of a selected location.



    const currentLocations = cities.map( (city, index) => {
    return  <div key={index}>
                <LocationSelectBtn onClick={() => chooseLocation(city)}>
                    <LocationText>
                        {city.toString()}
                    </LocationText>
                </LocationSelectBtn>
            </div>
        

    })

    return (
        <Modal
            id="LocationModal"
            aria-labelledby="spring-modal-LocationModal"
            aria-describedby="spring-modal-opens-and-closes-LocationModal"
            open={open}
            onClose={close}
            closeAfterTransition
        >
            <Fade in={open}>
                <LocationSelector>
                    <MapContainer />
                    <LocationTitle>
                        Select Location
                    </LocationTitle>
                    <BtnContainer>
                        {currentLocations}
                    </BtnContainer>
                </LocationSelector>
            </Fade>
        </Modal >
    )
}

export default LocationModal