import React, { Fragment } from 'react'
import Cipher from '../img/cipher.png';
import Pokemon from '../img/pokemon.png';
import DataMovie from '../img/datamovie.png';
import backProjects from '../img/projectsweb.jpg'
import './Styles/Projects.css'


var backgroundProjects = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${backProjects})`
};

const cipherLink2 =  () => {
    window.location.replace('https://dianarojasolis.github.io/SCL012-Cipher/src/index.html');
};

const cipherLink =  () => {
    window.location.replace('https://github.com/dianarojasolis/SCL012-Cipher');
};

    const pokebollLink =  () => {
        window.location.replace('https://github.com/dianarojasolis/SCL012-data-lovers');
    };

    const pokebollLink2 =  () => {
        window.location.replace(' https://dianarojasolis.github.io/SCL012-data-lovers/src/index.html'
       );
    };

   

const dataMovie =  () => {
    window.location.replace('https://github.com/dianarojasolis/Data-Lovers-Movies');

};

const dataMovie2 =  () => {
    window.location.replace('https://github.com/dianarojasolis/SCL012-Social-Network');

};




const Projects = () => {
    return (

      
        <div class="container-fluid"> 

        <section style={ backgroundProjects}>
      
   <div class="row">
    
        <div class="col-sm-12 col-md-4">
         <div class="row">
            <h5> Pokeboll</h5> 
        </div>
     <div class="row">
        <div class="col-m12">
            <img className="ImgProyect" alt="" src={Pokemon} />
        </div>
    </div>
        
            <div class="col-sm-12 col-md-12">
            <div class="row">
                <button className="BtnProject"  onClick={pokebollLink}>Ver código</button>
                <button  className="BtnProject"  onClick={pokebollLink2}>Ver Web</button>
            </div>
         </div>
    </div>


<div class="col-sm-12 col-md-4">
    <div class="row">
            <h5> My Tops / Oscars Edition</h5>
     </div>
        <div class="row">
            <div class="col-m12">
                <img className="ImgProyect" alt="" src={DataMovie} />
             </div>
        </div>
           
                <div class="col-sm-12 col-md-12">
                <div class="row">
                    <button className="BtnProject"  onClick={dataMovie}>Ver código</button>
                     <button className="BtnProject"  onClick={dataMovie2}>Ver Web</button>
                     </div>
                 </div>
            </div>
      
   
    <div class="col-sm-12 col-md-4">
        <div class="row">
            <h5> Surprise Plan</h5>
        </div>
    <div class="row">
         <div class="col-m12">
            <img className="ImgProyect" alt="" src={Cipher} />
        </div>
    </div>
        <div class="col-sm-12 col-md-12">
            <div class="row">
              <button className="BtnProject" onClick={cipherLink}>Ver código</button>
              <button className="BtnProject"  onClick={cipherLink2}>Ver Web</button>
             </div>
         </div>
    </div>
 


    </div>
        </section>

   </div>

    )};

export default Projects