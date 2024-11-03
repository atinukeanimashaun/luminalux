import { useState, useContext } from 'react'
import { links } from "../constants"
import { BsList, BsX } from "react-icons/bs";
import { AuthContext } from '../contexts/AuthProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import CartOffset from './CartOffset';
import Wishlist from './Wishlist';
import { IoPersonOutline } from "react-icons/io5";

const NavBar = () => {

  const [nav, setNav] = useState(false)
  
  const toggleMenu = () => {
    setNav(!nav)
  }

  const {user} = useContext(AuthContext)
  console.log(user)

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out text-brown1 cursor-pointer`}>
      <div className={`flex items-center px-5 lg:px-16 2xl:px-32 py-5 md:py-2 bg-brown  ${nav ? "bg-brown shadow-lg transition-all duration-300 ease-in-out backdrop-blur-sm" : "bg-gradient-to-r from-brown from-0% to-nude1 to-100"}`}>
        <Link to="/"
        className=' uppercase font-secondary md:text-xl lg:text-3xl 2xl:text-4xl font-thin cursor-pointer flex flex-col '>luminalux
        <span className='text-xs lg:text-lg 2xl:text-xl font-lobster lowercase mx-auto italic tracking-wide'>facial & skincare</span>
        </Link>

       <nav className="hidden fixed top-[3rem] left-0 right-0 bottom-0 md:static md:flex md:mx-auto">
        <div className='relative w-full z-2 flex bg-brown md:bg-transparent flex-col items-center justify-center m-auto md:flex-row'>
          {
          links.map((item) => (
            <Link key={item.id} to={item.link}
            className={`relative block uppercase font-primary text-xl 2xl:text-3xl hover:underline ${item.onlyMobile ? 'md:hidden' : ''} px-4 lg:px-6 py-4 md:py-8 md:mr-0.25 md:text-lg font-bold md:font-semibold `}>
              {item.name}
            </Link>
          ))}
        </div>
       </nav>
       
       <div className='ml-auto md:ml-0 flex items-center justify-center gap-3 md:gap-5'> 
        <CartOffset />

        <Wishlist />
        
        {
            user ? <Profile user={user} /> : (
              <Link to="/login" className='uppercase mr-2 lg:mr-8 cursor-pointer text-sm md:text-lg lg:text-xl 2xl:text-3xl font-medium'>
                <IoPersonOutline className='w-6 h-6' />
              </Link>
            )
          }
       </div>
       
       <div className='ml-2 md:hidden' onClick={toggleMenu}>
        {nav ? <BsX className='text-3xl p-1  rounded-full' /> : <BsList className='text-3xl p-1 text-brown1 bg-nude rounded-full' /> }
       </div>

       {/* Mobile Navigation */}
         <nav className={`${nav ? "fixed" : "hidden"} top-0 left-0 w-full h-screen bg-brown flex flex-col items-center justify-start`}>
           <div className="flex items-center justify-between w-full p-5">
             <Link to="/" className='uppercase font-secondary text-2xl  font-thin cursor-pointer flex flex-col '>luminalux
             <span className='text-lg font-lobster lowercase mx-auto italic tracking-wide'>facial & skincare</span>
             </Link>
             <div onClick={toggleMenu}>
               <BsX className='text-3xl text-brown1' />
             </div>
           </div>

           <div className='flex flex-col items-start bg-brown w-full h-screen'>
             {links.map((item) => (
               <Link key={item.id} to={item.link} className={`relative block uppercase font-primary text-xl 2xl:text-3xl hover:underline pl-8 py-4`}>
                 {item.name}
               </Link>
             ))}
           </div>
         </nav>
      </div>
    </header>
  )
}

export default NavBar;