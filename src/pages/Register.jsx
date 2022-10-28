import React from 'react'
import Regi from '../assets/images/register.png'

function Register() {
  return (
    <div className='flex mane_register'>
        <section className='w-[50%] '>
            <img className='h-[100vh] w-full object-cover' src={Regi} alt="" />
        </section>
        <section className="main_register_form w-[50%] flex  flex-col items-center ">
        <h3 className='text-3xl font-bold '>
            Tri<span className='text-orange-600 '>pgo</span>
        </h3>
        <form class="space-y-4 md:space-y-6 my-auto" action="#">
            <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700" for="email">Name</label>
                <input type="text" id='name' placeholder='enter your name' />
            </div>
            <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
                <input type="email" id='email' placeholder='enter your email' />
            </div>
            <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700" for="email">Password</label>
                <input type="password" id='password' placeholder='••••••••' />
            </div>
            <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700" for="email">Confirm password</label>
                <input type="password" id='password' placeholder='••••••••' />
            </div>
        </form>
        </section>
    </div>
  )
}

export default Register