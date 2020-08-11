import React from 'react';
import Modal from '../../Modal';
import PermisoForm from '../permisos/PermisoForm';
import ModalDelete from '../../ModalDelete';

function  PermisoTable(props){
    const listPermisos = props.permisosList;

        return(
            <React.Fragment>
                
                <div className="col-md-6 col-sm-12">                        
                    <h5 className="card-title text-center">Permisos</h5>
                    <div className="table-responsive">
                        <table id="table_permisos" className="table table-bordered tabla-paginada text-center">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>NOMBRE</th>
                                    <th>ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                                  
                                {listPermisos.map((per) =>{
                                    return(
                                        <tr key={per.Id_Permiso}>
                                            <td>{per.Id_Permiso}</td>
                                            <td>{per.Nombre}</td>
                                            <td>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-danger delete-per" 
                                                    data_id={per.Id_Permiso}
                                                    onClick={(e) => props.onOpenModalDelete(per.Id_Permiso,e)}
                                                    data-toggle="tooltip" 
                                                    data-placement="top" 
                                                    title="Eliminar Permisos">
                                                    <i className="fa fa-trash-o"></i> 
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-warning edit-per" 
                                                    onClick={(e) => props.onOpenModal(per.Id_Permiso, e)} 
                                                    data-toggle="tooltip" 
                                                    data-placement="top" 
                                                    title="Editar Permisos"> 
                                                    <i className="fa fa-pencil-square-o"></i> 
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })} 
                            </tbody>
                        </table>
                    </div>
                </div>

                <Modal 
                    isOpen={props.isOpenModal} 
                    onCloseModal={props.onCloseModal}>
                    <PermisoForm 
                        onCloseModal={props.onCloseModal} 
                        permisoInfo={props.permisoRow}
                        onChangeInput={props.onChange}
                        onClick={props.onClickButton}
                        />
                </Modal>
                <ModalDelete
                    isOpenModal={props.deleteModal}
                    onCloseDelete={props.onCloseModalDelete}>
                    
                    <h1>¿Esta seguro de eleminar el Permiso?</h1>
                    <button type="button" className="btn btn-primary" onClick={props.onClickDelete}>Yes</button>
                    <button type="button" className="btn btn-danger" onClick={props.onCloseModalDelete}>No</button>
                </ModalDelete>
            </React.Fragment>
        );
}

export default PermisoTable;