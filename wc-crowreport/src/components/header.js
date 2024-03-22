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
                    {/*< Link to="/" className="text-gray-800 "></Link>*/}
                </div>
                
                <div className='px-2 h-full w-full'>
                <div className='py-8 border-slate-600 border-2 border-dotted text-center text-slate-900'>ad space</div>
                </div>
            </div>
            <DrawerMenu/>
            {/* <nav className="space-x-4 flex justify-center bg-slate-600 pt-4 pb-4">
                        
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="relative z-10 block rounded-md bg-gray-800 p-2 focus:outline-none"
                            >
                                Topics
                            </button>
                            {dropdownOpen && (
                                <div
                                    className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                    aria-labelledby="headlessui-menu-button-1"
                                    id="headlessui-menu-items-117"
                                    role="menu"
                                >
                      
                                    <div className="py-1">
                                        <Link to="/topic/1" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Topic 1</Link>
                                        <Link to="/topic/2" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Topic 2</Link>
               
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => setSecondDropdownOpen(!secondDropdownOpen)}
                                className="relative z-10 block rounded-md bg-gray-800 p-2 focus:outline-none"
                            >
                                More
                            </button>
                            {secondDropdownOpen && (
                                <div
                                    className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                    aria-labelledby="headlessui-menu-button-2"
                                    id="headlessui-menu-items-118"
                                    role="menu"
                                >
                               
                                    <div className="py-1">
                                        <Link to="/more/1" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">More 1</Link>
                                        <Link to="/more/2" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">More 2</Link>
                                
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav> */}
        </header>
    );
};

export default Header;
