import React, { useEffect, useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerPersonaje } from "../helpers/peticionApi";
const DetailPage = () => {
  const { id } = useParams();

  const [personaje, setPersonaje] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    obtenerPersonaje(id).then((respuesta) => {
      if (respuesta) {
        setPersonaje(respuesta);
      }
    });
  }, []);

  return (
    <section className="mainSection bgDetailPage">
      <h1 className="text-center mt-5 text-light">Detalle del personaje</h1>
      <div className="p-5 container my-5 bgDetail border border-5 border-warning">
        <Row>
          <Col md={6}>
            <div className="text-center">
              <h2>{personaje?.name}</h2>
              <img src={personaje?.image} className="imgDetail" alt="XD" />
            </div>
          </Col>
          <Col md={6}>
            <div className="p-5 text-center bg-warning-subtle">
              <h3 className="text-decoration-underline">Raza</h3>
              <h4>{personaje?.race}</h4>
              <h3 className="text-decoration-underline">Poder</h3>
              <h4>Ki: {personaje?.ki}</h4>
              <h3 className="my-3 text-decoration-underline">Descripcion</h3>
              <p className="description fs-6 text-truncate">
                {personaje?.description}
              </p>
              <Button onClick={() => setModal(true)}>Ver Más</Button>
            </div>
          </Col>
        </Row>
        {personaje.transformations ? (
          <Row className="bgTransformacion my-5 p-5">
            <h2 className="text-decoration-underline">Transformaciones</h2>
            {personaje.transformations.map((transformacion) => (
              <Col lg={3}  key={transformacion.id} >
                <article className="my-5 text-center">
                  <div>
                    <h3>{transformacion.name}</h3>
                    <img src={transformacion.image} className="imgTransformation" alt={transformacion.name} />
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        ) : (
          <></>
        )}
      </div>
      <Modal show={modal} onHide={() => setModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Descripcion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{personaje.description}</p>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default DetailPage;
