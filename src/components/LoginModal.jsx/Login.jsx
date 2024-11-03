import React, { useContext, useState } from 'react'
import { LiaFacebookSquare } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsX } from 'react-icons/bs';

const Login = () => {
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

  const { signUpWithGmail, login } = useContext(AuthContext);

  // Redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data; // Destructure data for clarity
    login(email, password).then(() => {
      alert("Login successful");
      navigate(from, { replace: true });
    }).catch(() => {
      setErrorMessage("Provide a correct email and password!");
    });
  };

  // Google sign-in
  const handleLogin = () => {
    signUpWithGmail().then(() => {
      alert("Login successful!");
      navigate(from, { replace: true });
    }).catch((error) => console.log(error));
  };

  return (
    <div className="h-screen bg-gradient-to-r from-brown from-0% to-nude1 to-100% flex flex-col justify-center items-center relative">
      <div onClick={closeModal}
      className='absolute top-1 md:top-10 right-2 md:right-16 pt-2 pr-3 text-brown1 cursor-pointer'>
        <BsX className='w-10 h-10' />
      </div>

      <div className='text-brown1 w-[80%] md:w-[400px] max-w-md mx-3 md:mx-auto my-10 p-4 md:px-10 md:py-8 border border-brown1 rounded-xl relative'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 mt-3'>
          <h3 className='capitalize font-bold text-lg'>please login!</h3>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold capitalize mb-1">email:</label>
            <input
              id="email"
              type="email"
              placeholder="email"
              autoComplete="on"
              className="input1 p-1.5 border border-brown1 rounded-lg bg-transparent outline-none w-full font-primary hover:-translate-x-1 duration-3 transition-all"
              {...register("email", { required: "Email is required" })} // Added validation
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>} {/* Error message for email */}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold capitalize mb-1">password:</label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                placeholder="password"
                className="input1 p-1.5 border border-brown1 rounded-lg bg-transparent outline-none w-full font-primary hover:-translate-x-1 duration-3 transition-all"
                {...register("password", { required: "Password is required" })} // Added validation
              />
              {
                showPassword ? (
                  <FaEye onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer' />
                ) : (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer' />
                )
              }
            </div>
            <Link to="#" className="font-semibold">Forgot password?</Link>
          </div>
          {errorMessage && <p className="text-brown3 text-xs italic">{errorMessage}</p>} {/* Display error message */}

          <div>
            <input
              type="submit"
              value="Login"
              className="w-full h-10 text-nude text-xl bg-brown1 rounded-lg hover:bg-transparent hover:text-brown1 hover:border hover:border-brown1 hover:-translate-x-1 duration-3 transition-all capitalize cursor-pointer"
            />
          </div>

          <div className="flex items-center">
            <p className="text-[13px] my-2">Don't have an account?</p>
            <Link to="/signin" className="underline font-semibold text-[13px] md:text-[16px] text-brown3 capitalize ml-1">signup now</Link>
          </div>
        </form>

        <div className="text-center space-x-3 mt-5">
          <button onClick={handleLogin} className="bg-nude1 p-1.5 rounded-full hover:bg-brown1">
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

export default Login;
