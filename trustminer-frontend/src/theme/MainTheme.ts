import {createMuiTheme} from '@material-ui/core/styles';

export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#2e4e5f',
            main: '#002635',
            dark: '#00000f',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff6659',
            main: '#d32f2f',
            dark: '#9a0007',
        }
    }
})