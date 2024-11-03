import React, { useContext, useState } from 'react'
import { LiaFacebookSquare } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import { BsX } from "react-icons/bs";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const closeModal = () => {
    navigate('/');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext); 

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data; 
    createUser(email, password).then((result) => {
      alert("Account created successfully!");
      navigate(from, { replace: true });
    }).catch((error) => {
      setErrorMessage(error.message); 
    });
  };

  return (
    <div className="h-screen bg-gradient-to-r from-brown from-0% to-nude1 to-100% flex flex-col justify-center items-center relative">
      <div onClick={closeModal}
      className='absolute top-1 md:top-10 right-2 md:right-16 pt-2 pr-3 cursor-pointer text-brown1'>
        <BsX className='w-10 h-10' />
      </div>

      <div className='text-brown1 w-[80%] md:w-[400px] max-w-md mx-6 md:mx-auto my-10 px-6 md:px-10 py-8 border border-brown1 rounded-xl'>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog" className='space-y-4 mt-3'>
          <h3 className='capitalize font-bold text-lg'>please signin!</h3>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} 
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold capitalize mb-1">email:</label>
            <input
              id="email"
              type="email"
              placeholder="email"
              autoComplete="on"
              className="input1 p-1.5 border border-brown1 rounded-lg bg-transparent outline-none w-full font-primary hover:-translate-x-1 duration-3 transition-all"
              {...register("email", { required: true })} 
            />
            {errors.email && <p className="text-red-500">Email is required</p>} 
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold capitalize mb-1">password:</label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                placeholder="password"
                className="input1 p-1.5 border border-brown1 rounded-lg bg-transparent outline-none w-full font-primary hover:-translate-x-1 duration-3 transition-all"
                {...register("password", { required: true })} 
              />
              {
                showPassword ? (
                  <FaEye onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer' />
                ) : (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer' />
                )
              }
            </div>
            {errors.password && <p className="text-red-500">Password is required</p>} 
          </div>

          <div>
            <input
              type="submit"
              value="Sign Up"
              className="w-full h-10 text-nude text-xl bg-brown1 rounded-lg hover:bg-transparent hover:text-brown1 hover:border hover:border-brown1 hover:-translate-x-1 duration-3 transition-all capitalize cursor-pointer"
            />
          </div>

          <div className="flex items-center">
            <p className="text-[14px] md:text-[16px] my-2">Have an account?</p>
            <Link to="/login" className="underline font-semibold text-[14px] md:text-[16px] text-brown3 capitalize ml-1">login</Link>
          </div>

        </form>

        <div className="text-center space-x-3 mt-5">
          <button className="bg-nude1 p-1.5 rounded-full hover:bg-brown1">
            <FcGoogle className='w-8 h-8' />
          </button>
          <button className="bg-nude1 p-1.5 rounded-full hover:bg-brown1 hover:text-nude">
            <LiaFacebookSquare className='w-8 h-8' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
