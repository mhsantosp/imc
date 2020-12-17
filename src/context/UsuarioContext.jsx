import React from 'react'

const UsuarioContext = React.createContext({
    id : null,
    nombres : null,
    apellidos : null,
    edad : null,
    correo : ''
})

export default UsuarioContext