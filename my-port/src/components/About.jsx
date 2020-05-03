import React from 'react'
import Avatar from '../img/aboutPaint.gif';
import './Styles/About.css'
import backAbout from'../img/aboutweb.jpg';


var backgroundAbout = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${backAbout})`
};
export const About = () => {
    return (
      
        <section style={ backgroundAbout}>
            <div class="container"> 
        <div class="row ">
<br></br>
<br></br>
        <div class="col-sm-12 col-md-6">
<div class="row col-sm-4 col-md-12">
    <div className="textAbout ">
<p>
Soy Diana Rojas.
Me forme en el mundo del Diseño/Audiovisual lo que me permitió darme cuenta de lo necesario que es complementarse con el equipo para llegar a un buen producto. Actualmente estoy interesada en la programación, cambié de rumbo en la búsqueda de ser un aporte para el crecimiento tecnológico.

Me caracterizo por comprometerme con nuevos desafíos y me motiva el poder seguir estudiando constantemente .

En mis tiempos libres me gusta ilustrar, ver peliculas y series generalmente thrillers , igualmente con los libros.  
</p>
</div>
    </div>

    </div>
   
<div class="col-sm-12 col-md-6">
<div class="row col-sm-4 col-md-12">
    <img className="Avatar" alt="" src={Avatar}/>
    </div>
</div>   

</div>  
</div>
</section>
    
    )
}

export default About