import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from  '../components/Layout';
import Layout2 from  '../components/Layout2';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Roles from '../pages/RolesContainer';
import Permisos from '../pages/Permisos';
import NotFound from '../pages/NotFound';


function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />        
                <Route exact path='/Home'>
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                <Route path='/Configuracion/:path?' exact>
                    <Layout>
                        <Switch>
                            <Route path='/Configuracion/Roles' exact component={Roles} />
                            <Route path='/Configuracion/Permisos' component={Permisos} />
                            <Route exact path="/Configuracion/*"  component={NotFound} />
                        </Switch>
                    </Layout>
                </Route>
                <Route exact path="/*">
                    <Layout2>
                        {/*<Switch>
                            <Route exact path="/*"  component={NotFound} />
                        </Switch>*/}
                        <NotFound/>
                    </Layout2>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;