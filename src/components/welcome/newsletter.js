import React from 'react';

function Newsletter(){
    return(
        <section id="newsletter" className="pt-2 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <small className="text-uppercase">Suscríbete a nuestro</small>
                        <h2>Newsletter</h2>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-center">
                        Recibe en tu correo noticias importantes del 
                        <abbr data-toggle="tooltip" title="Demo de explicación de un termino (needs jquery)">Sector Financiero</abbr>
                    </div>
                </div>
                <form className="row">
                    <div className="col-12 col-md-6 offset-md-2">
                        <div className="form-group mb-0">
                            <label htmlFor="exampleInputEmail1">Dirección de Correo</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
                        </div>
                        <div className="form-check mt-2 mb-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <small className="form-text text-muted">He leido las politicas de Privacidad.</small>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 mt-md-3 text-right text-md-left">
                        <div className="form-group mt-md-3">
                            <button id="btnSubscribe" type="submit" className="btn btn-primary bg-uruk-navy align-middle">Suscribirse</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Newsletter; 