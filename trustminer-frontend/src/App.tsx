import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import {mainTheme} from "./theme/MainTheme";
import Dashboard from "./pages/Dashboard";


function App() {

    return (
        <ThemeProvider theme={mainTheme}>
            <Dashboard/>
        </ThemeProvider>
    )
}

export default App;
