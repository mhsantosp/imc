import React from 'react'
import { Card, Table } from 'react-bootstrap'

export default function ViewBodyIMC() {
  const data_imc = [
    {
      imc: "Menor de 18.5",
      situacion: "Bajo peso"
    },
    {
      imc: "18.5 a 24.9",
      situacion: "Normopeso"
    },
    {
      imc: "25 a 26.9",
      situacion: "Sobrepeso grado I"
    },
    {
      imc: "27 a 29.9",
      situacion: "Sobrepeso grado II"
    },
    {
      imc: "30 a 34.9",
      situacion: "Obesidad tipo I"
    }
  ]

  const RowTableImc = ({ imc, situacion }) => <tr>
    <td>{imc}</td>
    <td>{situacion}</td>
  </tr>
  return (
    <div>
      <Card.Body>
        <Table bordered hover>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Situación</th>
            </tr>
          </thead>
          <tbody>
            {data_imc.map(data => <RowTableImc {...data} />)}
          </tbody>
        </Table>
      </Card.Body>
    </div>
  )
}