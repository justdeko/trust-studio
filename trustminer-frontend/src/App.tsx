import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core';
import {mainTheme} from "./theme/MainTheme";
import Dashboard from "./pages/Dashboard";
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import {SnackbarProvider} from "notistack";


function App() {

    return (
        <ThemeProvider theme={mainTheme}>
            <SnackbarProvider maxSnack={4}>
                <Dashboard/>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App;
