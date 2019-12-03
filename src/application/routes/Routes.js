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
import * as LINKS from '../constants/Links';
import CallInsurances from "../Insurances/CallInsurances.js";

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
                    <Route path={LINKS.LINK_AUTO} >
                        <CarInsurance />
                    </Route>
                    <Route path={LINKS.LINK_AGRICOLAS}>
                        <CallInsurances />
                    </Route>
                    <Route path={LINKS.LINK_CARGAS}>
                        <CallInsurances />
                    </Route>
                    <Route path={LINKS.LINK_EMPRESARIAL}>
                        <CallInsurances />
                    </Route>
                    <Route path={LINKS.LINK_CONDOMINIO}>
                        <CallInsurances />
                    </Route>
                    <Route path={LINKS.LINK_FINANCIAMENTOS}>
                        <CallInsurances />
                    </Route>
                    <Route path="/contato">
                        <Contact />
                    </Route>
                    <Route path="/seguros">
                        <Insurance />
                    </Route>
                    <Route path={LINKS.LINK_LIGACAO}>
                        <CallRequest />
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