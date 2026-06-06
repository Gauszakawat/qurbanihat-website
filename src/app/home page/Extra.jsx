import React from 'react';

const Extra = () => {
    return (<div className='container mx-auto p-8' >
        <div className=' container mx-auto text-center py-5 bg-[#F8F8F8] rounded-2xl p-10'>
            <h1 className='text-2xl font-semibold mb-7'>Why choose Us</h1>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">Why should I buy animals from your platform?</div>
                <div className="collapse-content text-sm">We provide verified and healthy animals from trusted farms, ensuring quality and reliability for every customer.</div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Verified Healthy Animals</div>
                <div className="collapse-content text-sm">We carefully verify every listed animal to ensure excellent health, proper care, and reliable quality.</div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Trusted Farmers & Sellers</div>
                <div className="collapse-content text-sm">Our network consists of experienced and trusted farmers who maintain the highest standards of livestock care.</div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Fair & Transparent Pricing</div>
                <div className="collapse-content text-sm">No hidden costs or unnecessary middlemen. Get competitive prices directly from reliable sellers.</div>
            </div>


        </div>


    </div>

    );
};

export default Extra;