import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen.js";
import Insurance from "../screens/Insurance";
import App from '../../App.js';
import Contact from "../screens/Contact";
import AboutApp from "../screens/AboutApp.js";
import Social from "../screens/Social.js";
import CarInsurance from "../Insurances/CarInsurance/CarInsurance.js"

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
                    <Route path="/seguro/Carro">
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

        <div style={{ textAlign: 'center', paddingTop: 30  }}>
            <img style={{maxHeight: 600}} className="img-fluid" src="https://kicksdigitalmarketing.com/u/2019/09/iStock-1142986365.jpg" alt="'404 NOT FOUND'" />
        </div>

    );
}

export default Routes;