import React, { useContext } from 'react';
import scale from '../../images/bascula-dibujo.png';
import UsuarioContext from './../../context/UsuarioContext';

export default function ScaleIMC() {
  let usuario = useContext(UsuarioContext)
  return (
    <div className="col">
      <img src={scale} alt="Bascula IMC" id="img-scale" className="img-fluid" />
      <p>La edad del usuario es: {usuario.edad}</p>
    </div>
  )
}