import React from 'react'
import UsuarioContext from './../../context/UsuarioContext'

export default function CalculationViewIMC() {
  return (
    <div className="col">
      <h2>IMC</h2>
      <h3>24.2</h3>
      <UsuarioContext.Consumer>
        {usuario => {
          return <p>El correo del usuario en sesión es : {usuario.correo}</p>
        }}
      </UsuarioContext.Consumer>
    </div>
  )
}