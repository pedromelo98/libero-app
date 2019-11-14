import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen.js";
import SocialMedia from "../components/SocialMedia";
import App from '../../App.js';
import HomeSlider from "../screens/HomeSlider";
import AboutApp from "../screens/AboutApp.js";

function Routes() {

    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route path="/social">
                        <SocialMedia />
                    </Route>
                    <Route path="/slider">
                        <HomeSlider />
                    </Route>
                    <Route path="/about">
                        <AboutApp/>
                    </Route>
                    <Route path="*">
                        <ComponentNotFound404/>
                    </Route>
                </Switch>
            </App>
        </Router>
    )

}


function ComponentNotFound404() {
    return (

        <div style={{textAlign:'center', paddingTop: 30 }}>
            <img src="https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg" alt="'404 NOT FOUND'"/>
        </div>

    );
}

export default Routes;