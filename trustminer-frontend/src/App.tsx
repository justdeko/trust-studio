import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core';
import {mainTheme} from "./theme/MainTheme";
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import {SnackbarProvider} from "notistack";
import FrontPage from "./pages/FrontPage";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import {Route} from 'react-router-dom';


function App() {

    return (
        <ThemeProvider theme={mainTheme}>
            <SnackbarProvider maxSnack={4}>
                <main>
                    <Route exact path="/" component={FrontPage}/>
                    <Route exact path="/analysis" component={Dashboard}/>
                    <Route exact path="/modeler" component={Dashboard}/>
                    <Route exact path="/trust-policies" component={Dashboard}/>
                    <Route exact path="/uncertainty-list" component={Dashboard}/>
                    <Route exact path="/settings" component={Dashboard}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/login" component={SignIn}/>
                </main>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App;
