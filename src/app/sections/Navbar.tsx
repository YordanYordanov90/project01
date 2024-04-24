"use client"; // Ensures the component can use React hooks and other client-side features

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  // State to control the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu state
  };

  return (
    <nav className="relative container mx-auto p-8">
      <div className="flex items-center justify-between">
        <h3 className="p-2 font-bold text-custom-text text-4xl">Website</h3>
        
        <div className="md:hidden p-3" onClick={toggleMenu}>
          <AiOutlineMenu size={30} className="cursor-pointer" />
        </div>
        
        <div className="text-custom-text space-x-8 ml-16 items-center text-xl hidden md:flex">
          <a href="" className="transition-transform duration-300 hover:scale-110 hover:text-red-500">Начало</a>
          <a href="" className="transition-transform duration-300 hover:scale-110 hover:text-red-500">За нас</a>
          <a href="" className="transition-transform duration-300 hover:scale-110 hover:text-red-500">Услуги</a>
          <a href="" className="transition-transform duration-300 hover:scale-110 hover:text-red-500">Цени</a>
          <a href="" className="transition-transform duration-300 hover:scale-110 hover:text-red-500">Как работи</a>
          <a href="" className="transition-transform duration-300 hover:scale-110 hover:text-red-500">Контакти</a>
        </div>
        <div className="text-custom-text space-x-4 p-4 text-xl items-center hidden md:flex">
          <a href="" className="transition-transform duration-300 hover:scale-110 hover:text-red-500">Профил</a>
          <button className="transition-transform duration-300 hover:scale-110 hover:text-red-500 border-2 border-black p-3 rounded-lg">Заявка за пратка</button>
        </div>
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-10">
         
          <div className="flex justify-end p-6 m-2">
            <AiOutlineClose size={30} onClick={toggleMenu} className="cursor-pointer text-white" />
          </div>
        
          <div className="flex flex-col items-center space-y-6 text-white text-xl mt-16">
            <a href="" onClick={toggleMenu}>Начало</a>
            <a href="" onClick={toggleMenu}>За нас</a>
            <a href="" onClick={toggleMenu}>Услуги</a>
            <a href="" onClick={toggleMenu}>Цени</a>
            <a href="" onClick={toggleMenu}>Как работи</a>
            <a href="" onClick={toggleMenu}>Контакти</a>
            <a href="" onClick={toggleMenu}>Профил</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
