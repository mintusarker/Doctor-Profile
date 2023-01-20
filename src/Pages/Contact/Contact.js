import React from 'react';
import './Contact.css'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className="hero h-full my-28 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-10 lg:grid-cols-2 justify-center items-center">

                <div className='w-1/2 mx-auto'>
                    <h2 className='text-2xl mb-10'>Contact Us</h2>

                    <div id='footer11' className='my-4 inline-flex gap-2 justify-center items-center'>
                        <p><HiOutlineLocationMarker></HiOutlineLocationMarker>  </p>
                        <p>Anchal Tower, Sixmile, <br /> Guwahati, Assam 781022, India
                        </p>
                    </div>

                    <div id='footer12' className='inline-flex gap-2 my-10 justify-center items-center'>
                        <p><BsTelephone></BsTelephone></p>
                        <p>+918333552221</p>
                    </div>

                    <div id='footer13' className='inline-flex gap-2 justify-center items-center'>
                        <p><AiOutlineMail></AiOutlineMail></p>
                        <p>sayestagoswami.pt@gmail.com</p>
                    </div>
                </div>
                <div className=''>
                    <label htmlFor="">Name *</label>
                    <div className="mb-8">
                        <input className='name' type="tel" name="" id="" />
                        <input className='name' type="tel" name="" id="" />
                    </div>
                    <label htmlFor="">Email * </label>
                    <div className='mb-8'>
                        <input className='name1' type="text" name="" id="" />
                    </div>
                    <label htmlFor="">Message * </label>
                    <div>
                        <textarea className='name2' type="text" name="" id="" />
                    </div>
                    <button className='btn p-3 h-12 w-48 my-5 ml-3' style={{backgroundColor:'#6D2E46'}}>SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;