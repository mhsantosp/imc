import React from 'react'
import { Link } from 'react-router-dom'
import UsuarioContext from './../../context/UsuarioContext'

export default function CalculationViewIMC(props) {
  return (
    <div className="col">
      <h2>IMC</h2>
      <Link to="/imc-paciente/3"><h3>24.2</h3></Link>
      <UsuarioContext.Consumer>
        {usuario => {
          return <p>El correo del usuario en sesión es : {usuario.correo}</p>
        }}
      </UsuarioContext.Consumer>
    </div>
  )
}