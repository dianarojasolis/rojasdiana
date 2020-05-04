import React from 'react'
import Paint from '../img/aboutPaint.gif';
import './Styles/About.css'
import backAbout from'../img/aboutweb2.jpg';


var backgroundAbout = {
    width:"100%",
    height: "700px",
    backgroundImage: `url(${backAbout})`
};
export const About = () => {
    return (
        <div id="root" style={ backgroundAbout} >
        <div class="container mt-5"> 
        <section >
         
<div class="row">
    <div class="col-sm-12 col-md-6">
    <img className="Paint" alt="" src={Paint}/>
    </div>

<div class="col-sm-12 col-md-6 mt-3">
    <p>
    Mi nombre es Diana Rojas Solis,
    me forme en el mundo del Diseño/Audiovisual lo que me permitió darme cuenta de lo necesario que es complementarse con el equipo para llegar a un buen producto. 
    </p>
    <p>Actualmente estoy interesada en la programación, cambié de rumbo en la búsqueda de ser un aporte para el crecimiento tecnológico.
    </p>

    <p>Me caracterizo por comprometerme con nuevos desafíos y me motiva el poder seguir estudiando constantemente .
    </p>
    
    <p>En mis tiempos libres me gusta ilustrar, ver peliculas y series generalmente thrillers , igualmente con los libros.  
    </p>

    </div>
</div>  

 </section>
</div> 
</div> 
    )
}

export default About
