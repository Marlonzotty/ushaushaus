import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const navigate = useNavigate(); // Usar o useNavigate para navegação

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto mt-4 text-center">
      <Slider {...settings}>
        <div>
          <img src="https://images.ctfassets.net/nhtsjibbyili/IALue6MxZLkDzBKJkJ79a/33af7a6b31e34a921babc4813d0eabad/Ehub_Pampers_Plan_MInha_Fralda_Perfeita_Banners_1360x720.png?fm=webp&q=70&w=800&h=510" alt="Slide 1" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover" />
        </div>
        <div>
          <img src="https://images.ctfassets.net/nhtsjibbyili/IALue6MxZLkDzBKJkJ79a/33af7a6b31e34a921babc4813d0eabad/Ehub_Pampers_Plan_MInha_Fralda_Perfeita_Banners_1360x720.png?fm=webp&q=70&w=800&h=510" alt="Slide 2" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover" />
        </div>
        <div>
          <img src="https://images.ctfassets.net/nhtsjibbyili/IALue6MxZLkDzBKJkJ79a/33af7a6b31e34a921babc4813d0eabad/Ehub_Pampers_Plan_MInha_Fralda_Perfeita_Banners_1360x720.png?fm=webp&q=70&w=800&h=510" alt="Slide 3" className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover" />
        </div>
      </Slider>
      <button
        onClick={() => navigate('/quiz')} // Navegar para a página do quiz
        className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 md:px-10 rounded-full shadow-lg transition transform hover:scale-105 animate-pulse"
      >
        Participe da Promoção Agora!
      </button>
    </div>
  );
};

export default ImageSlider;
