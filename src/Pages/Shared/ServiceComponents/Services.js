import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../Loading/Loading';
import Service from './Service';

const Services = ({dataSize}) => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const url =`https://sports-photographer-server-five.vercel.app/services${dataSize?`?dataSize=${dataSize}` : '' }`
       // console.log(dataSize);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServiceDetails(data);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }, [dataSize]);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='text-center mb-6'>
                    <p className="text-2xl font-bold text-orange-600 mb-2">Services</p>
                    <h2 className="text-5xl font-semibold mb-4">Our Service Area</h2>
            </div>
            <div className=' w-11/12 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl pt-5 pb-8'>
                {
                    serviceDetails &&
                    serviceDetails?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;