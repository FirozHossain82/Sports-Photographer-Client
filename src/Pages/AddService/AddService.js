import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';



const AddService = () => {
    const {loading} = useContext(AuthContext);
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.Title.value;
        const serviceCharge = form.serviceCharge.value;
        const img = form.img.value;
        const description = form.details.value;

        const service = {
            title,
            serviceCharge,
            img,
            description
        }
        console.log(service);
        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset();
                toast.success('Successfully Service Added');
            }
        })
        .catch(error =>{
            toast.error("Service Not Added");
        });
    }
    if(loading){
        return<Loading></Loading>
    }
    return (
        <div className='max-w-screen-xl mx-auto '>
            <h1 className='text-3xl font-bold text-center mt-6 mb-4 text-amber-500'>Add New Sports Photography</h1>
            <div className=' flex items-center justify-center w-[80%]'>

                <form className='w-full flex-col items-center ml-32 bg-sky-200 p-10 rounded-xl mb-6 shadow-xl' onSubmit={handleAddService}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-blue-800">Sports Name</span>
                        </label>
                        <input name='Title' type="text" placeholder="Type here" className="input input-bordered w-full " />

                        <label className="label">
                            <span className="label-text text-xl font-semibold text-blue-800">Service Charge</span>
                        </label>
                        <input name='serviceCharge' type="text" placeholder="Type here" className="input input-bordered w-full " />

                        <label className="label">
                            <span className=" text-xl font-semibold text-blue-800">Sports Image Url</span>
                        </label>
                        <input name='img' type="text" placeholder="Type here" className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text text-xl font-semibold text-blue-800">Sports Image Details</span>
                        </label>
                        <input name='details' type="text" placeholder="Type here" className="input input-bordered w-full" />



                    </div>
                    <button className='   btn btn-outline btn-secondary mt-6 lg:ml-72 md:ml-20 ' type="submit">
                        Add New Sports Photography
                    </button>
                </form>


            </div>
        </div>
    );
};

export default AddService;