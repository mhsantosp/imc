import { Nav } from "react-bootstrap";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Calculadora from "./components/section1/CalculatorApp";
import ViewAppImc from "./components/section2/ViewAppImc";
import PatientApp from "./components/section3/PatientApp";
import Basic from "./components/forms/Basic";
import BasicYup from "./components/forms/BasicYupForm";
import UsuarioContext from "./context/UsuarioContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsuarioContext.Provider
          value={{
            id: 10,
            nombres: "Oscar",
            apellidos: "Mesa",
            edad: 23,
            correo: "oscar.mesa@gmail.com",
          }}
        >
          <Nav fill variant="tabs" defaultActiveKey="/imc-toma">
            <Nav.Item>
              <Link
                to="/imc-toma"
                className="nav-link"
                data-rb-event-key="link-1"
                role="button"
              >
                Toma de paciente IMC
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/imc-estadistica"
                className="nav-link"
                data-rb-event-key="link-1"
                role="button"
              >
                Estadisticas IMC
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/forms/basic"
                className="nav-link"
                data-rb-event-key="link-1"
                role="button"
              >
                Formulario 1
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/forms/basicyup"
                className="nav-link"
                data-rb-event-key="link-1"
                role="button"
              >
                Formulario 2
              </Link>
            </Nav.Item>
          </Nav>

          <Switch>
            <Route path="/" exact>
              <Redirect to="/imc-toma"></Redirect>
            </Route>
            <Route path="/imc-c5" exact>
              <Redirect to="/imc-toma"></Redirect>
            </Route>
            <Route
              path="/imc-toma"
              exact
              render={(props) => {
                console.log(props);
                return <Calculadora {...props} nombre="oscar" />;
              }}
            />
            <Route path="/forms/basic" exact component={Basic} />
            <Route path="/forms/basicyup" exact component={BasicYup} />
            <Route
              path="/imc-paciente/:id"
              exact
              render={(props) => <PatientApp {...props} />}
            />
            <Route
              path="/imc-estadistica"
              exact
              children={(props) => {
                console.log(props);
                return <ViewAppImc />;
              }}
            />
          </Switch>
        </UsuarioContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
