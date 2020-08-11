import React from 'react';

import Modal from '../../Modal';

class RoleTable extends React.Component {
    
    constructor (props){
        super(props);
        console.log("1. constructor ()");
        this.state = {
                data:[]
            }
    }

    componentDidMount(){
        console.log("3. componentDidMount()");
        this.timeoutId = setTimeout(() =>{
            this.setState({
                data:[
                    {
                        Id_Rol:'1',
                        Nombre:'Administrador',
                    },
                    {
                        Id_Rol:'2',
                        Nombre:'Operativo',
                    },
                    {
                        Id_Rol:'3',
                        Nombre:'Gerente',
                    },
                    {
                        Id_Rol:'4',
                        Nombre:'Administrativo',
                    }
                ]
            });
        },3000);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps,
            prevState: prevState
        });

        console.log({
            props: this.props,
            state: this.state
        });
    }

    componentWillMount(){
        console.log('6. componentWillMount() ');
        clearTimeout(this.timeoutId);
    }
    render(){
        console.log("2. render()");
        return(

            <div className="col-md-6 col-sm-12">
                <h5 className="card-title text-center">Roles</h5>
                <div className="table-responsive">
                    <table id="table_roles" className="table table-bordered text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((rol) =>{
                                return(
                                    <tr key={rol.Id_Rol}>
                                        <td>{rol.Id_Rol}</td>
                                        <td>{rol.Nombre}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger delete-rol" data-toggle="tooltip" data-placement="top" title="Eliminar Rol">
                                                <i className="fa fa-trash-o"></i>
                                            </button>
                                            <button type="button" className="btn btn-warning edit-rol"  onClick={this.props.onOpenModal} data-toggle="tooltip" data-placement="top" title="Editar Rol"> 
                                                <i className="fa fa-pencil-square-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    );
                                })}
                                                
                        </tbody>
                    </table>
                </div>
                <Modal 
                    isOpen={this.props.modalIsOpen} 
                    onCloseModal={this.props.onCloseModal}
                    > 
                    Lorem Ipson 
                </Modal>
            </div>

        );
    }
}

export default RoleTable;