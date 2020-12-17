import React from 'react'
import { Button } from 'react-bootstrap'

export default function Sum({ num1, num2, sumar }) {
  return (
    <div className="mi-suma">{`La suma es ${num1 + num2}`}<Button onClick={() => sumar()} /></div>
  )
}