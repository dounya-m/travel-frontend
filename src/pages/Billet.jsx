import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Proxy} from '../config/Proxy'

function Billet() {
    const [billet, setBillet] = useState([])

    const idUser = window.localStorage.getItem('id')

    const getBillet = async() => {
        const res = await axios.get(`${Proxy}/book//bookuser/${idUser}`)
        if(res && res.data){
            setBillet(res.data)
        }
    }

    useEffect(() => {
        getBillet()
    },[]);

    console.log(billet);
  return (
    <div>
        <section>
            <h1 className='font-bold text-center text-[4rem] text-gray-700'>Bon <span className='text-blue-900'>Voyage</span></h1>
        </section>
        <section className='flex justify-center p-5 capitalize bg-white rounded-lg'>
            <p></p>
            <p>arriver</p>
            <p>date</p>
            <p>nom</p>
        </section>
    </div>
  )
}

export default Billet