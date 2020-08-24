import {createMuiTheme} from '@material-ui/core/styles';
import {getNightMode} from "../util/ui_util";

export const mainTheme = createMuiTheme({
    palette: {
        type: getNightMode() ? "dark" : "light",
        primary: {
            light: '#2e4e5f',
            main: '#002635',
            dark: '#00000f',
            contrastText: '#fff',
        },
        secondary: {
            light: '#63ccff',
            main: '#039be5',
            dark: '#006db3',
        }
    }
})