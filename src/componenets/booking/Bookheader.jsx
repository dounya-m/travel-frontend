import {React, useContext} from 'react'
import bus from '../../assets/icones/bus.png'
import swap from '../../assets/icones/swap.png'
import {TripContext} from '../../context/TripContext'

function Bookheader() {
  const {trips} = useContext(TripContext)
  console.log(trips);
  
  return (
    <div>
        <section className='flex items-center  h-[25vh] text-white bg-blue-900 justify-center gap-[5rem]'>
        <div>
        <img src={bus} alt="" />
        </div>
        <div className='h-[50%] border-r-2'></div>
        <div className=''>
            <p className='capitalize '>Ville Depart</p>
            <p className=' text-[1.8rem] capitalize font-semibold'>{trips[0].depart}</p>
        </div>
        <div className=''>
            <img className='w-[2.5rem]' src={swap} alt="" />
        </div>
        <div className=''>
            <p className='capitalize '>Ville Arriver</p>
            <p className=' text-[1.8rem] capitalize font-semibold'>{trips[0].arrive}</p>
        </div>
        </section>
    </div>
  )
}

export default Bookheader