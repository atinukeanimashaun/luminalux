import React, { useContext } from 'react'
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate('/update-profile')
  };

   const handleOrder = () => {
    navigate('/order');
  };

  const { logOut } = useContext(AuthContext);
  
  const handleLogout = async () => {
      logOut().then(() => {
      console.log('Logged out successfully');
      }).catch ((error) => {
        console.error('Error logging out:', error);
      });
  }

  return (
    <div  className="relative">
      <button className='group'>
        <div className='rounded-full focus:outline-none focus:ring focus:ring-brown3 focus:ring-offset-2 focus:ring-offset-nude1'>
          {
            user.photoURL ? <img
            className="h-8 w-8 rounded-full"
            alt="profile"
            src={user.photoURL}
          /> : <img
          className="h-8 2xl:h-10 w-8 2xl:w-10 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
          }
        </div>
        <div
          className="z-10 hidden absolute mt-2 w-48 top-full right-0 rounded-md bg-brown shadow-lg group-focus:block"
        >
          <ul>
            <li>
                <div onClick={handleProfile}>
                  <p
                    className='block px-4 pt-4 pb-2 text-lg text-brown1 capitalize font-primary hover:bg-nude rounded-t-md'
                  >
                    profile
                  </p>
                </div>
            </li>
            <li>
                <div onClick={handleOrder}>
                <p
                  className='block px-4 py-2 text-lg text-brown1 capitalize font-primary hover:bg-nude'
                >
                  order
                </p>
                </div>
            </li>
            <li>
                <p
                  className='block px-4 py-2 text-lg text-brown1 capitalize font-primary hover:bg-nude'
                >
                  settings
                </p>
            </li>
            <li>
                <p
                onClick={handleLogout}
                  className='block px-4 pt-2 pb-4 text-lg text-brown1 capitalize font-primary hover:bg-nude rounded-b-md'
                >
                  logout
                </p>
            </li>
          </ul>
        </div>
      </button>
    </div>
  )
}

export default Profile
