import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Proxy } from "../config/Proxy";

export const TripContext = createContext(null);

const TripContextprovider = ({children}) => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])
    const searchTrip = async(depart) =>{
    await axios.post(`${Proxy}/trip/bookingtrip?depart=${depart}`)
        .then(res => {
            setTrips(res.data)
            navigate('/booking')
            })
            .catch(err => {
            alert('no trip in this time')
            })
    }

    const values = {searchTrip, trips}
    return <TripContext.Provider value={values}>
        {children}
    </TripContext.Provider>
} 

export default TripContextprovider;
