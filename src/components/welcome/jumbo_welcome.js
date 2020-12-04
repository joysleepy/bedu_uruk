import React from 'react';
import { Link } from "react-router-dom";

function JumboWelcome(){
    return(
        <section id="JumboWelcome">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 offset-2 pt-2 pb-2 text-center">
                        <h3>
                        “Más que una herramienta potente y eficaz para el análisis crediticio de empresas y proyectos, buscamos ser la fuerza de la unión”.
                        </h3>
                        <Link to="/vermas" className="btn-w-white mt-4">Ver más</Link>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default JumboWelcome; 