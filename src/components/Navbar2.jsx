import React from 'react';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
        <header className="navbar-floating navbar-sticky navbar-light">
            {/*<!-- Logo Nav Start -->*/}
            <nav className="navbar navbar-expand-lg">
                <div className="container shadow">
                    {/*<!-- Logo -->*/}
                    <Link className="navbar-brand" to="/Home">
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

                            </li>
                            {/*<!-- Menu item 2 Codigos Generales-->*/}
                            <li className="nav-item dropdown">

                            </li>
                            {/*<!-- Menu item 3 Almacen-->*/}
                            <li className="nav-item dropdown">
                                
                            </li>
                            {/*<!-- Menu item 4 Mantenimiento-->*/}
                            <li className="nav-item dropdown">
                                
                                <ul className="dropdown-menu" aria-labelledby="portfolioMenu">
                                    
                                </ul>
                            </li>
                            {/*<!-- Menu item 5 Administracion-->*/}
                            <li className="nav-item dropdown megamenu">
                               
                                <div className="dropdown-menu" aria-labelledby="elementsMenu" >

                                </div>
                            </li>
                            {/*<!-- Menu item 6 Salir-->*/}
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                    </div>
                    {/*<!-- Main Menu End -->
                    <!-- Header Extras Start-->*/}
                    <div className="navbar-nav">
                        {/*<!-- extra item Btn-->*/}
                        <div className="nav-item border-0 d-none d-lg-inline-block align-self-center">
                            
                        </div>
                    </div>
                    {/*<!-- Header Extras End-->*/}
                </div>
            </nav>
            {/*<!-- Logo Nav End -->*/}
        </header>
        );
    }
}

export default Navbar;