import React, { useEffect, useState } from 'react'
import { Card, Row, Button, Col } from 'react-bootstrap'
import { obtenerPersonajes } from '../helpers/peticionApi'
import ItemPersonaje from './ItemPersonaje'

const CardComponent = () => {

  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    const fetchPersonajes = async () => {
      const personajesData = await obtenerPersonajes();
      setPersonajes(personajesData); // Asigna los personajes obtenidos a tu estado
    };

    fetchPersonajes()
  }, [])
  

  return (
    <Row>
      {personajes.length > 0 ? personajes.map((personaje) => <ItemPersonaje personaje={personaje} key={personaje.id}/>) : <></>}
    </Row>
  );
}

export default CardComponent
