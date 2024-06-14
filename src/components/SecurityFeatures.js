// src/components/SecurityFeatures.js
import React from 'react';

const SecurityFeatures = () => {
  return (
    <div className="flex justify-center items-center p-5 space-x-4">
      <a href="https://www.siteconfiavel.com.br/site/vercel-app?id=66675061effc726e3eb4a0cd" className="transition-transform transform hover:scale-105">
        <img
          src="/images/seguran.jpg"  // Caminho atualizado para a primeira imagem
          alt="Compra Segura e Privacidade Protegida"
          className="w-100 h-auto"  // Tamanho menor
        />
      </a>
     
    </div>
  );
};

export default SecurityFeatures;
