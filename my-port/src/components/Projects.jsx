import React, { Fragment } from 'react'
import Cipher from '../img/cipher.png';
import Pokemon from '../img/pokemon.png';
import DataMovie from '../img/datamovie.png';
import backProjects from '../img/projectsweb.jpg'
import './Styles/Projects.css'


var backgroundProjects = {
    width: "100%",
    height: "700px",
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

      
        <div class="container ">  

        <section style={ backgroundProjects} >
        

      
   <div class="row mt-3">
    
        <div class="col-sm-12 col-md-4">
         <div class="row">
            <div class="col-sm-12 mt-5">
            <h5> Pokeboll</h5> 
            </div>
        </div>
     <div class="row mt-1">
        <div class="col-sm-12 ">
            <img className="ImgProyect" alt="" src={Pokemon} />
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-sm-12 col-md-12">
            <p>
                En esta app encontrarás información básica sobre los Pokemones que debes atrapar en Pokemon Go !.
            </p>
            <p class="font-weight-bold font-italic">Html - Api - Js - Css - FleaxBox</p>
        </div>
    </div>
    <div class="row  mt-2">
            <div class="col-sm-12 col-md-12">
                <button className="BtnProject "  onClick={pokebollLink}>Ver código</button>
                <button  className="BtnProject "  onClick={pokebollLink2}>Ver Web</button>
            </div>
         </div>
    </div>


<div class="col-sm-12 col-md-4">
    <div class="row mt-1">
        <div class="col-sm-12 mt-5">
            <h5> My Tops / Oscars Edition</h5>
     </div>
     </div>
        <div class="row">
            <div class="col-sm-12">
                <img className="ImgProyect" alt="" src={DataMovie} />
             </div>
        </div>
        <div class="row mt-2">
        <div class="col-sm-12 col-md-12">
            <p>
                En My Tops version Oscars Editios, tendrás la oportunidad de escoger tus ganadores y compartir con tus amigos.
            </p>
            <p class="font-weight-bold font-italic">Html - Api - Js - Css - Materialize</p>
        </div>
    </div>
        <div class="row mt-2">
                <div class="col-sm-12 col-md-12">
                    <button className="BtnProject "  onClick={dataMovie}>Ver código</button>
                     <button className="BtnProject "  onClick={dataMovie2}>Ver Web</button>
                     </div>
                 </div>
            </div>
      
   
    <div class="col-sm-12 col-md-4">
        <div class="row mt-1">
        <div class="col-sm-12 mt-5">
            <h5> Surprise Plan</h5>
        </div>
        </div>
    <div class="row mt-2">
         <div class="col-sm-12">
            <img className="ImgProyect" alt="" src={Cipher} />
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-sm-12 col-md-12">
            <p>
                Sitio web donde podrás cifrar mensajes secretos con tus amigos para planear eventos sorpres.
            </p>
            <p class="font-weight-bold font-italic">Html - Js - Css </p>
        </div>
    </div>
  
        <div class="row">
        <div class="col-sm-6 col-md-12 ">
              <button className="BtnProject " onClick={cipherLink}>Ver código</button>
              <button className="BtnProject "  onClick={cipherLink2}>Ver Web</button>
              </div>
         </div>
         
        
         
    </div>
    
 


    </div>
        </section>

   </div>

    )};

export default Projects