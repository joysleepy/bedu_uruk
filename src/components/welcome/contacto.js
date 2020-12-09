import React from 'react';
import { Link } from "react-router-dom";

function Contacto(){
    return(
        <section id="contacto" className="pt-4 pb-4">
            <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-12 col-md-6 text-left">
                       <h3>Encontremos juntos la mejor forma de sumar y transformar nuestro entorno.</h3>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <Link to="/vermas" className="btn-w-navy btn-w-navy-content mt-4">Ver más</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contacto; 