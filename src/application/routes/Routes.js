import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen.js";
import Insurance from "../screens/Insurance";
import App from '../../App.js';
import Contact from "../screens/Contact";
import AboutApp from "../screens/AboutApp.js";
import Social from "../screens/Social.js";
import CarInsurance from "../Insurances/CarInsurance/CarInsurance.js"
import PageNotFound from "../components/PageNotFound.js";
import CallRequest from "../Insurances/CallRequest.js";

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
                    <Route path="/seguro/ligacao">
                        <CallRequest/>
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </App>
        </Router>
    );

}


export default Routes;