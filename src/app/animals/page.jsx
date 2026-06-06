
import Card from '@/app/home page/Card';
import { getcow } from '@/lib/dataapi';
import React from 'react';
import data from '../../../public/data.json'


const animals =  () => {
    const cawinform = data;
    // console.log(cawinform);

    return (
        <div className='bg-[#F8F8F8] py-8 '>
            <div className=' container mx-auto text-center py-9'>
                <h1 className='text-3xl font-semibold mb-5'>Featured animals</h1>

               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
                    {
                        cawinform.map(caw=>{return <Card key={caw.id} caw={caw}></Card>})
                    }
                </div>

                

            </div>
        </div>
    );
};

export default animals;