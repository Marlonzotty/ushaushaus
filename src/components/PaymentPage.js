import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Form, Card } from 'react-bootstrap';

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
      alert("Por favor, selecione o frete e a forma de pagamento.");
    } else {
      alert("Você será redirecionado para o ambiente de pagamento via Pix.");
    }
  };

  return (
    <Container className="my-4 d-flex flex-column align-items-center">
      <h1 className="text-center mb-4"></h1>
      <Form className="w-100" style={{ maxWidth: '600px' }}>
        <Form.Check
          type="radio"
          name="shipping"
          value="SEDEX"
          label="SEDEX - R$84,90 (5 a 7 dias)"
          checked={selectedShipping === 'SEDEX'}
          onChange={handleShippingSelect}
          className="mb-2"
        />
        <Form.Check
          type="radio"
          name="shipping"
          value="CORREIOS"
          label="CORREIOS - R$84,90 (de 15 a 30 dias)"
          checked={selectedShipping === 'CORREIOS'}
          onChange={handleShippingSelect}
          className="mb-4"
        />
      </Form>
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
            <Card.Title>Pagando com Pix</Card.Title>
            <Button className="btn-block d-flex align-items-center justify-content-center mb-4">
              <img src="/images/icone-pix.jpg" alt="Ícone Pix" style={{ width: '24px', marginRight: '8px' }} />
              Pagar com Pix
            </Button>
          </Card.Body>
        </Card>
      </Form>
      <Button onClick={handlePayment} className="btn-block d-flex align-items-center justify-content-center mb-4">
        Confirmar Pagamento
      </Button>
      <Card className="text-center border-warning mb-4 w-100" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <Card.Title>1 Oferta Disponível para você:</Card.Title>
          <Card.Text>
            <img src={selectedProduct.imagem} alt={`Imagem do ${selectedProduct.nome}`} className="w-50 mb-2 mx-auto" />
            <p>{selectedProduct.nome}</p>
            <p className="line-through text-red-500">{selectedProduct.precoOriginal}</p>
            <p className="font-bold text-green-500">{selectedProduct.preco}</p>
          </Card.Text>
          <Button onClick={() => alert('Você será redirecionado ao Ambien 100% seguro em instantes')} className="btn-block btn-warning">
            PEGAR OFERTA
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentPage;
