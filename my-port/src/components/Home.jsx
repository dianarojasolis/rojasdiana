import React from 'react'
import backHome from '../img/homeweb.jpg';
import gifHola from '../img/holadiana.gif';
import Sonido from '../audio/electric.mp3';
import './Styles/Home.css'

var backgroundHome = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${backHome})`
};
export const Home = () => {
    return (
        <section style={ backgroundHome}>

        <div className="container">
            <div class="row">
                <div class="col-sm-12 col-md-12">   
                    <div className="hola">
                        <img className="gifPc" alt="" src={gifHola} />
                        </div>
        </div>
              </div>
                        <div class="col-sm-12">  
                        <div class="row">
                        <audio controls>
                        <source src={Sonido} type={Sonido.mp3 }/>
                        </audio>
                    </div>
                </div>
                
                </div>
        </section>    
        )
    }
    
    export default Home