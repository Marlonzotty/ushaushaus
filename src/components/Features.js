import React from 'react';
import { FaBed, FaShieldAlt, FaTruck, FaCheckCircle } from 'react-icons/fa'; // Importando ícones específicos

const features = [
  {
    icon: <FaCheckCircle />, // Ícone de "100 noites de teste"
    title: '100 noites de Teste',
    description: 'na sua casa. Mas você só precisará de uma',
  },
  {
    icon: <FaShieldAlt />, // Ícone de "Garantia Total"
    title: 'Garantia Total',
    description: 'e de até 10 anos. Proteção para todas as compras',
  },
  {
    icon: <FaTruck />, // Ícone de "Frete Grátis"
    title: 'Frete Grátis',
    description: 'para o Brasil todo! Durante o ano inteiro!',
  },
  {
    icon: <FaBed />, // Ícone de "Design Ergonômico"
    title: 'Design Ergonômico',
    description: 'e Colchões com até 5 camadas. Se adaptam melhor ao seu corpo',
  },
];

const Features = () => (
  <div className="bg-white text-center p-4">
    <h2 className="text-2xl font-bold">Mais de 2 milhões de clientes usam e aprovam Luuna. Teste por 100 noites!</h2>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <div className="text-4xl text-blue-500">{feature.icon}</div>
          <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
          <p className="mt-1">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
