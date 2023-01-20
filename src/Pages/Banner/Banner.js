import React from 'react';
import doctor1 from '../../assets/doctor1.png'
import './Banner.css'

const Banner = () => {
    return (
        <section className='mt-20'
            style={{
                background: `url(${doctor1})`,
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                height: '583px',
                backgroundColor: '#E7E6E4',
                color: 'rgba(109, 46, 70, 1)'
            }}>
                <div className='pt-40 ml-32'>
                    <h1 className='text1' >growth, healing and hope</h1>
                    <p className="text">From the comfort of your own space</p>
                    <p className='text2'>Individual therapy for adults</p>
                    <button className='btn p-3 h-12 w-48 mt-10' style={{backgroundColor:'#6D2E46'}}>Book Section</button>
                </div>
        </section>
    );
};

export default Banner;

