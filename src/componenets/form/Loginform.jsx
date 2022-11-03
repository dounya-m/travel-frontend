import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Loginform() {
    const { register, handleSubmit, reset} = useForm();
    const [ result] = useState("")

    const onSubmit =  (data) =>{
        const newData = new FormData();
        newData.append("email", data.email);
        newData.append("password", data.password);
        console.log(data)
        //fetch data 
        fetch('http://localhost:1080/api/users/login',
        {
            method:"POST",
            body:JSON.stringify({
                "email" : data.email,
                "password" : data.password
            }),
        })
        .then(response => response.json())
        
        //store the token
        .then(data => {
            if(data === "email"){
                result("There is no account with this email");
            }else if(data === "password"){
                result("Wrong password, Try again!");
            }else{
                localStorage.setItem('token', data.token)
                // window.location.href = "/dashboard";
            }
        });
        reset();
    }

    
return (
        <form class="space-y-4 md:space-y-6 my-auto w-[25rem]" onSubmit={handleSubmit(onSubmit)} >
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
                type="password" name="password"  />
            </div>
            <div className='flex flex-col gap-3'>
                <button className='w-full p-2 text-white bg-green-500 rounded-lg'
                >
                Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    I don't have accoune < Link to="/register" class="font-medium  hover:underline text-blue-800">Sign Up here</Link>
                </p>
            </div>
        </form>
  )
}

export default Loginform