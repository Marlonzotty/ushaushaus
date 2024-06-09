import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-[#244674] via-[#244674] to-[#244674] text-white text-center p-4 md:p-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <FaBars className="text-2xl cursor-pointer" />
          <div className="flex items-center space-x-2">
            <img src="https://luunabrasil.vtexassets.com/assets/vtex/assets-builder/luunabrasil.template-luunabrasil/2.1.31/svgs/logo-luuna___21c75591242b187ec41de7238091d19f.svg" alt="Luuna Logo" className="h-10 md:h-12" />
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-blue-600 rounded-full px-4 py-2">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="bg-transparent placeholder-white outline-none text-white w-full"
          />
          <FaSearch className="text-white" />
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Responda o quiz e Ganhe um colchão Luuna</h1>
        <p className="mt-2 text-lg md:text-2xl mb-6">Conheça Luuna e tenha noites impecáveis</p>
        <button
          onClick={() => navigate('/quiz')}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-10 rounded-full shadow-lg transition transform hover:scale-105 animate-pulse"
        >
          Quero Participar da promoção
        </button>
      </div>
    </header>
  );
};

export default Header;
