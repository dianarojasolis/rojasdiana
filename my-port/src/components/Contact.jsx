import React from 'react'
import './Styles/Contact.css'
const github =  () => {
    window.location.replace('https://github.com/dianarojasolis');
};
const linkedin =  () => {
    window.location.replace('https://www.linkedin.com/in/dianarojasolis/');
};
export const Contact = () => {
    return (
        <div>
            <h1>Contacto</h1>
            <h3>Email: dianarojasolis@gmail.com</h3>
            <h3>Movil: + 569 62369213</h3>
            <button className="btnContact" onClick={github}> Github</button>
            
            <button className="btnContact" onClick={linkedin}> Linkedin</button>
        </div>
    )
}


export default Contact

