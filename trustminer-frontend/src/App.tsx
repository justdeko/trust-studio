import React, {useEffect} from 'react';
import {ThemeProvider} from '@material-ui/core';
import {mainTheme} from "./theme/MainTheme";
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import {SnackbarProvider} from "notistack";
import FrontPage from "./pages/FrontPage";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';
import Introduction from "./pages/Introduction";
import NotFound from "./pages/NotFound";
import {saveEvent} from "./util/survey_util";
import {LOGGED_IN, TYPE_NAVIGATE} from "./util/constants";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Impressum from "./pages/Impressum";

function App() {

    let location = useLocation()
    useEffect(() => {
        saveEvent("location", TYPE_NAVIGATE, location.pathname)
    }, [location])

    const loggedIn = localStorage.getItem(LOGGED_IN) === "true"

    return (
        <ThemeProvider theme={mainTheme}>
            <SnackbarProvider maxSnack={4}>
                <main>
                    {loggedIn ?
                        <Switch>
                            <Route exact path="/" component={FrontPage}/>
                            <Route exact path="/introduction" component={Introduction}/>
                            <Route exact path="/analysis" component={Dashboard}/>
                            <Route exact path="/modeler" component={Dashboard}/>
                            <Route exact path="/trust-policies" component={Dashboard}/>
                            <Route exact path="/uncertainty-list" component={Dashboard}/>
                            <Route exact path="/settings" component={Dashboard}/>
                            <Route exact path="/about" component={Dashboard}/>
                            <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
                            <Route exact path="/impressum" component={Impressum}/>
                            <Route component={NotFound}/>
                        </Switch> :
                        <Switch>
                            <Route exact path="/login" component={SignIn}/>
                            <Redirect to="/login"/>
                        </Switch>
                    }
                </main>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App;
