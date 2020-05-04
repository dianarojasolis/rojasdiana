import React from 'react'
import backHome from '../img/homeweb.jpg';
import gifHola from '../img/holadiana.gif';
import Sonido from '../audio/electric.mp3';
import './Styles/Home.css'

var backgroundHome = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${backHome})`
};
export const Home = () => {
    return (
        <div class="container mt-5" > 
        <section style={ backgroundHome} >

        <div class="row">
    <div class="img-fluid col-sm-12 col-md-6">
    <img className="gifCompu" alt="" src={gifHola} />
    </div>
    </div>
     
         
            <div class="row">
                <div class="col-sm- col-md-6">  
                 <audio controls >
                    <source src={Sonido} type={Sonido.mp3 }/>
                    </audio>      
                               
                </div>
            </div>
        </section>  
         </div>  
      
        )
    }
    
    export default Home