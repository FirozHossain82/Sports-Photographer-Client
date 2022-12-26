import React, {  useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assests/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const {createUser, updateUser, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';



    const handleSignUp= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            const currentUser = {
                uid: user.uid
            }
            fetch(`https://sports-photographer-server-five.vercel.app/jwt`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token);
                    handleUpdateUser(name, email);
                    toast.success('Successfully Log in')
                    navigate(from, { replace: true });
                })
        })
        .catch(error => console.error(error));
    }

    const handleUpdateUser = (name, email) => {
        const userInfo = {
            displayName: name,
            email
        }
        updateUser(userInfo)
            .then(() => {
                setLoading(false);
                toast.success('User Update');
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <div className="hero w-full my-10">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                                    <img className='w-3/4' src={img} alt="" />
                        </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-14">
                            <h1 className="text-5xl text-center font-bold ">Sign Up</h1>
                    <form onSubmit={handleSignUp}  className="card-body">
                                <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                        
                                </div>
                                <div className="form-control mt-6">
                                            <input className="btn btn-outline btn-secondary" type="submit" value="Sign Up" />
                                </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;