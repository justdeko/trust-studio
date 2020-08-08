import makeStyles from "@material-ui/core/styles/makeStyles";
import {createMuiTheme, createStyles, Theme} from "@material-ui/core";

export const useIntroductionStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        backgroundColor: theme.palette.primary.main,
        background: 'linear-gradient(0deg, #002635, 30%, #00000f 90%)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignContent: 'center'
    }
}))

export const introductionTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#ffffff'
        }
    }
});
