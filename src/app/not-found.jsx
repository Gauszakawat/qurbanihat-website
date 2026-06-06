import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div className=' bg-green-200 h-[70vh] flex flex-col justify-center iteam-center text-center space-y-3 '>
            <h1 className='text-3xl font-bold text-green-600'>This page is not found</h1>
            <Link href={'/'}><button className='btn bg-green-600'>Got to home page</button></Link>
            
        </div>
    );
};

export default notfound;