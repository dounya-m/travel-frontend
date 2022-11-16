import React from 'react'
import {TripContext} from '../../context/TripContext'
import ReservatinFrorm from '../../componenets/form/ReservatinFrorm'
import billet from '../../assets/images/Capture.PNG'
import busBooking from '../../assets/icones/busBooking.png'

function BookingResults() {
  const {trips} = React.useContext(TripContext)

  return (
  <div>
    {trips?.map((v,index)=>(
      <>
      <div className='flex  gap-4 p-6 mt-6 bg-white rounded-[2rem] w-[50%] mx-auto items-center'>
        <div className=''>
          <img className='w-[12rem] h-[10rem] object-cover' src={billet} alt="" />
        </div>
        <div className='gap-2 capitalize '>
        <section className='flex items-center gap-3'>
        <div>
            <p>depart</p>
            <p className='text-4xl font-bold text-blue-900'>{v.depart}</p>
            <p className='text-xl font-bold text-blue-600 text-end'>{v.timeArr}</p>
          </div>
          <div className=''>
            <img className='w-8' src={busBooking} alt="" />
            <p className='booking_line'></p>
          </div>
          <div>
            <p>arriver</p>
            <p className='text-4xl font-bold text-blue-900'>{v.arrive}</p>
            <p className='text-xl font-bold text-blue-600 text-end'>{v.timeDep}</p>
          </div>
        </section>
        </div>
        <div className='ml-[13rem] justify-items-end '>
        <button className='p-2 text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-400'>reserver</button>
        </div>
      </div>
      <ReservatinFrorm />
      </>
    ))}
  </div>
    
  )
}

export default BookingResults