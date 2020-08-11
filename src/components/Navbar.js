import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../images/logo_2.jpeg';

class Navbar extends React.Component {
    render() {
        return(
        <header className="navbar-floating navbar-sticky navbar-light">
            {/*<!-- Logo Nav Start -->*/}
            <nav className="navbar navbar-expand-lg">
                <div className="container shadow">
                    {/*<!-- Logo -->*/}
                    <Link className="navbar-brand" to="/Home">
                        {/*<!-- SVG Logo Start -->*/}
                        <img className="logo-menu" src={Logo} alt="Logo grupo barro"/>
                        {/*<!-- SVG Logo End -->*/}
                    </Link>
                    {/*<!-- Menu opener button -->*/}
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"> </span>
                    </button>
                    {/*</a><!-- Main Menu Start -->*/}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto">
                            {/*<!-- Menu item 1 Configuraciones-->*/}
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle active" href="#section" id="demosMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Configuración</a>
                                <div className="dropdown-menu pb-3 pb-lg-0" aria-labelledby="demosMenu" >
                                    <div className="d-block d-sm-flex">
                                        <ul className="list-unstyled w-100 w-sm-50 pr-0 pr-lg-5">
                                            <li> <Link to="/Configuracion/Roles" className="dropdown-item" >Roles</Link></li>
                                            <li> <Link to="/Configuracion/Permisos" className="dropdown-item" >Permisos</Link> </li>
                                            {/*<li> <Link to="/Configuracion/Modulos" className="dropdown-item" >Modulos</Link> </li>*/}
                                            {/*<li> <a className="dropdown-item" href="<?=base_url()?>configuracion/ModulosPermisos">Modulos - Permisos</a> </li>
                                            <li> <a className="dropdown-item" href="<?=base_url()?>configuracion/Usuarios">Usuarios</a> </li>
                                            <li> <a className="dropdown-item" href="<?=base_url()?>configuracion/UsuariosPermisos">Usuarios - Permisos</a> </li>
                                            <li> <a className="dropdown-item" href="<?=base_url()?>configuracion/Departamentos">Departamentos</a> </li>
                                            <li> <a className="dropdown-item" href="<?=base_url()?>configuracion/FoliosDocumentos">Folios de Documentos</a> </li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/*<!-- Menu item 2 Codigos Generales-->*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#section" id="blogMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalogos Generales</a>
                                <ul className="dropdown-menu" aria-labelledby="blogMenu">
                                    {/*<li><a className="dropdown-item" href="<?=base_url()?>catalogosGenerales/CatalogoGeneral/propietarios">Propietarios</a></li>*/}
                                    <li><a className="dropdown-item" href="<?=base_url()?>catalogosGenerales/CatalogoGeneral/proveedores">Proveedores</a></li>
                                    {/*<li><a className="dropdown-item" href="<?=base_url()?>catalogosGenerales/CatalogoGeneral/clientes">Clientes</a></li>*/}
                                </ul>
                            </li>
                            {/*<!-- Menu item 3 Almacen-->
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="pagesMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Alamacen</a>
                                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/Ubicaciones">Ubicaciones</a></li>
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/TipoInventario">Tipo de Inventarios</a> </li>
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/Almacenes">Almacenes</a> </li>
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/TipoMovimientos">Tipo de movimientos</a> </li>
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/Partes">Partes</a> </li>
                                    <li className="dropdown-divider"></li>
                                    {/*<!-- Segunda parte del submenu -->
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/OrdenCompra">Ordenes de compra</a> </li>
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/FacturaCompra">Facturas de compra</a> </li>
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/MovAlmacen">Movimientos de almancen</a> </li>
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/Traspasos">Traspasos</a> </li>
                                    <li> <a className="dropdown-item" href="<?=base_url()?>almacen/ReqTaller">Requisiciones de taller</a> </li>
                                </ul>
                            </li>
                            {/*<!-- Menu item 4 Mantenimiento-->
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="portfolioMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Matenimiento</a>
                                <ul className="dropdown-menu" aria-labelledby="portfolioMenu">
                                    
                                </ul>
                            </li>
                            <!-- Menu item 5 Administracion-->
                            <li className="nav-item dropdown megamenu">
                                <a className="nav-link dropdown-toggle" href="#" id="elementsMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Administracion</a>
                                <div className="dropdown-menu" aria-labelledby="elementsMenu" >

                                </div>
                            </li>
                            <!-- Menu item 6 Salir-->*/}
                            <li className="nav-item">
                                <Link className="nav-link"  to="/" id="docMenu" aria-haspopup="true" aria-expanded="false">Salir</Link>
                            </li>
                        </ul>
                    </div>
                    {/*<!-- Main Menu End -->
                    <!-- Header Extras Start-->
                    <div className="navbar-nav">
                        <!-- extra item Btn-->
                        <div className="nav-item border-0 d-none d-lg-inline-block align-self-center">
                            <a href="#" className=" btn btn-sm btn-grad text-white mb-0">Mi perfil</a>
                        </div>
                    </div>
                    <!-- Header Extras End-->*/}
                </div>
            </nav>
            {/*<!-- Logo Nav End -->*/}
        </header>
        );
    }
}

export default Navbar;