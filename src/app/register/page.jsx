'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const Registeer =  () => {
    const { register, handleSubmit } = useForm();

    const handllregister = async (data) => {
        const { name, photo, email, password } = data;
        console.log(name, photo, email, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password:password, // required
            image: photo,
            callbackURL: "/",
        })
        if(error){
            alert(error.message)
        }
        if(res){
            alert('you have done completed')
        }
    }
    return (
        <div className=' bg-green-200 flex h-[90vh] justify-center items-center '>
            <div className=' bg-white  w-2/12 mx-auto p-10 rounded-2xl '>
                <h1 className='text-center text-2xl font-bold mb-4'>Register Your account</h1>
                <form onSubmit={handleSubmit(handllregister)} className='space-y-5'>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">What is your name?</legend>
                        <input {...register("name")} type="text" className="w-full p-2 mt-2 rounded-2xl border border-black rounded-lg outline-none" placeholder="Type Your Name" />
                        {/* <p className="label">Optional</p> */}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Photo?</legend>
                        <input {...register("photo")} type="text" className="w-full p-2 mt-2 rounded-2xl border border-black rounded-lg outline-none" placeholder="Photo URL" />
                        {/* <p className="label">Optional</p> */}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">What is your Email?</legend>
                        <input {...register("email")} type="text" className="w-full p-2 mt-2 rounded-2xl border border-black rounded-lg outline-none" placeholder="Type Your Email" />
                        {/* <p className="label">Optional</p> */}
                    </fieldset>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input {...register("password")} type="text" className="w-full p-2 mt-2 rounded-2xl border border-black rounded-lg outline-none" placeholder="Type Your Password" />
                        {/* <p className="label">Optional</p> */}
                    </fieldset>

                    <button className='btn w-full bg-green-600 text-white'>Register </button>



                </form>
            </div>

        </div>
    );
};

export default Registeer;