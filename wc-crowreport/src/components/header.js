import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import crowLogo from '../assets/crowLogo.svg';
import DrawerMenu from './drawer';  

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);

    return (
        <header className="bg-white text-white pb-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-end space-x-4">
                    <img Link="/" src={crowLogo} alt="Logo" className="py-2 h-24 w-24" /> {/* Replace with your logo */}
                  
                </div>
                
                <div className='px-2 h-full w-full'>
                <div className='py-8 border-slate-600 border-2 border-dotted text-center text-slate-900'>ad space</div>
                </div>
            </div>
            <DrawerMenu/>
        </header>
    );
};

export default Header;
