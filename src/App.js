import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculadora from './components/section1/CalculatorApp'
import ViewAppImc from './components/section2/ViewAppImc'
import UsuarioContext from './context/UsuarioContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsuarioContext.Provider value={{
          id: 10,
          nombres: "Oscar",
          apellidos: "Mesa",
          edad: 23,
          correo: 'oscar.mesa@gmail.com'
        }}>


          <Switch>
            <Route path="/" exact />
            <Route path="/imc-toma" exact render = {(props) => {return <Calculadora {...props} nombre = "oscar"/>}} />
            <Route path="/usuario/iniciar-sesion" exact />
            <Route path="/imc-paciente" exact />
            <Route path="/imc-estadistica" exact children ={ () => <ViewAppImc/> } />
          </Switch>
        </UsuarioContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;