import React from 'react';
import '../screens/Screens.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function PageNotFound() {

    return (
        <div className="Not-Found" >
            <p className="Intro-font" >Página não encontrada</p>
            <Link to='/' className="App-Button" >
                <Icon size='big' name="arrow left" />
                <p>HOME</p>
            </Link>
        </div>

    );
}

export default PageNotFound;