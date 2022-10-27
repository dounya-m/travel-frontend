import React from 'react'
import {BsListCheck} from 'react-icons/bs'
import {FaBusAlt} from 'react-icons/fa'
import {FaRoad} from 'react-icons/fa'

function Travel() {
  return (
    <div className=' mt-[2rem] p-10'>   
            <h2 className='text-[2.3rem] capitalize font-bold'>Travel with us</h2>
                <div className='grid justify-center px-6 bg-white lg:grid-cols-3 w-[70%] m-auto mt-6 py-12 rounded-3xl shadow-xl shadow-slate-300 z-40 relative'>
                    <section className='flex items-center gap-4 '>
                        <BsListCheck className='p-2 text-6xl rounded-full text-violet-700 bg-violet-100' />
                        <div>
                            <h4 className=' text-[1.5rem] font-bold text-violet-900'>1. Choisir</h4>
                            <p>Trouver l’offre qui vous convient.</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-4'>
                        <FaBusAlt className='p-2 text-6xl text-orange-600 bg-orange-100 rounded-full' />
                        <div>
                            <h4 className=' text-[1.5rem] font-bold text-orange-900'>1. Choisir</h4>
                            <p>Trouver l’offre qui vous convient.</p>
                        </div>
                    </section>
                    <section className='flex items-center gap-4'>
                        <FaRoad className='p-2 text-6xl text-green-600 bg-green-100 rounded-full' />
                        <div>
                            <h4 className=' text-[1.5rem] font-bold text-green-900'>3. Embarquer</h4>
                            <p>RDV à l’adresse du départ avec votre code du ticket !</p>
                        </div>
                    </section>
                </div>
                <p className=' text-[28rem] text-center font-bold text-gray-100  -mt-[18rem]'>Travel</p>
    </div>
  )
}

export default Travel