import React, { useState } from 'react';
import { FaGift } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OfferPage = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const navigate = useNavigate();

  const sizes = ['RN (Recém Nascido) - Até 6 Kg', 'P - 5 a 8 Kg', 'M - 6 a 10 Kg', 'G - 9 a 13 Kg', 'XG - 11 a 15 Kg', 'XXG - +14 Kg'];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleRescue = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho antes de resgatar.");
    } else {
      navigate('/payment', { state: { selectedSize } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 mt-16">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <img
          src="/images/fraldas.png"
          alt="Pampers Reward"
          className="w-full h-auto object-cover mb-4"
        />
        <h1 className="text-xl md:text-2xl font-bold text-teal-700 mb-4">
          OFERTA 50 ANOS PAMPERS - 2 Pacotes de Fraldas Comfort Sec com 196 Unidades + Lenços Umedecidos Pampers com 576 Unidades!
        </h1>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => handleSizeSelect(size)}
              className={`p-2 border rounded-full cursor-pointer transition-transform transform ${
                selectedSize === size ? 'border-teal-700 bg-teal-700 text-white' : 'border-gray-300 bg-white text-gray-700'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="mb-4 text-left">
          <p className="text-teal-700 font-semibold text-lg">De R$ 299,90</p>
          <p className="text-red-600 text-lg">R$ 0,00</p>
          <p className="text-gray-600 text-sm">Em até 12x de R$ 0,00</p>
          <p className="text-green-600 text-sm">R$ 299,90 de desconto</p>
          <p className="text-blue-600 text-sm">Até 10% OFF no PIX</p>
        </div>
        <button
          onClick={handleRescue}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition transform hover:scale-105 flex justify-center items-center"
        >
          <FaGift className="mr-2" />
          Resgatar seu prêmio
        </button>
      </div>
    </div>
  );
};

export default OfferPage;
