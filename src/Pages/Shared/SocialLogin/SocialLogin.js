import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
                googleSignIn()
                .then(result =>{
                    const user = result.user;
                    console.log(user);
                })
                .catch(error => console.error(error));
    }
    return (
        <div>
               <p className='text-center font-bold mb-3 text-xl'>Social Login</p>
               <p className='text-center'>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline btn-success font-bold w-[80%] mx-auto'>Google SignIn</button>
               </p>
        </div>
    );
};

export default SocialLogin;