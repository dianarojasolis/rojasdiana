import React, { Fragment } from 'react'
import Cipher from '../img/cipher.jpg';
import Pokemon from '../img/pokemon.png';
import RedSocial from '../img/redsocial.jpg';
import './Styles/Projects.css'



const Projects = () => {
    return (
        <Fragment>
             <hr></hr>
        <div>
            <h1>Projectos</h1>       
        </div>
      

    <div className="nav flex-column">
    <h5> Surprise Plan</h5>
        <img className="ImgProyect" alt="" src={Cipher} />
        </div>
   
    <div className="nav flex-column">
     <h5> Pokeboll</h5>
        <img className="ImgProyect" alt="" src={Pokemon} />
        
    </div>
    <div className="nav flex-column">
        <h5> SparrowPlayer</h5>
        <img className="ImgProyect" alt="" src={RedSocial} />
       
    </div>
    </Fragment>
    )
}



export default Projects