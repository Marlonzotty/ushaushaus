import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import Modal from 'react-modal';

const Header = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
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
          <div className="mt-4">
            <img
              src="/images/colchao.jpg"
              alt="Conforto garantido com colchões Luuna"
              className="mx-auto w-full md:w-3/4 lg:w-1/2"
            />
          </div>
          <button
            onClick={() => navigate('/quiz')}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-10 rounded-full shadow-lg transition transform hover:scale-105 animate-pulse"
          >
            Quero Participar da promoção
          </button>
          <p className="mt-2 text-lg md:text-2xl mb-4">Luuna seu colchão na caixa</p>
        </div>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Promoção"
        className="flex items-center justify-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Parabéns!</h2>
          <p className="mb-4">Você ganhou uma promoção especial na qual você respondendo um rapido <strong>QUIZ</strong> Você ganha um de nossos colchões ! Aproveite a oferta exclusiva em nosso site.</p>
          <button
            onClick={closeModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Fechar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
