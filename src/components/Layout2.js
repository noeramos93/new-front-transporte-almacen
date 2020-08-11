import React from 'react';

import Navbar2 from '../components/Navbar2';

function Layout2 (props){
    //const children = props
    return (
        <React.Fragment>
            <Navbar2 />
            {props.children}
        </React.Fragment>
    );
}

export default Layout2;