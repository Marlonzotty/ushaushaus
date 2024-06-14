import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { FaGift } from 'react-icons/fa';

const Congrats = () => {
  const navigate = useNavigate(); // Criar uma instância de useNavigate
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    cidade: '',
    estado: '',
    rua: '',
    numero: '',
    bairro: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Você está proximo de conquistar seu novo Colchão');
    navigate('/offer'); // Adiciona a rota para a qual você quer navegar após o form ser submetido
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-center p-6">
      <div className="bg-white text-black p-6 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900">Parabéns!</h1>
        <p className="text-lg md:text-2xl mb-4 text-blue-900">Você ganhou um colchão Luuna!</p>
        <p className="text-lg md:text-2xl mb-4 text-blue-900">Resgate seu Colchão 100% Gratis</p>
        <p className="text-lg md:text-2xl mb-8 text-blue-900">Selecione o seu preferido</p>
        
        <form onSubmit={handleSubmit}>
          {/* Campos de formulário aqui */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-10 rounded-full shadow-lg transition transform hover:scale-105 flex justify-center items-center"
          >
            <FaGift className="mr-2" /> {/* Ícone de presente */}
            Resgatar seu prêmio
          </button>
        </form>
      </div>
    </div>
  );
};

export default Congrats;
