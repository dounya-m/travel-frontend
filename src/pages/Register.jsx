import {React} from 'react'
// import axios from 'axios';
import Regi from '../assets/images/register.png'
import Signupform from '../componenets/form/Signupform'

function Register() {            
    
    return (
    <div className='flex mane_register'>
        <section className='w-[50%] '>
            <img className='h-[100vh] w-full object-cover' src={Regi} alt="" />
        </section>
        <section className="main_register_form w-[50%] flex  flex-col items-center ">
        <h3 className='mt-[3rem] text-3xl font-bold'>
            Tri<span className='text-orange-600 '>pgo</span>
        </h3>
        <Signupform />
        </section>
    </div>
  )
}

export default Register