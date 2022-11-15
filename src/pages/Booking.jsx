import {React, useContext} from "react"
import {TripContext} from '../context/TripContext'
import Bookheader from "../componenets/booking/Bookheader"
import BookingResults from '../componenets/booking/BookingResults'


function Booking() {
  const {trips} = useContext(TripContext)
  console.log(trips);
  return (
    <div>
        <Bookheader />
        <BookingResults />
    </div>
  )
}

export default Booking