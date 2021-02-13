import React from 'react';
import Header from './CalculationHeader';
import Body from './CalculationBody';

function CalculatorApp(props){
    return <section className="card">
        <Header title = "Calculadora" colorBackground = "#fdf8f8"/>
        <Body edad = {25} esSoltero = {true}/>
    </section>
}

export default CalculatorApp