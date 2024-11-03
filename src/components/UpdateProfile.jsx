import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsX } from 'react-icons/bs';

const UpdateProfile = () => {
  const { updateuserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    navigate('/');
  };

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateuserProfile(name, photoURL).then(() => {
      // Profile updated!
      navigate(from, { replace: true });
    }).catch((error) => {
      // Handle error here
      console.error("Error updating profile:", error);
    });
  };

  return (
    <div>
      <div className='flex items-center justify-center h-screen bg-brown text-brown1 p-5 relative'>
        <div onClick={closeModal} className='absolute top-10 right-2 md:right-16 pt-2 pr-3 cursor-pointer'>
          <BsX className='w-10 h-10' />
        </div>
        <div className='w-full max-w-sm shrink-0 shadow-xl border-2 border-brown3 rounded-md p-5'>
          <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='flex flex-col capitalize font-semibold text-xl text-center'>Update Your Profile</h1>
            <div className='col-span-full'>
              <label htmlFor="yourName" className="block text-xl font-semibold capitalize leading-6">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id='yourName'
                placeholder='Your name'
                className='input1 mt-2 p-2 px rounded-md border border-brown3 bg-transparent outline-none w-full font-primary' />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className='col-span-full'>
              <label htmlFor="photo" className="block text-xl font-semibold capitalize leading-6">Upload Photo</label>
              <input
                {...register("photoURL", { required: "Photo URL is required" })}
                type='text'
                id='photo'
                placeholder='Photo URL'
                className='input1 mt-2 p-2 flex w-full rounded-md border border-brown3 outline-none bg-transparent font-primary' />
              {errors.photoURL && <p className="text-red-500">{errors.photoURL.message}</p>}
            </div>
            <div>
              <button className='py-2 w-full text-nude text-xl bg-brown3 rounded-md hover:bg-transparent hover:text-brown1 hover:border hover:border-brown3 hover:-translate-y-2 duration-300 transition-all capitalize cursor-pointer'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
