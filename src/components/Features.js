import React from 'react';

const features = [
  {
    image: "https://images.ctfassets.net/nhtsjibbyili/40xL4IUYDAOl81vtfpBzAM/eab3054cdc689c502b8479dec050fd1d/rectangle_2x.jpg?fm=webp&q=70", // URL da imagem para "Aulas de Preparação para o Parto"
    title: 'AULAS DE PREPARAÇÃO PARA O PARTO',
  },
  {
    image: "https://images.ctfassets.net/nhtsjibbyili/45NI4GlKDiEAJe7Nw2bAA3/87ee8d94b40a646ab0c7a7fe8a72d548/caroussel-img_M.jpg?fm=webp&q=70", // URL da imagem para "Seguimento da Gravidez: Semana por Semana"
    title: 'SEGUIMENTO DA GRAVIDEZ: SEMANA POR SEMANA',
  },
  {
    image: "https://images.ctfassets.net/nhtsjibbyili/4ItSHNYMA9ak9zjtdO02s5/459f162890831b42d462771bba056e86/Ehub_Pampers_Plan_MInha_Fralda_Perfeita_Banners_180x120.png?fm=webp&q=70", // URL da imagem para "Minha Fralda Perfeita"
    title: 'MINHA FRALDA PERFEITA',
  },
  {
    image: "https://images.ctfassets.net/nhtsjibbyili/9ce778e4dab63142b508261c93c54a368b6e004feed2fca4a1ac4473f3961332/e21b789ddf854589188da8dc8f0cbbdf/rectangle?fm=webp&q=70", // URL da imagem para "Calculadora de Data de Nascimento"
    title: 'CALCULADORA DE DATA DE NASCIMENTO',
  },
  {
    image: "https://images.ctfassets.net/nhtsjibbyili/6e19dcc72d5e1c1bc317012f1d03765fa70c1a93582155a57d2230820e51a73c/8b4b97328f84d01be21f355f4a5b7a2d/rectangle_2x?fm=webp&q=70", // URL da imagem para "Calendário da Gravidez"
    title: 'CALENDÁRIO DA GRAVIDEZ',
  },
  {
    image: "https://images.ctfassets.net/nhtsjibbyili/5EGc9b6ovCPJc5eLtNiMJI/778b375c702becd85c77ed04dddd25d8/rectangle_2x.png?fm=webp&q=70", // URL da imagem para "Fatos sobre a Data de Nascimento"
    title: 'FATOS SOBRE A DATA DE NASCIMENTO',
  },
];

const Features = () => (
  <div className="bg-white text-center p-4">
    <h2 className="text-2xl font-bold mb-4">Nossas Ferramentas para Gravidez</h2>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <img src={feature.image} alt={feature.title} className="w-full h-32 object-cover rounded-md mb-2" />
          <h3 className="text-sm font-semibold">{feature.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
