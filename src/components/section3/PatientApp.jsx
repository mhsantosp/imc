import React from 'react';
import patientimg from '../../images/mesomorfo.png';
import { Card, Col, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function PatientApp(props) {
  console.log(props.match.params)
  const { id } = useParams()
  return (
    <div>
      <Card>
        <Card.Header>
          IMC Paciente {id}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={8}>
              <label>Peso: 30kg</label>
              <label>Altura: 180cm</label>
              <label>Peso: Interpretación</label>

              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices massa sit amet urna convallis, vel laoreet orci congue. Morbi in pharetra libero, ac blandit ex. Integer ornare erat metus, in vestibulum justo viverra sed. Fusce pellentesque ex non eros porttitor, eu venenatis neque luctus. Aenean mi augue, dictum sit amet lobortis sit amet, fermentum vel quam. Vestibulum sit amet ligula sodales, ornare sapien non, euismod lacus. In in turpis elit.</p>
              </article>

            </Col>
            <Col md={4}>
              <Image src={patientimg} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}