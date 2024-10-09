import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';

const ItemPersonaje = ({personaje}) => {
  return (
    <Col lg={3}>
      <Card className='my-5'>
        <Card.Img variant="top" src={personaje.image} className='imgPersonaje' />
        <Card.Body className='bg-black text-white'>
          <Card.Title>{personaje.name}</Card.Title>
          <Card.Text className='text-truncate'>
            {personaje.description}
          </Card.Text>
          <Button variant="primary">Ver Más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemPersonaje
