import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer p-10 pt-20" style={{ backgroundColor: '#E7E6E4' }}>
            <div>
                <span id='name'>Sayesta Goswami, PhD</span>
                <p id='footer1'>CLINICAL PSYCHOLOGIST</p>
                <div id='footer1' className=' my-4 inline-flex gap-2 justify-center items-center'>
                    <p><HiOutlineLocationMarker></HiOutlineLocationMarker>  </p>
                    <p>Anchal Tower, Sixmile, <br /> Guwahati, Assam 781022, India
                    </p>
                </div>
                <div id='footer1' className='inline-flex gap-2 justify-center items-center'>
                    <p><BsTelephone></BsTelephone></p>
                    <p>+918333552221</p>
                </div>
                <div id='footer1' className='inline-flex gap-2 justify-center items-center'>
                    <p><AiOutlineMail></AiOutlineMail></p>
                    <p>sayestagoswami.pt@gmail.com</p>
                </div>
            </div>
            <div>
                <span className="" id='footer2'>Quick Links</span>
                <div id='footer3'>
                    <p className="my-4">Book Session</p>
                    <p className="">About Me</p>
                    <p className="my-4">Contact Us</p>
                    <p className="">Press kit</p>
                </div>
            </div>
            <div>
                <span className="" id='footer2'>Legal Stuff</span>
                <div id='footer3'>
                    <p className="my-4">Disclaimer</p>
                    <p className="">Privacy Policy</p>
                    <p className="mt-4">Terms of Services</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;