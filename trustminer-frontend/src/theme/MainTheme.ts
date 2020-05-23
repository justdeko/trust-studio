import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/green';

export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#BBDEFB',
            main: '#2196F3',
            dark: '#1976D2',
            contrastText: '#fff',
        },
        secondary: orange,
    }
})