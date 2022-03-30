import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-6 flex justify-between items-center flex-wrap'>
            <div className='sm:mb-4 md:mb-0 pt-2'><Link to='/' className='font-bold font-sans text-xl text-gray-600'>Crypto Masters Club</Link></div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;