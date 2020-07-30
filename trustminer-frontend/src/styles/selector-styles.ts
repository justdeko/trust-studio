import makeStyles from "@material-ui/core/styles/makeStyles";
import {createMuiTheme, createStyles, Theme} from "@material-ui/core";

export const useSelectorStyles = makeStyles((theme: Theme) => createStyles({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

export const whiteSelectorTheme = createMuiTheme({
    palette: {
        type: 'dark',
        secondary: {
            main: '#ffffff'
        }
    }
});
