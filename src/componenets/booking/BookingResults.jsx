import React from 'react'
import {TripContext} from '../../context/TripContext'

function BookingResults() {
  const {trips} = React.useContext(TripContext)

  return (
  <div>
    {trips?.map((v,index)=>(
      <>
      <h1>{v.depart}</h1>
      </>
    ))}
  </div>
    
  )
}

export default BookingResults