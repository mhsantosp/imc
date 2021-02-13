import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Faker from 'faker'
import CalculationForm from './CalculationForm'
import CalcultarionViewIMC from './CalculationViewIMC'
import ScaleIMC from './ScaleIMC'
Faker.locale = "es_MX"

class CalculationBody extends Component {

  constructor(props) {
    super()
    this.nombre = "Cuerpo calculadora"
    console.log(props)
    this.state = {
      peso: 10,
      altura: "1.8 metros",
      alumnos: [],
      alumno: {
        documento: Faker.random.uuid(),
        nombres: Faker.name.firstName(),
        apellidos: Faker.name.lastName(),
        telefono_celular: Faker.phone.phoneNumber(),
        tipo_documento: Faker.random.arrayElement(["CC", "TI", "PP"]),
        genero: Faker.random.arrayElement(["hombre", "mujer"])
      }
    }

    //this.cambiar = this.cambiar.bind(this)
  }

  /* UNSAFE_componentWillMount(){
       console.log("UNSAFE_componentWillMount")
   } */

  static getDerivedStateFromProps(props, state) {
    console.log("==================")
    console.log("getDerivedStateFromProps")
    console.log(props, state)
    state.peso = 19
    console.log("==================")
    return state
  }

  componentDidMount() {
    this.cargarListaEstudiantes()
  }

  cargarListaEstudiantes = () => {
    fetch('https://api-fake-c5-1-h32cioae7.vercel.app/actores')
      .then((respuesta) => {
        /*respuesta.json().then((datos) => {
            console.log(datos)
        }) */
        return respuesta.json()
      })
      .then((datos) => {
        this.setState({ alumnos: datos })
      })
      .catch((respuesta) => {

      })
      .finally(function () {
        console.log("Se ejecuto el metodo finally!!!");
      })
  }

  sumar(n1, n2) {
    return n1 + n2
  }

  cambiar = () => {
    let txtaltura = document.querySelector("#txtAltura").value
    this.setState({ altura: txtaltura, peso: "otro peso", nombre: "Oscar" })

  }

  almacenarEstudianteAleatirio = e => {
    let data = {
      documento: Faker.random.uuid(),
      "tipo_documento": Faker.random.arrayElement(['TC', 'CC', 'PP']),
      nombres: Faker.name.findName(),
      "apellidos": Faker.name.lastName(),
    }
    fetch('https://api-fake-c5-1-h32cioae7.vercel.app/actores', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(respuesta => respuesta.json())
      .then(data => {
        alert(`El alumno fue almacenado correctamente. Se genero el id ${data.id}`)
        this.cargarListaEstudiantes()
      })
  }

  almacenarEstudianteFormulario = e => {
    e.preventDefault()

    fetch('https://api-fake-c5-1-h32cioae7.vercel.app/actores', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(this.state.alumno)
    })
      .then(respuesta => respuesta.json())
      .then(data => {
        alert(`El alumno fue almacenado correctamente. Se genero el id ${data.id}`)
        this.cargarListaEstudiantes()
      })
  }

  cambiarEntradAlumno = (e) => {
    //console.log(e.target)
    let alumno = this.state.alumno
    alumno[e.target.name] = e.target.value
    this.setState({ alumno: alumno })
  }

  render() {

    return <section className="card-body">
      <ReactBootstrap.Row>
        <CalculationForm />
        <CalcultarionViewIMC />
        <ScaleIMC />
      </ReactBootstrap.Row>
      <div id="contenedor-clase-prueba">
        <p>Hola desde Class Component</p>
        <p>{this.nombre}</p>
        <p>La suma de 1 y 8 es {this.sumar(1, 8)}</p>
        <p>Su edad es {this.props.edad}</p>
        <MiNombre edad={9}></MiNombre>

        <input type="text" placeholder="Altura" id="txtAltura" />
        <button onClick={this.cambiar} >Cambiar valores</button>

        <p>Altura : {this.state.altura}</p>
        <p>Peso : {this.state.peso} Kg</p>
        <table border="1">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de nacimiento</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alumnos.map((alumno, i) => {
              return <tr key={i}>
                <td>{alumno.documento}</td>
                <td>{alumno.nombres}</td>
                <td>{alumno.apellidos}</td>
                <td>{alumno.fecha_nacimiento}</td>
              </tr>
            })}
          </tbody>
        </table>
        <form onSubmit={this.almacenarEstudianteFormulario}>
          <input type="text" placeholder="Nombres" name="nombres" defaultValue={this.state.alumno.nombres} onKeyUp={this.cambiarEntradAlumno} required /><br />
          <input type="text" placeholder="Apellido" name="apellidos" defaultValue={this.state.alumno.apellidos} onKeyUp={this.cambiarEntradAlumno} /><br />
          <input type="text" name="documento" defaultValue={this.state.alumno.documento} onKeyUp={this.cambiarEntradAlumno} /><br />
          <select name="tipo_documento" onChange={this.cambiarEntradAlumno} defaultValue={this.state.alumno.tipo_documento}>
            <option>Tipo de documento</option>
            <option value="CC">Cédula de Ciudadania</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="PP">Pasaporte</option>
          </select><br />
          <select name="genero" onChange={this.cambiarEntradAlumno} defaultValue={this.state.alumno.genero}>
            <option>Genero</option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
          </select><br />
          <input type="tel" name="telefono_celular" onKeyUp={this.cambiarEntradAlumno} defaultValue={this.state.alumno.telefono_celular} placeholder="Teléfono Celular" /><br />
          <input type="submit" value="Enviar" />
        </form>
        <button onClick={this.almacenarEstudianteAleatirio}>Almacenar Aleatorio</button>
      </div>
    </section>
  }
}

class MiNombre extends React.Component {

  constructor(misPropiedades) {
    super()
    console.log(misPropiedades)
  }

  nombre() {
    return 'oscar'
  }

  apellido = () => 'Mesa'

  render() {
    return (<div>
      <form>
        <label>Nombre</label>
        <input type="text"></input> <br />

        <label>Apellido</label>
        <input type="text"></input> <br />
      </form>
    </div>);
  }
}

export default CalculationBody