import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGift } from 'react-icons/fa';

const Congrats = () => {
  const navigate = useNavigate();
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
    alert('Você está próximo de conquistar seu novo Colchão');
    navigate('/offer');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white text-center p-6">
      <div className="bg-white text-black p-6 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-teal-800">PARABÉNS VOCÊ GANHOU!</h1>
        <img
          src="/images/fraldas.png"
          alt="Pampers Reward"
          className="w-full h-auto object-cover mb-4"
        />
        <p className="text-lg md:text-2xl mb-4 text-teal-800">
          Você concluiu nossa avaliação da Pampers e ganhou dois <strong>pacotes de Fraldas Comfort Sec</strong> com <strong>196 unidades</strong> cada + <strong>Lenços Umedecidos Pampers</strong> com <strong>576 unidades</strong> - Totalmente grátis - Prêmio equivalente a <strong>R$ 512,23</strong>! Clique no botão
        </p>
        <p className="text-lg md:text-2xl mb-4 text-teal-800">
          RESGATAR abaixo para resgatar seu prêmio.
        </p>
        <p className="text-lg md:text-2xl mb-4 text-teal-800">
          Agradecemos sua participação e esperamos que desfrute do seu combo cheio de carinho e sabor.
        </p>
        <p className="text-lg md:text-2xl mb-8 text-teal-800">Com carinho, Equipe Pampers.</p>
        <button
          onClick={() => navigate('/offer')}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 md:px-10 rounded-full shadow-lg transition transform hover:scale-105 flex justify-center items-center"
        >
          <FaGift className="mr-2" /> RESGATAR
        </button>
      </div>
    </div>
  );
};

export default Congrats;
