import React, { useState } from 'react';
import { FaGift } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OfferPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const produtos = [
    { id: 1, nome: "COLCHÃO CASAL LUUNA SUPPORT", tamanho: "188 x 138 cm", precoOriginal: "R$ 1.599,00", preco: "R$ 0,00", imagem: "/images/COLCHÃO-CASAL-LUUNA-SUPPORT-188x138.jpg" },
    { id: 2, nome: "COLCHÃO KING LUUNA BLUE", tamanho: "193 x 203 cm", precoOriginal: "R$ 1.999,00", preco: "R$ 0,00", imagem: "/images/COLCHÃO-KING-LUUNA-BLUE-193x203.jpg" },
    { id: 3, nome: "COLCHÃO LUUNA ONE CASAL", tamanho: "188 x 138 cm", precoOriginal: "R$ 2.399,00", preco: "R$ 0,00", imagem: "/images/COLCHÃOLUUNAORIGINALCASAl188x138.jpg" },
    { id: 4, nome: "COLCHÃO LUUNA ORIGINAL CASAL", tamanho: "188 x 138 cm", precoOriginal: "R$ 2.799,00", preco: "R$ 0,00", imagem: "/images/COLCHÃO-LUUNA-ORIGINAL-CASAL-188x138.jpg" }
  ];

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleRescue = () => {
    if (!selectedProduct) {
      alert("Por favor, selecione um produto antes de resgatar.");
    } else {
      navigate('/payment', { state: { selectedProduct } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 mt-16">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-800 mb-6">
        OFERTA 5 ANOS LUUNA COLCHÕES -  Com 20 Anos de Garantia!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            onClick={() => selectProduct(produto)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-transform transform ${
              selectedProduct?.id === produto.id ? 'border-blue-500 shadow-xl scale-105 opacity-100' : 'border-transparent opacity-50'
            }`}
          >
            <img src={produto.imagem} alt={`Imagem do ${produto.nome}`} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="mt-2">
              <h2 className="font-bold">{produto.nome}</h2>
              <p>{produto.tamanho}</p>
              <p className="line-through text-red-500">{produto.precoOriginal}</p>
              <p className="font-bold text-green-500">{produto.preco}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleRescue}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-10 rounded-full shadow-lg transition transform hover:scale-105 flex justify-center items-center"
      >
        <FaGift className="mr-2" />
        Resgatar seu prêmio
      </button>
    </div>
  );
};

export default OfferPage;
