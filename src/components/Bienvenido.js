import React from 'react';

class Bienvenido extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active"><a href="Home">Home</a></li>
                                </ol>
                            </nav>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h1 className="card-title text-center">Bienvenido</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default Bienvenido;