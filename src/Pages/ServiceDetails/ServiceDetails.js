import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const [serviceReviews, setServiceReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const url = `https://sports-photographer-server-five.vercel.app/service-reviews/${serviceDetails._id}`;
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setServiceReviews(actualData);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [serviceDetails._id, loading]);

    console.log(serviceReviews);


    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const ratting = form.ratting.value;
        const massage = form.massage.value;
        const username = user?.displayName
        const userphoto = form.userphoto.value;

        const review = {
            service_id: serviceDetails._id,
            service_name: serviceDetails.title,
            rating_value: ratting,
            massage: massage,
            review_date: new Date().getTime(),
            help_count: 0,
            abuse_count: 0,
            reviewer_info: {
                userID: user?.uid,
                userName: username,
                userEmail: user?.email,
                userPhoto: userphoto
            }
        }
        console.log(review);
        fetch('https://sports-photographer-server-five.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setLoading(true);
                    toast.success("Review Added Successfully");
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }
    return (
        <PhotoProvider>

            <div className='max-w-screen-xl mx-auto my-10'>

                <div className="card card-compact bg-sky-200 shadow-xl">
                    <PhotoView src={serviceDetails?.img}>
                        <figure ><img src={serviceDetails?.img} className="object-cover h-96 w-[650px]   pt-10" alt="Shoes" /></figure>
                    </PhotoView>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-bold text-center">{serviceDetails?.title}</h2>
                        <p className='text-purple-600 text-xl font-bold'><span className='text-orange-400 text-xl'>$</span> {serviceDetails?.serviceCharge} Dollar </p>
                        <p>{serviceDetails?.description}</p>

                    </div>
                </div>

                <div className='card card-compact bg-sky-200 shadow-xl my-2'>
                    <h1 className='text-center text-2xl text-fuchsia-600 font-bold mt-6'>Reviews Of This PhotoGraphy</h1>
                    <div className={!(serviceReviews.length <= 0) ? 'hidden' : 'block'}>
                        <p className='text-2xl font-semibold text-gray-800 text-center mt-12 mb-12'>No Reviews Yet Added</p>
                    </div>

                    <div>
                        {
                            serviceReviews &&
                            serviceReviews?.map(review => <Reviews
                                key={review._id}
                                review={review}
                                setLoading={setLoading}
                            ></Reviews>)
                        }
                    </div>

                    <div>

                        <form onSubmit={handleSubmitReview} >
                            <div className="card-actions justify-end">
                                {/* The button to open modal */}


                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box relative bg-sky-300">


                                        <input name="user" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered my-1" required />

                                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered my-1" />


                                        <input name="ratting" type="ratting" placeholder="ratting" className="input w-full input-bordered my-1" />
                                        <input name="massage" type="text" placeholder="Massage" className="input w-full input-bordered my-1" />

                                        <input name="userphoto" defaultValue={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/vxhhW7x/person.png'} type="text" placeholder="Photo" className="input w-full input-bordered my-1" />
                                        <br />
                                        <input className=' w-[40%] absolute right-[30%] mt-4 btn btn-outline btn-secondary' type="submit" value="Submit" /> <br />

                                        <div className="modal-action mb-4">
                                            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>

                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 mr-4 '>
                                    <label htmlFor="my-modal-6" className="btn btn-outline btn-secondary"> ReView Please</label>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceDetails;