import React from 'react';
import UsuarioContext from './../../context/UsuarioContext';

let miNombre = () => {
  let nombre = <p>Mi nombre es Osccar</p>
  return nombre
}

export default function CalculationHeader(props) {
  return (
    <article className="card-header">
      <UsuarioContext.Consumer>
        {(usuario) => {
          return <p>{props.title} - {usuario.nombres}</p>
        }}
      </UsuarioContext.Consumer>
    </article>
  )
}