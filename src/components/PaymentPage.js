import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import CommentSlider from './CommentSlider'; // Importe o novo componente

const PaymentPage = () => {
  const location = useLocation();
  const { selectedSize } = location.state;

  const handlePayment = () => {
    window.location.href = 'https://pay.quizzpremiados.com/zj6aGnqOa8pZwlK';
  };

  return (
    <Container className="my-4 d-flex flex-column align-items-center" style={{ marginTop: '120px' }}>
      <Card className="text-center border-warning mb-4 w-100" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <Card.Title>1 Oferta Disponível para você:</Card.Title>
          <Card.Text>
            <img src="/images/fraldas.png" alt="Pampers Reward" className="w-50 mb-2 mx-auto" />
            <p>{selectedSize}</p>
            <p className="line-through text-danger">De R$ 299,90</p>
            <p className="font-bold text-success">R$ 0,00</p>
          </Card.Text>
          <Button onClick={handlePayment} className="btn-block btn-warning">
            Resgatar
          </Button>
        </Card.Body>
      </Card>

      <CommentSlider />
    </Container>
  );
};

export default PaymentPage;
