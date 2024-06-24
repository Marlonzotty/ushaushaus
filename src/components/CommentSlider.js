import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const comments = [
  {
    name: "Luiza Ribeiro",
    rating: 5,
    comment: "Excelente produto! Meu bebê ficou super confortável.",
    photo: "https://i.ytimg.com/vi/AOwNiDZa4As/maxresdefault.jpg",
    date: "08-12-2023 14:52",
    productImage: "https://www.cristalonline.com.br/cristalonline/fotos/Fralda-pampers-supersec-xxg-20-unidades-1631129031__382926.png",
    variation: "Kit 5 Fralda Descartável Pampers",
    costBenefit: "Ótimo",
    similarToAd: "Sim",
    extraImages: [
      "https://www.cristalonline.com.br/cristalonline/fotos/Fralda-pampers-supersec-xxg-20-unidades-1631129031__382926.png",
      "https://www.cristalonline.com.br/cristalonline/fotos/Fralda-pampers-supersec-xxg-20-unidades-1631129031__382926.png",
      "https://www.cristalonline.com.br/cristalonline/fotos/Fralda-pampers-supersec-xxg-20-unidades-1631129031__382926.png"
    ]
  },
  {
    name: "Antonia Rodrigues",
    rating: 4,
    comment: "Muito bom, mas o frete demorou um pouco.",
    photo: "https://th.bing.com/th/id/OIP.kXkzfFqpg2JY69O6Ne-BHAHaEK?w=768&h=432&rs=1&pid=ImgDetMain",
    date: "23-10-2023 14:02",
    productImage: "https://paguemenos.vtexassets.com/arquivos/ids/283542/deadc989438a3fc38ca7bc59386b6355_pampers-fraldas-pampers-supersec-m-30-unidades_lett_2.jpg?v=637394412840100000",
    variation: "Kit 5 Fralda Descartável Pampers",
    costBenefit: "Bom",
    similarToAd: "Sim",
    extraImages: [
      "https://paguemenos.vtexassets.com/arquivos/ids/283542/deadc989438a3fc38ca7bc59386b6355_pampers-fraldas-pampers-supersec-m-30-unidades_lett_2.jpg?v=637394412840100000",
      "https://paguemenos.vtexassets.com/arquivos/ids/283542/deadc989438a3fc38ca7bc59386b6355_pampers-fraldas-pampers-supersec-m-30-unidades_lett_2.jpg?v=637394412840100000",
      "https://paguemenos.vtexassets.com/arquivos/ids/283542/deadc989438a3fc38ca7bc59386b6355_pampers-fraldas-pampers-supersec-m-30-unidades_lett_2.jpg?v=637394412840100000"
    ]
  },
  // Add more comments as needed
];

const CommentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-100 mx-auto my-4" style={{ maxWidth: '800px' }}>
      <h2 className="text-center mb-4">Comentários de Clientes</h2>
      <Slider {...settings}>
        {comments.map((comment, index) => (
          <Card key={index} className="mb-3 p-3">
            <div className="d-flex align-items-center mb-2">
              <img src={comment.photo} alt={comment.name} className="rounded-circle mr-3" style={{ width: '50px', height: '50px' }} />
              <div>
                <h5 className="mb-0">{comment.name}</h5>
                <div className="text-warning d-flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < comment.rating ? "text-warning" : "text-gray-300"} />
                  ))}
                </div>
                <p className="mb-0 text-muted">{comment.date}</p>
              </div>
            </div>
            <div>
              <p className="mb-1"><strong>Variação:</strong> {comment.variation}</p>
              <p className="mb-1"><strong>Custo-benefício:</strong> {comment.costBenefit}</p>
              <p className="mb-1"><strong>Parecido com anúncio:</strong> {comment.similarToAd}</p>
              <p className="mb-2">{comment.comment}</p>
              <div className="d-flex justify-content-start mb-2">
                {comment.extraImages.map((image, idx) => (
                  <img key={idx} src={image} alt={`extra ${idx}`} className="mr-2" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default CommentSlider;
