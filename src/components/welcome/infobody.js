import React, { useEffect } from 'react';
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 


function Infobody(){
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true, 
        });
    }, []);
    
    return(
        <section id="infobody">
            <div className="container">
                
                <div className="row pt-2 pb-2 pt-lg-4 pb-lg-4">
                    <div className="col-12 pt-2 pb-2 col-lg-6 pt-lg-4 pb-lg-4">
                        <h5>
                            Inspirados en la cultura financiera y el orden que se vivía en la antigua civilización de Uruk; hemos creado una plataforma orientada en el análisis, estructura y vinculación crediticia.
                        </h5>
                    </div>
                    
                    <div className="col-12 pt-2 pb-2 col-lg-6 pt-lg-4 pb-lg-4">
                        <p>
                            Esta herramienta sumada a nuestra habilidad financiera para interpretar indicadores de desempeño, rentabilidad y eficiencia, permite diagnosticar la situación actual de cualquier empresa, clasificarla y determinar sus posibilidades de acceso a fuentes de financiamiento de manera ágil y precisa.
                        </p>
                    </div>
                </div>
                
                <div className="row pt-2 pb-2 pt-lg-4 pb-lg-4">
                    <div className="col-12 pt-2 pb-2 col-lg-6 pt-lg-4 pb-lg-4" data-aos="fade-right">
                        <h3 className="pb-lg-2">
                            Clasificamos todos los proyectos de acuerdo a sus necesidades y potencial.
                        </h3>
                        <p>
                            Leemos, interpretamos y contextualizamos el desempeño de una empresa para entonces estructurar y presentar fuentes de financiamiento para promover su crecimiento, clasificando los proyectos de acuerdo a sus necesidades y potencial. 
                        </p>
                    </div>
                    
                    <div className="col-12 pt-2 pb-2 col-lg-6 pt-lg-4 pb-lg-4" data-aos="fade-left">
                        <img className="w-100" src="./assets/images/uruk_dinastias.png" alt="Dinastias Uruk" />
                    </div>
                </div>
                
                <div className="row pt-2 pb-2 pt-lg-4 pb-lg-4">
                    <div className="col-12 pt-2 pb-2 col-lg-6 pt-lg-4 pb-lg-4" data-aos="fade-right">
                        <img className="w-100" src="./assets/images/uruk_fases.png" alt="Fases Uruk" />
                    </div>
                    
                    <div className="col-12 pt-2 pb-2 col-lg-6 pt-lg-4 pb-lg-4" data-aos="fade-left">
                        <h3 className="pb-lg-2">Ofrece crédito y recursos financieros.</h3> 
                        <p>
                            Este servicio está dirigido a todo tipo de intermediarios financieros, cámaras de comercio, organismos privados o gubernamentales de fomento, empresas con ventas a crédito e incluso, cualquier grupo de personas con excedente de recursos disponibles para fondear oportunidades crediticias buscando rentabilidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Infobody; 