import React from 'react';

class PropietarioForm extends React.Component {
    render(){
        return (
        <div className="container">
            <div className="card w-60 shadow">
                <div className="card-body">
                <h5 class="card-title text-center">Propietario</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="idProp">Id Propietario : </label>
                            <input id="idProp" type="text" name="idProp" className="form-control" maxlength="11" value={this.props.idPropietario} disabled />
                            <label htmlFor="appaternoProp">Apellido paterno : </label>
                            <input id="appaternoProp" type="text" name="appaternoProp" className="form-control" maxlength="60" />
                            <label htmlFor="apmaternoProp">Apellido materno : </label>
                            <input id="apmaternoProp" type="text" name="apmaternoProp" className="form-control"value={this.props.lastName}   maxlength="60" />
                            <label htmlFor="nombresProp">Nombre (s) : </label>
                            <input id="nombresProp" type="text" name="nombresProp" className="form-control" value={this.props.firstName} maxlength="60" />
                            <label htmlFor="razSoProp">Razon social : </label>
                            <input id="razSoProp" type="text" name="razSoProp" className="form-control" maxlength="200" />
                            <label htmlFor="rfcProp">RFC : </label>
                            <input id="rfcProp" type="text" name="rfcProp" className="form-control" maxlength="13" />
                            <label htmlFor="calleProp">Calle</label>
                            <input id="calleProp" type="text" name="calleProp" className="form-control" maxlength="60" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="colProp">Colonia : </label>
                            <input id="colProp" type="text" name="colProp" className="form-control form-control-sm" maxlength="60" />
                            <label htmlFor="cpProp">CP : </label>
                            <input id="cpProp" type="text" name="cpProp" className="form-control form-control-sm" maxlength="5" />
                            <label htmlFor="estadoProp">Estado : </label>
                            <select id="estadoProp" className="form-control form-control-sm form-control-sm">
                                <option value="0"> - Seleccionar - </option>
                            </select>
                            <label htmlFor="celProp">Celular : </label>
                            <input id="celProp" type="text" name="celProp" className="form-control form-control-sm" maxlength="20" />
                            <label htmlFor="telProp">Telefono : </label>
                            <input id="telProp" type="text" name="telProp" className="form-control form-control-sm" maxlength="20" />
                            <label htmlFor="emailProp">Correo : </label>
                            <input id="emailProp" type="text" name="emailProp" className="form-control form-control-sm" maxlength="60" />
                            <label htmlFor="tipoPerProp">Tipo persona : </label>
                            <select id="tipoPerProp" className="form-control form-control-sm">
                                <option value="0"> - Seleccionar - </option>
                                <option value="1">Fisica</option>
                                <option value="2">Moral</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>);
    }
}

export default PropietarioForm;