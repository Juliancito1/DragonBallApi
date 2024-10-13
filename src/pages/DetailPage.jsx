import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../img/DragonBallLogo.png'
import { useParams } from 'react-router-dom'
import { obtenerPersonaje } from '../helpers/peticionApi'
const DetailPage = () => {

  const {id} = useParams()

  const [personaje,setPersonaje] = useState({})

  useEffect( () => {
    obtenerPersonaje(id).then((respuesta) => {
      if(respuesta)
      {
        setPersonaje(respuesta)
      }
    })
  }, [])
  

  return (
    <section className='mainSection'>
        <div className='p-5 container my-5 bg-warning'> 
      <Row>
        <Col md={6}>
          <div className='text-center'>
            <h1>Goku</h1>
            <img src={personaje?.image} className='imgDetail' alt="XD" />
          </div>
        </Col>
        <Col md={6}>
        <div className='p-5'>
          <p>Ki: {personaje?.ki}</p>
          <p>Descripción: {personaje?.description}</p>
        </div>
        </Col>
      </Row>
        </div>
    </section>
  )
}

export default DetailPage
