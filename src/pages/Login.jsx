import React from 'react'
import Loginform from '../componenets/form/Loginform'
import travel from '../assets/images/travel.jpg'

function Login() {
  return (
    <div>
        <div className='flex mane_register'>
        <section className='w-[50%]  bg-lime-50'>
            <img className='h-[100vh] px-[4rem]  w-full object-cover'src={travel}  alt="" />
        </section>
        <section className="main_register_form w-[50%] flex  flex-col items-center ">
        <h3 className='mt-[3rem] text-3xl font-bold'>
            Tri<span className='text-orange-600 '>pgo</span>
        </h3>
        <Loginform />
        </section>
    </div>
    </div>
  )
}

export default Login