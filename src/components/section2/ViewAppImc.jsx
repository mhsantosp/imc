import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import ViewBodyIMC from './ViewBodyIMC'
import ViewHeaderIMC from './ViewHeaderImc'

export default class ViewAppImc extends Component {
  render() {
    return (
      <Card>
        <ViewHeaderIMC />
        <ViewBodyIMC />
      </Card>
    )
  }
}
