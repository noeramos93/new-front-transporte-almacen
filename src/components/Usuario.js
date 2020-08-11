import React from 'react';

class Usuario extends React.Component {
    render(){
        return(
        <div className="container">
            <div className="card w-60 shadow">
                <div className="card-body">
                    <h5 className="card-title text-center">Usuario</h5>
                    <div className="row">
                        <div className="col-md-6">
							<label htmlFor="usuName">Usuario : </label>
							<input id="usuName" type="text" name="usuName" className="form-control" />
							<label htmlFor="appUsu">Apeliido paterno : </label>
							<input id="appUsu" type="text" name="appUsu" className="form-control" />
							<label htmlFor="apmUsu">Apellido materno : </label>
							<input id="apmUsu" type="text" name="apmUsu" className="form-control" />
							<label htmlFor="nameUsu">Nombre (s) : </label>
						    <input id="nameUsu" type="text" name="nameUsu" className="form-control" />
						</div>
						<div className="col-md-6">
						    <label htmlFor="emailUsu">Correo: </label>
							<input id="emailUsu" type="email" name="emailUsu" className="form-control" />
							<label htmlFor="passUsu">Contraseña</label>
							<input id="passUsu" type="password" name="passUsu" className="form-control" />
							<div className="invalid-feedback"> La contarseña debe ser mayor a 8 digitos </div>
							<label htmlFor="rol">Rol</label>
							<select id="rol" className="form-control">
								<option value="0"> - Seleccionar - </option>
							</select>
							<label htmlFor="departamento">Departamento</label>
							<select id="departamento" className="form-control">
								<option value="0"> - Seleccionar - </option>
							</select>
					    </div>
                    </div>
                </div>
            </div>    
        </div>);
    }
}

export default Usuario;