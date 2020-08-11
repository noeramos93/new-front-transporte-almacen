import React from 'react';

import Navinirigth from '../components/login/Navinirigth';
import Acceso from '../components/login/Acceso';

class Login extends React.Component {

    state = {
        form:{
            txtEmail:'',
            txtPass:''
        }
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render(){
        return(
            <React.Fragment>
                <section className="p-0 d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <Navinirigth />
                            <Acceso onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Login;