import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemPersonaje = ({ personaje }) => {
  return (
    <Col md={4} lg={3} className="mb-5">
      <div className="position-relative">
        <img
          src="https://i.pinimg.com/originals/a5/f9/a2/a5f9a2eb5c0bfb1f66988696e1f31334.png"
          alt="esfera de dragon"
          className="imgEsfera"
        />
        <Card className="my-5 cardFondo position-absolute">
          <Link to={`/detalle/${personaje.id}`}>
            <Card.Img
              variant="top"
              src={personaje.image}
              className="imgPersonaje"
            />
          </Link>
          <Card.Body className="text-white">
            <Card.Title className="text-center">{personaje.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default ItemPersonaje;
