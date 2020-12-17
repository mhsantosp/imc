import React, { useState, useEffect } from 'react'
import Faker from 'faker'
import { Button, Modal } from 'react-bootstrap'

Faker.locale = "es_MX"

export default function CalculationForm(props) {
  const [numero, setNumero] = useState(5)
  const [alumno, setAlumno] = useState({
    documento: Faker.random.uuid(),
    nombres: Faker.name.firstName(),
    apellidos: Faker.name.lastName(),
    telefono_celular: Faker.phone.phoneNumber(),
    tipo_documento: Faker.random.arrayElement(["CC", "TI", "PP"]),
    genero: Faker.random.arrayElement(["hombre", "mujer"])
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    console.log("Se ejecuto la funcion de useEffect!!!!!")
  }, [])

  useEffect(() => {
    // alert(`Nombre del estudiante : ${alumno.nombres}`)
  }, [alumno])

  const actualizarInformacionEstudiante = () => {
    fetch(`https://api-fake-c5-1-h32cioae7.vercel.app/actores/${Faker.random.arrayElement([1, 2, 3, 4, 5, 6])}`)
      .then(respuesta => respuesta.json())
      .then(alumno => setAlumno(alumno))
  }

  console.log("Entro en el formulario de IMC")
  return (
    <article className="col">
      <p>Numero : {numero}</p>
      <button className="btn btn-danger" onClick={() => setNumero(numero + 10)}>Incrementar Número</button>
      <form className="form">
        <div className="">
          <label htmlFor="peso" className="col-form-label">Peso (kilos)</label>
          <input type="number" className="form-control" id="peso" name="peso" required />
        </div>
        <div className="">
          <label htmlFor="altura" className="col-form-label">Altura (cm)</label>
          <input type="number" className="form-control" id="altura" name="altura" required />
        </div>
      </form>

      <Button variant="primary" onClick={handleShow}>
        Abrir información del estudiante
            </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button className="btn btn-primary" onClick={actualizarInformacionEstudiante}>Actualizar estudiante</button>

          <p>Nombre: {alumno.nombres}</p>
          <p>Apellidos: {alumno.apellidos}</p>
          <p>Documento: {alumno.documento}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar</Button>

        </Modal.Footer>
      </Modal>

    </article>
  )
}
