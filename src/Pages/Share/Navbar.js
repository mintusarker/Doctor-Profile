import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-between px-10" style={{background: 'rgba(231, 230, 228, 1)', color: 'rgba(109, 46, 70, 1)'}}>
            <div>
                <div className="text-xl mt-3">Sayesta Goswami, PhD <p className='text-center text-sm'>CLINICAL PSYCHOLOGIST</p></div> <br />
                
            </div>
            <div className="flex-none my-auto" >
                <ul className="menu menu-horizontal px-1 text-base">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT ME</Link></li>
                    <li><Link to='/contact'>CONTACT US</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
