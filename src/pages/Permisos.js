import React from 'react';

import { Link } from 'react-router-dom';

import PermisoTable from '../components/configuracion/permisos/PermisoTable';
import PageLoading from '../components/PageLoading';

/**
 * Clase Permiso que contiene toda
 * la logica de acciones del front para 
 * el modulo de permisos, lista los permisos
 * edita los permisos y elimina los permisos
 * @author Noe Ramos Lopez
 */
class Permisos extends React.Component {
    // estado de la pagina de permisos
    state = {
        loading: true,
        error: null,
        data: [],
        modalIsOpen: false,
        modalDeleteIsOpen: false,
        permiso: {
            Id_Permiso:'',
            Nombre: ''
        },
    }

    /**
     * Metodo Handle para abrir el modal con
     * la informacion a editar del permiso,
     * hace una peticion fetch al serrvidor
     * @param {*} id id del permiso
     * @param {*} e  evento
     */
    handleOpenModal = (id,e) => {
        this.setState({loading: true, error: null});
        this.getInfoPermisoById(id)
            .then((permisoInfo) =>{
                this.setState({ permiso: permisoInfo.permiso });
                this.setState({ modalIsOpen: true});
                this.setState({loading: false, error: null});
            })
            .catch(e=>{
                this.setState({loading: false, error: e});
                console.log(`Traza del error : ${e}`);
            });
    }

    handleOpenModalDelete = (idPer, e) =>{
        const per = {
            id:idPer,
            nombre:''
        };
        this.setState({ modalDeleteIsOpen: true,permiso:per});
    }

    handleCloseModalDelete = e =>{
        this.setState({ modalDeleteIsOpen: false, permiso:{}});
    }

    handleDeletePermiso = async (e) => {
        this.setState({loading: true, error: null});
        console.log('lo voya eliminar.................');

        try{
            let options = {method: 'DELETE', headers:{'Content-Type': 'application/json'}};
            let urlDelete = `http://localhost:3003/updateInfoPermiso/${this.state.permiso.Id_Permiso}`;

            const response = await fetch(urlDelete,options);
            console.log(response);
            this.setState({loading: false, error: null ,modalDeleteIsOpen: false});
        }catch(error){
            this.setState({loading: false, error: error, modalDeleteIsOpen: false});
        }
    }
    
    /**
     * Metodo handle para cerrar el modal 
     * de editar permiso
     * @param {*} e 
     */
    handleCloseModal = e => {
        this.setState({ modalIsOpen: false});
    }

    /**
     * Metodo handleButton que detecta cando se preciona
     * el boton de guardar info del modal y manda llamar 
     * al metodo updateInfoPer para guardar los cambios
     * @param {*} e 
     */
    handleButtonSaveInfo = e =>{
        const id = this.state.permiso.Id_Permiso;
        const edit = this.state.permiso.Nombre;
        this.updateInfoPer(id,edit);
    }

    /**
     * Mertodo componentDidMount que actualiza
     * la interfaz y manda llamar al metodo fectData
     */
    componentDidMount(){
        this.fetchData();
    }

    /**
     * Metodo asincrono para obtener el listado de
     * de los permisos 
     */
    fetchData = async () => {
        this.setState({loading: true, error: null});
        try{
            const response = await fetch('http://localhost:3003/getPermisos');
            const data = await response.json();
            console.log(data.list);
            this.setState({loading: false, error: null , data: data.list});
        }catch(error){
            this.setState({loading: false, error: error});
        }
    }

    /**
     * funcion asincrona para obtener la informacion de un 
     * permiso en especifico , si la solicitud no tra informacion
     * se regresa nulo en caso de que si traiga informacion se
     * regresa.
     * @param {*} id 
     */
    getInfoPermisoById = async (id) => {
        try{
            const response = await fetch('http://localhost:3003/getPermisoById/'+id);
            const data = await response.json();
            return data;
        }catch(error){
            return {};
        }
    }

    updateInfoPer = async (id,text) =>{
        
        this.setState({loading: true, error: null});
        
        let options ={
            method: 'PUT', // or 'PUT'
            body: JSON.stringify({Nombre: text}), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
        };

        let urlUpdate = `http://localhost:3003/updateInfoPermiso/${id}`;

        try{
            
            const response  = await fetch(urlUpdate, options);
            const data = await response.json();
            this.setState({loading: false, error: null , data: data, modalIsOpen: false});
        }catch(error){
            this.setState({loading: false, error: error});
        }
    }

    /**
     * Metodo handleChange para detectar el cambio en el form
     * de la modal de editar permiso.
     * @param {*} e 
     */
    handleChange = e => {
        this.setState({
            permiso: {
            ...this.state.permiso,
            [e.target.name]: e.target.value,
          },
        });
    };

    /**
     * Metodo render que renderiza el card con la 
     * tabla de permisos y la modal para editar algun permiso
     */
    render(){
        if(this.state.loading === true){
            //return 'Loading ....';
            return <PageLoading />;
        }

        if(this.state.error === true){
            //return 'Loading ....';
            return 'eroror ,,,,,,,,,,,,,,,';
        }
        return(
            <React.Fragment>
                <br />
                <br />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/Home">Home</Link></li>
                                        <li className="breadcrumb-item">Configuración</li>
                                        <li className="breadcrumb-item active" aria-current="page">Permisos</li>
                                    </ol>
                                </nav>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="row justify-content-md-center">
                                        <PermisoTable 
                                            isOpenModal={this.state.modalIsOpen}
                                            onCloseModal={this.handleCloseModal}
                                            onOpenModal={this.handleOpenModal}
                                            permisosList={this.state.data}
                                            permisoRow={this.state.permiso}
                                            onChange={this.handleChange}
                                            onClickButton={this.handleButtonSaveInfo}
                                            deleteModal={this.state.modalDeleteIsOpen}
                                            onOpenModalDelete={this.handleOpenModalDelete}
                                            onCloseModalDelete={this.handleCloseModalDelete}
                                            onClickDelete={this.handleDeletePermiso}
                                        />
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Permisos;