import React from 'react';
import logo_404 from '../images/page_not_found.svg';
import { Link } from 'react-router-dom';

class NotFound extends React.Component{
    render(){
        return(
            <React.Fragment>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow ">
                                <div className="card-body">
                                    <div className="col-md-12 col-sm-12">
                                        <img className="img__not-found rounded mx-auto d-block" src={logo_404} alt="Error 404 Pagina no funciona"/>
                                        <Link to="/Home" className="btn btn-primary">Regresar a Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NotFound;