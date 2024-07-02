import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Luuna. Todos os direitos reservados.</p>
        <p>Termos e Condições | Política de Privacidade</p>
      </div>
    </footer>
  );
};

export default Footer;
