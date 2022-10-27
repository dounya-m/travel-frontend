import React from 'react'
import icone_bus from '../../assets/icones/icons8-navette-100.png'
import nap from '../../assets/images/nap.svg'
import desert from '../../assets/images/desert.png'
import Booking from './Booking'

function Header() {
  return (
    <div>
        <div className="cercle"></div>
            <div className="absolute line">
                <p className="dot"></p>
                <img className='miniBus' src={icone_bus} alt="" />
                <p className="dot2"></p>
            </div>
            <section className='flex items-center justify-between home_main_contant'>
            <div className=" main_title pl-[2rem] -mt-10">
                <h1 className="flex flex-col leading-tight title text-[3.7rem]">L'ets travel together ...</h1>
                </div>

                <div className='w-[68rem] main_images'>
                    <img className='desert' src={desert} alt="" />
                </div> 
            </section>
            <div className='-mt-[17rem]'>
                <img className='relative z-40 nap' src={nap} alt="" /> 
                <div className='absolute z-0  w-[60vw] py-6 bg-white shadow-lg border-orange-50 -mt-[23rem]  
                left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Booking />
                </div> 
            </div>
    </div>
  )
}

export default Header