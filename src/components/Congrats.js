import React, { useState } from 'react';

const Congrats = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    cidade: '',
    estado: '',
    rua: '',
    numero: '',
    bairro: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar o pagamento
    alert('Pagamento realizado com sucesso!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-center p-6">
      <div className="bg-white text-black p-6 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900">Parabéns!</h1>
        <p className="text-lg md:text-2xl mb-4 text-blue-900">Obrigado por participar do nosso quiz. Você está a um passo de ganhar um colchão Luuna!</p>
        <p className="text-lg md:text-2xl mb-4 text-blue-900">Pagando somente o frete seu colchão estará ai em até 10 dias</p>
        <p className="text-lg md:text-2xl mb-8 text-blue-900">84,99R$ para sua região</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left mb-2 text-blue-900">Nome</label>
            <input 
              type="text" 
              name="nome" 
              value={formData.nome} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-blue-900">CPF</label>
            <input 
              type="text" 
              name="cpf" 
              value={formData.cpf} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-blue-900">Cidade</label>
            <input 
              type="text" 
              name="cidade" 
              value={formData.cidade} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-blue-900">Estado</label>
            <input 
              type="text" 
              name="estado" 
              value={formData.estado} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-blue-900">Rua</label>
            <input 
              type="text" 
              name="rua" 
              value={formData.rua} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-blue-900">Número da Casa</label>
            <input 
              type="text" 
              name="numero" 
              value={formData.numero} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-blue-900">Bairro</label>
            <input 
              type="text" 
              name="bairro" 
              value={formData.bairro} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-left mb-2 text-blue-900">Frete</label>
            <input 
              type="text" 
              value="84,99R$" 
              className="w-full p-2 border rounded-md bg-gray-100" 
              readOnly 
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-10 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Pague aqui
          </button>
        </form>
      </div>
    </div>
  );
};

export default Congrats;
