import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div>
        <div className='mt-16 px-28'>
            <div className='text-center'>
                <h2 className='text-2xl' style={{color: "#6D2E46"}}>Start Online Psychologist Consultation With Three Easy Steps</h2>
            </div>
            <div className='gap-8 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <p className='pic'>1</p>
                    <div className="card-body items-center text-center">
                        <h2 className="title">Choose A Package</h2>
                        <p className='title2'>Choose between two types of packages, Depending upon on your requirement and need.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <p className='pic'>2</p>
                    <div className="card-body items-center text-center">
                        <h2 className="title">Connect With Your Therapist</h2>
                        <p className='title2'>Fill out our form and complete the payment process I Will shortly be in touch with you</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <p className='pic'>3</p>
                    <div className="card-body items-center text-center">
                        <h2 className="title">Begin Your Healing Journey</h2>
                        <p className='title2'>Start your session with Me, a step towards healing.</p>
                    </div>
                </div>
            </div>
           
        </div>
         <button className='btn p-3 h-12 w-48 mt-10 mb-24 flex mx-auto' style={{backgroundColor:'#6D2E46'}}>Book Section</button>
         </div>
    );
};

export default Services;