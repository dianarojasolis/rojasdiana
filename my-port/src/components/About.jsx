import React from 'react'
import './Styles/About.css'
const aboutBackground = true

export const About = () => {
    return (

        <div className={aboutBackground ? "background-pink" : "background-white"}>

        <div >
            <hr></hr>
            <p>
            Me forme en el mundo del Diseño/Audiovisual lo que me permitió darme cuenta de lo necesario que es complementarse con el equipo para llegar a un buen producto. Actualmente estoy interesada en la programación, cambié de rumbo en la búsqueda de ser un aporte para el crecimiento tecnológico.
Me caracterizo por comprometerme con nuevos desafíos y me motiva el poder seguir estudiando constantemente .
            </p>
        </div>
        </div>
    )
}

export default About