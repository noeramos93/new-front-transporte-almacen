import React from 'react';

import LogoLogin from '../../images/logo_2.jpeg';

class Navinirigth extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="col-12 col-md-5 col-lg-4 d-md-flex align-items-center bg-grad h-sm-100-vh">
					<div className="w-100 p-3 p-lg-5 all-text-white">
						<div className="justify-content-center align-self-center">
							{/*<!-- SVG Logo Start -->*/}
							<img src={LogoLogin} alt="Logo grupo barron"/>
							{/*<!-- SVG Logo End -->*/}
						</div>
						<h3 className="font-weight-light">Grupo Barron !</h3>
						<ul className="list-group list-group-borderless mt-4">
							<li className="list-group-item text-white"><i className="fa fa-check"></i>Facil de usar !</li>
							<li className="list-group-item text-white"><i className="fa fa-check"></i>Rapido de usar !</li>
							<li className="list-group-item text-white"><i className="fa fa-check"></i>Responsivo !</li>
						</ul>
					</div>
				</div>
            </React.Fragment>
        );
    }
}

export default Navinirigth;