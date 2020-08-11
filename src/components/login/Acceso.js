import React from 'react';

class Acceso extends React.Component {
    
    handleChange = e => {
       /* console.log({
            name: e.target.name,
            value: e.target.value
        });*/

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = e => {
        console.log('Me puisho');
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <React.Fragment>
                <div className="col-12 col-md-7 col-xl-8 mx-auto my-5">
					<div className="row h-100">
						<div className="col-12 col-md-10 col-lg-5 text-left mx-auto d-flex align-items-center">
							<div className="w-100">
								<h2 className="">Bienvenido!</h2>
								<h5 className="font-weight-light">Nos alegra verte! Inicia sesión con tu cuenta.</h5>
								<form onSubmit={this.handleSubmit} >
									
									<div className="form mt-4 ">
										<div>
											<p className="text-left mb-2">Correo Electronico</p>
											<span className="form-group">
                                                <input 
                                                    id="txtEmail" 
                                                    name="txtEmail" 
                                                    type="email"
                                                    onChange={this.props.onChange} 
                                                    className="form-control" 
                                                    placeholder="E-mail" 
                                                    value={this.props.formValues.txtEmail}
                                                    />
                                            </span>
										</div>
										<div>
											<div className="d-flex justify-content-between align-items-center">
												<p className="text-left mb-2">Contraseña</p>
												<a className="text-muted small mb-2" href="password-recovery.html">Olvidaste tu contraseña? Click aqui.</a>
											</div>
											<span className="form-group">
                                                    <input 
                                                        id="txtPass" 
                                                        name="txtPass" 
                                                        type="password" 
                                                        onChange={this.props.onChange} 
                                                        className="form-control" 
                                                        placeholder="*********" 
                                                        value={this.props.formValues.txtPass}
                                                        />
                                            </span>
										</div>
										<div className="align-items-start">
                                            <button type="button" id="btnLogin" onClick={this.handleClick} className="btn btn-dark ">Entrar</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
            </React.Fragment>
        );
    }
}

export default Acceso;