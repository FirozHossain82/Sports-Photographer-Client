import React from 'react';
import { toast } from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';


const Reviews = ({review, setLoading}) => {
    const handleHelpful = () => {
        const newHelpful = {
            help_count: 1
        }

        fetch(`https://sports-photographer-server-five.vercel.app/reviews-help/${review?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHelpful)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setLoading(true);
                    toast.success("Thank You");
                }
            })
            .catch(er => {
                toast.error("Data Not Updated");
            });

    }

    const handleAbuser = () => {
        const newAbuse = {
            abuse_count: 1
        }

        fetch(`https://sports-photographer-server-five.vercel.app/reviews-abuse/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAbuse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setLoading(true);
                    toast.success("We Can TakeCare It");
                }
            })
            .catch(er => {
                toast.error("Data Not Updated");
            });
    }
    return (
        <div className='mt-5 px-4'>

            <article>
                <div className="flex items-center mb-3 space-x-4">
                    <img className="w-10 h-10 rounded-full" src={review?.reviewer_info.userPhoto} alt="" />
                    <div className="space-y-1 font-medium dark:text-purple-900">
                        <p className='text-2xl '>{review?.reviewer_info.userName} <span className="block text-sm">{review?.reviewer_info.userEmail}</span></p>
                    </div>
                </div>
                <div className="mb-1">
                    <h1 className='flex' >Ratting : <span className='ml-2 flex  items-center'> {review?.rating_value} <FaStar className='text-orange-400'></FaStar> </span></h1>
                </div>

                <div>
                    {new Date(parseInt(review.review_date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>

                <p className="mb-3">{review.massage}</p>
                <aside>
                    <p className="mt-1 text-xs font-bold text-rose-800">{review.help_count} people found this helpful</p>
                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-500">
                        <button onClick={handleHelpful} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 ">Helpful</button>
                        <button onClick={handleAbuser} className="pl-4 text-sm font-medium text-blue-600 hover:underline">Report abuse</button>
                    </div>
                </aside>

            </article>
        </div>
    );
};

export default Reviews;