import React from 'react'
import casablanca from '../../assets/images/casablanca.jpg'
import Chefchaouen from '../../assets/images/chefchaouen.jpg'
import fes from '../../assets/images/fes.jpg'
import Marakech from '../../assets/images/marakech.jpg'
import dest from '../../assets/icones/distination.png'
import {IoLocationSharp} from 'react-icons/io5'

function Corepage() {
  return (
    <div className='mt-[2rem] p-10'>
        <h2 className=' text-[2.3rem] capitalize font-bold flex items-center gap-2'>Discover our top destinations <img className='w-12' src={dest} alt="" /> </h2>
        <div className="relative cor_contain">
            <div className='absolute line2'></div>
            <div className="grid items-center justify-between gap-8 my-10 cor_contain_item lg:grid-cols-4">
                <div className='relative destination'>
                    <img className='h-[35rem] object-right rounded-2xl object-cover' src={casablanca} alt="" />
                    <div className='absolute top-0 flex items-center gap-2 mt-2 bg-white left-[65%] px-2 py-1 rounded-lg '>
                        <IoLocationSharp className='text-2xl text-red-500' />
                        <p className='font-bold capitalize '>casablanca</p>
                    </div>
                </div>
                <div className='relative destination'>
                    <img className='h-[28rem]  w-[80%] m-auto object-right rounded-2xl object-cover' src={Chefchaouen} alt="" />
                    <div className='absolute top-0 flex items-center gap-2 mt-2 bg-white left-[55%] px-2 py-1 rounded-lg '>
                        <IoLocationSharp className='text-2xl text-red-500' />
                        <p className='font-bold capitalize '>Chefchaouen</p>
                    </div>
                </div>
                <div className='relative destination'>
                    <img className='h-[35rem] object-left rounded-2xl object-cover' src={fes} alt="" />
                    <div className='absolute top-0 flex items-center gap-2 mt-2 bg-white left-[65%] px-2 py-1 rounded-lg '>
                        <IoLocationSharp className='text-2xl text-red-500' />
                        <p className='font-bold capitalize '>fes</p>
                    </div>
                </div>
                <div className='relative destination'>
                    <img className='h-[28rem]  w-[80%] m-auto object-left rounded-2xl object-cover' src={Marakech} alt="" />
                    <div className='absolute top-0 flex items-center gap-2 mt-2 bg-white left-[55%] px-2 py-1 rounded-lg '>
                        <IoLocationSharp className='text-2xl text-red-500' />
                        <p className='font-bold capitalize '>marrakech</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Corepage