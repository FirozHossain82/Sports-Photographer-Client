import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assests/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    
    const handleLogin= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate(from, { replace: true });
            const currentUser = {
                uid: user.uid
            }
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    toast.success('Successfully Sign In')
                    navigate(from, { replace: true });
                })
        })
        .catch(error => console.error(error));

    }
    return (
        <div className="hero w-full my-14">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                                    <img className='w-3/4' src={img} alt="" />
                        </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-14">
                            <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin}  className="card-body">
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
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                </div>
                                <div className="form-control mt-6">
                                            <input className="btn btn-outline btn-secondary" type="submit" value="Login" />
                                </div>
                    </form>
                    <p className='text-center'>New Account Please? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;