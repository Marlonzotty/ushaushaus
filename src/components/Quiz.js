import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [ratings, setRatings] = useState(Array(8).fill(0));
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [purchaseIntent, setPurchaseIntent] = useState(null);
  const navigate = useNavigate();

  const handleProductSelection = (product) => {
    setSelectedProducts((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    );
  };

  const handleRating = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handlePurchaseIntent = (intent) => {
    setPurchaseIntent(intent);
  };

  const handleSubmit = () => {
    navigate('/congrats');
  };

  return (
    <div className="bg-gradient-to-r from-[#244674] via-[#244674] to-[#244674] min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full p-6 bg-white shadow-md rounded-md">
        <img src="/images/COLCHÃO-LUUNA-ORIGINAL-CASAL-188x138.jpg" alt="Ambev" className="object-cover w-full h-64 rounded-md mb-6" />
        <h2 className="text-xl font-bold mb-4">De 0 a 5, como você avaliaria a marca Luna?</h2>
        <div className="flex justify-center items-center mb-6 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={32}
              className={`cursor-pointer ${ratings[0] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => handleRating(0, star)}
            />
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">Qual tipo de colchão você prefere?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Mola', 'Espuma', 'Látex', 'Híbrido'].map((product) => (
            <button
              key={product}
              className={`p-2 border rounded-md ${selectedProducts.includes(product) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(product)}
            >
              {product}
            </button>
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">Qual nível de firmeza você considera ideal para um bom sono?</h2>
        <div className="flex justify-center items-center mb-6 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={32}
              className={`cursor-pointer ${ratings[1] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => handleRating(1, star)}
            />
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">Você sente dores nas costas ao acordar?</h2>
        <div className="flex justify-center items-center mb-6 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={32}
              className={`cursor-pointer ${ratings[2] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => handleRating(2, star)}
            />
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">Com que frequência você troca de colchão?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['A cada 5 anos', 'A cada 10 anos', 'A cada 15 anos', 'Mais de 15 anos'].map((frequency) => (
            <button
              key={frequency}
              className={`p-2 border rounded-md ${selectedProducts.includes(frequency) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(frequency)}
            >
              {frequency}
            </button>
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">Qual é a importância de um colchão de alta qualidade para você?</h2>
        <div className="flex justify-center items-center mb-6 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={32}
              className={`cursor-pointer ${ratings[3] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => handleRating(3, star)}
            />
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">Você prefere colchões de uma marca específica?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Sim', 'Não', 'Depende'].map((preference) => (
            <button
              key={preference}
              className={`p-2 border rounded-md ${selectedProducts.includes(preference) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(preference)}
            >
              {preference}
            </button>
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">Qual colchão você acha mais confortável?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Colchão A', 'Colchão B', 'Colchão C', 'Colchão D'].map((comfort) => (
            <button
              key={comfort}
              className={`p-2 border rounded-md ${selectedProducts.includes(comfort) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(comfort)}
            >
              {comfort}
            </button>
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">Você consideraria comprar um colchão online?</h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-2 md:space-y-0 md:space-x-2">
          <button
            className={`w-full md:w-auto p-2 border rounded-md ${purchaseIntent === 'Sim' ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => handlePurchaseIntent('Sim')}
          >
            Sim, eu compraria.
          </button>
          <button
            className={`w-full md:w-auto p-2 border rounded-md ${purchaseIntent === 'Não' ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => handlePurchaseIntent('Não')}
          >
            Não, isso não vai dar certo.
          </button>
        </div>
        
        <h2 className="text-xl font-bold mb-4">Qual é a sua faixa etária?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['18-25', '26-35', '36-45', '46+'].map((age) => (
            <button
              key={age}
              className={`p-2 border rounded-md ${selectedProducts.includes(age) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(age)}
            >
              {age}
            </button>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Você recomendaria o uso de colchões Luuna para um amigo?</h2>
        <div className="flex justify-center items-center mb-6 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={32}
              className={`cursor-pointer ${ratings[4] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => handleRating(4, star)}
            />
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Você acredita que um bom colchão melhora sua qualidade de vida?</h2>
        <div className="flex justify-center items-center mb-6 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={32}
              className={`cursor-pointer ${ratings[5] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => handleRating(5, star)}
            />
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Você já comprou um colchão online antes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Sim', 'Não'].map((answer) => (
            <button
              key={answer}
              className={`p-2 border rounded-md ${selectedProducts.includes(answer) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(answer)}
            >
              {answer}
            </button>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Quais características você considera ao comprar um colchão?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Conforto', 'Preço', 'Durabilidade', 'Marca'].map((feature) => (
            <button
              key={feature}
              className={`p-2 border rounded-md ${selectedProducts.includes(feature) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(feature)}
            >
              {feature}
            </button>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Você já teve uma experiência ruim com um colchão antes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Sim', 'Não'].map((answer) => (
            <button
              key={answer}
              className={`p-2 border rounded-md ${selectedProducts.includes(answer) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(answer)}
            >
              {answer}
            </button>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Quanto você está disposto a gastar em um colchão de qualidade?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['Menos de R$1000', 'R$1000 - R$3000', 'R$3000 - R$5000', 'Mais de R$5000'].map((priceRange) => (
            <button
              key={priceRange}
              className={`p-2 border rounded-md ${selectedProducts.includes(priceRange) ? 'bg-gray-300' : 'bg-white'}`}
              onClick={() => handleProductSelection(priceRange)}
            >
              {priceRange}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Enviar resposta
        </button>
      </div>
    </div>
  );
};

export default Quiz;
