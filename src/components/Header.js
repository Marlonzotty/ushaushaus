// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-center p-6 md:p-10">
      <h1 className="text-3xl md:text-5xl font-bold">Responda o quiz e Ganhe um colchão Luuna</h1>
      <p className="mt-2 text-lg md:text-2xl">Conheça Luuna e tenha noites impecáveis</p>
      <button
        onClick={() => navigate('/quiz')}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-10 py-3 rounded-full shadow-lg transition transform hover:scale-105"
      >
        Quero Participar da promoção
      </button>
    </header>
  );
};

export default Header;
