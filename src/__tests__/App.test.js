import React from "react";
import App from "../App";
import Sum from "../components/section2/Sum";
import CalculatorApp from "./../components/section1/CalculatorApp";
import { Button } from "react-bootstrap";
import { shallow } from "enzyme";

describe("src/components/section2/Sum", () => {
  let wrapper = shallow(<Sum num1={3} num2={3} sumar={() => (miSuma = 6)} />);
  let miSuma = 0;
  beforeEach(() => {});

  it("Existe CalculatorApp", () => {
    const wrapper = shallow(<App />);
    const calculatorapp = wrapper.find(CalculatorApp);
    expect(calculatorapp.exists()).toBe(true);
  });

  it("Verificar existencia de un div", () => {
    const salida = wrapper.find("div");
    expect(salida.length).toBe(1);
  });

  it("Verificar texto de la suma", () => {
    expect(wrapper.text()).toEqual("La suma es 6");
  });

  it("Validar la existencia de una clase mi-suma", () => {
    expect(wrapper.find(".mi-suma").length).toBe(1);
  });

  it("Validar que se le da click al boton sumar correctamente", () => {
    const button = wrapper.find(Button).at(0);
    button.simulate("click");
    expect(miSuma).toBe(6);
  });

  it("Validar click de la suma usando jest", () => {
    const suma = jest.fn();
    const button = shallow(<Button onClick={suma} />);
    // button.simulate('click')
    expect(suma.mock.calls.length).toEqual(1);
  });
});
