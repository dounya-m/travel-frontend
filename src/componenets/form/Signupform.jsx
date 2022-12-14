import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import axios from 'axios'
import {Link} from 'react-router-dom'   
import {Proxy} from '../../config/Proxy'
function Signupform() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const navigate = useNavigate()
    const { register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        const newData = new FormData();
        newData.append("name", data.name);
        newData.append("email", data.email);
        newData.append("password", data.password);

        fetch(`${Proxy}/users`, 
        {
            method:"POST", 
            body:JSON.stringify({
                "name" : data.name,
                "email" : data.email,
                "password" : data.password
            }),
            headers: 
            {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        //store the token
        .then(data => {
            console.log(JSON.stringify(data.user))
            localStorage.setItem('token', data.token)
            window.localStorage.setItem('id', data.user['_id'])
            navigate('/')
            
        });
        reset();
    }

    
  return (
    <form class="space-y-4 md:space-y-6 my-auto w-[25rem]" onSubmit={handleSubmit(onSubmit)}>
            <div class="space-y-1">
                <label class="block font-medium text-gray-700 text-sm" 
                for="email">Name</label>
                <input className='w-full p-2 border-b-2 rounded-lg bg-slate-50'
                {...register("name", { required: true })}
                type="text" name="name" />
                
            </div>
            <div class="space-y-1">
                <label class="block font-medium text-gray-700 text-sm" 
                for="email">Email</label>
                <input className='w-full p-2 border-b-2 rounded-lg bg-slate-50' 
                {...register("email", { required: true })}
                type="email" name="email"/>
                {/* {errors.test && <p>{errors.test.message}</p>} */}
            </div>
            <div class="space-y-1">
                <label class="block font-medium text-gray-700 text-sm" 
                for="email">Password</label>
                <input className='w-full p-2 border-b-2 rounded-lg bg-slate-50'
                {...register("password", { required: true })}
                type={passwordShown ? "text" : "password"} name="password"  />
                <button onClick={togglePassword}>Show Password</button>
            </div>
            <div className='flex flex-col gap-3'>
                <button className='w-full p-2 text-white bg-green-500 rounded-lg'
                >
                Create an account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? < Link to="/login" class="font-medium  hover:underline text-blue-800">Login here</Link>
                </p>
            </div>
        </form>
  )
}

export default Signupform