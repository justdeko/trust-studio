import React, {useEffect} from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core';
import {mainTheme} from "./theme/MainTheme";
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import {SnackbarProvider} from "notistack";
import FrontPage from "./pages/FrontPage";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import {Route, Switch, useLocation} from 'react-router-dom';
import Introduction from "./pages/Introduction";
import NotFound from "./pages/NotFound";
import {saveEvent} from "./util/survey_util";
import {TYPE_NAVIGATE} from "./util/constants";

function App() {

    let location = useLocation()
    useEffect(() => {
        saveEvent("location", TYPE_NAVIGATE, location.pathname)
    }, [location])

    return (
        <ThemeProvider theme={mainTheme}>
            <SnackbarProvider maxSnack={4}>
                <main>
                    <Switch>
                        <Route exact path="/" component={FrontPage}/>
                        <Route exact path="/introduction" component={Introduction}/>
                        <Route exact path="/analysis" component={Dashboard}/>
                        <Route exact path="/modeler" component={Dashboard}/>
                        <Route exact path="/trust-policies" component={Dashboard}/>
                        <Route exact path="/uncertainty-list" component={Dashboard}/>
                        <Route exact path="/settings" component={Dashboard}/>
                        <Route exact path="/login" component={SignIn}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App;
