import React, { useState } from 'react';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-teal-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://images.ctfassets.net/nhtsjibbyili/4tIU2yul0HwKn7eXpUIfdo/afbdc1d132ef8af2e490291f21c83350/White__1_.svg" alt="Logo" />
          <nav className={`hidden md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <a href="#" className="hover:text-gray-300 text-white">Produtos</a>
            <a href="#" className="hover:text-gray-300 text-white">Gravidez</a>
            <a href="#" className="hover:text-gray-300 text-white">Conselhos para Mães e Pais</a>
            <a href="#" className="hover:text-gray-300 text-white">Passatempos</a>
            <a href="#" className="hover:text-gray-300 text-white">Sobre a Pampers</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:flex items-center space-x-2 bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-full">
            <FaUser />
            <span>Registre-se</span>
          </a>
          <FaSearch className="text-white cursor-pointer hidden md:block" />
          <button onClick={toggleMenu} className="md:hidden text-white">
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
      <nav className={`md:hidden ${menuOpen ? 'block' : 'hidden'} mt-4`}>
        <a href="#" className="block py-2 px-4 hover:bg-teal-500 text-white">Produtos</a>
        <a href="#" className="block py-2 px-4 hover:bg-teal-500 text-white">Gravidez</a>
        <a href="#" className="block py-2 px-4 hover:bg-teal-500 text-white">Conselhos para Mães e Pais</a>
        <a href="#" className="block py-2 px-4 hover:bg-teal-500 text-white">Passatempos</a>
        <a href="#" className="block py-2 px-4 hover:bg-teal-500 text-white">Sobre a Pampers</a>
        <a href="#" className="block py-2 px-4 hover:bg-teal-500 text-white flex items-center space-x-2">
          <FaUser />
          <span>Registre-se</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
