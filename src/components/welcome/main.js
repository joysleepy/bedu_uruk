import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Main(){
    return(
        <section id="main">
           <Carousel fade={true} controls={false} indicators={false}>
               <Carousel.Item>
                    <img className="d-block w-100" src="./assets/images/fin_bg_01.jpeg" alt="First slide" />
               </Carousel.Item>
               <Carousel.Item>
                    <img className="d-block w-100" src="./assets/images/fin_bg_02.jpeg" alt="First slide" />
               </Carousel.Item>
               <Carousel.Item>
                    <img className="d-block w-100" src="./assets/images/fin_bg_03.jpeg" alt="First slide" />
               </Carousel.Item>         
           </Carousel>
           <div className="overlay">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-left">
                            <h1>Antes y después de la moneda</h1>
                            {/* <p className="d-none d-md-block">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem veniam odit, rerum aut praesentium repellendus minus eius eligendi beatae tempore mollitia modi hic architecto nesciunt aliquam at ut commodi.Nam minima, veniam cumque ex tenetur nesciunt quo animi distinctio neque ea facere. Provident consequatur soluta distinctio eaque, voluptates ducimus officia deleniti exercitationem in deserunt corporis quos veniam, nihil nesciunt.
                            </p> */}
                            <Link to="/vermas" className="btn-w-white mt-4">Ver más</Link>
                            {/* <a href="login.html" className="btn btn-success bg-uruk-navy">Ingresar</a> */}
                        </div>
                    </div>
                </div>
            </div>  
	    </section>
    );
}
export default Main; 