import React from 'react';
import { NavLink } from 'react-router-dom';
import Services from './Services';

const ServiceHome = ({dataSize}) => {
    return (
        <div className='text-center'>
            <Services dataSize={dataSize}></Services>
             <button
                className="px-8 py-3 mx-auto text-center mb-6 bg-purple-600 text-white rounded hover:bg-lime-300 hover:text-gray-800 transition duration-300 font-bold font-serif">
                <NavLink to="/service">
                    SEE ALL SERVICES
                </NavLink>
            </button>
        </div>
    );
};

export default ServiceHome;