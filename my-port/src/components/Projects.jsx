import React, { Fragment } from 'react'
import Cipher from '../img/cipher.jpg';
import Pokemon from '../img/pokemon.png';
import RedSocial from '../img/redsocial.jpg';
import './Styles/Projects.css'


const cipherLink =  () => {
    window.location.replace('https://github.com/dianarojasolis/SCL012-Cipher');
};
    const pokebollLink =  () => {
        window.location.replace('https://github.com/dianarojasolis/SCL012-data-lovers');
    };
    const socialLink =  () => {
        window.location.replace('https://github.com/dianarojasolis/SCL012-Social-Network');
};
const Projects = () => {
    return (
        <Fragment>
             <hr></hr>
        <div>
            <h1>Projectos</h1>       
        </div>
      
        
    <div className="nav flex-column">
     <h5> Pokeboll</h5>
        <img className="ImgProyect" alt="" src={Pokemon} />
         <button className="BtnProject"  onClick={pokebollLink}>Ver código</button>
         <button  className="BtnProject"  onClick={pokebollLink}>Ver Web</button>
    </div>
  
    <div className="nav flex-column">
        <h5> SparrowPlayer</h5>
        <img className="ImgProyect" alt="" src={RedSocial} />
        <button className="BtnProject"  onClick={socialLink}>Ver código</button>
        <button className="BtnProject"  onClick={socialLink}>Ver Web</button>
    </div>
 
    <div className="nav flex-column">
    <h5> Surprise Plan</h5>
        <img className="ImgProyect" alt="" src={Cipher} />
        <button className="BtnProject" onClick={cipherLink}>Ver código</button>
        <button className="BtnProject"  onClick={cipherLink}>Ver Web</button>
        </div>
        
    </Fragment>  
    )};

export default Projects