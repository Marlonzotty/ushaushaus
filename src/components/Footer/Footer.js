import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="https://images.ctfassets.net/nhtsjibbyili/4tIU2yul0HwKn7eXpUIfdo/afbdc1d132ef8af2e490291f21c83350/White__1_.svg" alt="Logo" className="h-10" />
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300">Termos de Serviço</a>
          <a href="#" className="hover:text-gray-300">Política de Privacidade</a>
          <a href="#" className="hover:text-gray-300">Contato</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
