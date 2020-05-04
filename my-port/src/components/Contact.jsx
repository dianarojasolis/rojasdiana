import React from 'react'
import './Styles/Contact.css'
import backContact from '../img/contactweb.jpg'
import Email from '../img/email.png'
import Movil from '../img/movil.png'
var backgroundContact = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${backContact})`
};

const github =  () => {
    window.location.replace('https://github.com/dianarojasolis');
};
const linkedin =  () => {
    window.location.replace('https://www.linkedin.com/in/dianarojasolis/');
};


export const Contact = () => {
    return (
     <div class="container mt-5"style={ backgroundContact}> 
        <section >
            <div class="row">
 
           
                <div class="col-sm-12 col-md-4">
                <div class="row">
                <img className="Email mt-1" alt="" src={Email} />
                     <h4>Email: dianarojasolis@gmail.com</h4>
                </div>
            </div>

            <div class="col-sm-12 col-md-4">
                <div class="row">
                <img className="Movil mt-1" alt="" src={Movil} />
                      <h4>Movil: + 569 62369213</h4>
                </div>
            </div>

            <div class="col-sm-12 col-md-6">
                  <div class="row">
                     <button className="btnContact" onClick={github}> Github</button>
                      
                  </div>
             </div>
             <div class="col-sm-12 col-md-6">
                  <div class="row">
             <button className="btnContact" onClick={linkedin}> Linkedin</button>
             </div>
             </div>
             </div>
        </section>
    </div>

    )
}


export default Contact

