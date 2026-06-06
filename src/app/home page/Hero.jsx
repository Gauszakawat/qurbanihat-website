import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import caw from "@/assest/caw.jpg"


const Hero = () => {
    return (
        <div className=" container mx-auto flex lg:flex-row md:flex-1  sm:flex-1 justify-between p-5 space-y-5 ">

        <div className="flex flex-col justify-center align-middle  ">
          <h1 className="lg:text-4xl sm:text-3xl font-bold">Welcome to our <br></br><span className="text-green-600"> Qurbani Hat</span></h1>
          <p className="py-4">welcome to our Qurbani Hat , now here available all animals,<br></br>if you trying to findout any honest QurbaniHat ,
            this is the best for you.</p>
            <Link href={'/animals'}> <button className="btn bg-green-600 rounded-2xl text-white w-[240px]">browse</button>
            </Link>
        </div>

        <div className="w-6/12"> <Image className=" rounded-2xl " src={caw} alt="caw" ></Image> </div>
      </div>
    );
};

export default Hero;