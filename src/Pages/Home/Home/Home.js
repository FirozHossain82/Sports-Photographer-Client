import React from 'react';
import ServiceHome from '../../Shared/ServiceComponents/ServiceHome';
import Banner from '../Banner/Banner';

const Home = ({dataSize}) => {
    return (
        // max-w-screen-2xl mx-auto
        <div className=''>
            <Banner></Banner>
            <ServiceHome dataSize={dataSize}></ServiceHome>
        </div>
    );
};

export default Home;