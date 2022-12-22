import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../../assests/logo-main.jpg"
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
     const { user, logOut} = useContext(AuthContext);
     const handleSignOut = () => {
      logOut()
          .then(() => {
              toast.success("Successfully Sign Out");
          })
          .catch(error => console.error(error))
  }


    const menuItems = <>
        <li className="font-bold   "><Link to='/'>Home</Link></li>
        <li className="font-bold   "><Link to='/'>Services</Link></li>
        <li className="font-bold   "><Link to='/'>Blog</Link></li>
        <li className="font-bold  "><Link to='/'>My-Reviews</Link></li>
        <li className="font-bold  "><Link to='/'>Add-Service</Link></li>
        {/* <li className="font-semibold text-2xl mr-3 text-violet-700"><Link to='/login'>LogIn</Link></li> */}
        <>
                                {
                                    user?.displayName &&
                                    <div className='flex justify-end items-center'>
                                        <h3 className="text-lg font-semibold pr-2 ml-0 text-violet-700">Hi,{user?.displayName}  </h3>
                                        {
                                            user?.photoURL ?
                                                <img className="rounded-3xl w-10 tooltip" src={user?.photoURL} alt="" />
                                                :
                                                <FaUser></FaUser>
                                        }
                                    </div>
                                }
                            </>
                            <>
                                {
                                    user?.displayName &&


                                    <div className=' flex justify-end items-center'>

                                        <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>

                                        </div>
                                    </div>

                                }
                            </>

                            <>
                                {
                                    user?.email ?
                                        <button
                                            onClick={async () => {
                                                await handleSignOut();
                                            }

                                            }>

                                            <div className=''>
                                                <Link to='/login' className="bg-violet-600  font-semibold p-3 ml-2 text-white rounded-xl"><span className='text-lg'>SIGN OUT</span></Link>

                                            </div>
                                        </button>

                                        :
                                        <div className='ml-3 md:ml-3 p-2  lg:ml-0 lg:mr-0'>
                                            <Link to='/login' className="bg-violet-600 p-3 font-semibold text-white rounded-xl ">
                                                LOG IN
                                            </Link>
                                        </div>
                                }

                            </>
    </>

    return (
        <div className="navbar h-20 px-12   bg-green-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                  {menuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
                  <img className='' src={logo} alt="" />
                  <p className='font-bold text-2xl text-violet-500'>Sports Photographer</p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
               {menuItems}
          </ul>
        </div>
      </div>
    );
};

export default Header;