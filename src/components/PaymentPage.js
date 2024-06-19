import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Form, Card } from 'react-bootstrap';
import { FaGift } from 'react-icons/fa';  // Importar o ícone de presente

const PaymentPage = () => {
  const [selectedShipping, setSelectedShipping] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const location = useLocation();
  const { selectedProduct } = location.state;

  const handleShippingSelect = (event) => {
    setSelectedShipping(event.target.value);
  };

  const handlePaymentSelect = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handlePayment = () => {
    if (!selectedShipping || !selectedPayment) {
      alert("Por favor, Clique em Pegar Oferta");
    } else {
      window.location.href = 'https://pay.quizzpremiados.com/zj6aGnqOa8pZwlK';
    }
  };

  const handleOffer = () => {
    alert('Você será redirecionado ao Ambiente 100% seguro em instantes');
    window.location.href = 'https://pay.quizzpremiados.com/zj6aGnqOa8pZwlK';
  };

  return (
    <Container className="my-4 d-flex flex-column align-items-center" style={{ marginTop: '120px' }}>
      <Form className="w-100" style={{ maxWidth: '600px' }}>
        <Card
          className={`text-center mb-4 w-100 align-items-center ${selectedPayment === 'PIX' ? 'border-primary' : ''}`}
          style={{ maxWidth: '600px', cursor: 'pointer' }}
          onClick={() => setSelectedPayment('PIX')}
        >
          <Card.Header>
            <Form.Check
              type="radio"
              name="payment"
              value="PIX"
              checked={selectedPayment === 'PIX'}
              onChange={handlePaymentSelect}
              className="d-none"
            />
            Pagamento
          </Card.Header>
          <Card.Body>
            <Card.Title>Pix</Card.Title>
            <Button 
              className="btn-block d-flex align-items-center justify-content-center mb-4"
              style={{ backgroundColor: 'green', borderColor: 'green' }}
              onClick={handlePayment}
            >
              <img src="/images/icone-pix.jpg" alt="Ícone Pix" style={{ width: '24px', marginRight: '8px' }} />
              Pix
            </Button>
          </Card.Body>
        </Card>
      </Form>
      <Card className="text-center border-warning mb-4 w-100" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <Card.Title>1 Oferta Disponível para você:</Card.Title>
          <Card.Text>
            <img src={selectedProduct.imagem} alt={`Imagem do ${selectedProduct.nome}`} className="w-50 mb-2 mx-auto" />
            <p>{selectedProduct.nome}</p>
            <p className="line-through text-red-500">{selectedProduct.precoOriginal}</p>
            <p className="font-bold text-green-500">{selectedProduct.preco}</p>
          </Card.Text>
          <Button onClick={handleOffer} className="btn-block btn-warning animate-pulse  align-items-center justify-content-center">
            <FaGift className="mr-2 " /> {/* Adicionando ícone de presente */}
            PEGAR OFERTA
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentPage;
