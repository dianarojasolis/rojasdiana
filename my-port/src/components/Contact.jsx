import React from 'react'
import './Styles/Contact.css'
import backContact from '../img/contactweb.jpg'
import Email from '../img/email.png'
import Movil from '../img/movil.png'
import imgGithb from '../img/github.png'
import imgLinkdn from '../img/linkedin.png'
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
     <div class="container mt-5"> 
        <section style={ backgroundContact}>
            <div class="row">
 
           
                <div class="col-sm-12 col-md-4">
                <div class="row">
                <div class="col-sm-12 col-md-12">
                     <h5><img className="Email " alt="" src={Email} />Email: dianarojasolis@gmail.com</h5>
                     <h5> <img className="Movil " alt="" src={Movil} />Movil: + 569 62369213</h5>
                     <h5><img className=" imgLinkedin " alt="" src={imgLinkdn} /><button className="btnContact" onClick={linkedin}> Linkedin</button></h5>
                     <h5><img className=" imgGithub " alt="" src={imgGithb} /><button className="btnContact" onClick={github}> Github</button></h5>
                     </div>
                </div>
            </div>

            
             </div>
        </section>
    </div>

    )
}


export default Contact

