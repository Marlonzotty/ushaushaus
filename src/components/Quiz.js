import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Quiz = () => {
  const [rating, setRating] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [purchaseIntent, setPurchaseIntent] = useState(null);

  const handleProductSelection = (product) => {
    setSelectedProducts((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    );
  };

  const handlePurchaseIntent = (intent) => {
    setPurchaseIntent(intent);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <img src="https://scontent.fjdf6-1.fna.fbcdn.net/v/t39.30808-6/438160924_755580030117349_334349734557679440_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHpbredceQUAgo0lstWPU45oYyNgOsCMouhjI2A6wIyi5XPm6hr__kJGrS6SzlsHdFgrZ600IDy0HwO8qGGPWRa&_nc_ohc=ylG-YKswqxAQ7kNvgHP3li-&_nc_ht=scontent.fjdf6-1.fna&oh=00_AYB__g_VvJ-GsGGGVyfe7IRVvKZ31D7q8YrrI7-oQTuhSg&oe=666A72BF" alt="Ambev" className="w-full h-64 object-cover rounded-md mb-6" />
      <h2 className="text-xl font-bold mb-4">De 0 a 5, como você avaliaria a marca Luna?</h2>
      <div className="flex justify-center items-center mb-6 space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={32}
            className={`cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => setRating(star)}
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
      <button className="w-full bg-blue-500 text-white py-2 rounded-md">Enviar resposta</button>
    </div>
  );
};

export default Quiz;
