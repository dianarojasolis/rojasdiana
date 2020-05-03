import React from 'react'
import './Styles/Contact.css'
import backContact from '../img/contactweb.jpg'
var backgroundContact = {
    width: "100%",
    height: "1000px",
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
        <section style={ backgroundContact}>
       <div class="container">
       <div class="col-sm-12 col-md-7">
        <div class="row">
            
            <h4>Email: dianarojasolis@gmail.com</h4>
            </div>
            </div>
            <div class="col-sm-12 col-md-7">
        <div class="row">

            <h4>Movil: + 569 62369213</h4>
            </div>
            </div>
            <div class="col-sm-12 col-md-7">
        <div class="row">
            <button className="btnContact" onClick={github}> Github</button>
            
            <button className="btnContact" onClick={linkedin}> Linkedin</button>
        </div>
        </div>
        </div>

        </section>
    )
}


export default Contact

