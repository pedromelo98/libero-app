import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen.js";
import Insurance from "../screens/Insurance";
import App from '../../App.js';
import Contact from "../screens/Contact";
import AboutApp from "../screens/AboutApp.js";
import Social from "../screens/Social.js";
import CarInsurance from "../components/CarInsurance.js"

function Routes() {

    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route path="/redesocial">
                        <Social />
                    </Route>
                    <Route path="/sobre">
                        <AboutApp />
                    </Route>
                    <Route path="/seguro/carro">
                        <CarInsurance />
                    </Route>
                    <Route path="/contato">
                        <Contact />
                    </Route>
                    <Route path="/seguros">
                        <Insurance />
                    </Route>
                    <Route path="*">
                        <ComponentNotFound404 />
                    </Route>
                </Switch>
            </App>
        </Router>
    );

}


function ComponentNotFound404() {
    return (

        <div style={{ textAlign: 'center', paddingTop: 30 }}>
            <img src="https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg" alt="'404 NOT FOUND'" />
        </div>

    );
}

export default Routes;