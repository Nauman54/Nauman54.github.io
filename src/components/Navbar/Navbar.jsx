import React from 'react'
import FoodManiaLogo from '../../assets/Images/Logo/FoodManiaLogo.png'
import {FaCartShopping} from 'react-icons/fa6'
import DarkMode from './DarkMode.jsx'
import Hero from '../Hero/Hero.jsx'

const Navbar = () => {
    return (
        <>
            <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
                <div className='container py-3 sm:py-0'>
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="#" className='flex items-center gap-2 text-2xl sm:text3xl font-bold'>
                                <img src={FoodManiaLogo} alt="FoodMania" className='w-10' />
                                Foodio
                            </a>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <DarkMode/>
                            </div>
                            <ul className='hidden sm:flex gap-3'>
                                <li>
                                    <a href="#" className='inline-block px-4 py-4 hover:text-primary'>Home</a>
                                </li>
                                <li >
                                    <a href="#" className='inline-block px-4 py-4 hover:text-primary'>Services</a>
                                </li>
                                <li>
                                    <a href="#" className='inline-block px-4 py-4 hover:text-primary'>Contact</a>
                                </li>
                            </ul>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
                                Order
                                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
