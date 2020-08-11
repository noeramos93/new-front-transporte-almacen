import React from 'react';

import RoleForm from '../components/configuracion/roles/RoleForm';
import RoleTable from '../components/configuracion/roles/RoleTable';

class RolesContainer extends React.Component {
    state = {
        loadin: true,
        error: null,
        data: [],
        modalIsOpen: false,
    }
    handleOpenModal = e => {
        this.setState({ modalIsOpen: true});
    }
    
    handleCloseModal = e => {
        this.setState({ modalIsOpen: false});
    }

    render(){
        return(
            <React.Fragment>
                <br/>
                <br/>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="<?=base_url()?>Home">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#section">Configuración</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Roles</li>
                                    </ol>
                                </nav>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="row justify-content-md-center">                        
                                        {/* Tabla de los roles*/}
                                            <RoleTable 
                                                isOpen={this.state.modalIsOpen} 
                                                onCloseModal={this.handleCloseModal}
                                                onOpenModal={this.handleOpenModal}
                                                />
                                        </div>                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <RoleForm/>
            </React.Fragment>
        );
    }
}

export default RolesContainer;