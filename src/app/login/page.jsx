'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handllogin = async (data) => {
        const { email, password } = data;
        console.log(email, password);
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/"
        })
        if(error){
            alert(error.message)
        }
        if(res){
            alert('You have loggin successfully')
        }
    }
    return (
        <div className=' bg-green-200 flex h-[70vh] justify-center items-center '>
            <div className=' bg-white  w-2/12 mx-auto p-10 rounded-2xl '>
                <h1 className='text-center text-2xl font-bold mb-4'>Login Your account</h1>
                <form onSubmit={handleSubmit(handllogin)} className='space-y-5'>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">What is your Email?</legend>
                        <input {...register("email")} type="text" className="w-full p-2 mt-2 rounded-2xl border border-black rounded-lg outline-none" placeholder="Type Your Email" />
                        {/* <p className="label">Optional</p> */}
                    </fieldset>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input {...register("password")} type="text" className="w-full p-2 mt-2 rounded-2xl border border-black rounded-lg outline-none" placeholder="Type Your Password" />

                    </fieldset>

                    <button className='btn w-full bg-green-600 text-white'>Login</button>
                    <p>Don't have account?
                        <Link href={'/register'}><span className='text-red-600 font-bold'> Register</span>
                        </Link> </p>
                </form>
            </div>

        </div>
    );
};

export default Login;