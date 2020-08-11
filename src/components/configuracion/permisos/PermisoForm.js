import React from 'react';

class PermisoForm extends React.Component {
    render(){
        return(
            <React.Fragment>
                 <div className="row">
                    <label htmlFor="namePer" >Nombre del Permiso a editar</label>
                    <input 
                        onChange={this.props.onChangeInput}
                        type="text" 
                        id="namePer" 
                        name="Nombre" 
                        className="form-control" 
                        value={this.props.permisoInfo.Nombre}/>
                </div>
                <div className="row float-right">
                    <button type="button" className="btn btn-primary" onClick={this.props.onClick}>Guardar Cambios</button>
                    <button type="button" onClick={this.props.onCloseModal} className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                </div>
            </React.Fragment>
        );
    }
}

export default PermisoForm;